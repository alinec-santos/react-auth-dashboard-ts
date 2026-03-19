# Pitang App 

Projeto desenvolvido durante o treinamento da **Pitang**, como exercício prático das aulas, abordando os conceitos de `useState`, `useEffect` e HTTP Requests com `fetch`.

 **[Acessar o projeto ao vivo](https://react-auth-dashboard-ts.vercel.app/)**

---

##  Demonstração



[![Demonstração do projeto](https://img.shields.io/badge/▶️%20Assistir%20demonstração-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtu.be/Im_TdrXj2JQ)

---

##  Funcionalidades

### Obrigatórias
-  **Landing page** na rota `/` com navegação para login e cadastro
-  **Redirecionamento para `/dashboard`** caso o usuário já esteja logado ao tentar acessar `/login` ou `/register`
-  **Redirecionamento para `/login`** caso o usuário não esteja logado ao tentar acessar `/dashboard`
-  **Correção da navegação SPA** no sidebar — sem reload de página ao navegar

### Extras
-  Página inicial do dashboard com boas-vindas e dados do usuário logado
-  Página de **Usuários** buscando dados da API
-  Página de **Todos** buscando dados da API com status de concluído/pendente

---

##  Tecnologias utilizadas

| Tecnologia | Descrição |
|---|---|
| [React](https://react.dev/) | Biblioteca principal para construção da interface |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática para JavaScript |
| [Vite](https://vitejs.dev/) | Ferramenta de build e servidor de desenvolvimento |
| [TanStack Router](https://tanstack.com/router) | Roteamento baseado em arquivos para React |
| [shadcn/ui](https://ui.shadcn.com/) | Componentes de interface prontos e customizáveis |
| [Tailwind CSS](https://tailwindcss.com/) | Framework de estilização via classes utilitárias |
| [Lucide React](https://lucide.dev/) | Biblioteca de ícones |
| [DummyJSON](https://dummyjson.com/) | API pública utilizada para dados fictícios |

---

##  Credenciais de teste

Para acessar o dashboard, utilize as seguintes credenciais:

```
Usuário: emilys
Senha:   emilyspass
```

---

##  Como rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [Git](https://git-scm.com/) instalado

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# 2. Acesse a pasta do projeto
cd pitang-app

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

---

##  Estrutura do projeto

```
src/
├── routes/
│   ├── index.tsx              # Landing page (/)
│   ├── _auth/
│   │   ├── route.tsx          # Layout de autenticação + guard de redirecionamento
│   │   ├── login.tsx          # Página de login (/login)
│   │   └── register.tsx       # Página de cadastro (/register)
│   └── dashboard/
│       ├── route.tsx          # Layout do dashboard + guard de autenticação
│       ├── index.tsx          # Página inicial do dashboard (/dashboard)
│       ├── products/
│       │   └── index.tsx      # Listagem de produtos (/dashboard/products)
│       ├── users/
│       │   └── index.tsx      # Listagem de usuários (/dashboard/users)
│       └── todos/
│           └── index.tsx      # Listagem de todos (/dashboard/todos)
├── components/
│   ├── ui/                    # Componentes gerados pelo shadcn/ui
│   ├── app-sidebar.tsx        # Sidebar da aplicação
│   ├── login-form.tsx         # Formulário de login
│   └── nav-projects.tsx       # Links de navegação da sidebar
├── hooks/
│   └── use-auth.ts            # Lógica de autenticação centralizada
├── lib/
│   └── api.ts                 # Funções de chamada à API
└── types.ts                   # Tipos TypeScript da aplicação
```

---

##  Autora

Funcionalides citadas acima feitas  por **Aline Santos**. Projeto base desenvolvido pelo instrutor do treinamento Pitang 2026.

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/alinec-santos)