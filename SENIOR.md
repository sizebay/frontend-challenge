# Sizebay Frontend Challenge

ℹ️ Desafio para Frontend Senior!

## Sobre

> A Sizebay é uma empresa que conecta conhecimentos de modelagem. No mercado desde 2014, nascemos considerando que poderíamos apenas de fato oferecer um produto inovador se considerássemos unir e oferecer o melhor conhecimento de produto e a mais avançada tecnologia da informação. Com um Provador Virtual que respeita a sua individualidade, Nossas recomendações são transparentes: exibimos as medidas do corpo e permitimos que sejam ajustadas. Consideramos como irá vestir em cada tipo de medida e em todos os tamanhos disponíveis.

## O desafio

A SizeFashion irá apresentar um *highlight* de produtos das suas coleções em um grande evento nacional. Você ficou encarregado de exibir essas coleções num web app, para garantir um acesso prático ao time de customer success, que vai cuidar da apresentação. Por conta da urgência da entrega e levando em consideração o seu nível técnico, a composição da UI ficará sob sua responsabilidade também.

## Recursos

- Dump de produtos para composição do layout (disponível em: https://static.sizebay.technology/assets/storeCollections.json)

Afim de permitir um canvas no desenvolvimento, este projeto não possui um mockup/layout definido. Dito isso, é importante que o seu layout:

- Possua a logomarca da empresa (disponível em: https://store.sizebay.com/cdn/shop/files/Brand_Mark_Tag_Sizebay-REFINED_2x_2_540x.png)
- Siga os padrões de cores que a Sizebay já adota (visualizado em: https://home.sizebay.com/en/)

## Instruções

O teste está disponível tanto para candidatos quanto para quem quer apenas experimentar. As instruções se manterão as mesmas:

- Faça um fork desse projeto
- Ao finalizar, faça um Pull Request e nos avise via e-mail
- Crie sua branch com o prefix `senior` seguindo pelo seu username (e.g `senior/vaporwavie`) para facilitar o nosso lado!
- Aguarde o retorno. A revisão será feita pela nossa equipe. **O pós review é valioso e será considerado!**

## Requisitos e Tecnologias

*PS: usamos `yarn` como padrão na Sizebay!*

### Requisitos
- Deve ser possível filtrar por coleção, com base nas categorias disponíveis
- Deve ser possível pesquisar por N produtos
- Deve ser possível pesquisar por N produtos aplicando um filtro específico
- Ao usuário clicar em um produto em específico, deve ser possível isolar ele numa página, que aproveite melhor deste conteúdo
- Caso o usuário mude de filtro, é esperado que isso seja persistido no browser
- Sua UI precisa ser mobile ready
- Dica: Esperamos uma entrega semelhante ao que é visto na https://store.sizebay.com, permitimos o uso como inspiração, mas busque compor a sua interface livremente, não prendendo sua imaginação apenas àquele escopo.

### Tecnologias
- React
    - API de Hooks
    - Composição com Suspense API e Context API
    - Implementação junto com o Typescript
- TailwindCSS
    - Não utilize flowbite ou bibliotecas que adicionem *muito* boilerplate
- Composição apropriada de file structure (api, components, utils, hooks, etc)
    - Dito isso, garanta que a sua arquitetura do frontend é compreensível, maintainable e de fácil acesso
- Realize testes unitários utilizando Jest + React Testing Library
    - Tenha esses testes unitários sob um comando `yarn test`
- Organize seus commits corretamente, divida em small chunks de push
- Você está livre para construir a aplicação com o método que preferir (menos CRA)
- **Documente corretamente o seu README**: a falta de informação para rodar o projeto e o ambiente será avaliado como um ponto negativo.

## Dúvidas?

Entre em contato com [luiz@sizebay.com](mailto:luiz@sizebay.com) ou [support@sizebay.com](mailto:support@sizebay.com)
