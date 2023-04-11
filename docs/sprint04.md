# SPRINT #04

## Data de início -> 03/04/2023
## Data da entrega -> 11/04/2023


Finalizar o ambiente da ORG, criando a página de PetCreate, e assim termos nossa aplicação completa.

Para essa página, só será permitido o acesso da ORG caso a mesma tenha realizado login na aplicação. Outro detalhe em relação ao login/sessão da ORG na aplicação é que possuímos uma estratégia de refresh token no back-end, então em caso da ORG ter sua sessão encerrada/expirada precisamos adicionar essa estratégia no front-end também.

Para o cadastro do Pet alguns pontos são bem importantes de se atentar, são eles:

* Todos os campos são obrigatórios;
* Temos um campo onde será possível adicionar uma galeria de fotos para o Pet, precisamos informar no mínimo 1 foto e no máximo 6.
* Temos também um campo informando os requisitos para adoção do Pet e é muito importante se atentar na documentação para o preenchimento desse campo na Doc da API.
* Para proporcionar a melhor experiência para quem está utilizando, sempre precisamos ter feedbacks visuais indicando sucesso e erro.

Link do Figma (#SPRINT 4): 
https://www.figma.com/community/file/1220006040435238030

Documentação de rotas da api: 
https://www.notion.so/API-FindAFriend-c9275383751f463b8a43137eed9087e8