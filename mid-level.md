# Sizebay Frontend Challenge - Nível Pleno

## Sobre a Sizebay

> _A Sizebay é uma empresa que conecta conhecimentos de modelagem. No mercado desde 2014, nascemos considerando que poderíamos apenas de fato oferecer um produto inovador se considerássemos unir e oferecer o melhor conhecimento de produto e a mais avançada tecnologia da informação. Com um Provador Virtual que respeita a sua individualidade, Nossas recomendações são transparentes: exibimos as medidas do corpo e permitimos que sejam ajustadas. Consideramos como irá vestir em cada tipo de medida e em todos os tamanhos disponíveis._

## Objetivo do Teste

Desenvolver uma aplicação de lista de tarefas seguindo o design fornecido, aplicando boas práticas de desenvolvimento frontend, testes unitários e documentação de componentes.

## Escopo do Projeto

O candidato deve implementar uma aplicação web completa que permita ao usuário criar, gerenciar e acompanhar tarefas. A interface deve ser responsiva e seguir fielmente o design proposto.

## Design e Especificações

- Interface UI/UX: https://xd.adobe.com/view/1dd85ae3-466a-46b4-8d38-f1c054d42ef4-488b/
- A implementação deve ser pixel-perfect e totalmente responsiva.

## Requisitos Técnicos Obrigatórios

- React.js (utilizando Hooks e componentes funcionais)
- TypeScript com tipagem adequada
- Tailwind CSS para estilização
- PNPM como gerenciador de pacotes
- Testes unitários com Jest/React Testing Library (cobertura mínima de 70%)
- Documentação dos componentes com Storybook
- Versionamento com Git (commits semânticos)
- Sem erros ou warnings no console/compilação

## Estrutura Esperada

```
src/
  components/          # Componentes React
    ComponentName/
      index.tsx        # Implementação do componente
      ComponentName.test.tsx  # Testes unitários
      ComponentName.stories.tsx  # Documentação Storybook
  contexts/            # Contextos React (se necessário)
  hooks/               # Custom Hooks
  utils/               # Funções utilitárias
  types/               # Definições de tipos
```

## Instruções para Entrega

1. Faça fork do repositório
2. Implemente a solução seguindo os requisitos
3. Configure scripts no package.json:
   - `pnpm install` - Instalar dependências
   - `pnpm start` - Iniciar aplicação
   - `pnpm test` - Executar testes
   - `pnpm storybook` - Iniciar Storybook
4. Envie Pull Request ao repositório original
5. Notifique por e-mail (breno@sizebay.com)

## Critérios de Avaliação

- Implementação completa das funcionalidades
- Qualidade e organização do código
- Estrutura de componentes e reutilização
- Fidelidade ao design fornecido
- Cobertura e qualidade dos testes
- Documentação no Storybook
- Performance e otimizações
- Gerenciamento de estado

## Competências Avaliadas

- Arquitetura frontend
- Componentização e reutilização
- Testes automatizados
- Documentação de código
- Resolução de problemas
- Domínio de React e seu ecossistema
- Atenção a detalhes visuais e de UX

## Deployment

- A aplicação deve ser deployada na Vercel, Netlify ou outra plataforma de sua preferência
- Inclua o link da aplicação em produção no README do seu projeto
- Garanta que a aplicação esteja funcional no ambiente de produção