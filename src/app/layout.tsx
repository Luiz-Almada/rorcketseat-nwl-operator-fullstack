import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "devroast - paste your code. get roasted.",
  description:
    "Drop your code below and we'll rate it — brutally honest or full roast mode"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg-page">
        <header className="flex items-center justify-between h-14 px-10 bg-bg-page border-b border-border-primary">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-mono font-bold text-accent-green">
              &gt;
            </span>
            <span className="text-lg font-mono text-text-primary">
              devroast
            </span>
          </Link>
          <Link
            href="/leaderboard"
            className="font-mono text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            leaderboard
          </Link>
        </header>
        {children}
      </body>
    </html>
  )
}
