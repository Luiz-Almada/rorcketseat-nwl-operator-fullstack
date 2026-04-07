# Padrões de Componentes de UI

Este documento define os padrões para criação de componentes de UI no projeto.

## Estrutura de Arquivos

```
src/components/ui/
├── button.tsx
├── button.md (este arquivo)
└── outros-componentes.tsx
```

## Padrões Obrigatórios

### 1. Named Exports

Sempre use named exports, nunca default exports.

```tsx
// ✅ Correto
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(...)

// ❌ Errado
export default function Button() {}
```

### 2. Extensão de Props Nativas

Extenda as propriedades nativas do elemento HTML correspondente.

```tsx
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive"
  size?: "sm" | "md" | "lg"
}
```

### 3. Tailwind Variants

Use `tailwind-variants` (tv) para criar variantes do componente. NÃO use `twMerge` com `cn` para variants.

```tsx
import { tv, type VariantProps } from "tailwind-variants"

const button = tv({
  base: "classes-base",
  variants: {
    variant: {
      primary: "classes-primary",
      secondary: "classes-secondary",
    },
    size: {
      sm: "classes-sm",
      md: "classes-md",
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
})
```

### 4. Passando className

O `tailwind-variants` faz o merge automaticamente. Passe `className` diretamente:

```tsx
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={button({ variant, size, className })} // className passa automaticamente
        {...props}
      />
    )
  }
)
```

### 5. Forward Ref

Sempre use `forwardRef` para permitir manipulação do elemento DOM.

```tsx
export const Component = forwardRef<HTMLButtonElement, ComponentProps>(
  ({ className, variant, ...props }, ref) => {
    return <button ref={ref} className={...} {...props} />
  }
)

Component.displayName = "Component"
```

### 6. displayName

Defina o `displayName` para componentes forwardRef para melhor debugging.

```tsx
Component.displayName = "Component"
```

## Checklist de Criação de Componente

- [ ] Criar arquivo em `src/components/ui/[nome].tsx`
- [ ] Usar named export
- [ ] Extender propriedades nativas do HTML
- [ ] Usar `tailwind-variants` para variants
- [ ] NÃO usar `twMerge` com `cn` para variants
- [ ] Usar `forwardRef`
- [ ] Definir `displayName`
- [ ] Adicionar exemplo neste documento
