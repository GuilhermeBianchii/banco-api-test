# 🧪 banco-api-test

Automação de testes para a [API REST do projeto banco-api](https://github.com/juliodelimas/banco-api), desenvolvida com foco em práticas modernas de testes automatizados utilizando JavaScript e ferramentas populares da comunidade.

## 🎯 Objetivo

Validar os principais fluxos e funcionalidades da API REST do repositório [juliodelimas/banco-api](https://github.com/juliodelimas/banco-api), garantindo seu comportamento esperado por meio de testes automatizados confiáveis.

---

## ⚙️ Stack utilizada

- **Linguagem:** JavaScript (Node.js)
- **Bibliotecas e ferramentas:**
  - [Mocha](https://mochajs.org/) – Test runner
  - [Chai](https://www.chaijs.com/) – Biblioteca de asserções (expect/should/assert)
  - [SuperTest](https://github.com/visionmedia/supertest) – Requisições HTTP simuladas para testes
  - [dotenv](https://github.com/motdotla/dotenv) – Gerenciador de variáveis de ambiente
  - [Mochawesome](https://github.com/adamgruber/mochawesome) – Geração de relatórios HTML de testes

---

## 📁 Estrutura de diretórios

```
banco-api-test/
├── test/                         # Testes automatizados organizados por funcionalidade
│   ├── login.test.js              
│   └── transferencias.test.js    
├── .env                          # Variáveis de ambiente (não incluído no repositório)
├── .gitignore                    # Arquivos ignorados pelo Git
├── package.json                  # Dependências e scripts do projeto
├── package-lock.json             # Lockfile do npm
└── mochawesome-report/           # Relatório HTML gerado após testes
```

---

## 🛠️ Formato do arquivo `.env`

Você deve criar um arquivo `.env` na raiz do projeto com a seguinte variável:

```
BASE_URL=http://localhost:3000
```

> Substitua `http://localhost:3000` pela URL real onde sua instância da API está rodando.

---

## 🚀 Como executar os testes

### 1. Instale as dependências

```bash
npm install
```

### 2. Execute os testes

```bash
npm test
```

### 3. Acesse o relatório HTML

Após a execução, será gerado um relatório HTML em:

```
mochawesome-report/mochawesome.html
```

Abra esse arquivo no navegador para visualizar o relatório detalhado.

---

## 📚 Documentações das dependências

- [Mocha – Test Framework](https://mochajs.org/)
- [Chai – Assertions](https://www.chaijs.com/)
- [SuperTest – HTTP Assertions](https://github.com/visionmedia/supertest)
- [dotenv – Variáveis de Ambiente](https://github.com/motdotla/dotenv)
- [Mochawesome – Test Report Generator](https://github.com/adamgruber/mochawesome)

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests com melhorias, novos testes ou sugestões.



Desenvolvido com 💻 por [Guilherme Bianchi](https://github.com/GuilhermeBianchii)
