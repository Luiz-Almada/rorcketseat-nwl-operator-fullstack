# DevRoast - Agentes

## Projeto
- **Stack**: Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript
- **Propósito**: App para "assar" código com críticas brutais/humoradas
- **Design**: Tema escuro com cores de terminal

## Estrutura
- `src/components/ui/` - Componentes UI genéricos (pattern composição)
- `src/app/` - Páginas (layout.tsx global)
- `src/lib/utils.ts` - utilitário cn()

## Padrões
- **Tailwind v4**: Variáveis no @theme do globals.css
- **Fontes**: JetBrains Mono (mono)
- **Componentes**: Usar pattern composição quando houver sub-partes (Header, Title, etc)
- **Server Components**: Para código que requer shiki ou outras operações async

## Comandos
- `npm run dev` - Development
- `npm run build` - Build
- `npm run lint` - Lint (Biome)