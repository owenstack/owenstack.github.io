import 'tailwindcss/tailwind.css'
import {Macondo} from 'next/font/google'

const body = Macondo({weight: '400',subsets: ['latin']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme='night' lang="en">
      <body className={body.className}>{children}</body>
    </html>
  )
}
