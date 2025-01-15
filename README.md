# TUGO52 🚀

> 52 weeks, 52 projects, infinite possibilities

[🇧🇷 Leia em Português](./README.pt-BR.md)

## Overview

TUGO52 is an ambitious challenge to create 52 micro-projects in 52 weeks. Each project is built with a focus on innovation, learning, and real-world problem-solving. The goal is to combine personal development with the creation of useful tools for the developer community..

### Core Principles

- 🎯 **Weekly MVPs**: Each project is scoped to be completed within one week
- 🌍 **Global Impact**: Solutions that can benefit developers worldwide
- 🧪 **Technology Exploration**: Learning and implementing new technologies
- 📖 **Open Source**: All projects are open source and welcome contributions

## Tech Stack

- **Frontend**: Next.js 15 (with Turbopack), React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Testing**: Vitest, Testing Library
- **Documentation**: Storybook
- **Internationalization**: Built-in Next.js i18n
- **DX**: ESLint, Prettier
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm 8.0 or later
- Git

### Installation

1. Clone the repository
   \`\`\`bash
   git clone https://github.com/thallesfreitas/tugo52.git
   cd tugo52
   \`\`\`

2. Install dependencies
   \`\`\`bash
   pnpm install
   \`\`\`

3. Set up your environment variables
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

4. Start the development server
   \`\`\`bash
   pnpm dev
   \`\`\`

The application will be available at `http://localhost:3000`

## Project Structure

```
src/
├── app/                   # Next.js app directory
│   ├── (routes)/         # All application routes
│   └── layout.tsx        # Root layout
├── components/           # React components
│   ├── features/         # Feature-specific components
│   │   ├── home/        # Homepage components
│   │   ├── projects/    # Projects components
│   │   └── suggest/     # Suggestion components
│   ├── layout/          # Layout components
│   ├── theme/           # Theme components
│   └── ui/              # Base UI components
├── lib/                 # Utility functions
├── locales/            # i18n translations
├── services/           # External services
├── stories/            # Storybook stories
└── tests/              # Test files
```

## Available Commands

```bash
# Development
pnpm dev            # Start development server
pnpm build          # Build for production
pnpm start          # Start production server
pnpm lint          # Run ESLint
pnpm lint:fix      # Fix ESLint issues

# Testing
pnpm test          # Run tests
pnpm test:watch    # Run tests in watch mode
pnpm test:coverage # Run tests with coverage

# Storybook
pnpm storybook     # Start Storybook
pnpm build-storybook # Build Storybook

# Types
pnpm type-check    # Run TypeScript checks
```

## Contributing

We love your input! We want to make contributing to TUGO52 as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

### Development Process

1. Fork the repo and create your branch from `main`
2. Make your changes
3. If you've added code that should be tested, add tests
4. Ensure the test suite passes
5. Make sure your code follows the existing style
6. Submit a Pull Request

### Pull Request Process

1. Update the README.md with details of changes if needed
2. Update the documentation in Storybook if needed
3. The PR will be merged once you have the sign-off of at least one maintainer

## Code Guidelines

### General Principles

- **TypeScript First**: All code should be written in TypeScript
- **Component Organization**: One component per file, following feature-based architecture
- **Testing**: All components should have corresponding tests
- **Documentation**: Components should be documented in Storybook
- **i18n**: All text should use translation keys

### Naming Conventions

```typescript
// Interfaces
interface IUser {}

// Types
type TUserResponse = {};

// Enums
enum EUserStatus {}

// Components: PascalCase
function UserProfile() {}

// Hooks: camelCase with 'use' prefix
function useUserData() {}

// Utils: camelCase
function formatDate() {}
```

### Commit Convention

```bash
feat: new feature
fix: bug fix
docs: documentation changes
style: formatting, missing semi colons, etc
refactor: code refactoring
test: adding tests
chore: maintenance tasks
```

## Projects Overview

The challenge consists of 52 micro-projects, each developed in one week. Here's what's been developed so far:

### Week 1: TUGO52 Platform

- **Description**: The central platform for the 52-week challenge
- **Tech Stack**: Next.js, TypeScript, Tailwind
- **Features**:
  - Project showcase
  - Suggestion system
  - i18n support
  - Theme switching

### Future Projects

Each week, a new project will be added here. Project ideas can be suggested through the platform's suggestion system.

## Development Standards

### Component Creation

```tsx
// Example of a new component
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

### Testing Standards

````typescript
import { render, screen } from '@testing-library/react'
import { Example } from './Example'

describe('Example', () => {
  it('renders correctly', () => {
    render(<Example title="Test">Content</Example>)
    expect(screen.getByRole('heading')).toHaveTextContent('Test')
  })
})

## Environment Setup

### Required Environment Variables

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_GITHUB_URL=https://github.com/thallesfreitas/tugo52
````

### Development Environment

1. IDE Configuration

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

2. Git Hooks (using husky)

```bash
pnpm prepare     # Install husky
pnpm lint-staged # Run linters on staged files
```

## Troubleshooting

### Common Issues

1. **Build Errors**

```bash
# Clear Next.js cache
pnpm clean

# Rebuild node_modules
rm -rf node_modules
pnpm install
```

2. **Type Errors**

```bash
# Update TypeScript definitions
pnpm type-check

# Generate new component types
pnpm generate-types
```

3. **Storybook Issues**

```bash
# Clear Storybook cache
pnpm storybook --no-manager-cache
```

## Security

- All forms implement CSRF protection
- API routes are protected with appropriate rate limiting
- Security headers are configured in `next.config.ts`
- Dependencies are regularly updated with `pnpm audit`

## Performance

The application follows these performance best practices:

- Server-side rendering where appropriate
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Asset optimization and caching
- Progressive Web App features

## Deployment

### Production Build

```bash
# Create production build
pnpm build

# Analyze bundle
pnpm analyze

# Start production server
pnpm start
```

### Deployment Platforms

The application can be deployed to:

- Vercel (recommended)
- AWS Amplify
- Netlify
- Self-hosted servers

## Support and Community

- [Discord Server - SOON](#)
- [GitHub Discussions](https://github.com/thallesfreitas/tugo52/discussions)
- [Twitter](https://twitter.com/tugo52)
- [Contact](mailto:lets@tugo52.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- All contributors
- The Next.js team
- The shadcn/ui team
- The open source community

---

Built with ❤️ as part of the TUGO52 challenge
