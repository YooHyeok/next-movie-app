import { Metadata } from "next"
import Navigation from "../components/navigation"

/**
 * 페이지의 <head>영역에 출력될 정보
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
      {`<RootLayout>`}
        <Navigation/>
        {children}
      {`<RootLayout/>`}
      </body>
    </html>
  )
}
