# O projeto

Esse projeto foi desenvolvido durante a Maratona Dev da [Rocketseat](https://rocketseat.com.br/) e consiste em uma landing page de cadastro para doação de Sangue.

Os dados submetidos pelo formulário são salvos em um banco de dados e mostrados na página atraves da sessão "Ultimos Doadores". A cada novo cadastro a página é recarregada e assim os dados são atualizados.

<br>

## Tecnologias

### Front-End

- HTML
- CSS
- Javascript

### Back-End

- Node.js

  - Express (Para servidor)
  - Nodemon (Para reload automático do servidor)
  - Nunjucks (Template Engine)
  - Pg (Postgres)

- Banco de dados
  - PostgresSQL
  - PostBird

<br>

## Considerações

Como faço parte da turma do [LauchBase da Rocketseat](https://rocketseat.com.br/launchbase) já vi um pouco dessas tecnologias, principalmente de Front-End, por isso tomei como desafio fazer todo a parte de Front-end sem qualquer tipo de consulta aos vídeos da maratona, e para o back-end, assisti o vídeo e fiz algumas anotações a respeito de conceitos, porém sem anotar linhas de código. Após terminar de assistir, comecei a programar e me forcei a pesquisar por soluções para os problemas que esbarrei em vez de consultar os vídeos.

Todo esse desafio extra me trouxe muito mais segurança para resolver dificuldades.

### O que aprendi

- Fazer melhores pesquisas
- Trabalhar com animação CSS
- Trabalhar com formulários
- Ter mais confiança para mexer com Node.js e seus pacotes
- Trabalhar com sistemas como PostgreSQL e Postbird
- Trabalhar com Template Engines
- Persistir dados em banco de dados
- Mais desenvoltura ao usar Git
- Como funciona a criação de uma aplicação de ponta a ponta

<br>

### O que pode ser melhorado

Opções que pensei e pretendo implementar por conta própria eventualmente.

- [ ] Deixar as opções de sangue em um checkbox (hoje o usuário escreve o tipo).
- [ ] Mostrar de forma visual para o usuário que o cadastro foi bem sucedido.
  - Por Exemplo deixar o formulário verde com uma mensagem de "Cadastro bem sucedido"
- [ ] Criar uma página com todos os doadores cadastrados.
- [ ] Limitar o número de doadores mostrados na tela inicial, deixando o mais recente primeiro.
