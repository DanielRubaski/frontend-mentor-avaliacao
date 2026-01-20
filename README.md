# Frontend Mentor - Avaliação Interativa

Um aplicativo web responsivo e interativo para coletar avaliações de usuários. Este projeto implementa um card de avaliação de feedback que alterna para uma mensagem de agradecimento após o envio.

## 📋 Descrição do Projeto

Este é um desafio do **Frontend Mentor** que consiste em criar uma interface interativa para receber avaliações de clientes (de 1 a 5 estrelas). O projeto utiliza HTML semântico, CSS moderno com variáveis de cor e JavaScript vanilla para gerenciar a interatividade.

### Funcionalidades Principais

- **Sistema de Avaliação**: Usuário pode selecionar uma nota de 1 a 5
- **Validação**: Previne envio sem seleção de avaliação
- **Feedback Visual**: Estados hover e seleção para melhor UX
- **Animação de Alternância**: Troca entre o card de avaliação e o card de agradecimento
- **Design Responsivo**: Funciona perfeitamente em dispositivos móveis e desktop
- **Design Moderno**: Paleta de cores escura com destaque em laranja

## 📁 Estrutura do Projeto

```
frontend-mentor-avaliacao/
├── index.html              # Estrutura HTML do aplicativo
├── README.md               # Este arquivo
├── src/
│   ├── css/
│   │   ├── reset.css       # CSS de reset para normalizar estilos
│   │   └── style.css       # Estilos principais da aplicação
│   ├── images/             # Pasta de imagens (SVG)
│   │   ├── icon-star.svg
│   │   └── illustration-thank-you.svg
│   └── js/
│       └── index.js        # Lógica JavaScript
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Marcação semântica com formulário nativo
- **CSS3**: 
  - Flexbox para layout
  - Media queries para responsividade
  - Transições e efeitos hover
  - Cores HSL para melhor controle de paleta
- **JavaScript Vanilla**: Manipulação de DOM sem frameworks
- **Google Fonts**: Fonte Overpass para tipografia

## 📄 Explicação dos Componentes

### HTML (index.html)

O documento HTML contém:

1. **Meta Tags**: Charset UTF-8 e viewport para responsividade
2. **Seção de Avaliação** (.conteudo):
   - Ícone de estrela
   - Título "How did we do?"
   - Descrição do feedback
   - Formulário com radio buttons (1-5)
   - Botão submit

3. **Seção de Agradecimento** (.agradecimento):
   - Inicialmente oculta com classe `hidden`
   - Imagem de agradecimento
   - Exibição da nota selecionada
   - Mensagem de agradecimento

### CSS (style.css)

Estilos principais:

- **Body**: Fundo escuro (hsl(216, 12%, 8%)), flex layout, altura total
- **Cards**: Fundo cinza escuro, padding, bordas arredondadas
- **Botões de Avaliação**:
  - Radio buttons ocultos (display: none)
  - Labels circulares com 40px de tamanho
  - Estado selecionado: laranja (hsl(25, 97%, 53%))
  - Transição suave (0.3s)
- **Botão Submit**: Laranja com hover branco
- **Responsividade**: Max-width 400px em telas maiores que 600px

### JavaScript (index.js)

Lógica interativa:

```javascript
// Seleciona elementos do DOM
- Seção de conteúdo e agradecimento
- Formulário
- Todos os radio buttons
- Elemento para exibir valor

// Event Listener no submit:
- Previne comportamento padrão
- Itera pelos radio buttons
- Detecta qual foi selecionado
- Oculta seção de avaliação (.hidden)
- Mostra seção de agradecimento
- Insere valor selecionado no HTML
```

## 🎨 Paleta de Cores

| Elemento | Cor HSL | Descrição |
|----------|---------|-----------|
| Fundo | hsl(216, 12%, 8%) | Preto muito escuro |
| Cards | hsl(213, 19%, 18%) | Cinza escuro |
| Texto | hsl(217, 12%, 63%) | Cinza claro |
| Destaque (Botão/Seleção) | hsl(25, 97%, 53%) | Laranja vibrante |
| Texto Branco | hsl(0, 100%, 100%) | Branco puro |

## 📱 Responsividade

- **Mobile First**: Desenvolvido prioritariamente para dispositivos móveis
- **Breakpoint**: 600px (tablets e desktops)
- **Layout**: 90% de largura em mobile, 400px fixo em desktop
- **Padding**: Espaçamento adequado para touch em mobile


## ⚙️ Como Funciona a Interatividade

1. Usuário seleciona uma nota (os radio buttons mudam o estilo da label)
2. Usuário clica "SUBMIT"
3. JavaScript captura o valor selecionado
4. A classe `hidden` é adicionada ao `.conteudo` (oculta)
5. A classe `hidden` é removida do `.agradecimento` (exibe)
6. O valor da avaliação é inserido dinamicamente no texto

## 📋 CSS Reset (reset.css)

Normaliza comportamentos padrão dos navegadores para garantir consistência visual.

## 🎯 Objetivos Alcançados

✅ Interface responsiva em todos os dispositivos  
✅ Validação implícita (necessário selecionar antes de submeter)  
✅ Animações e transições suaves  
✅ Código limpo e organizado  
✅ Acessibilidade com formulários nativos  
✅ Sem dependências externas (vanilla JavaScript)  

## 📝 Notas Técnicas

- O projeto não utiliza nenhuma biblioteca ou framework externo
- Usa `display: flex` para layout responsivo
- Radio buttons são ocultos com CSS, mas funcionais semanticamente
- Transições CSS proporcionam feedback visual suave
- JavaScript é mínimo e direto (sem otimizações desnecessárias)