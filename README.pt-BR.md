# TUGO52 🚀

> 52 semanas, 52 projetos, infinitas possibilidades

[🇬🇧 Read in English](./README.md)

## Visão Geral

TUGO52 é um desafio ambicioso de criar 52 microprojetos em 52 semanas. Cada projeto é construído com foco em inovação, aprendizado e resolução de problemas reais. O objetivo é combinar desenvolvimento pessoal com a criação de ferramentas úteis para a comunidade de desenvolvedores.

### Princípios Fundamentais

- 🎯 **MVPs Semanais**: Cada projeto é planejado para ser concluído em uma semana
- 🌍 **Impacto Global**: Soluções que podem beneficiar desenvolvedores em todo o mundo
- 🧪 **Exploração Tecnológica**: Aprendizado e implementação de novas tecnologias
- 📖 **Código Aberto**: Todos os projetos são open source e aceitam contribuições

## Stack Tecnológica

- **Frontend**: Next.js 15 (com Turbopack), React, TypeScript
- **Estilização**: Tailwind CSS, shadcn/ui
- **Testes**: Vitest, Testing Library
- **Documentação**: Storybook
- **Internacionalização**: i18n nativo do Next.js
- **DX**: ESLint, Prettier
- **Gerenciador de Pacotes**: pnpm

## Começando

### Pré-requisitos

- Node.js 18.17 ou superior
- pnpm 8.0 ou superior
- Git

### Instalação

1. Clone o repositório
   \`\`\`bash
   git clone https://github.com/thallesfreitas/tugo52.git
   cd tugo52
   \`\`\`

2. Instale as dependências
   \`\`\`bash
   pnpm install
   \`\`\`

3. Configure suas variáveis de ambiente
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

4. Inicie o servidor de desenvolvimento
   \`\`\`bash
   pnpm dev
   \`\`\`

A aplicação estará disponível em `http://localhost:3000`

## Estrutura do Projeto

```
src/
├── app/                   # Diretório app do Next.js
│   ├── (routes)/         # Todas as rotas da aplicação
│   └── layout.tsx        # Layout principal
├── components/           # Componentes React
│   ├── features/         # Componentes específicos de features
│   │   ├── home/        # Componentes da página inicial
│   │   ├── projects/    # Componentes de projetos
│   │   └── suggest/     # Componentes de sugestões
│   ├── layout/          # Componentes de layout
│   ├── theme/           # Componentes de tema
│   └── ui/              # Componentes base de UI
├── lib/                 # Funções utilitárias
├── locales/            # Traduções i18n
├── services/           # Serviços externos
├── stories/            # Stories do Storybook
└── tests/              # Arquivos de teste
```

## Comandos Disponíveis

```bash
# Desenvolvimento
pnpm dev            # Inicia servidor de desenvolvimento
pnpm build          # Build para produção
pnpm start          # Inicia servidor de produção
pnpm lint          # Executa ESLint
pnpm lint:fix      # Corrige problemas do ESLint

# Testes
pnpm test          # Executa testes
pnpm test:watch    # Executa testes em modo watch
pnpm test:coverage # Executa testes com cobertura

# Storybook
pnpm storybook     # Inicia Storybook
pnpm build-storybook # Build do Storybook

# Tipos
pnpm type-check    # Verifica tipos TypeScript
```

## Como Contribuir

Adoramos sua contribuição! Queremos tornar a contribuição para o TUGO52 o mais fácil e transparente possível, seja:

- Reportando um bug
- Discutindo o estado atual do código
- Enviando uma correção
- Propondo novas funcionalidades
- Se tornando um mantenedor

### Processo de Desenvolvimento

1. Faça um fork do repositório e crie seu branch a partir do `main`
2. Faça suas alterações
3. Se você adicionou código que precisa ser testado, adicione testes
4. Certifique-se que a suíte de testes passa
5. Certifique-se que seu código segue o estilo existente
6. Envie um Pull Request

### Processo de Pull Request

1. Atualize o README.md com detalhes das mudanças, se necessário
2. Atualize a documentação no Storybook, se necessário
3. O PR será mesclado assim que você tiver a aprovação de pelo menos um mantenedor

## Diretrizes de Código

### Princípios Gerais

- **TypeScript Primeiro**: Todo código deve ser escrito em TypeScript
- **Organização de Componentes**: Um componente por arquivo, seguindo arquitetura baseada em features
- **Testes**: Todos os componentes devem ter testes correspondentes
- **Documentação**: Componentes devem ser documentados no Storybook
- **i18n**: Todos os textos devem usar chaves de tradução

### Convenções de Nomenclatura

```typescript
// Interfaces
interface IUser {}

// Types
type TUserResponse = {};

// Enums
enum EUserStatus {}

// Componentes: PascalCase
function UserProfile() {}

// Hooks: camelCase com prefixo 'use'
function useUserData() {}

// Utils: camelCase
function formatDate() {}
```

### Convenção de Commits

```bash
feat: nova funcionalidade
fix: correção de bug
docs: alterações na documentação
style: formatação, ponto e vírgula ausentes, etc
refactor: refatoração de código
test: adição de testes
chore: tarefas de manutenção
```

## Visão Geral dos Projetos

O desafio consiste em 52 microprojetos, cada um desenvolvido em uma semana. Aqui está o que foi desenvolvido até agora:

### Semana 1: Plataforma TUGO52

- **Descrição**: A plataforma central para o desafio de 52 semanas
- **Stack Tecnológica**: Next.js, TypeScript, Tailwind
- **Funcionalidades**:
  - Showcase de projetos
  - Sistema de sugestões
  - Suporte a i18n
  - Alternância de tema

### Projetos Futuros

Cada semana, um novo projeto será adicionado aqui. Ideias de projetos podem ser sugeridas através do sistema de sugestões da plataforma.

## Padrões de Desenvolvimento

### Criação de Componentes

```tsx
// Exemplo de novo componente
import { useTranslations } from "@/hooks/useTranslations";

interface ExampleProps {
  title: string;
  children: React.ReactNode;
}

export function Example({ title, children }: ExampleProps) {
  const { t } = useTranslations();

  return (
    <div>
      <h2>{t("components.example.title", { title })}</h2>
      {children}
    </div>
  );
}
```

### Padrões de Teste

```typescript
import { render, screen } from "@testing-library/react";
import { Example } from "./Example";

describe("Example", () => {
  it("renderiza corretamente", () => {
    render(<Example title="Teste">Conteúdo</Example>);
    expect(screen.getByRole("heading")).toHaveTextContent("Teste");
  });
});
```

## Configuração do Ambiente

### Variáveis de Ambiente Necessárias

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_GITHUB_URL=https://github.com/thallesfreitas/tugo52
```

### Ambiente de Desenvolvimento

1. Configuração da IDE

```json
// .vscode/settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

2. Git Hooks (usando husky)

```bash
pnpm prepare     # Instala husky
pnpm lint-staged # Executa linters nos arquivos em staging
```

## Solução de Problemas

### Problemas Comuns

1. **Erros de Build**

```bash
# Limpar cache do Next.js
pnpm clean

# Reconstruir node_modules
rm -rf node_modules
pnpm install
```

2. **Erros de Tipagem**

```bash
# Atualizar definições TypeScript
pnpm type-check

# Gerar novos tipos de componentes
pnpm generate-types
```

3. **Problemas com Storybook**

```bash
# Limpar cache do Storybook
pnpm storybook --no-manager-cache
```

## Segurança

- Todos os formulários implementam proteção CSRF
- Rotas da API são protegidas com rate limiting apropriado
- Headers de segurança configurados no `next.config.ts`
- Dependências são atualizadas regularmente com `pnpm audit`

## Performance

A aplicação segue estas práticas de performance:

- Server-side rendering quando apropriado
- Otimização de imagens com componente Image do Next.js
- Code splitting e lazy loading
- Otimização e cache de assets
- Recursos de Progressive Web App

## Deploy

### Build de Produção

```bash
# Criar build de produção
pnpm build

# Analisar bundle
pnpm analyze

# Iniciar servidor de produção
pnpm start
```

### Plataformas de Deploy

A aplicação pode ser deployada em:

- Vercel (recomendado)
- AWS Amplify
- Netlify
- Servidores próprios

## Suporte e Comunidade

- [Discord Server - Em breve](#)
- [Discussões no GitHub](https://github.com/thallesfreitas/tugo52/discussions)
- [Twitter](https://twitter.com/tugo52)
- [Contato](mailto:lets@tugo52.com)

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Agradecimentos

- Todos os contribuidores
- Time do Next.js
- Time do shadcn/ui
- Comunidade open source

---

Construído com ❤️ como parte do desafio TUGO52
