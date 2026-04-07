"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CodeInput } from "@/components/ui/code-input"
import { Toggle } from "@/components/ui/toggle"

const leaderboardData = [
  {
    rank: 1,
    score: 1.2,
    code: "function hack() { eval(atob('aWFsYW5h')) }",
    lang: "javascript"
  },
  {
    rank: 2,
    score: 2.1,
    code: "var x = 1; var y = 2; var z = 3;",
    lang: "javascript"
  },
  { rank: 3, score: 2.8, code: "print('hello world')", lang: "python" }
]

export default function HomePage() {
  const [code, setCode] = useState("")
  const [roastMode, setRoastMode] = useState(true)

  const handleSubmit = () => {
    console.log("Submitting code:", code, "Roast mode:", roastMode)
  }

  return (
    <main className="flex flex-col items-center w-full">
      <div className="w-full max-w-[960px] px-10 pt-20">
        <div className="mb-8">
          <h1 className="text-[36px] font-mono font-bold text-text-primary flex items-center gap-3">
            <span className="text-accent-green text-[36px]">$</span>
            paste your code. get roasted.
          </h1>
          <p className="mt-3 text-sm font-mono text-text-secondary">
            drop your code below and we&apos;ll rate it — brutally honest or
            full roast mode
          </p>
        </div>

        <CodeInput value={code} onChange={setCode} className="w-[780px]" />

        <div className="flex justify-between items-center mt-6 w-[780px]">
          <Toggle
            checked={roastMode}
            onCheckedChange={setRoastMode}
            label="roast mode"
          />
          <Button variant="primary" onClick={handleSubmit}>
            $ roast_my_code
          </Button>
        </div>

        <div className="py-8 text-center">
          <p className="text-xs font-mono text-text-tertiary">
            2,847 codes roasted · avg score: 4.2/10
          </p>
        </div>

        <div className="pb-[60px] w-[960px]">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-sm font-mono font-bold text-text-primary flex items-center gap-2">
              <span className="text-accent-green">{"//"}</span>
              shame_leaderboard
            </h2>
            <Link
              href="/leaderboard"
              className="font-mono text-xs text-text-secondary px-3 py-1.5 border border-border-primary hover:text-text-primary transition-colors"
            >
              $ view_all &gt;&gt;
            </Link>
          </div>
          <p className="text-xs font-mono text-text-tertiary mb-6">
            the worst code on the internet, ranked by shame
          </p>

          <div className="border border-border-primary rounded overflow-hidden">
            <div className="flex items-center h-10 px-5 border-b border-border-primary bg-bg-surface">
              <span className="w-[50px] text-xs font-mono text-text-tertiary">
                #
              </span>
              <span className="w-[70px] text-xs font-mono text-text-tertiary">
                score
              </span>
              <span className="flex-1 text-xs font-mono text-text-tertiary">
                code
              </span>
              <span className="w-[100px] text-xs font-mono text-text-tertiary">
                lang
              </span>
            </div>
            {leaderboardData.map((item) => (
              <div
                key={item.rank}
                className="flex items-center px-5 py-4 border-b border-border-primary last:border-b-0"
              >
                <span className="w-[50px] font-mono text-sm text-text-primary">
                  {item.rank}
                </span>
                <span className="w-[70px] font-mono text-sm text-accent-red font-bold">
                  {item.score.toFixed(1)}
                </span>
                <span className="flex-1 font-mono text-xs text-text-secondary truncate pr-4">
                  {item.code}
                </span>
                <span className="w-[100px] font-mono text-xs text-text-tertiary">
                  {item.lang}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-4 py-4 text-center text-xs font-mono text-text-tertiary">
            showing top 3 of 2,847 ·{" "}
            <Link href="/leaderboard" className="hover:text-text-primary">
              view full leaderboard &gt;&gt;
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
