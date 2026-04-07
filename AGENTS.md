# DevRoast - Agentes

## Projeto
- **Stack**: Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript
- **Propósito**: App para "assar" código - avalia e critica código de forma brutal/humorada
- **Design**: Tema escuro com cores de terminal (verde, âmbar, vermelho)

## Estrutura
- `src/components/ui/` - Componentes UI genéricos (pattern composição)
- `src/app/` - Páginas (layout.tsx global)
- `src/lib/utils.ts` - utilitário cn() para classes

## Padrões
- **Composição**: AnalysisCard usa AnalysisCardRoot, AnalysisCardHeader, AnalysisCardTitle, AnalysisCardDescription
- **Tailwind v4**: Variáveis no @theme do globals.css (ex: bg-accent-green, text-text-primary)
- **Fontes**: JetBrains Mono (mono), system-ui (sans)
- **Componentes base-ui**: Toggle usa @base-ui/react/switch
- **Code highlight**: shiki (tema vesper, server component)

## Comandos
- `npm run dev` - Development
- `npm run build` - Build
- `npm run lint` - Lint (Biome)