# Aplicativo de Portfólio

Este é um aplicativo de portfólio que permite aos usuários criar, personalizar e compartilhar seus portfólios profissionais. O aplicativo inclui várias rotas para diferentes funcionalidades, como personalização, administração, visualização de postagens e redefinição de senha.

## Funcionalidades

- **Personalizar Portfólio**: Permite aos usuários personalizar seu portfólio.
- **Administração**: Página de administração para gerenciar o aplicativo.
- **Visualização de Postagens**: Permite visualizar postagens específicas.
- **Visualização de Portfólio**: Permite visualizar o portfólio de um usuário específico.
- **Redefinição de Senha**: Permite aos usuários redefinir suas senhas.
- **Teste de Novo Portfólio**: Permite testar a criação de um novo portfólio.

## Rotas

- `/personalizar`: Rota para a página de personalização do portfólio.
- `/admin`: Rota para a página de administração.
- `/abs/:a`: Rota para a página Abs com um parâmetro dinâmico `a`.
- `/post/:id`: Rota para visualizar uma postagem específica com o ID `id`.
- `/portfolio/:username`: Rota para visualizar o portfólio de um usuário específico com o nome de usuário `username`.
- `/reset-password/token=:token`: Rota para redefinir a senha com um token específico.
- `/teste/:a`: Rota para testar a criação de um novo portfólio com um parâmetro dinâmico `a`.

## Estrutura do Projeto

- **index.js**: Arquivo principal que define as rotas do aplicativo.
- **Personalizar**: Componente para a página de personalização.
- **AdminPage**: Componente para a página de administração.
- **Abs**: Componente para a página Abs.
- **Post**: Componente para visualizar postagens.
- **Portfolio**: Componente para visualizar portfólios.
- **ResetPassword**: Componente para redefinir a senha.
- **NewPortfolio**: Componente para testar a criação de um novo portfólio.

## Como Executar

1. Clone o repositório:
    ```bash
    git clone https://github.com/jonathan-julio/web-I-terceira-unidade.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd seu-repositorio
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Inicie o aplicativo:
    ```bash
    npm start
    ```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.