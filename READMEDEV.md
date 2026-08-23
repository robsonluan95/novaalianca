# Carvalho Energia Renovável - Documentação Dev

O desenvolvimento do Front-end completo da Landing Page corporativa para a **Carvalho Energia Renovável** foi finalizado com sucesso!

## 🚀 Stack & Tecnologias Utilizadas
- **Framework:** Next.js (App Router com TypeScript estrito)
- **Estilização:** Tailwind CSS v4 (com variáveis de design system customizadas no `@theme` em `globals.css`)
- **Ícones:** `lucide-react`
- **Carrossel & Animações:** `swiper` (com navegação interativa e suporte responsivo)

## 📂 Estrutura de Pastas Implementada

```text
novaalianca/
├── src/
│   ├── app/
│   │   ├── globals.css           # Configuração de tema Tailwind, cores e estilos globais do Swiper
│   │   ├── layout.tsx            # Metadata corporativa e estrutura raiz da aplicação
│   │   └── page.tsx              # Montagem limpa das seções da Landing Page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx        # Header fixo no topo com navegação responsiva e seletor de idioma
│   │   │   └── Footer.tsx        # Footer de 4 colunas em fundo verde escuro e copyright
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx   # Hero com background, card flutuante centralizado e 3 métricas
│   │   │   ├── ProjectsSection.tsx# Card em destaque (UFV Cristino Castro) e carrossel de projetos com Swiper
│   │   │   ├── ServicesSection.tsx# Grid de 3 cards com ícones circulares sobrepostos
│   │   │   ├── NewsSection.tsx   # Grid em tom lavanda/azul suave com cards de notícias
│   │   │   ├── AboutSection.tsx  # Layout 2 colunas com a história e foto do fundador
│   │   │   └── ValuesSection.tsx # Card de valores flutuante sobreposto ao footer
│   │   └── ui/
│   │       ├── Button.tsx        # Componente atômico de botão com suporte a variantes
│   │       ├── Logo.tsx          # Ícone de árvore + tipografia da Carvalho Energia Renovável
│   │       └── SectionTitle.tsx  # Título e subtítulo padronizados para todas as seções
│   ├── data/
│   │   └── siteData.ts           # Separação total de dados (Projetos, Serviços, Notícias, Métricas, etc.)
│   └── types/
│       └── index.ts              # Interfaces TypeScript estritas para todos os objetos de dados
```

## 🖼️ Destaques da Implementação

### 1. Separação Rígida de Dados (`src/data/siteData.ts`)
Zero código "chumbado" no JSX. Todos os dados de projetos, serviços, métricas e notícias são tipados e renderizados através de `.map()`.

### 2. Fidelidade Visual
- **Header:** Fundo verde escuro fixo (`bg-brand-dark`), logo à esquerda, links centralizados e seletor de idioma (BR / US).
- **Seção Hero:** Imagem de usina solar ao fundo com o card centralizado flutuante, logo de árvore, texto de apresentação e as métricas (`2.750+ MWp Instalados`, `17+ Projetos Concluídos`, `11+ Anos de Experiência`).
- **Seção de Projetos:** Destaque para o card principal com `765 MWp` e overlay gradiente + carrossel com `Swiper.js` e botões de navegação estilizados.
- **Seção de Serviços:** Cards brancos com o ícone verde circular vazado na junção da imagem e do texto.
- **Seção de Notícias:** Fundo lavanda suave com tags de status e botão outline.
- **Seção Sobre:** História institucional e foto do fundador com a legenda flutuante.
- **Nossos Valores & Footer:** Card largo de valores flutuante sobreposto entre o final da página e o footer verde escuro em 4 colunas.

### 3. Responsividade & Acessibilidade
Adaptação completa para Mobile (Menu hambúrguer com estado reativo, grids que passam de 3 colunas para 1 coluna e espaçamentos dinâmicos).

### 4. Verificação de Compilação
O projeto foi testado e validado com `npm run build` garantindo zero erros de compilação ou tipagem.