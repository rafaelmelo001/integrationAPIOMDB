# 🎬 Integration API OMDb

> Uma aplicação Full Stack desenvolvida para consumir a API pública **OMDb**, permitindo pesquisar filmes e exibir suas principais informações em uma interface simples e intuitiva.

---

## 📖 Sobre o projeto

O **Integration API OMDb** foi desenvolvido com o objetivo de praticar conceitos de desenvolvimento Web utilizando **ASP.NET Core**, consumo de APIs REST, arquitetura em camadas e deploy em nuvem.

A aplicação é composta por:

* 🖥️ **Frontend** desenvolvido com HTML, CSS e JavaScript puro.
* ⚙️ **Backend** em ASP.NET Core responsável por consumir a API da OMDb.
* 🐳 Containerização utilizando Docker.
* ☁️ Deploy do Backend no Render.
* 🌐 Deploy do Frontend na Vercel.

---

## 🚀 Demonstração

### 🌍 Frontend

> *https://integration-apiomdb.vercel.app/*

### 🔗 API

> RENDER

---

## 📸 Preview

> <img width="1171" height="691" alt="image" src="https://github.com/user-attachments/assets/8c50d920-4afb-4ea5-8631-673aadcd6419" />

```
🔍 Pesquise um filme

Batman

🖼 Poster
📅 Ano
🎬 Diretor
🎭 Gênero
⭐ Avaliação IMDb
⏱ Duração
📝 Sinopse
```

---

## 🛠 Tecnologias utilizadas

### Backend

* ⚡ ASP.NET Core (.NET 10)
* 💻 C#
* 🌐 REST API
* 📦 HttpClient
* 📄 DTO
* 💉 Injeção de Dependência (Dependency Injection)

### Frontend

* HTML5
* CSS3
* JavaScript (ES6 Modules)
* Fetch API

### DevOps

* 🐳 Docker
* ☁️ Render
* ▲ Vercel
* Git
* GitHub

---

## 📂 Estrutura do projeto

```text
IntegrationAPIOMDB
│
├── Backend (ASP.NET Core)
│   ├── Controllers
│   ├── DTO
│   ├── Models
│   ├── Services
│   └── Program.cs
│
├── Frontend
│   ├── CSS
│   ├── JS
│   ├── Services
│   └── index.html
│
└── Dockerfile
```

---

## 🔄 Fluxo da aplicação

```text
Usuário
   │
   ▼
Frontend (JavaScript)
   │
   ▼
ASP.NET Core API
   │
   ▼
OMDb API
   │
   ▼
Resposta em JSON
   │
   ▼
Frontend exibe os dados
```

---

## ✨ Funcionalidades

* 🔍 Pesquisa de filmes pelo nome.
* 🎬 Consumo da API pública OMDb.
* 🖼 Exibição do pôster.
* 📅 Ano de lançamento.
* 🎭 Gênero.
* 🎥 Diretor.
* ⭐ Nota do IMDb.
* ⏱ Tempo de duração.
* 📝 Sinopse.
* 🚨 Tratamento de erros para pesquisas inválidas.

---


## 📚 Conceitos praticados

* Consumo de APIs REST
* Controllers
* Services
* DTO
* Models
* Dependency Injection
* HttpClient
* Variáveis de Ambiente
* Docker
* Deploy
* CORS
* Organização em camadas
* JavaScript Assíncrono (async/await)
* Fetch API

---

## 🎯 Objetivo

Este projeto foi desenvolvido como parte dos meus estudos em desenvolvimento Full Stack com foco em ASP.NET Core, integração entre aplicações e publicação de sistemas em ambiente de produção.

---

## 👨‍💻 Autor

**Rafael Melo**

Analista de Suporte | Estudante de Análise e Desenvolvimento de Sistemas

Trabalho:
analisa integrações de parceiros;
faz debug de regras de negócio;
investiga problemas em APIs

## ⭐ Gostou do projeto?

Se este projeto foi útil para você ou serviu como referência para seus estudos, deixe uma ⭐ no repositório.

Isso ajuda bastante a divulgar o projeto e incentiva o desenvolvimento de novos conteúdos.

///Obrigado!
