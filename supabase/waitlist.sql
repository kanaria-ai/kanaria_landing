-- 카나리아 랜딩 waiting list
-- Supabase SQL Editor에서 그대로 실행하세요.

create table if not exists public.waitlist (
  id          uuid primary key default gen_random_uuid(),
  email       text not null,
  source      text not null default 'landing',
  consent_at  timestamptz not null default now(),
  created_at  timestamptz not null default now()
);

-- 대소문자만 다른 중복 이메일 방지
create unique index if not exists waitlist_email_lower_idx
  on public.waitlist (lower(email));

alter table public.waitlist enable row level security;

-- publishable key(anon 역할)로는 "형식에 맞는 이메일을 landing 출처로 insert"만 허용.
-- select/update/delete 정책이 없으므로 같은 키로 목록을 읽거나 지울 수는 없습니다.
drop policy if exists waitlist_insert_anon on public.waitlist;
create policy waitlist_insert_anon
  on public.waitlist
  for insert
  to anon
  with check (
    source = 'landing'
    and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]{2,}$'
    and length(email) <= 254
  );

-- 기본 권한을 최소로 명시 (RLS와 별개로 권한 자체를 좁힘)
revoke all on public.waitlist from anon, authenticated;
grant insert on public.waitlist to anon;

comment on table public.waitlist is '2027 상반기 출시 알림 신청 목록 (랜딩 페이지)';
