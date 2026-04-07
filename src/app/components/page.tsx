"use client"

import { useState } from "react"
import {
  AnalysisCardDescription,
  AnalysisCardHeader,
  AnalysisCardRoot,
  AnalysisCardTitle
} from "@/components/ui/analysis-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DiffLine } from "@/components/ui/diff-line"
import { ScoreRing } from "@/components/ui/score-ring"
import { Toggle } from "@/components/ui/toggle"

const sampleCode = `function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}`

export default function ComponentsPage() {
  const [toggleChecked, setToggleChecked] = useState(false)

  return (
    <div className="min-h-screen bg-bg-page p-8">
      <h1 className="text-4xl font-bold text-white mb-8">UI Components</h1>

      <section className="mb-12">
        <h2 className="text-2xl text-white mb-4">Button</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg text-zinc-400 mb-4">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg text-zinc-400 mb-4">Sizes</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg text-zinc-400 mb-4">States</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl text-white mb-4">Badge</h2>

        <div>
          <h3 className="text-lg text-zinc-400 mb-4">Variants</h3>
          <div className="flex flex-wrap gap-4">
            <Badge variant="critical">critical</Badge>
            <Badge variant="warning">warning</Badge>
            <Badge variant="good">good</Badge>
            <Badge variant="verdict">needs_serious_help</Badge>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl text-white mb-4">Toggle</h2>

        <div>
          <h3 className="text-lg text-zinc-400 mb-4">States</h3>
          <div className="flex flex-wrap gap-8">
            <Toggle
              checked={false}
              onCheckedChange={() => {}}
              label="roast mode"
            />
            <Toggle
              checked={true}
              onCheckedChange={() => {}}
              label="roast mode"
            />
            <Toggle
              checked={toggleChecked}
              onCheckedChange={setToggleChecked}
              label="Controlled"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl text-white mb-4">DiffLine</h2>

        <div className="space-y-4">
          <h3 className="text-lg text-zinc-400 mb-4">Types</h3>
          <div className="border border-border-primary rounded w-[560px]">
            <DiffLine type="removed" content="var total = 0;" />
            <DiffLine type="added" content="const total = 0;" />
            <DiffLine
              type="context"
              content="for (let i = 0; i < items.length; i++) {"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl text-white mb-4">AnalysisCard</h2>

        <div className="space-y-4">
          <h3 className="text-lg text-zinc-400 mb-4">Variants</h3>
          <div className="flex flex-wrap gap-4">
            <AnalysisCardRoot variant="critical">
              <AnalysisCardHeader />
              <AnalysisCardTitle>
                using var instead of const/let
              </AnalysisCardTitle>
              <AnalysisCardDescription>
                the var keyword is function-scoped rather than block-scoped,
                which can lead to unexpected behavior and bugs.
              </AnalysisCardDescription>
            </AnalysisCardRoot>
            <AnalysisCardRoot variant="warning">
              <AnalysisCardHeader />
              <AnalysisCardTitle>missing error handling</AnalysisCardTitle>
              <AnalysisCardDescription>
                this function does not handle potential errors that could occur
                during execution.
              </AnalysisCardDescription>
            </AnalysisCardRoot>
            <AnalysisCardRoot variant="good">
              <AnalysisCardHeader />
              <AnalysisCardTitle>good use of const</AnalysisCardTitle>
              <AnalysisCardDescription>
                using const for immutable bindings is the recommended practice
                in modern JavaScript.
              </AnalysisCardDescription>
            </AnalysisCardRoot>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl text-white mb-4">CodeBlock</h2>

        <div className="space-y-4">
          <h3 className="text-lg text-zinc-400 mb-4">With File Name</h3>
          <div className="border border-border-primary rounded overflow-hidden bg-bg-input max-w-[560px]">
            <div className="flex items-center gap-3 h-10 px-4 border-b border-border-primary">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-red" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent-amber" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent-green" />
              <div className="flex-1" />
              <span className="text-xs text-text-tertiary font-mono">
                calculate.js
              </span>
            </div>
            <pre className="p-3 text-sm font-mono text-text-primary overflow-x-auto">
              {sampleCode}
            </pre>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg text-zinc-400 mb-4">Without File Name</h3>
          <div className="border border-border-primary rounded overflow-hidden bg-bg-input max-w-[560px]">
            <pre className="p-3 text-sm font-mono text-text-primary overflow-x-auto">
              {sampleCode}
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl text-white mb-4">ScoreRing</h2>

        <div className="space-y-4">
          <h3 className="text-lg text-zinc-400 mb-4">Score Levels</h3>
          <div className="flex flex-wrap gap-8 items-center">
            <ScoreRing score={8.5} />
            <ScoreRing score={5.0} />
            <ScoreRing score={2.3} />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg text-zinc-400 mb-4">Custom Sizes</h3>
          <div className="flex flex-wrap gap-8 items-center">
            <ScoreRing score={7.5} size={120} strokeWidth={3} />
            <ScoreRing score={7.5} size={180} />
            <ScoreRing score={7.5} size={240} strokeWidth={6} />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg text-zinc-400 mb-4">Different Max Scores</h3>
          <div className="flex flex-wrap gap-8 items-center">
            <ScoreRing score={85} maxScore={100} />
            <ScoreRing score={3.5} maxScore={5} />
            <ScoreRing score={450} maxScore={1000} />
          </div>
        </div>
      </section>
    </div>
  )
}
