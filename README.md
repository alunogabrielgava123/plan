# Google Docs Fake

Este projeto consiste em uma aplicação web que permite que os usuários criem, editem e compartilhem documentos em tempo real, em um ambiente similar ao do Google Docs. A aplicação foi desenvolvida utilizando Socket.io e MongoDB, e permite que os usuários se comuniquem em tempo real para compartilhar alterações nos documentos.

## Como executar a aplicação

Para executar a aplicação, siga os passos abaixo:

1. Certifique-se de ter o Node.js e o MongoDB instalados na sua máquina.
2. Baixe ou clone o repositório do projeto em sua máquina.
3. Abra um terminal na pasta do projeto.
4. Execute o comando `npm install` para instalar as dependências necessárias.
5. Inicie o servidor do MongoDB com o comando `mongod`.
6. Execute o script de inicialização do servidor com o comando `npm start`.
7. Abra o navegador e acesse o endereço `http://localhost:3000` para acessar a aplicação.

## Funcionamento da aplicação

Ao acessar a aplicação, os usuários podem criar novos documentos ou acessar documentos existentes, que podem ser editados em tempo real por todos os usuários conectados. As alterações realizadas em um documento são imediatamente refletidas nos dispositivos dos outros usuários que estão editando o mesmo documento.

A aplicação foi desenvolvida utilizando o Socket.io para permitir a comunicação em tempo real entre os usuários. O MongoDB foi utilizado para armazenar os documentos criados pelos usuários e as alterações realizadas nos mesmos.

Esperamos que este projeto seja útil e ajude no desenvolvimento de aplicações similares baseadas em Socket.io e MongoDB.

