# Guia de Configuração do Firebase

Siga este passo a passo para configurar o backend do seu projeto no Firebase.

## 1. Criar Projeto
1.  Acesse o [Console do Firebase](https://console.firebase.google.com/).
2.  Clique em **"Adicionar projeto"**.
3.  Dê um nome ao projeto (ex: `ava-parana`).
4.  Desative o Google Analytics (opcional para este projeto) e clique em **"Criar projeto"**.

## 2. Registrar o App Web
1.  No painel do projeto, clique no ícone de **Web** (</>).
2.  Dê um apelido ao app (ex: `AVA Web`).
3.  Clique em **"Registrar app"**.
4.  **IMPORTANTE**: Copie o objeto `firebaseConfig` que aparecerá na tela. Você precisará dele para o passo 6.

## 3. Configurar Autenticação (Google Login)
1.  No menu lateral, vá em **Criação** > **Authentication**.
2.  Clique em **"Vamos começar"**.
3.  Na aba **Sign-in method**, selecione **Google**.
4.  Clique em **Ativar**.
5.  Configure o nome do projeto e escolha um e-mail de suporte.
6.  Clique em **Salvar**.

## 4. Criar Banco de Dados (Firestore)
1.  No menu lateral, vá em **Criação** > **Firestore Database**.
2.  Clique em **"Criar banco de dados"**.
3.  Escolha o local (recomendado: `southamerica-east1` para São Paulo/Brasil).
4.  Escolha o modo de regras de segurança:
    - Selecione **"Iniciar no modo de teste"** (permite leitura/escrita por 30 dias, ideal para desenvolvimento).
5.  Clique em **Criar**.

## 5. Configurar Regras de Segurança (Opcional/Produção)
Para maior segurança, vá na aba **Regras** do Firestore e cole o seguinte código para permitir que apenas usuários autenticados leiam/escrevam, e apenas admins editem papéis:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    match /{document=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null; 
    }
  }
}
```

## 6. Conectar ao Código
1.  Abra o arquivo `src/services/firebase.js` no seu projeto.
2.  Substitua o objeto `firebaseConfig` pelos dados que você copiou no Passo 2.

Exemplo de como deve ficar:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyD...",
  authDomain: "ava-parana.firebaseapp.com",
  projectId: "ava-parana",
  storageBucket: "ava-parana.appspot.com",
  messagingSenderId: "123456...",
  appId: "1:123456..."
};
```

## 7. Definir Papéis (Admin/Professor)
Como o sistema usa RBAC (Controle de Acesso Baseado em Função), novos usuários entram como `student`. Para promover alguém a Admin:

1.  Faça login no AVA com sua conta Google.
2.  Vá no Console do Firebase > **Firestore Database**.
3.  Entre na coleção `users`.
4.  Encontre o documento com o ID do seu usuário.
5.  Altere o campo `role` de `"student"` para `"admin"` ou `"professor"`.
6.  Recarregue a página do AVA para ver as opções de edição.
