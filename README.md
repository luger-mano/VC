# Vovó Crochê (VC)

## 👵🧶 Site Institucional Vovó Crochê

Este projeto é o site institucional oficial da **Vovó Crochê**, uma marca dedicada à arte e tradição do crochê. O objetivo principal é apresentar os produtos artesanais, a história da marca e proporcionar uma experiência online acolhedora e funcional para os clientes.

## ✨ Sobre o Projeto

O site da Vovó Crochê foi desenvolvido com foco em oferecer uma plataforma moderna e responsiva, que destaca a beleza e a qualidade dos produtos feitos à mão. Ele serve como um portfólio digital, um canal de comunicação e um ponto de contato essencial para a marca.

## 🚀 Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias de ponta para garantir performance, escalabilidade e uma excelente experiência de desenvolvimento:

| Categoria         | Tecnologia       | Versão Principal |
| :---------------- | :--------------- | :--------------- |
| **Framework Web** | Angular          | 18               |
| **Estilização**   | Tailwind CSS     | 3                |
| **Linguagem**     | TypeScript       |                  |
| **Pré-processador CSS** | SCSS             |                  |
| **Testes**        | Jasmine/Karma    |                  |

## 💡 Funcionalidades Principais

O site da Vovó Crochê oferece uma série de funcionalidades para engajar os visitantes e facilitar a interação com a marca:

*   **Navegação Intuitiva:** Menu lateral com seções como Novidades, Roupas, Acessórios, Estilos e Favoritos.
*   **Página Inicial Atraente:** Seção de destaque com produtos, promoções e a filosofia da marca ("Feito à Mão, Com Amor & Carinho").
*   **Catálogo de Produtos:** Exibição de produtos com detalhes, como a "Bolsinha Amarela" e "Bolsa Laranja".
*   **Interatividade:** Funcionalidade de favoritar produtos com um duplo clique.
*   **Autenticação de Usuários:** Telas de Login e Cadastro (Signup) para uma experiência personalizada.
*   **Carrinho de Compras:** Botão para adicionar produtos ao carrinho (funcionalidade visual).
*   **Busca de Produtos:** Sistema de busca integrado para facilitar a localização de itens.
*   **Responsividade:** Design adaptável para diferentes dispositivos, garantindo uma ótima visualização em desktops, tablets e smartphones.
*   **Informações Úteis:** Links para Entrega, Devolução e Recebimento de Novidades.
*   **Integração Social:** Links diretos para Instagram e Facebook da Vovó Crochê.

## 📂 Estrutura do Projeto

A estrutura de diretórios do projeto segue as convenções do Angular, com uma organização clara e modular:

```
VC/
├── src/
│   ├── app/               # Componentes da aplicação (app, login, signup)
│   │   ├── app.component.* # Componente raiz da aplicação
│   │   ├── login.component.* # Componentes de login
│   │   └── signup.component.* # Componentes de cadastro
│   ├── assets/            # Ativos estáticos (imagens, ícones, etc.)
│   ├── environments/      # Configurações de ambiente
│   ├── index.html         # Arquivo HTML principal
│   ├── main.ts            # Ponto de entrada da aplicação
│   └── styles.scss        # Estilos globais da aplicação
├── angular.json           # Configuração do Angular CLI
├── package.json           # Metadados do projeto e dependências
├── tailwind.config.js     # Configuração do Tailwind CSS
├── tsconfig.json          # Configuração do TypeScript
└── ... (outros arquivos de configuração)
```

## ⚙️ Como Iniciar

Para configurar e executar o projeto Vovó Crochê em seu ambiente local, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

*   **Node.js:** v18 ou superior
*   **npm:** v9 ou superior (ou Yarn)

### Instalação

1.  Clone o repositório:

    ```bash
    git clone https://github.com/luger-mano/VC.git
    cd VC
    ```

2.  Instale as dependências do projeto:

    ```bash
    npm install
    # ou yarn install
    ```

### Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento local:

```bash
npm start
# ou ng serve
```

O aplicativo estará disponível em `http://localhost:4200/`.

### Build para Produção

Para construir o projeto para implantação em ambiente de produção:

```bash
npm run build
```

Os arquivos de saída serão gerados no diretório `dist/`.

### Executando Testes

Para executar a suíte de testes do projeto:

```bash
npm test
```

## 📜 Scripts Disponíveis

*   `npm start`: Inicia o servidor de desenvolvimento.
*   `npm run build`: Compila o projeto para produção.
*   `npm test`: Executa os testes unitários.
*   `npm run watch`: Compila em modo de observação (watch mode).
*   `npm run lint`: Executa o linter para verificar a qualidade do código.

## 🛠️ Extensões Recomendadas para VS Code

Para uma melhor experiência de desenvolvimento, recomendamos as seguintes extensões para o Visual Studio Code:

*   **Angular Language Service:** Suporte aprimorado para Angular.
*   **Prettier:** Formatador de código.
*   **ESLint:** Ferramenta para garantir a qualidade do código.
*   **Tailwind CSS IntelliSense:** Autocompletar e linting para Tailwind CSS.
*   **Docker (Opcional):** Suporte para Docker.

## 🔗 Recursos Úteis

*   [Documentação Oficial do Angular](https://angular.io/docs)
*   [Documentação Oficial do Tailwind CSS](https://tailwindcss.com/docs)
*   [Documentação do Angular CLI](https://angular.io/cli)

## ⚠️ Solução de Problemas

*   **Porta 4200 já em uso?**

    ```bash
    npm start -- --port 4201
    ```

*   **Limpar `node_modules` e reinstalar:**

    ```bash
    rm -r node_modules .angular
    npm install
    ```

Para mais ajuda, consulte a documentação oficial do Angular.

--- 

Feito com ❤️ por **Manus AI** para Vovó Crochê. 🎨✨
