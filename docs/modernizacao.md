# Modernização Hivetron — 31/10/2026

## Decisão e escopo

Modernizar a apresentação institucional mantendo preto, amarelo, hexágonos,
abelhas e linguagem próxima. Continuar com Next.js Pages Router, JavaScript,
styled-components e exportação estática. Não há servidor de aplicação ou coleta
de dados de visitantes.

O conteúdo agora prioriza ERP/PCP e aplicações web/desktop, sem limitar os
serviços a esses segmentos. Serviços antes apresentados em carrossel passam a
cards; a animação permanece em entradas, interações e na ilustração da abertura.
O Ant Design e bibliotecas de animação sem consumidores foram removidos.

## Preservação e backup temporário

Cópia anterior às alterações:
`.backups/hivetron-before-redesign-20261031-110215.zip`.

Inclui fontes, configurações, imagens, README, AGENTS.md e o banner local não
rastreado. Dependências instaladas, Git e saídas geradas foram excluídos. O ZIP
fica fora do conteúdo público, do Git e do contexto Docker. Não remover até o
usuário encerrar a necessidade de recuperação.

Conferência: todos os 60 caminhos originalmente rastreados estão no ZIP.
SHA-256: `CD815BA4D1BBA9711ECF621C1A42725AFA13C0E282A29D60B2A3E17FB853B664`.

Para consultar/restaurar, extrair o ZIP em uma pasta separada e comparar os
arquivos necessários. Não sobrescrever o projeto inteiro nem apagar trabalho
posterior automaticamente. Reinstalar dependências a partir do lockfile ao
restaurar código que use a stack anterior.

IDs de navegação, contatos e redes sociais foram preservados. O banner
`public/bannerMedalHive.jpg`, já presente e não rastreado, foi preservado sem ser
usado na interface. As imagens antigas da pasta pública foram retiradas; seus
originais permanecem no backup. Os retratos necessários à regeneração estão em
`assets/source/`, fora da entrega pública.

## Conteúdo e confidencialidade

Fontes consultadas em modo de leitura: README e menu do frontend próprio do ERP,
README e manifesto do projeto desktop indicado pelo usuário. Os repositórios
externos não foram modificados nem incorporados.

- **Hivetron ERP:** capacidades gerais de ERP/PCP, estrutura de produtos,
  roteirização e apontamentos; apresentação com dados genéricos.
- **MedalHive:** nome corrigido explicitamente pelo usuário. Não renomeamos o
  repositório de referência. Catálogo,
  toque, administração, estoque e relatórios são apresentados sem prometer
  pagamentos ou acionamento físico reais na demonstração.
- Não foram incluídos nomes de clientes, imagens de sistemas, endpoints,
  registros, números de operação, arquitetura particular ou links para APIs
  internas. Não foram inventados resultados, depoimentos ou métricas comerciais.
- A consulta pública à organização do GitHub não retornou repositórios. Por
  isso, não há afirmações sobre APIs específicas a partir de código não
  verificado. Backend e integrações são tratados como capacidades gerais.

## Arquitetura e comportamento

`pages/index.jsx` compõe as seções e metadados. `src/content/` concentra textos,
produtos, contatos e destinos de navegação. `src/sections/` abriga os recortes da
home. Header, Footer, Brand, Icon e Reveal são componentes compartilhados.
Tokens e elementos de layout ficam em `src/styles/`.

O menu móvel tem botão, estado anunciado, fechamento por Escape, clique externo
e saída do foco. Links internos mantêm navegação nativa; o cabeçalho direciona o
foco para destinos existentes. Os projetos apresentam contexto, desafio e solução
sempre visíveis, também no celular, sem listas de tecnologias ou expansíveis.
O conteúdo destaca levantamento de necessidades, organização de ideias e entrega
de experiência e funcionalidades. A seção geral de tecnologias foi preservada.
A demonstração web do MedalHive foi disponibilizada pelo usuário em
https://medalhivedemo.vercel.app e vinculada no respectivo card, com botão que
abre em nova aba, aviso de dados fictícios/ausência de cobranças e acesso público
demo/demo123. A demonstração do Hivetron ERP também foi vinculada, por indicação
do usuário, em https://hivetron-erpdemo.vercel.app, com orientação para usar dados
fictícios. Não foram presumidas credenciais para o ERP nem adicionadas capturas
de sistemas.
A revisão de teclado e
responsividade no navegador ainda é necessária.

O conteúdo é visível no HTML inicial. Reveal usa IntersectionObserver e Web
Animations como melhoria progressiva, executa uma vez e limpa recursos ao
desmontar. Não mantém seções invisíveis esperando JavaScript. A animação da
abelha dura 4,5 segundos, sem loop; movimento reduzido desativa os efeitos.

## Recursos e desempenho

Inventário anterior: 44,50 MB em `public/`, incluindo arquivos sem uso. Somente
os quatro slides somavam 31,23 MB; a abertura tinha 12.000 × 4.992 pixels.
Esse inventário não equivale a bytes transferidos por visita.

- Abertura, marca, ícones e elementos de colmeia agora são vetoriais ou CSS.
- Os retratos passaram de aproximadamente 3,59 MB para 28.940 bytes combinados,
  em WebP de 320 × 320 pixels. A redução é de aproximadamente 99,2% nos arquivos
  de retrato. Não representa ganho medido no tempo de carregamento da página.
- Fontes variáveis latinas locais: Manrope e Space Grotesk, 46.820 bytes
  combinados, `font-display: swap`, com licenças OFL. Sem Google Fonts/Devicon
  externos na navegação.
- Imagem de compartilhamento institucional: 1.200 × 630, cerca de 28 KB.
  Não contém capturas de sistemas.
- Retirada de 85 pacotes na remoção inicial das dependências sem uso.
  Quantidade de pacotes não mede o tamanho final do JavaScript entregue.

Não foi feita medição de Core Web Vitals, Lighthouse ou transferência de rede.
O usuário limitou o uso do navegador e exige permissão para acessá-lo. Avaliação
visual, fluidez, foco e interações no navegador permanecem pendentes.

No artefato inicial da modernização, os scripts referenciados pelo HTML somavam 428.254 bytes,
ou 134.695 bytes com gzip calculado localmente. Retratos e fontes somam
75.760 bytes. A pasta pública completa soma 165.483 bytes, incluindo licenças,
favicon, imagem social e o banner preservado do usuário. São inventários de
arquivos, não medições de uma visita nem comparação de velocidade com o site
anterior. Para repetir o inventário: `node scripts/measure-export.cjs`.

## Operação e verificações

### Dependências

Next.js e eslint-config-next foram atualizados de 16.0.1 para 16.4.3, mantendo a
linha principal e o Pages Router. A árvore compatível também foi atualizada,
incluindo styled-components 6.6.0. O lockfile registra as versões efetivas.
A revisão foi motivada pelo relatório do npm e pela
[atualização oficial de segurança do Next.js](https://nextjs.org/blog/nextjs-security-update-october-14-2026).

Após as correções, `npm audit --omit=dev --json` retornou zero vulnerabilidades.
A auditoria completa ainda sinaliza 16 avisos moderados na cadeia de lint,
originados no minimatch. Não foi usado `--force`: a correção automática sugeria
alteração incompatível do ESLint. Esses avisos de ferramentas não equivalem a
uma vulnerabilidade comprovada na página estática e permanecem registrados para
acompanhamento. A auditoria é um retrato da data, não garantia de segurança.

### Entrega estática

O README descreve os comandos. O build gera `out/`. `npm start` agora inicia uma
prévia local estática, em vez de `next start`, incompatível com o modo exportado.
Docker usa lockfile, Node 22 e Nginx com 404 real e cache de assets versionados.
Nenhuma publicação é realizada automaticamente.

A suíte de exportação verifica âncoras, recursos locais, fontes, metadados,
ausência de marcadores do cliente/placeholders, detalhes dos dois produtos e
o servidor de prévia (200, 404, método e limite da pasta pública). Ela não
substitui testes de interação, auditoria de acessibilidade ou revisão humana de
sigilo. Lint e build também não comprovam esses comportamentos.

Verificações concluídas nesta etapa:

- `npm run format:check` e verificação de formatação do AGENTS.md: aprovadas.
- `npm run lint`: aprovado.
- `npm run build`, com Next.js 16.4.3: aprovado; rota inicial e 404 exportadas.
- `npm test`: seis testes aprovados sobre o artefato final.
- `git diff --check`: sem erros de whitespace.
- `npm audit --omit=dev --json`: zero vulnerabilidades na consulta realizada.
- Inventário de imagens exportadas: somente retratos, arte institucional e o
  banner preexistente do usuário; sem imagens antigas de projetos.

Container Docker, navegação real, zoom, leitores de tela e dispositivos móveis
não foram executados nesta etapa. Nenhum deploy foi realizado.
