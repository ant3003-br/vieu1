# 🏛️ Vitor Eustáquio Advocacia - Site Profissional

Site profissional para **Vitor Eustáquio Advocacia**, desenvolvido com Next.js 14, TypeScript, Tailwind CSS e integrações modernas.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** (App Router) - Framework React com renderização híbrida
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações fluidas
- **React Hook Form** - Formulários com validação
- **Sanity.io** - CMS headless (gerenciamento de conteúdo)
- **Builder.io** - Edição visual de páginas
- **Backblaze B2 + Cloudflare** - Armazenamento e entrega de imagens

## 📁 Estrutura do Projeto

```
site-advocacia/
├── public/
│   ├── hero/pc/           # Slides do Hero (Desktop - 1920x1080)
│   ├── hero/mobile/       # Slides do Hero (Mobile - 768x1024)
│   ├── portfolio/         # Imagens do portfólio por categoria
│   ├── logo.svg           # Logotipo (60x60)
│   └── favicon.ico        # Favicon
├── src/
│   ├── app/               # Páginas (App Router)
│   │   ├── layout.tsx     # Layout principal com Menu, Footer
│   │   ├── page.tsx       # Home com Hero Slider
│   │   ├── sobre/         # Biografia do advogado
│   │   ├── servicos/      # Lista e detalhes dos serviços
│   │   ├── portfolio/     # Galeria de casos
│   │   ├── clientes/      # Área do cliente
│   │   └── contato/       # Formulário de contato
│   ├── components/        # Componentes reutilizáveis
│   ├── lib/               # Configurações de integrações
│   └── site.config.ts     # Configuração central do site
├── sanity/                # Configuração do Sanity Studio
├── .env.local.example     # Exemplo de variáveis de ambiente
├── tailwind.config.ts     # Configuração do Tailwind
└── next.config.js         # Configuração do Next.js
```

## 🛠️ Como Configurar o Ambiente

### 1. Instalar Node.js

Baixe e instale o Node.js 18+ (recomendado: 20 LTS):
- https://nodejs.org/

Verifique a instalação:
```bash
node --version
npm --version
```

### 2. Instalar Dependências

```bash
cd site-advocacia
npm install
```

### 3. Configurar Variáveis de Ambiente

Copie `.env.local.example` para `.env.local`:

```bash
cp .env.local.example .env.local
```

Preencha com suas credenciais reais.

### 4. Rodar em Desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:3000

### 5. Build de Produção

```bash
npm run build
npm start
```

## 🎨 Personalização

### Cores e Estilos

Edite `tailwind.config.ts` para alterar as cores principais:
- `primary` - Cor primária (botões, links)
- `secondary` - Cor secundária (fundos escuros)
- `accent` - Cor de destaque (CTAs, elementos especiais)

### Conteúdo do Site

Edite `src/site.config.ts` para alterar:
- Nome do escritório, slogan, localização
- WhatsApp, email, telefone
- Redes sociais
- Especialidades
- Horário de funcionamento

### Imagens

| Tipo | Dimensão | Formato | Localização |
|------|----------|---------|-------------|
| Hero Desktop | 1920x1080px | .jpg/.webp | `/public/hero/pc/` |
| Hero Mobile | 768x1024px | .jpg/.webp | `/public/hero/mobile/` |
| Capa de Serviço | 1200x800px | .jpg/.webp | `/public/portfolio/[categoria]/` |
| Fotos Galeria | 1600x1200px | .jpg/.webp | `/public/portfolio/[categoria]/` |
| Logotipo | 60x60px | .svg | `/public/logo.svg` |

Nomeie as imagens como: `slide1.jpg`, `slide2.jpg`, `slide3.jpg` para o Hero.
Para galerias: `galeria-1.jpg`, `galeria-2.jpg`, etc.

## ☁️ Deploy na Vercel

### 1. Criar Conta no GitHub

- Acesse https://github.com
- Crie uma conta
- Crie um repositório para o projeto

### 2. Enviar Código para o GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/site-advocacia.git
git push -u origin main
```

### 3. Criar Conta na Vercel

- Acesse https://vercel.com
- Faça login com o GitHub
- Clique em "Add New" > "Project"
- Importe o repositório `site-advocacia`
- Adicione as variáveis de ambiente
- Clique em "Deploy"

### 4. Configurar Domínio

- No painel da Vercel, vá em "Project" > "Settings" > "Domains"
- Adicione seu domínio (ex: www.seusite.com.br)
- Siga as instruções de DNS

## 🌐 Configurar Domínio no Registro.br

1. Acesse https://registro.br e faça login
2. Vá em "Meus Domínios" > selecione seu domínio
3. Vá em "DNS" > "Editar Zona"
4. Adicione os registros fornecidos pela Vercel:
   - Tipo: CNAME, Nome: www, Valor: cname.vercel-dns.com

## ☁️ Configurar Cloudflare

1. Crie conta em https://cloudflare.com
2. Adicione seu domínio
3. Atualize os nameservers no Registro.br pelos fornecidos pelo Cloudflare
4. Configure SSL/TLS como "Full (strict)"

## 📦 Configurar Backblaze B2

1. Crie conta em https://backblaze.com
2. Vá em "B2 Cloud Storage" > "Create a Bucket"
   - Nome: `site-advocacia-imagens`
   - Tipo: "Public"
3. Vá em "App Keys" > "Generate New Key"
   - Salve o `applicationKeyId` e `applicationKey`
4. No Cloudflare, vá em "Rules" > "Transform Rules"
   - Crie regra para reescrever URLs de imagens
5. Configure as variáveis no `.env.local`:
   ```
   NEXT_PUBLIC_IMAGES_URL=https://imagens.seusite.com.br
   B2_APPLICATION_KEY_ID=seu-key-id
   B2_APPLICATION_KEY=sua-application-key
   B2_BUCKET_NAME=site-advocacia-imagens
   ```

## 📝 Sanity.io (Gerenciamento de Conteúdo)

### 1. Criar Conta no Sanity

- Acesse https://sanity.io
- Crie um projeto
- Copie o `Project ID`

### 2. Configurar Variáveis

```
NEXT_PUBLIC_SANITY_PROJECT_ID=seu-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=seu-token
```

### 3. Rodar o Sanity Studio Localmente

```bash
cd sanity
npx sanity dev
```

Acesse: http://localhost:3333

### 4. Deploy do Sanity Studio

```bash
npx sanity deploy
```

### 5. Como Usar o Sanity

- **Serviços**: Adicione/edite os serviços jurídicos
- **Galerias**: Gerencie as fotos do portfólio
- **Clientes**: Adicione clientes com senha para área restrita

## 🧩 Builder.io (Edição Visual)

### 1. Criar Conta no Builder.io

- Acesse https://builder.io
- Crie uma conta
- Crie um novo espaço
- Copie a "Public API Key"

### 2. Configurar Variável

```
NEXT_PUBLIC_BUILDER_PUBLIC_KEY=sua-public-key
```

### 3. Modelos de Conteúdo

Crie modelos no Builder.io para:
- `home-page` - Página inicial
- `about-page` - Página sobre
- `text-block` - Blocos de texto institucional

## 📱 Funcionalidades

### Hero Slider
- Efeito Ken Burns com zoom suave
- Troca automática de slides a cada 6s
- Responsivo (detecta mobile < 768px)
- Fallback para desktop se não houver imagens mobile

### Menu Superior
- Transparente no topo, sólido ao scroll
- Logo e nome à esquerda
- Links de navegação centralizados
- Botão CTA do WhatsApp
- Menu hambúrguer no mobile

### Página de Serviços
- Grid com todas as especialidades
- Descrições detalhadas
- Links para páginas individuais
- Botão WhatsApp personalizado por serviço

### Portfólio
- Grid de categorias com capas
- Galeria Masonry responsiva
- Lightbox com zoom e navegação
- Filtro por categoria

### Área do Cliente
- Autenticação por senha
- Download de documentos
- Interface limpa e segura

### Formulário de Contato
- Validação completa
- Honeypot antispam
- Envio via WhatsApp
- Feedback visual de sucesso

### Segurança
- `target="_blank" rel="nofollow noopener"` em links externos
- Proteção XSS/CSRF via Next.js
- Honeypot antispam no formulário
- Área do cliente protegida por senha

### SEO
- Meta tags dinâmicas (título, description, keywords)
- Open Graph (Facebook/WhatsApp preview)
- JSON-LD estruturado
- Sitemap.xml e robots.txt
- Lazy loading de imagens
- Alt text descritivo

### Performance
- Lazy loading de imagens
- Componentes server-side
- Otimização via next/image
- Páginas estáticas (SSG)
- Incremental Static Regeneration (ISR)

## 🔧 Solução de Problemas

### Erro: "Module not found"
```bash
npm install
```

### Erro: "Port 3000 already in use"
```bash
npx next dev -p 3001
```

### Erro de build no Vercel
- Verifique se todas as variáveis de ambiente estão configuradas
- Verifique logs no dashboard da Vercel

### Imagens não carregam
- Verifique se as pastas `/public/hero/pc/` e `/public/hero/mobile/` existem
- Verifique se os nomes dos arquivos seguem o padrão `slide1.jpg`, `slide2.jpg`, etc.

### Formulário não envia
- Verifique se o número de WhatsApp está correto em `site.config.ts`
- Verifique o console do navegador para erros

## 📄 Licença

Todos os direitos reservados - Vitor Eustáquio Advocacia
