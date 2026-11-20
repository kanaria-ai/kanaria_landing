import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted">
            카나리아헬스는 화장실 기록으로 장 건강 흐름을 보여주는 스마트 비데와 앱을
            만듭니다.
          </p>
        </div>
        <nav aria-label="바닥글 메뉴" className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm md:grid-cols-3">
          <a href="#bidet" className="text-ink-2 hover:text-ink">스마트 비데</a>
          <a href="#app" className="text-ink-2 hover:text-ink">카나리아 앱</a>
          <a href="#how" className="text-ink-2 hover:text-ink">작동 원리</a>
          <a href="#faq" className="text-ink-2 hover:text-ink">FAQ</a>
          <a href="#download" className="text-ink-2 hover:text-ink">출시 알림</a>
        </nav>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs leading-relaxed text-muted-2 md:flex-row md:items-center md:justify-between">
          <p>본 서비스는 의료기기가 아니며, 제공되는 정보는 의학적 진단이 아닌 생활 참고용입니다.</p>
          <p>© 2026 카나리아헬스. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
