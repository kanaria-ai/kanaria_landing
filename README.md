# 카나리아 랜딩 페이지

카나리아 스마트 비데와 카나리아 앱을 소개하는 단일 페이지 사이트입니다.
Next.js 16(App Router) + Tailwind CSS v4, 정적 프리렌더.

## 실행

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 프로덕션 빌드 (정적)
npm run start
npm run lint
```

## 구조

```
src/app/
  layout.tsx       # 메타데이터, Pretendard 폰트, html.js 플래그
  page.tsx         # 섹션 조립
  globals.css      # 브랜드 토큰(@theme), 리빌/FAQ/마퀴 스타일
  icon.svg         # 파비콘 (노란 새 로고)
  apple-icon.png   # iOS 홈 화면 아이콘 (앱 아이콘)
src/app/actions/waitlist.ts  # 출시 알림(waiting list) 서버 액션
supabase/waitlist.sql        # waitlist 테이블 생성 SQL
src/components/    # 섹션별 컴포넌트 (Nav, Hero, Problem, SystemOverview, SmartBidet,
                   # AppFeatures, HowItWorks, Trust, Faq, Cta, Footer)
public/app/        # 앱 스크린샷 (kanaria_app/screenshots 에서 복사)
public/brand/      # 로고 SVG, 앱 아이콘
```

## 브랜드 토큰

앱(`kanaria_app/lib/shared/constants/app_colors.dart`)과 동일합니다.
`--color-brand #FDD23C`, `--color-brand-deep #EABC00`, 그레이 `#111`~`#FAFAFA`, 폰트 Pretendard.

## 수정 포인트

- 앱 스크린샷 교체: `public/app/*.png` (1179×2556, 파일명 유지)
- 스토어 링크: `src/components/Cta.tsx` 의 `StoreBadge` 를 `<a href>` 로 교체
- 스마트 비데 실제 제품 사진 확보 시: `src/components/SmartBidet.tsx` 의 `BidetIllustration` 교체
- 도메인: `src/app/layout.tsx` 의 `siteUrl`

## 주의

의료 면책 문구(`Trust.tsx`, `Footer.tsx`)는 앱의 `health_disclaimer_sheet.dart` 와 같은 취지로 유지해야 합니다.

## Waiting list (출시 알림)

CTA 섹션의 이메일 폼은 Supabase `waitlist` 테이블에 저장됩니다.

1. Supabase SQL Editor에서 `supabase/waitlist.sql` 실행
2. 프로젝트 루트 `.env.local`에 아래 두 값 추가 (서버 액션에서만 읽음)

```
SUPABASE_URL=https://<project-ref>.supabase.co
SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
```

publishable key는 anon 역할이라 RLS 정책대로 insert만 가능합니다. secret key(구 service_role)는 쓰지 않습니다.

봇 방지: 숨은 필드(honeypot) + IP당 10분 5회 제한. 중복 이메일은 사용자에게 성공으로 안내합니다.
