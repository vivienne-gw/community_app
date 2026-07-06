'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Users, Users2, MessagesSquare, User } from 'lucide-react'

const NAV_ITEMS = [
  { href: '/', label: '홈', icon: Home },
  { href: '/bung', label: '인라인 벙', icon: Users },
  { href: '/club', label: '인라인 동호회', icon: Users2 },
  { href: '/forum', label: '인라인 포럼', icon: MessagesSquare },
  { href: '/mypage', label: '마이페이지', icon: User },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    // 기존 (fixed였던 버전이든, 방금 바꾼 sticky든 상관없이 이걸로 교체)
<nav className="sticky bottom-0 z-50 w-full border-t bg-background">
      <ul className="flex items-center justify-around py-2">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href

          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex flex-col items-center gap-1 px-2 py-1 text-[10px] ${
                  isActive ? 'text-foreground font-medium' : 'text-muted-foreground'
                }`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.2 : 1.8} />
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}