/**
 * [MN-001] 메인 홈
 * Page Type: Page | Login: N | User Action: 읽기
 */
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          🛼 인라인 커뮤니티
        </h1>
        <p className="mt-2 text-muted-foreground">
          shadcn/ui Button 컴포넌트 작동 확인 화면 (MN-001)
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button>기본 버튼</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button disabled>Disabled</Button>
      </div>
    </main>
  );
}
