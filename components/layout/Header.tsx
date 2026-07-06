'use client'

import Link from 'next/link'
import { Bell, Menu, Image as ImageIcon, Info, FileText, Newspaper } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const MENU_ITEMS = [
  { href: '/record', label: '운동 기록방', icon: ImageIcon },
  { href: '/resource', label: '인라인 자료실', icon: FileText },
  { href: '/news', label: '인라이너 소식', icon: Newspaper },
  { href: '/info', label: '운동정보', icon: Info },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b bg-background px-4 py-3">
      <span className="text-base font-medium">Inliners</span>

      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" aria-label="알림">
          <Bell size={20} strokeWidth={1.8} />
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="전체 메뉴">
              <Menu size={20} strokeWidth={1.8} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetHeader>
              <SheetTitle>전체 메뉴</SheetTitle>
            </SheetHeader>
            <nav className="mt-4 flex flex-col gap-1">
              {MENU_ITEMS.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm hover:bg-muted"
                >
                  <Icon size={18} strokeWidth={1.8} />
                  {label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}