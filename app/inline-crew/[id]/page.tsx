/**
 * [IC-002] 인라인 동호회 상세
 * Page Type: Page | Login: N | User Action: 읽기, 쓰기
 * - 상세 화면에서 "가입하기" 버튼 클릭 시 승인 절차 없이 즉시 가입 처리 (MVP)
 * - 별도의 가입 신청/승인 대기 화면 없음
 */
export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold tracking-tight">IC-002</h1>
      <p className="text-muted-foreground">인라인 동호회 상세 (즉시 가입 버튼 포함)</p>
    </main>
  );
}
