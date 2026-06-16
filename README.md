# 📍 Cadastro de Endereço via CEP

Este é um projeto desenvolvido em **React** utilizando **Vite** para solucionar o Exercício 1.3 (Requisição Assíncrona). A aplicação consiste em um formulário inteligente que consome a API pública do **ViaCEP** para preencher automaticamente os dados de localização (Rua, Bairro, Estado e Cidade) assim que o usuário digita um CEP válido.

O projeto foi estruturado do zero e está configurado para deploy automatizado, hospedado diretamente no **GitHub Pages**.

---

## 🚀 Funcionalidades

* **Busca Automática:** A requisição HTTP acontece de forma assíncrona assim que o 8º dígito do CEP é preenchido, eliminando a necessidade de um botão de "Enviar".
* **Sanitização de Input:** Filtra e remove qualquer caractere não numérico automaticamente enquanto o usuário digita.
* **Tratamento de Erros:** Exibe feedbacks visuais amigáveis caso o CEP não seja encontrado na base de dados ou ocorra alguma falha de conexão com a API.
* **Interface Fiel:** Layout centralizado, limpo e minimalista baseado no protótipo proposto para a atividade.

---

## 🛠️ Tecnologias Utilizadas

* [React](https://react.dev/) — Biblioteca Javascript para construção de interfaces modulares.
* [Vite](https://vite.dev/) — Build tool ultra-rápida para o ecossistema front-end moderno.
* [ViaCEP API](https://viacep.com.br/) — API pública e gratuita para conversão de CEP em endereços no Brasil.
* CSS3 — Estilização customizada e responsiva, sem uso de frameworks externos.

---

## 💻 Como Rodar o Projeto Localmente

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1. Clone o repositório:
   ```bash
   git clone [https://github.com/SEU_USUARIO/address-cep-api.git](https://github.com/SEU_USUARIO/address-cep-api.git)