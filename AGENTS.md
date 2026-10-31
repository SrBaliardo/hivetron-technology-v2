# AGENTS.md — Hivetron Technology

Versão: 1.1 · Atualizado após modernização: 31/10/2026.
Escopo: desenvolvimento, manutenção, refatoração e revisão deste repositório.
Referência conceitual: AGENTS.md de `ReleaseToGit/appWeb_Aurora`, adaptado ao
site institucional Hivetron. As regras específicas da aplicação infantil não
se aplicam aqui.

## 1. Propósito e uso do guia

Manter um site institucional claro, confiável, acessível e fácil de evoluir.
Priorizar organização por responsabilidade, código legível e mudanças
verificáveis. A complexidade da solução deve acompanhar a necessidade real.

- Ler este documento antes de alterar código e verificar instruções locais
  adicionais no caminho dos arquivos envolvidos.
- Instruções do sistema/desenvolvedor e permissões do ambiente prevalecem;
  pedidos explícitos do usuário prevalecem sobre este guia.
- Distinguir comportamento observado, hipótese e proposta. Não afirmar que
  uma funcionalidade foi validada apenas por leitura ou build.
- Este guia estabelece o padrão para a evolução; não declara o legado conforme
  e não autoriza uma reorganização completa por conta própria.
- Atualizar este arquivo quando uma tarefa autorizada mudar decisões descritas
  aqui. Não reescrever regras para justificar um desvio silencioso.

## 2. Mapa real da aplicação

O projeto é uma landing page institucional de software e serviços. Não foram
identificados backend, autenticação, banco de dados ou formulários no código
analisado. O contato ocorre por links de e-mail, telefone e WhatsApp.

| Área                            | Implementação atual                                                              |
| ------------------------------- | -------------------------------------------------------------------------------- |
| Stack declarada                 | Next.js 16.4.3, React 19.2.0, JavaScript/JSX                                     |
| Roteamento                      | Pages Router, com rota principal em `pages/index.jsx`                            |
| Inicialização                   | `pages/_app.js`, estilos globais                                                 |
| Documento e estilos no servidor | `pages/_document.js`, `ServerStyleSheet`                                         |
| UI e estilos                    | styled-components 6, tokens e elementos de layout compartilhados                 |
| Página inicial                  | Abertura, serviços, projetos, abordagem, equipe, tecnologias e contato           |
| Navegação                       | Header responsivo, fonte única de destinos e âncoras nativas                     |
| Interações                      | Menu móvel, entradas e ilustração animadas                                       |
| Conteúdo                        | Arquivos em `src/content/`, sem dados ou imagens de clientes                     |
| Recursos                        | SVG/CSS, retratos WebP e fontes WOFF2 locais com licenças                        |
| Build                           | `output: "export"`, saída estática em `out/`, imagens sem otimização do servidor |
| Container                       | Docker compila com Node e serve `out/` com Nginx                                 |
| Qualidade disponível            | ESLint 9/Next Core Web Vitals, Prettier e node:test sobre exportação             |

Ant Design, Ant Design Icons e React Spring foram retirados após a substituição
dos seus consumidores. Não reintroduzir bibliotecas sem necessidade concreta.
As versões acima são um retrato do manifesto, não uma avaliação de atualização
ou segurança. Confirmar `package.json` e lockfile antes de qualquer migração.

### Contratos atuais a preservar

- IDs: `top`, `about-section`, `services-section`, `devs-section`,
  `techs-section`, `projects-section` e `contact-section`.
- Destinos de contato e redes sociais, identidade da marca, imagens e textos
  publicados, salvo quando sua alteração integrar o pedido.
- Exportação estática, compatibilidade com hospedagem de `out/` e coleta de
  estilos no servidor. Não introduzir necessidade de servidor sem decisão
  explícita sobre implantação.
- APIs dos componentes e formatos dos registros usados por seus consumidores.
  Mapear referências antes de renomear, remover ou mudar estruturas.

## 3. Escopo, integridade e preservação

1. Antes de editar, conferir o estado do repositório e ler os consumidores do
   trecho afetado. Preservar mudanças e arquivos do usuário, inclusive não
   rastreados. Não executar limpeza, reset ou descarte como rotina.
2. Uma análise é de leitura, salvo entregáveis documentais solicitados.
   Uma refatoração preserva comportamento observável; mudança de aparência,
   conteúdo ou fluxo deve corresponder ao objetivo autorizado.
3. Fazer o menor conjunto coerente de alterações. Imports, referências e
   consumidores afetados fazem parte da mesma entrega, mesmo em outros arquivos.
4. Não aproveitar uma correção para migrar roteador, linguagem, biblioteca de
   estilos, infraestrutura ou dependências sem relação com o pedido.
5. Código novo segue este padrão; correções locais não ampliam problemas
   existentes. Refatorações aplicam o padrão ao módulo abrangido, sem exigir
   modernização de todo o repositório.
6. Encerrar cada etapa com imports resolvidos e fluxos conectados. Não deixar
   migração pela metade, implementação vazia ou arquivos sem consumidor.
7. Decisões rotineiras necessárias ao pedido não exigem confirmações repetidas.
   Pedir esclarecimento somente quando faltar informação que altere
   materialmente o resultado. Publicação e ações destrutivas seguem a
   autorização e as permissões aplicáveis.

## 4. Organização e responsabilidades

### Estrutura de evolução

Manter `pages/` na raiz enquanto vigorar o Pages Router. Os diretórios opcionais
abaixo só devem nascer quando houver código real para ocupá-los. A estrutura é
um destino para mudanças autorizadas, não uma ordem para mover o legado agora.

```text
pages/
  _app.js                     # Inicialização e providers realmente globais
  _document.js                # Documento HTML e integração de SSR
  index.jsx                   # Composição da home e metadados da rota
src/
  components/
    Header/                   # Estrutura do site e componentes reutilizados
      index.jsx
      styles.js
  sections/
    Projects/                 # Seção específica da home, quando extraída
      index.jsx
      styles.js
      components/             # Partes exclusivas, se necessárias
      hooks/                  # Interação exclusiva, se necessária
  content/                    # Dados editoriais compartilhados
  hooks/                      # Hooks React reutilizáveis
  utils/                      # Funções genéricas sem React
  styles/
    globalStyles.js
    theme.js                  # Tokens compartilhados, quando introduzidos
public/                       # Recursos estáticos públicos
tests/                        # Testes, quando houver infraestrutura pertinente
docs/                         # Decisões e documentação que excedam o README
```

### Destino de cada responsabilidade

| Responsabilidade                                        | Destino e limite                                                 |
| ------------------------------------------------------- | ---------------------------------------------------------------- |
| Compor seções e definir metadados da rota               | `pages/index.jsx`; não concentrar toda a implementação visual    |
| Seção institucional específica                          | `src/sections/<Nome>/`, quando extraída no escopo                |
| Elemento reutilizável ou estrutura do site              | `src/components/<Nome>/`                                         |
| Estado e eventos exclusivos                             | Componente/seção; extrair hook local quando melhorar a leitura   |
| Hook React reutilizado                                  | `src/hooks/useNome.js`                                           |
| Conteúdo de um único componente                         | Arquivo de dados junto ao proprietário                           |
| Navegação, contatos ou conteúdo com vários consumidores | `src/content/<assunto>.js`, fonte única                          |
| Função genérica sem React                               | `src/utils/<nome>.js`                                            |
| Estilo local                                            | `styles.js` junto ao componente/seção                            |
| Reset, padrões globais e tokens                         | `src/styles/`, sem regras específicas de uma seção               |
| Integração externa futura                               | `src/services/<capacidade>.js`, somente com necessidade concreta |

Não criar contexts, providers, repositories, builders ou fachadas para dados
estáticos e estados locais. Context só se houver compartilhamento real de
estado na árvore. Uma nova integração deve separar transporte, transformação
de dados e apresentação na medida da sua complexidade.

### Dependências e interfaces

- Página compõe seções e componentes; seção pode usar componentes, conteúdo,
  hooks, utilitários e estilos compartilhados.
- Componentes genéricos não conhecem a página ou seus estilos. Funções em
  `utils/` não importam React, componentes, hooks ou páginas.
- Não importar estilos ou detalhes internos de outra seção. Reutilizar por
  composição e interfaces pequenas, com props de significado claro.
- Evitar ciclos. Dentro de `src/components/`, importar o componente necessário
  pelo seu caminho, sem retornar ao agregador `src/components/index.jsx`.
- Não ampliar `export *` indiscriminadamente. Preservar exports consumidos
  até migrar todos os consumidores na mesma etapa.
- O alias `@/` aponta para `src/`. Preferi-lo em imports entre áreas; caminhos
  relativos curtos são adequados dentro de um mesmo módulo.

## 5. Legibilidade, conteúdo e estado

- JSX novo em `.jsx`; módulos sem JSX em `.js`. Os arquivos especiais atuais
  do Next mantêm nomes e extensões até uma mudança justificada.
- Usar nomes que descrevam intenção; componentes em PascalCase, hooks `useX`,
  variáveis/funções em camelCase. Acompanhar o vocabulário inglês já usado no
  código; textos públicos em português do Brasil.
- Manter 2 espaços, aspas duplas e ponto e vírgula em JavaScript, UTF-8 e
  preferência por LF. Não reformatar arquivos alheios à tarefa.
- Funções e componentes têm uma responsabilidade compreensível. Extrair por
  coesão, repetição ou complexidade; não criar um arquivo por atributo nem
  abstrações sem uso real. Comentários explicam decisões, não repetem o código.
- Dados editoriais devem ser objetos/arrays legíveis, com IDs estáveis e campos
  consistentes. Evitar JSX em arquivos de dados; apresentação fica na UI.
- Navegações desktop/mobile devem consumir a mesma fonte de IDs e destinos.
  Contatos usados em mais de uma área devem ter uma fonte única.
- Não publicar projetos fictícios, links de exemplo, métricas, depoimentos ou
  capacidades sem confirmação. Não inventar conteúdo para preencher layout.
- Estado deve ficar perto de quem o utiliza. Derivar valores calculáveis, usar
  chaves estáveis em listas e evitar cópias desnecessárias dos mesmos dados.
- Tratar coleção vazia e item selecionado indisponível quando forem estados
  possíveis; dados estáticos não exigem estados de loading artificiais.

## 6. Estilos, responsividade e identidade

- Usar styled-components e `import * as S from "./styles"`, sem adicionar outro
  sistema visual por conveniência. Reutilizar tokens e elementos de layout.
- Estilos estáticos ficam fora do JSX. Para variação visual, preferir props
  transitórias `$nome`, variantes ou variáveis CSS; não vazar props de estilo
  para o DOM. Estilo inline exige necessidade real de runtime ou de uma API.
- Centralizar cores, espaçamentos e tipografia recorrentes em tokens quando
  houver refatoração visual pertinente. Não criar um tema sem consumidores.
- Preservar a identidade Hivetron nas mudanças estruturais. Redesign deve
  explicitar hierarquia, paleta, tipografia e comportamento responsivo.
- Preferir layout fluido, Grid/Flex e dimensionamento por conteúdo. Evitar
  altura fixa como mecanismo de encaixe de texto, seletores globais amplos,
  `!important` recorrente e correções por deslocamentos arbitrários.
- Breakpoints devem responder ao conteúdo, ter unidades válidas e permanecer
  coerentes entre áreas relacionadas. Conferir celular, tablet e desktop,
  inclusive larguras intermediárias e zoom de texto.
- Não esconder overflow para mascarar conteúdo cortado. Informações e ações
  essenciais devem continuar disponíveis nos layouts menores.

## 7. Acessibilidade e navegação

- Usar landmarks semânticos (`header`, `nav`, `main`, `section`, `footer`), um
  título principal e níveis de heading coerentes. Não escolher heading pelo
  tamanho visual nem aninhar estruturas inválidas dentro dele.
- Navegação usa links com `href`; ação usa `button`. Não substituir controles
  por `div`/`li` clicável sem semântica e suporte equivalente de teclado.
- Manter foco visível. Não remover outline globalmente sem alternativa.
  Controles com ícones precisam de nome acessível e área de toque adequada,
  preferencialmente de pelo menos 44 × 44 px.
- Menus expansíveis devem informar `aria-expanded`/`aria-controls`, ter botão
  identificado e fechamento/foco previsíveis por teclado, incluindo Escape.
- Projetos selecionáveis precisam de ativação por teclado e indicação da
  seleção; o layout móvel deve permitir acesso ao conteúdo essencial.
- Imagens informativas têm `alt` útil; decorativas usam `alt=""`. Não depender
  apenas de cor, hover ou animação para comunicar informação.
- Respeitar `prefers-reduced-motion`. Carrossel automático deve permitir pausa
  e controle acessível; animação de entrada não pode ser requisito para ler
  conteúdo institucional se JavaScript ou o observer falharem.
- IDs de seção devem ser únicos. Ao melhorar a rolagem, considerar foco,
  movimento reduzido e elementos fixos que possam cobrir o destino.

## 8. Next.js, entrega estática e performance

- Preservar Pages Router e exportação estática até uma migração solicitada.
  Não introduzir API Routes, Server Actions, `getServerSideProps` ou recursos
  que exijam servidor na hospedagem atual.
- `window`, `document`, observers e storage só em contexto de navegador
  apropriado; não acessá-los no topo do módulo ou durante renderização no
  servidor. Evitar HTML inicial divergente entre servidor e cliente.
- `ssr: false` precisa de motivo técnico; não usar para esconder erro de
  hidratação. Preservar a coleta/liberação de `ServerStyleSheet` em `_document`.
- Hooks devem declarar dependências corretas e limpar observers, listeners e
  timers. Tratar cancelamento e respostas fora de ordem em futuras operações
  assíncronas quando aplicável.
- Usar imagens com dimensões/proporção previsíveis e tamanho adequado. Avaliar
  `next/image` considerando a exportação estática e a configuração vigente;
  não depender do otimizador de imagens de um servidor ausente.
- Evitar carregar bibliotecas, fontes e imagens sem necessidade. Não adicionar
  memoização ou import dinâmico sem um problema ou benefício identificável.
- Metadados da rota ficam em `next/head`; idioma e estrutura do documento
  ficam em `_document`. Revisões de SEO devem avaliar título, descrição,
  compartilhamento social, favicon e URL canônica com domínio confirmado.
- Não afirmar SEO ou performance aprovados sem medir os critérios relevantes.

## 9. Segurança, dependências e implantação

- Todo recurso em `public/` é público. Não incluir credenciais, dados privados
  de clientes, tokens ou arquivos internos. Variáveis `NEXT_PUBLIC_*` também
  são públicas; segredos não pertencem ao bundle ou aos logs.
- Não injetar HTML não confiável. Links externos devem ter destinos válidos;
  para nova aba, usar proteção apropriada, em geral `rel="noopener noreferrer"`.
- Preservar `package-lock.json` e atualizá-lo junto ao manifesto quando houver
  mudança de dependência. Preferir `npm ci` em instalação reproduzível/CI.
- Não instalar biblioteca para resolver algo já atendido pela stack ou por
  código pequeno e legível. Mudanças relevantes de stack exigem decisão no
  escopo; verificar compatibilidade e documentação oficial ao fazê-las.
- Não tratar pacote declarado como vulnerável ou seguro por suposição. Uma
  avaliação de dependências deve registrar versão e evidência verificável.
- Dependências externas de fonte/ícones devem ter finalidade e falha tolerável;
  ao revisá-las, avaliar versões fixas, fallback e custo de rede.
- O artefato de produção atual é `out/`. `npm start` serve uma prévia local
  dessa pasta; produção usa hospedagem estática ou Nginx. Conferir configuração,
  404, cache e rotas ao alterar Docker ou implantação.
- Não publicar, enviar mensagens ou ativar serviços externos apenas por fazer
  parte de uma melhoria local. Seguir o escopo autorizado pelo usuário.

## 10. Fluxo de trabalho e validação

Antes de implementar, resumir objetivo, áreas afetadas, comportamento a
preservar e validação pertinente. Ao criar/mover código, explicitar o mapa
responsabilidade → destino apenas na medida necessária para entender a mudança.

### Comandos existentes

| Comando                         | Finalidade e limite                                                   |
| ------------------------------- | --------------------------------------------------------------------- |
| `npm run dev`                   | Ambiente local de desenvolvimento                                     |
| `npm run lint`                  | ESLint do projeto; não comprova comportamento no navegador            |
| `npm run build`                 | Build Next e geração de `out/`; pode depender de recursos do ambiente |
| `npm start` / `npm run preview` | Prévia de `out/` em 127.0.0.1:4173, após build                        |
| `npm run format:check`          | Verificação de formatação; `npm run format` aplica                    |
| `npm test`                      | Testes de exportação e prévia local, exigem build atualizado          |
| `npm run assets:optimize`       | Regenera recursos de imagem locais                                    |

Não há script de checagem de tipos: a aplicação usa JavaScript. Não relatar
comandos ou verificações como executados sem evidência.

O usuário restringiu o acesso ao navegador: usar somente em extrema necessidade
e com permissão. Até obtê-la, validar por fontes, lint, build e testes locais,
declarando a pendência de revisão visual e das interações.

- Documentação isolada: revisar conteúdo, caminhos, comandos e diff. Não
  executar build ou instalar ferramentas apenas por mudar Markdown.
- Código/configuração: executar lint pertinente e build de produção. Revisar
  o diff e usar `git diff --check` quando o Git estiver disponível.
- Interface/interação: verificar a jornada alterada no navegador, em tamanhos
  relevantes, incluindo teclado, foco, menus, seleção de projeto, carrossel,
  âncoras e contatos conforme a área afetada. Build não substitui essa etapa.
- Testes automatizados devem proteger comportamento ou regressão importante.
  Não criar testes que apenas reproduzem a implementação ou uma suíte para
  toda alteração visual pequena. Escolher a menor proteção útil.
- Ausência de infraestrutura de teste não autoriza afirmar cobertura. Introduzi-la
  quando fizer parte da necessidade da tarefa, com custo/dependências claros.
- Falha deve ser diagnosticada antes de corrigir. Não desabilitar regras,
  ignorar erros ou alterar expectativas só para obter aprovação.
- Distinguir falha preexistente, regressão e limitação ambiental. Respeitar
  dispensa explícita de validação e informar o que não foi executado.
- Verificações proporcionais integram a implementação autorizada. Não pedir
  nova confirmação para cada comando rotineiro; permissões do ambiente e
  ações externas continuam valendo.

### Entrega e revisão

Informar resultado, arquivos principais, decisões, verificações executadas e
limitações reais. Em review, apresentar achados por impacto com arquivo/linha,
evidência e correção esperada. Hipóteses devem aparecer como pontos a verificar.
Não usar percentuais arbitrários de qualidade nem declarar conformidade global
a partir de uma revisão localizada.

Decisões duradouras que mudem stack, roteamento, publicação ou fronteiras devem
ser registradas no README ou, quando merecerem histórico próprio, em
`docs/decisoes/`: contexto, decisão, alternativas, impacto e migração.

## 11. Decisões da modernização e pendências

- Layout e organização atualizados por pedido explícito do usuário. Serviços em
  cards; menu unificado; projetos próprios com conteúdo sempre visível; contatos e IDs
  preservados. Histórico e fontes em [docs/modernizacao.md](docs/modernizacao.md).
- Hivetron ERP e MedalHive são os únicos produtos apresentados. Não publicar
  nomes, imagens, contratos, endpoints, registros ou detalhes internos de clientes.
  MedalHive é a grafia corrigida pelo usuário, independentemente de nomes
  antigos em documentação externa. Distinguir simulações de integrações reais.
- Cards de projetos apresentam contexto, desafio e solução, sem lista de stack
  nem expansível. Destacar levantamento de necessidades e entrega funcional;
  tecnologias gerais ficam na seção própria. Hivetron ERP e MedalHive têm links
  públicos de demo autorizados pelo usuário, com orientações de dados fictícios.
  Exibir credenciais demonstrativas somente quando confirmadas; MedalHive usa
  demo/demo123. Não presumir o mesmo acesso no ERP.
  Não adicionar outras demonstrações ou publicar projetos sem pedido específico.
- Conteúdo visível antes da animação; Reveal progressivo, executado uma vez.
  Animação da abelha finita, sem loop. Respeitar movimento reduzido.
- Fontes locais com licença. Originais dos retratos em `assets/source/`, fora de
  `out/`. Imagens antigas de sistemas retiradas da pasta pública.
- Backup temporário em `.backups/`, ignorado por Git/Docker; não apagar antes de
  o usuário encerrar a necessidade de recuperação. Servir somente `out/` como
  raiz HTTP, nunca a pasta inteira do projeto.
- Revisão visual responsiva, teclado/foco e desempenho no navegador permanecem
  pendentes da permissão específica do usuário. Testes de exportação não
  substituem essa avaliação nem uma revisão humana de confidencialidade.
- Não afirmar que APIs externas foram verificadas quando sua consulta pública
  não retornou conteúdo. Não modificar os projetos de referência.
