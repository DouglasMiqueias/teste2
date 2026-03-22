# Cervo Films - Site Institucional Premium

Um site institucional minimalista e cinematográfico para a produtora audiovisual Cervo Films.

## 🎯 Objetivo

Transmitir profissionalismo, elegância, criatividade e alta qualidade para produtores de eventos, empresários e empresas com alto nível de exigência.

## 🚀 Características

- **Design Minimalista**: Estética inspirada em sand.black com fundo escuro
- **Cinematográfico**: Hero section com vídeo em loop
- **Responsivo**: Adaptado para todos dispositivos
- **Performance**: Otimizado para carregamento rápido
- **Acessível**: Semântica HTML5 e navegação por teclado

## 📁 Estrutura do Projeto

```
PrjCervoFilms/
├── index.html          # Estrutura principal do site
├── styles.css          # Estilos e design responsivo
├── script.js           # Animações e interatividade
├── assets/             # Pasta para mídias
│   ├── hero-video.mp4  # Vídeo do hero (placeholder)
│   ├── portfolio1.mp4  # Vídeo portfólio 1 (placeholder)
│   ├── portfolio2.mp4  # Vídeo portfólio 2 (placeholder)
│   ├── portfolio3.mp4  # Vídeo portfólio 3 (placeholder)
│   ├── portfolio1.jpg  # Imagem portfólio 1 (placeholder)
│   ├── portfolio2.jpg  # Imagem portfólio 2 (placeholder)
│   └── portfolio3.jpg  # Imagem portfólio 3 (placeholder)
└── README.md           # Este arquivo
```

## 🎬 Mídias Necessárias

### Vídeos (Formato MP4, Otimizados para Web)

1. **hero-video.mp4** - Vídeo cinematográfico em loop (15-30 segundos)
   - Dimensão: 1920x1080
   - Duração: 15-30 segundos em loop
   - Estilo: Cinematográfico, eventos premium

2. **portfolio1.mp4** - Evento Corporativo
   - Dimensão: 1920x1080
   - Duração: 10-15 segundos
   - Conteúdo: Real Time + After Movie

3. **portfolio2.mp4** - Comercial Premium
   - Dimensão: 1920x1080
   - Duração: 10-15 segundos
   - Conteúdo: Produção Completa

4. **portfolio3.mp4** - Vídeo Institucional
   - Dimensão: 1920x1080
   - Duração: 10-15 segundos
   - Conteúdo: Branding Estratégico

### Imens (Formato JPG, Alta Qualidade)

1. **portfolio1.jpg** - Fotografia Profissional
   - Dimensão: 1920x1080
   - Conteúdo: Ensaios Corporativos

2. **portfolio2.jpg** - Cobertura de Evento
   - Dimensão: 1920x1080
   - Conteúdo: Stories + Conteúdo

3. **portfolio3.jpg** - Produção Audiovisual
   - Dimensão: 1920x1080
   - Conteúdo: Posts + Design

## 🎨 Design System

### Cores
- **Background**: #0a0a0a (Preto profundo)
- **Surface**: #1a1a1a (Cinza escuro)
- **Primary**: #ffffff (Branco)
- **Accent**: #ff6b35 (Laranja vibrante)
- **Text Muted**: #b0b0b0 (Cinza médio)

### Tipografia
- **Fonte Principal**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700, 900

### Espaçamento
- **XS**: 0.5rem
- **SM**: 1rem
- **MD**: 2rem
- **LG**: 3rem
- **XL**: 4rem
- **XXL**: 6rem

## ⚡ Funcionalidades

### Navegação
- Menu responsivo com toggle mobile
- Scroll suave entre seções
- Header com efeito blur ao rolar
- Destaque de seção ativa

### Animações
- Fade-in no scroll
- Parallax no hero
- Hover effects nos cards
- Counter animation para números
- Video play/pause no hover do portfólio

### Interatividade
- Lightbox para portfólio
- Menu mobile animado
- Botão WhatsApp direto
- Form validation (se necessário)

## 🛠 Tecnologias

- **HTML5**: Semântico e acessível
- **CSS3**: Moderno com variáveis customizadas
- **JavaScript ES6+**: Vanilla JS, sem frameworks
- **Google Fonts**: Inter para tipografia

## 📱 Responsividade

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🚀 Otimização

- Lazy loading para imagens
- Throttling em eventos scroll
- Intersection Observer para animações
- Vídeos otimizados para web
- CSS e JS minificados (produção)

## 📞 Contato

Para atualizar as informações de contato:

1. **HTML**: Atualizar footer section
2. **WhatsApp**: Substituir número no CTA final
3. **Email**: Atualizar link no footer

## 🔄 Personalização

### Cores
Editar variáveis CSS em `:root` no arquivo `styles.css`:

```css
:root {
    --color-accent: #ff6b35; /* Cor principal */
    --color-background: #0a0a0a; /* Fundo */
    /* ... */
}
```

### Tipografia
Alterar font-family no CSS:

```css
:root {
    --font-primary: 'SuaFont', sans-serif;
}
```

### Conteúdo
Editar textos diretamente no HTML ou criar um sistema de CMS.

## 🌐 Deploy

### Para produção:
1. Minificar CSS e JS
2. Otimizar imagens e vídeos
3. Configurar CDN para mídias
4. Implementar analytics
5. Configurar SEO meta tags

### Hospedagem recomendada:
- Vercel, Netlify (estático)
- GitHub Pages (grátis)
- Servidor próprio (PHP/Node)

## 📈 Performance

- **Lighthouse Score**: 90+ (com mídias otimizadas)
- **Core Web Vitals**: Otimizado
- **SEO**: Semântico e meta tags
- **Acessibilidade**: WCAG 2.1 AA

## 🎯 Próximos Passos

1. Adicionar mídias reais na pasta `/assets`
2. Configurar número de WhatsApp real
3. Adicionar formulário de contato
4. Implementar sistema de blog (opcional)
5. Adicionar analytics e tracking

---

**Desenvolvido com ❤️ para Cervo Films**
