import { codeToHtml } from "shiki"

interface CodeBlockProps {
  code: string
  language: string
  fileName?: string
}

export default async function CodeBlock({
  code,
  language,
  fileName
}: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang: language,
    theme: "vesper"
  })

  return (
    <div className="border border-border-primary rounded overflow-hidden bg-bg-input">
      {fileName && (
        <div className="flex items-center gap-3 h-10 px-4 border-b border-border-primary">
          <span className="w-2.5 h-2.5 rounded-full bg-accent-red" />
          <span className="w-2.5 h-2.5 rounded-full bg-accent-amber" />
          <span className="w-2.5 h-2.5 rounded-full bg-accent-green" />
          <div className="flex-1" />
          <span className="text-xs text-text-tertiary font-mono">
            {fileName}
          </span>
        </div>
      )}
      <div
        className="[&_pre]:bg-transparent! [&_pre]:p-3! [&_pre]:m-0! [&_pre]:font-mono! [&_pre]:text-sm!"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
