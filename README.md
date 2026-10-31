# Hivetron Technology

Site institucional da Hivetron: software sob medida, ERP, aplicações web e
desktop e integrações. Next.js Pages Router, React e styled-components, com
exportação estática e recursos visuais locais.

## Desenvolvimento

Use Node.js 22 LTS e npm. As versões efetivas estão no lockfile.

```sh
npm ci
npm run dev
```

O desenvolvimento usa `http://localhost:3000`. Não é necessário configurar
backend, autenticação ou variáveis de ambiente para esta landing page.

## Produção e prévia

```sh
npm run build
npm start
```

O build gera `out/`. A prévia serve essa pasta em `http://127.0.0.1:4173`.
Defina `PORT` para usar outra porta. Ela é uma ferramenta local; em hospedagem,
publique `out/` ou use o container Nginx. Nenhum comando publica automaticamente.

```sh
docker build -t hivetron-site .
docker run --rm -p 8080:80 hivetron-site
```

O container usa Node 22 na compilação, instalação pelo lockfile e Nginx na
entrega. Arquivos inexistentes retornam 404; assets versionados do Next recebem
cache longo. Backups e fontes originais de imagem não entram na imagem Docker.

## Organização

- `pages/`: composição de rota, documento, estilos no servidor e inicialização.
- `src/sections/`: abertura, serviços, projetos, abordagem, equipe, stack e contato.
- `src/components/`: cabeçalho, rodapé, marca, ícones e entrada animada.
- `src/content/`: textos, produtos, equipe, contatos e navegação.
- `src/styles/`: tema, estilos globais e elementos de layout compartilhados.
- `public/`: apenas recursos públicos, fontes licenciadas, sitemap e robots.
- `assets/source/`: retratos originais para gerar versões otimizadas; fora de `out/`.
- `scripts/`: prévia estática, otimização de imagens e obtenção opcional de fontes.
- `tests/`: verificações da exportação e do servidor de prévia.
- `docs/`: decisões e limites da modernização.

O padrão de manutenção está em [AGENTS.md](AGENTS.md). As decisões, fontes de
conteúdo e limitações estão em [docs/modernizacao.md](docs/modernizacao.md).

## Conteúdo e identidade

Edite os dados em `src/content/`. Cor, tipografia e largura de conteúdo ficam em
`src/styles/theme.js`. A página mantém preto, amarelo, hexágonos e linguagem
próxima. Respeita a preferência por movimento reduzido e mantém o conteúdo
visível sem depender da animação de entrada.

Apresentamos Hivetron ERP e MedalHive sem imagens ou dados de clientes.
MedalHive é o nome público solicitado; pagamentos, hardware e sincronização da
versão demonstrativa não são apresentados como integrações reais.

O domínio público atual é definido em `src/content/site.js`. Ao trocar domínio,
atualize também `public/robots.txt` e `public/sitemap.xml`; os testes conferem a
coerência com a URL canônica. Não publicar dados internos em `public/`.

## Recursos visuais

```sh
npm run assets:optimize
```

Regenera os retratos WebP e a imagem institucional de compartilhamento. Utiliza
o Sharp já fornecido pela árvore de dependências do Next registrada no lockfile;
não é uma etapa obrigatória do build. As versões otimizadas são versionadas.
As fotografias originais ficam em `assets/source/`, sem distribuição pelo site.

As fontes WOFF2 são locais e incluem suas licenças OFL em `public/fonts/`.
`scripts/fetch-fonts.ps1` permite baixá-las novamente das fontes oficiais;
exige rede e não é executado durante build ou navegação.

## Qualidade

```sh
npm run format:check
npm run lint
npm run build
npm test
```

`npm test` usa a exportação já construída. Verifica recursos, âncoras, conteúdo,
metadados e isolamento da prévia estática. Não abre navegador.
`npm run format` aplica a formatação aos fontes e documentos de manutenção.

Uma alteração de UI também exige revisão visual, teclado, foco e navegação em
celular e desktop. Nesta modernização, o usuário restringiu o navegador:
solicite permissão antes de acessá-lo. Não declarar interações ou desempenho
aprovados apenas por lint, build ou testes estáticos.

## Recuperação temporária

O código anterior foi preservado em um ZIP dentro de `.backups/`, ignorado pelo
Git e Docker. Consulte o nome e as orientações em `docs/modernizacao.md`.
Não remova esse backup antes de o usuário encerrar a necessidade de recuperação.
