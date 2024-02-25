import "../styles/global.css"
import { Metadata } from "next"
import Navigation from "../components/navigation"

/**
 * 페이지의 <head>영역에 출력될 정보
 * 페이지나 레이아웃에서만 메타데이터를 내보낼수 있고, 컴포넌트에서는 내보낼 수 없다.
 * 또한 서버 컴포넌트에서만 있을 수 있고 client컴포넌트에서는 불가능하다.
 * 레이아웃이 중첩되는 방식과 마찬가지로 메타데이터도 중첩이 가능하지만 실제로는 중첩되지 않고 병합 병합된다.
 */
export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies"
  },
  description: 'The best movies on the best fromework',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
