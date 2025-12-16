# Regras de Segurança do Firestore - 4 Níveis

Cole estas regras na aba **Regras** do Firestore Database:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Função auxiliar para verificar se o usuário está autenticado
    function isAuthenticated() {
      return request.auth != null;
    }
    
    // Função para obter o papel do usuário
    function getUserRole() {
      return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role;
    }
    
    // Regras para a coleção de usuários
    match /users/{userId} {
      // Leitura: qualquer usuário autenticado pode ler dados de usuários
      allow read: if isAuthenticated();
      
      // Escrita: apenas o próprio usuário pode editar seus dados
      // IMPORTANTE: Em produção, bloqueie a edição do campo 'role' para evitar escalação de privilégios
      allow write: if isAuthenticated() && request.auth.uid == userId;
    }
    
    // Regras para documentação e links (futura coleção)
    match /documentation/{docId} {
      // Leitura: todos os autenticados
      allow read: if isAuthenticated();
      
      // Escrita: apenas admin e tutor
      allow write: if isAuthenticated() && getUserRole() in ['admin', 'tutor'];
    }
    
    // Regras gerais para outras coleções
    match /{document=**} {
      // Leitura: todos os autenticados
      allow read: if isAuthenticated();
      
      // Escrita: apenas admin
      allow write: if isAuthenticated() && getUserRole() == 'admin';
    }
  }
}
```

## Níveis de Acesso

| Papel | Descrição | Permissões |
|-------|-----------|------------|
| **admin** | Administrador | Acesso total ao sistema |
| **tutor** | Tutor | Pode gerenciar documentação |
| **formador** | Formador | Acesso intermediário (a definir) |
| **cursista** | Cursista | Apenas leitura |

## Como Alterar Papéis

1. Acesse o Firestore Database no console do Firebase
2. Entre na coleção `users`
3. Encontre o documento do usuário (ID = UID do Firebase Auth)
4. Altere o campo `role` para: `admin`, `tutor`, `formador` ou `cursista`
