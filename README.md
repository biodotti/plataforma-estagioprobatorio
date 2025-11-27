# AVA Paraná - Ambiente Virtual de Aprendizagem

Plataforma de formação continuada para professores da rede estadual do Paraná, com integração de Tutor Inteligente via IA.

## 🚀 Tecnologias

- **Frontend**: React + Vite
- **Estilização**: CSS Modules / Vanilla CSS (Design System próprio)
- **Roteamento**: React Router DOM
- **Ícones**: Lucide React
- **IA**: Google Gemini API
- **Backend/Auth**: Firebase (Auth + Firestore)

## 🔐 Autenticação e Níveis de Acesso

O sistema possui controle de acesso baseado em funções (RBAC):

- **Admin**: Acesso total ao sistema.
- **Professor**: Pode editar seus cursos.
- **Estudante**: Acesso apenas para visualização e estudo.

A autenticação é feita via **Google Login**. Os papéis são gerenciados na coleção `users` do Firestore.

## 🛠️ Instalação e Execução

1.  **Clone o repositório**
    ```bash
    git clone https://github.com/seu-usuario/ava-parana.git
    cd ava-parana
    ```

2.  **Instale as dependências**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente**
    Crie um arquivo `.env` na raiz do projeto com suas chaves:
    ```env
    VITE_GEMINI_API_KEY=sua_chave_aqui
    ```

4.  **Execute o projeto**
    ```bash
    npm run dev
    ```

## 🤖 Tutor Inteligente

O projeto inclui um assistente virtual (`src/components/tutor/TutorChat.jsx`) que utiliza a API do Google Gemini para responder dúvidas pedagógicas dos professores em tempo real.

## 📦 Deploy

O projeto está configurado para deploy automático no **Render** via arquivo `render.yaml`.

1.  Conecte seu repositório GitHub ao Render.
2.  O Render detectará automaticamente o arquivo de configuração.
3.  O build será executado com `npm run build`.

## 📁 Estrutura do Projeto

- `/src/components`: Componentes reutilizáveis (Layout, Tutor, etc.)
- `/src/pages`: Páginas da aplicação (Dashboard, Cursos)
- `/src/services`: Integrações com APIs (Firebase, Gemini)
