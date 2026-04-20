# 33 Tabaco — Guia do Projeto

## O Negócio

**33 Tabaco** é uma empresa de Bebedouro/SP especializada em fumo desfiado a granel e palheiros artesanais. O diferencial é o blend exclusivo de **cordas mineiras** — fumo de corda do interior de Minas Gerais, tratado artesanalmente, com corpo encorpado e suavidade no trago.

**Contatos:**
- WhatsApp: (17) 98108-5993 → `https://wa.me/5517981085993`
- Email: leonardo@33tabaco.com.br
- Site: https://33tabaco.com.br

**Duas audiências distintas — tratar sempre separado:**
- **Produtores** → compram fumo desfiado a granel para fabricar seus próprios palheiros. Interesse em rendimento por kg (~1.200 palheiros/kg), consistência de lote, tratamento, blend e consultoria.
- **Estabelecimentos** → bares, padarias, tabacarias que compram palheiros prontos para revenda. Interesse em entrega direta, sem consignação, blends exclusivos, pedido mínimo acessível.

**Produtos:**
- Fumo desfiado a granel (para produtores)
- Palheiro Artesanal (pronto para revenda)
- Mestre do Fumo (blend exclusivo da casa)
- ⚠️ **Arapiraca D'Corda está temporariamente fora** — não mencionar em nenhum conteúdo novo

**Restrição importante:** tabaco e fumo não podem ter tráfego pago (Google Ads, Meta Ads estão bloqueados). Todo o crescimento é por SEO orgânico.

---

## O Site

**Tecnologia:** HTML puro. Sem frameworks, sem CMS, sem build. Editar diretamente os arquivos `.html`.

**Hospedagem:** GitHub Pages → qualquer push para `main` publica automaticamente.

**Repositório:** https://github.com/leonardobatistamarqs-ai/33TABACO

**Estrutura de arquivos:**
```
index.html               → Página inicial (as duas audiências)
produtores.html          → Página dedicada a produtores
estabelecimentos.html    → Página dedicada a estabelecimentos
blog/
  index.html             → Índice do blog
  tratamento-do-fumo.html
  palheiro-artesanal-vs-industrial.html
  o-que-e-fumo-desfiado.html
  fumo-de-corda.html
  como-fazer-palheiro-artesanal.html
sitemap.xml              → Atualizar sempre que criar nova página
robots.txt
404.html
```

**Imagens disponíveis:**
- `fumo-capa.jpeg` → hero/capa usada em todas as páginas
- `logo-aguia.jpeg` → logo da empresa
- `foto-fardos.jpeg` → fardos de fumo
- `foto-saquinho-1.jpeg`, `foto-saquinho-2.jpeg`, `foto-saquinho-3.jpeg` → produtos
- `trato-detalhe.jpeg` → processo de tratamento

---

## Estilo Visual

**Paleta:**
- Fundo escuro: `#1a1510`
- Fundo header/footer: `#0d0a08`
- Dourado principal: `#d4af37`
- Texto principal: `#e4dccf`
- Texto secundário: `#c9bfb0`, `#d4d0c8`
- Cards: `#2c241c`

**Tipografia:** Georgia, serif

**Tom de voz:** Direto, técnico, respeitoso com o produto. Sem exagero. Sem elogios vazios. O texto da 33 Tabaco fala como quem conhece o produto de dentro — não como marketing, mas como quem domina o processo.

---

## O que já foi feito (SEO e técnico)

- [x] Google Analytics (ID: `G-NL8K7CLK79`) em todas as páginas
- [x] Google Meu Negócio cadastrado e verificado
- [x] Google Search Console configurado + sitemap enviado
- [x] `sitemap.xml` com todas as URLs
- [x] `robots.txt` apontando para o sitemap
- [x] Schema.org `LocalBusiness` nas 3 páginas principais
- [x] Schema.org `FAQPage` em `produtores.html` e `estabelecimentos.html`
- [x] Schema.org `Article` + `BreadcrumbList` nos 5 artigos do blog
- [x] `og:image`, `og:title`, `og:description`, `twitter:card` em todas as páginas
- [x] Links internos: seção "Leia Também" nos artigos + destaque do blog na home
- [x] Botão WhatsApp flutuante em todas as páginas
- [x] Email `leonardo@33tabaco.com.br` no rodapé de todas as páginas
- [x] `loading="lazy"` nas imagens de produto
- [x] Página `404.html` personalizada

---

## Como Criar um Novo Artigo de Blog

### Checklist obrigatório para cada novo artigo:

1. **Arquivo:** `blog/nome-do-artigo.html` (URL amigável, sem acento, hífen entre palavras)
2. **Copiar a estrutura** de um artigo existente (ex: `fumo-de-corda.html`)
3. **Atualizar no `<head>`:**
   - `<title>` com palavra-chave principal
   - `<meta name="description">` (150-160 caracteres com a palavra-chave)
   - `<meta name="keywords">`
   - `<link rel="canonical">` com a URL completa
   - `og:title`, `og:description`, `og:url`
   - `og:image` → sempre `https://33tabaco.com.br/fumo-capa.jpeg`
   - Schema `Article` com `headline`, `description`, `datePublished`
   - Schema `BreadcrumbList` com os 3 níveis: Início → Blog → Artigo
4. **Estrutura do corpo:**
   - `.hero-article` com `.hero-tag`, `<h1>`, `.meta`
   - Seções com `<h2>` + parágrafos
   - Pelo menos 1 bloco `.destaque` com citação em itálico
   - Seção **"Leia Também"** com links para 3 artigos relacionados (antes do CTA)
   - Seção `.cta-section` com botão WhatsApp no final
5. **Rodapé:** copiar o rodapé padrão com WhatsApp + email + link voltar ao início
6. **Botão flutuante WhatsApp:** copiar o `<a>` fixo antes do `</body>`
7. **Adicionar ao `blog/index.html`:** novo card no topo da lista
8. **Adicionar ao `sitemap.xml`:** nova `<url>` com `lastmod` atualizado
9. **Atualizar `index.html`:** se for destaque na home, substituir um dos 2 cards atuais
10. **Commit e push**

### Estilo dos artigos:

- **Tom:** técnico mas acessível. Fala para quem já sabe alguma coisa do assunto, não para iniciante absoluto.
- **Sem rodeios:** começa direto no assunto. Nada de "Você já se perguntou...".
- **Blocos `.destaque`:** use para sintetizar o ponto central de uma seção. Sempre em itálico, entre aspas.
- **Parágrafos curtos:** máximo 4-5 linhas. Respira bem na tela escura.
- **`<strong>`** em amarelo para destacar termos técnicos ou conceitos-chave — use com moderação.
- **Cada artigo deve converter:** o CTA final sempre leva para o WhatsApp. O texto do CTA deve ser específico para o tema do artigo (não genérico).
- **"Leia Também":** linkar sempre para artigos complementares, não concorrentes do mesmo tema.

### Temas sugeridos para próximos artigos:
- "Como calcular o rendimento do fumo desfiado por kg"
- "Palha de milho para palheiro: como escolher e armazenar"
- "Fumo saquinho: o que é e como vender no seu estabelecimento"
- "Palheiro artesanal atacado: como comprar direto do fabricante"
- "Umidade do fumo: por que ela define tudo no palheiro"
- "Como montar uma linha de palheiros artesanais do zero"
- "Diferença entre fumo de corda mineiro e baiano"

---

## Instruções Gerais

- **Sempre fazer commit e push** após qualquer alteração
- **Nunca mencionar Arapiraca D'Corda** até nova instrução
- **Não inventar dados** sobre a empresa (rendimento, preços, volumes) — usar só o que está nos arquivos existentes
- **Manter o sitemap atualizado** sempre que criar ou remover páginas
- **Google Analytics** já está em todas as páginas — não esquecer em páginas novas
