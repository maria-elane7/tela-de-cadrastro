# 📝 Validador de Formulário

Projeto de um **validador de formulário** desenvolvido com HTML, CSS e JavaScript, criado para praticar validação de campos, manipulação do DOM e organização da lógica JavaScript.

🔗 ## Link do projeto: https://maria-elane7.github.io/tela-de-cadrastro/

## 🚀 Sobre o projeto

O projeto consiste em um formulário de criação de conta com validações realizadas antes do envio.

As regras de validação são definidas diretamente nos elementos HTML através do atributo `data-rules`, permitindo que o JavaScript identifique e aplique as regras de cada campo.

### Validações implementadas

* Campo obrigatório (`required`)
* Quantidade mínima de caracteres (`min`)
* Validação de e-mail (`email`)
* Exibição de mensagens de erro
* Destaque visual dos campos inválidos
* Limpeza dos erros antes de uma nova validação
* Impedimento do envio do formulário enquanto houver erros

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript

## 📚 Conceitos praticados

Durante o desenvolvimento, foram praticados conceitos como:

* Manipulação do DOM
* `querySelector` e `querySelectorAll`
* `addEventListener`
* `preventDefault()`
* `getAttribute()`
* `createElement()`
* `classList`
* `insertBefore()`
* `remove()`
* Funções e objetos em JavaScript
* Estruturas de repetição
* Condicionais
* `switch`
* Arrays e `split()`
* Template literals
* Expressões regulares (Regex)
* Atributos personalizados `data-*`

## 📂 Estrutura do projeto

```text
validador-formulario/
│
├── index.html
├── style.css
├── script.js
│
└── imagens/
    └── img.png
```

## 💡 Como funciona

As regras de cada campo são definidas no HTML usando `data-rules`.

Por exemplo:

```html
<input
    type="text"
    name="nome"
    id="nome"
    data-rules="required|min=2"
>
```

Nesse caso, o campo precisa:

1. Ser preenchido;
2. Possuir pelo menos 2 caracteres.

O JavaScript lê essas regras, verifica cada campo e, caso encontre algum problema, exibe uma mensagem de erro para o usuário.

## 🎯 Objetivo

Este projeto foi desenvolvido como parte dos meus estudos em **desenvolvimento Front-End**, com foco em fortalecer a lógica de programação e entender, na prática, como JavaScript pode ser utilizado para criar validações e interações em páginas web.

---

💻 Projeto desenvolvido para prática e evolução em Front-End.
