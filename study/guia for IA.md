# STUDY-LAB

> Ambiente pessoal de estudos, experimentação e desenvolvimento.
>
> Objetivo: aprender desenvolvimento de software de forma progressiva, prática e documentada, construindo simultaneamente um ambiente que registre o conhecimento adquirido.

---

# 1. Objetivo do projeto

O Study Lab será um ambiente onde o aprendizado acontece através de:

**Aprender → Experimentar → Quebrar → Entender → Avaliar → Documentar**

E posteriormente:

**Projetar → Abstrair → Integrar → Testar → Publicar**

O projeto não tem como objetivo simplesmente ensinar ferramentas isoladamente.

A meta é entender como as peças se conectam:

```text
VS Code
   ↓
Git
   ↓
GitHub
   ↓
Markdown
   ↓
Documentação
   ↓
Node.js
   ↓
npm
   ↓
TypeScript
   ↓
Vite
   ↓
React
   ↓
API
   ↓
Banco de dados
   ↓
Docker
   ↓
Dev Container
   ↓
CI/CD
   ↓
Deploy
   ↓
IA
```

---

# 2. Meta final

Ao final do projeto, o objetivo é conseguir:

* criar um projeto do zero;
* organizar código profissionalmente;
* utilizar Git corretamente;
* trabalhar com GitHub;
* documentar projetos;
* configurar ambientes reproduzíveis;
* utilizar Node.js e npm;
* desenvolver com TypeScript;
* desenvolver aplicações React;
* consumir e criar APIs;
* trabalhar com banco de dados;
* utilizar Docker;
* utilizar Dev Containers;
* trabalhar através de Codespaces;
* criar testes;
* configurar linting e formatação;
* automatizar processos com CI/CD;
* publicar aplicações;
* entender arquitetura de software;
* utilizar IA como ferramenta de desenvolvimento sem depender cegamente dela.

A meta NÃO é dominar todas as tecnologias existentes.

A meta é desenvolver autonomia para aprender novas tecnologias.

---

# 3. Regra principal de aprendizado

Não considerar uma tecnologia "aprendida" apenas porque um tutorial foi concluído.

Para cada assunto:

```text
1. Conceito
      ↓
2. Demonstração
      ↓
3. Experimentação
      ↓
4. Exercício
      ↓
5. Erro / problema
      ↓
6. Investigação
      ↓
7. Correção
      ↓
8. Explicação com minhas próprias palavras
      ↓
9. Documentação
      ↓
10. Avaliação
```

O objetivo é sair de:

> "Eu consegui fazer."

para:

> "Eu sei por que funciona, sei onde procurar quando quebrar e consigo explicar."

---

# 4. Sistema de progresso

Cada etapa possui dois indicadores diferentes.

## 4.1 Progresso da etapa

Representa o quanto da etapa foi concluído em relação ao roadmap.

Exemplo:

```text
Git
████████░░ 80%
```

Esse percentual considera:

* conteúdos estudados;
* exercícios;
* experimentos;
* documentação;
* projeto prático;
* avaliação.

---

## 4.2 Domínio

Representa quanto realmente consigo trabalhar sozinho com aquele assunto.

Escala:

| Domínio | Significado                                     |
| ------- | ----------------------------------------------- |
| 0%      | Nunca estudado                                  |
| 20%     | Conheço superficialmente                        |
| 40%     | Consigo acompanhar exemplos                     |
| 60%     | Consigo fazer com alguma ajuda                  |
| 70%     | Consigo desenvolver sozinho coisas simples      |
| 80%     | Tenho boa autonomia                             |
| 90%     | Consigo resolver problemas e explicar conceitos |
| 100%    | Domínio muito sólido para o objetivo do projeto |

**Importante: 100% não significa conhecimento absoluto.**

100% significa:

> "Domínio suficiente para o objetivo atual do Study Lab."

---

# 5. Critério para avançar

Não é necessário chegar a 100% em todas as tecnologias.

Regra padrão:

```text
≥ 70% domínio
+
etapa concluída
+
projeto/exercício realizado
+
consegue explicar o conceito
+
consegue resolver problemas básicos
=
PODE AVANÇAR
```

Se houver uma lacuna importante:

```text
AVANÇA
+
registra a lacuna
+
mantém como tópico futuro
```

Assim o projeto não fica eternamente preso em uma tecnologia.

---

# 6. Estado atual

<!--
AI STATE
Esta seção deve ser atualizada sempre que um SAVE for realizado.
-->

```yaml
project: study-lab
phase: 0
current_topic: "Fundação"
status: "in_progress"

overall_progress: 0

current_phase_progress: 0
current_topic_progress: 0
current_topic_mastery: 0

last_save: "2026-08-14"

next_action:
  - "Criar repositório definitivo"
  - "Criar estrutura inicial"
  - "Criar README.md"
  - "Criar .gitignore"

blocked: false
block_reason: ""

last_completed:
  - "VS Code configurado"
  - "Git instalado"
  - "GitHub disponível"

known_gaps: []

next_checkpoint:
  phase: 0
  topic: "Fundação"
  objective: "Criar a base do projeto"
```

---

# 7. Roadmap geral

## FASE 0 — FUNDAÇÃO

### Objetivo

Criar a base do Study Lab.

### Conteúdos

* VS Code
* Git
* GitHub
* Markdown
* estrutura de projeto
* README
* `.gitignore`
* Git básico

### Resultado esperado

Ter um repositório funcional.

### Checklist

* [ ] Criar repositório definitivo
* [ ] Criar README.md
* [ ] Criar `.gitignore`
* [ ] Criar estrutura inicial
* [ ] Fazer primeiro commit
* [ ] Fazer primeiro push
* [ ] Documentar fluxo Git
* [ ] Criar primeiro documento de estudo

### Domínio mínimo para avançar

70%

### Status

```text
Progresso: 0%
Domínio: 0%
```

---

# FASE 1 — SITE DE DOCUMENTAÇÃO

## Objetivo

Transformar Markdown em um site navegável.

Estrutura inicial:

```text
docs/

├── index.md

├── git/
│   ├── index.md
│   └── comandos.md

├── github/
│   └── index.md

├── docker/
│   └── index.md

└── javascript/
    └── index.md
```

### Conceitos

* Markdown
* documentação
* estrutura de páginas
* navegação
* build
* deploy
* GitHub Pages

### Resultado esperado

```text
Markdown
   ↓
Build
   ↓
Site
   ↓
GitHub Pages
```

### Checklist

* [ ] Criar documentação
* [ ] Criar página inicial
* [ ] Criar navegação
* [ ] Criar página Git
* [ ] Criar página GitHub
* [ ] Criar página Docker
* [ ] Criar página JavaScript
* [ ] Configurar build
* [ ] Publicar no GitHub Pages
* [ ] Testar publicação

### Domínio mínimo

70%

---

# FASE 2 — NODE.JS + NPM

## Objetivo

Entender o ecossistema JavaScript moderno.

Fluxo:

```text
Node.js
   ↓
npm
   ↓
package.json
   ↓
dependências
   ↓
node_modules
   ↓
scripts
```

### Conteúdos

* Node.js
* npm
* `package.json`
* `package-lock.json`
* `node_modules`
* dependências
* scripts
* versões
* semver
* `npm install`
* `npm run`
* `npm update`
* `npm uninstall`

### Exemplo

```json
{
  "scripts": {
    "dev": "...",
    "build": "...",
    "test": "..."
  }
}
```

### Checklist

* [ ] Instalar Node.js
* [ ] Verificar versão
* [ ] Criar projeto npm
* [ ] Entender package.json
* [ ] Instalar dependência
* [ ] Remover dependência
* [ ] Criar script
* [ ] Executar script
* [ ] Entender node_modules
* [ ] Entender package-lock.json

---

# FASE 3 — TYPESCRIPT

## Objetivo

Aprender tipagem e desenvolver código JavaScript com maior segurança.

### Conteúdos

* tipos básicos
* interfaces
* type aliases
* funções
* objetos
* arrays
* unions
* generics
* enums
* narrowing
* `tsconfig.json`

### Checklist

* [ ] Tipos básicos
* [ ] Funções
* [ ] Objetos
* [ ] Interfaces
* [ ] Type aliases
* [ ] Union types
* [ ] Generics
* [ ] Narrowing
* [ ] tsconfig
* [ ] Compilar TypeScript
* [ ] Criar pequeno projeto

---

# FASE 4 — VITE

## Objetivo

Entender o ambiente moderno de desenvolvimento frontend.

### Conteúdos

* Vite
* dev server
* build
* hot reload
* variáveis de ambiente
* `.env`
* `.env.example`

### Checklist

* [ ] Criar projeto Vite
* [ ] Rodar servidor
* [ ] Entender estrutura
* [ ] Alterar configuração
* [ ] Criar build
* [ ] Testar build
* [ ] Entender `.env`
* [ ] Criar `.env.example`

---

# FASE 5 — QUALIDADE DE CÓDIGO

## Objetivo

Sair de:

> "Funciona."

para:

> "Funciona e é mantível."

### ESLint

Pergunta:

> Meu código segue determinadas regras?

### Prettier

Pergunta:

> Meu código está formatado consistentemente?

### Git

Pergunta:

> O que mudou?

### TypeScript

Pergunta:

> Os tipos fazem sentido?

### Tests

Pergunta:

> Isso continua funcionando?

### Ferramentas

* ESLint
* Prettier
* GitLens
* Error Lens
* testes

### Checklist

* [ ] Configurar ESLint
* [ ] Configurar Prettier
* [ ] Entender regras
* [ ] Criar teste
* [ ] Executar teste
* [ ] Criar teste que falha
* [ ] Corrigir teste
* [ ] Integrar ferramentas ao projeto

---

# FASE 6 — DEV CONTAINER + DOCKER

## Objetivo

Criar ambiente reproduzível.

Fluxo:

```text
VS Code
   ↓
Dev Container
   ↓
Docker
   ↓
Node
   ↓
npm
   ↓
Projeto
```

### Conteúdos

* Docker
* imagem
* container
* volume
* network
* Dockerfile
* Docker Compose
* Dev Container
* `.devcontainer/devcontainer.json`

### Checklist

* [ ] Instalar Docker
* [ ] Criar primeiro container
* [ ] Entender imagem
* [ ] Entender container
* [ ] Criar Dockerfile
* [ ] Criar Docker Compose
* [ ] Criar Dev Container
* [ ] Abrir projeto dentro do container
* [ ] Reproduzir ambiente em outra máquina

---

# FASE 7 — CODESPACES

## Objetivo

Conseguir desenvolver sem depender de uma máquina específica.

Fluxo:

```text
GitHub
   ↓
Codespace
   ↓
Dev Container
   ↓
Projeto
```

### Teste principal

```text
Máquina A
    ↓
GitHub
    ↓
Máquina B
    ↓
Codespace
```

### Pergunta principal

> Consigo chegar em outra máquina e continuar o projeto?

### Checklist

* [ ] Criar Codespace
* [ ] Abrir projeto
* [ ] Executar projeto
* [ ] Alterar código
* [ ] Commitar
* [ ] Fazer push
* [ ] Reabrir em outra máquina
* [ ] Validar reprodução do ambiente

---

# FASE 8 — BANCO DE DADOS

## Objetivo

Entender persistência de dados.

### Possibilidades estudadas

#### SQLite

```text
project/
└── data.db
```

Vantagens:

* simples
* arquivo local
* ótimo para aprendizado

Limitações:

* acesso compartilhado limitado
* não representa tão bem uma arquitetura distribuída

---

#### PostgreSQL + Docker

```text
Docker
   ↓
PostgreSQL
   ↓
Tabelas
   ↓
Dados
```

Possíveis conceitos:

* tabelas
* registros
* relacionamentos
* índices
* usuários
* permissões
* migrations
* seeds

---

#### PostgreSQL remoto

```text
             INTERNET
                ↓
        PostgreSQL remoto
          ↙      ↓      ↘
        PC A    PC B   Codespace
```

Questões adicionais:

* segurança
* credenciais
* backup
* acesso
* custo
* disponibilidade

### Decisão

Não escolher banco remoto antes de entender os requisitos.

### Checklist

* [ ] Entender banco relacional
* [ ] Entender SQL
* [ ] Criar banco
* [ ] Criar tabela
* [ ] Inserir dados
* [ ] Consultar dados
* [ ] Atualizar dados
* [ ] Deletar dados
* [ ] Relacionamentos
* [ ] PostgreSQL
* [ ] PostgreSQL em Docker
* [ ] Migrations
* [ ] Seeds
* [ ] Avaliar banco remoto

---

# FASE 9 — BACKEND + API

## Objetivo

Conectar aplicação e banco.

Arquitetura:

```text
Frontend
   ↓
API
   ↓
Backend
   ↓
Banco
```

### Exemplos de funcionalidades

* adicionar estudo
* editar estudo
* excluir estudo
* registrar progresso
* registrar projeto
* registrar tarefa
* registrar tecnologia
* registrar exercício

### Possível modelo

```text
studies
projects
tasks
technologies
notes
progress
exercises
```

### Checklist

* [ ] Entender HTTP
* [ ] GET
* [ ] POST
* [ ] PUT/PATCH
* [ ] DELETE
* [ ] JSON
* [ ] API
* [ ] Rotas
* [ ] Controllers
* [ ] Services
* [ ] Banco
* [ ] CRUD
* [ ] Validação
* [ ] Tratamento de erros

---

# FASE 10 — REACT

## Objetivo

Transformar o projeto em uma aplicação.

Fluxo:

```text
HTML
CSS
JavaScript
   ↓
TypeScript
   ↓
Vite
   ↓
React
```

### Conteúdos

* components
* props
* state
* events
* hooks
* forms
* API
* routing

### Checklist

* [ ] Primeiro componente
* [ ] Props
* [ ] State
* [ ] Events
* [ ] Hooks
* [ ] Forms
* [ ] API
* [ ] Routing
* [ ] Componentização
* [ ] Aplicação prática

---

# FASE 11 — DASHBOARD DO STUDY LAB

## Objetivo

Transformar o próprio Study Lab em uma aplicação.

Exemplo:

```text
┌──────────────────────────────────────┐
│              STUDY LAB               │
├──────────────────────────────────────┤
│                                      │
│ Git          ████████░░ 80%          │
│ Docker       █████░░░░░ 50%          │
│ JavaScript   ███░░░░░░░ 30%          │
│ TypeScript   ██░░░░░░░░ 20%          │
│ React        ░░░░░░░░░░  0%          │
│                                      │
└──────────────────────────────────────┘
```

Possíveis recursos:

* estudos
* progresso
* projetos
* tarefas
* exercícios
* tecnologias
* anotações
* histórico
* métricas

---

# FASE 12 — CI/CD

## Objetivo

Automatizar o ciclo de desenvolvimento.

Fluxo:

```text
git push
   ↓
GitHub Actions
   ↓
testes
   ↓
lint
   ↓
build
   ↓
deploy
   ↓
GitHub Pages
```

### Checklist

* [ ] Criar workflow
* [ ] Executar testes
* [ ] Executar ESLint
* [ ] Executar build
* [ ] Configurar deploy
* [ ] Testar pipeline
* [ ] Corrigir falhas
* [ ] Documentar pipeline

---

# FASE 13 — ARQUITETURA

## Objetivo

Começar a entender como sistemas são projetados.

Conteúdos:

* separação de responsabilidades
* frontend
* backend
* API
* banco
* services
* repositories
* componentes
* configuração
* segurança
* autenticação
* autorização
* logs
* tratamento de erros

---

# FASE 14 — IA

A IA entra depois dos fundamentos.

Fluxo:

```text
Fundamentos
   ↓
Ferramentas
   ↓
Git
   ↓
TypeScript
   ↓
React
   ↓
APIs
   ↓
Backend
   ↓
Testes
   ↓
Deploy
   ↓
IA
```

Objetivo:

Usar IA para:

* pesquisar
* explicar
* revisar
* gerar hipóteses
* encontrar problemas
* automatizar tarefas
* documentar
* acelerar desenvolvimento

Mas sempre mantendo entendimento humano do código.

---

# 8. Estrutura do projeto

A estrutura inicial NÃO deve nascer gigante.

Ela deve crescer conforme as necessidades.

Estrutura futura esperada:

```text
study-lab/

├── .devcontainer/
│   └── devcontainer.json
│
├── docs/
│   ├── git/
│   ├── github/
│   ├── docker/
│   ├── javascript/
│   ├── typescript/
│   ├── react/
│   └── banco-de-dados/
│
├── src/
│   ├── frontend/
│   └── backend/
│
├── database/
│   ├── migrations/
│   └── seeds/
│
├── tests/
│
├── package.json
├── README.md
└── .gitignore
```

**Regra:** não criar pastas apenas porque elas aparecerão no roadmap.

Criar quando houver motivo real.

---

# 9. Estrutura de uma sessão de estudo

Toda sessão deve registrar:

```text
DATA:
FASE:
TÓPICO:

OBJETIVO:

O QUE FOI ESTUDADO:

O QUE FOI PRATICADO:

O QUE DEU ERRADO:

O QUE FOI DESCOBERTO:

O QUE FOI DOCUMENTADO:

NÍVEL DE CONFIANÇA:

PRÓXIMO PASSO:
```

---

# 10. Sistema de SAVE

Ao terminar uma sessão importante, executar um SAVE.

Formato:

```text
SAVE STUDY-LAB
```

O SAVE deve atualizar:

```yaml
last_save:
phase:
current_topic:
status:

overall_progress:
phase_progress:
topic_progress:
mastery:

completed:
in_progress:
next_action:

blocked:
block_reason:

known_gaps:

last_problem:

last_solution:

next_checkpoint:
```

---

# 11. Exemplo de SAVE

```yaml
last_save: "2026-08-14"

phase: 1
current_topic: "GitHub Pages"

status: "in_progress"

overall_progress: 8
phase_progress: 45
topic_progress: 70
mastery: 65

completed:
  - "Criado repositório"
  - "Criado README"
  - "Criada documentação Git"
  - "Configurado Markdown"

in_progress:
  - "Configuração do GitHub Pages"

next_action:
  - "Configurar build"
  - "Publicar primeira versão"

blocked: false

block_reason: ""

known_gaps:
  - "Ainda não entendo completamente o processo de build"

last_problem:
  "Página não estava sendo publicada"

last_solution:
  "Identificada configuração incorreta do workflow"

next_checkpoint:
  "Publicar primeira versão funcional"
```

---

# 12. Métricas do projeto

O progresso geral será calculado pelas fases.

Exemplo:

| Fase        | Peso | Progresso |
| ----------- | ---: | --------: |
| Fundação    |   5% |      100% |
| Site        |  10% |       70% |
| Node/npm    |   8% |        0% |
| TypeScript  |   8% |        0% |
| Vite        |   5% |        0% |
| Qualidade   |   7% |        0% |
| Docker      |  10% |        0% |
| Codespaces  |   5% |        0% |
| Banco       |  10% |        0% |
| Backend/API |  10% |        0% |
| React       |  10% |        0% |
| Dashboard   |   5% |        0% |
| CI/CD       |   5% |        0% |
| Arquitetura |   2% |        0% |
| IA          |   0% |        0% |

Os pesos podem mudar conforme o projeto evoluir.

O percentual geral representa:

> "Quanto do caminho planejado já foi realizado."

Não representa o quanto da programação mundial foi aprendido.

---

# 13. Estados possíveis

Cada tópico pode estar em um dos estados:

```text
NOT_STARTED
↓
STUDYING
↓
PRACTICING
↓
UNDERSTOOD
↓
DOCUMENTED
↓
VALIDATED
↓
COMPLETED
```

Também pode entrar em:

```text
BLOCKED
```

quando existir algum impedimento.

---

# 14. Regra de documentação

Toda descoberta importante deve virar documentação.

Especialmente:

* erros;
* soluções;
* comandos;
* decisões;
* conceitos;
* comparações;
* configurações;
* problemas encontrados;
* coisas que inicialmente pareciam erradas;
* explicações com palavras próprias.

Um erro não é tempo perdido.

Ele vira material de estudo.

---

# 15. Regra de aprendizado ativo

Sempre que possível, evitar:

```text
Tutorial
↓
copiar código
↓
funcionou
↓
próximo
```

Preferir:

```text
Conceito
↓
Exemplo mínimo
↓
Modificar
↓
Quebrar
↓
Investigar
↓
Corrigir
↓
Explicar
↓
Documentar
```

---

# 16. Como o assistente deve acompanhar o projeto

<!--
AI INSTRUCTION

As instruções abaixo são destinadas ao assistente de IA.

Quando este documento for fornecido ao assistente, ele deve tratar o arquivo como
a fonte principal de estado do projeto.

Não assumir que tópicos com 100% de progresso possuem domínio absoluto.

Sempre verificar:
- fase atual;
- tópico atual;
- último SAVE;
- domínio;
- lacunas;
- bloqueios;
- próximo checkpoint.

Não reiniciar assuntos já concluídos sem motivo.

Não avançar várias fases de uma vez.

Priorizar o próximo checkpoint.

Explicar conceitos antes de fornecer comandos complexos.

Quando houver código, explicar o motivo da solução.

Quando houver erro, investigar antes de simplesmente substituir o código.

Registrar decisões arquiteturais importantes.

Ao final de uma sessão, sugerir um SAVE.

Se o usuário disser "SAVE", produzir um estado atualizado seguindo o formato
definido neste documento.

Se o usuário perguntar "onde estamos?", responder com:
1. fase;
2. tópico;
3. progresso;
4. domínio;
5. o que já foi concluído;
6. o que falta;
7. próximo passo.

Se o usuário disser "continuar", começar pelo campo next_action do último SAVE.

Se existir uma lacuna importante, registrar em known_gaps em vez de bloquear
automaticamente o projeto.

Não considerar uma etapa concluída apenas porque os comandos foram executados.
É necessário verificar entendimento através de explicação, exercício ou validação.

O objetivo é desenvolver autonomia, não apenas concluir tarefas.
-->

---

# 17. Prompt de continuidade

<!--
COPY/PASTE PROMPT

Use este prompt quando quiser continuar o projeto em outra conversa.

-->

```text
Você é meu mentor técnico e responsável por acompanhar meu projeto STUDY-LAB.

Vou fornecer o arquivo STUDY-LAB.md.

Use esse documento como fonte principal de verdade sobre:
- objetivo;
- roadmap;
- fase atual;
- progresso;
- domínio;
- tarefas concluídas;
- lacunas;
- bloqueios;
- próximo checkpoint.

Não reinicie o projeto do zero.

Primeiro analise o estado atual.

Depois responda:

1. ONDE ESTAMOS
   - fase
   - tópico
   - progresso geral
   - progresso da fase
   - domínio

2. O QUE JÁ FOI CONCLUÍDO

3. O QUE ESTÁ EM ANDAMENTO

4. O QUE ESTÁ BLOQUEADO

5. O QUE AINDA NÃO DOMINO

6. QUAL É O PRÓXIMO CHECKPOINT

7. QUAL É A PRÓXIMA AÇÃO PRÁTICA

Continue exatamente do ponto registrado no último SAVE.

Não avance etapas desnecessariamente.

Não considere 100% como domínio absoluto.

O objetivo é atingir autonomia suficiente para avançar.

Durante o estudo:

- explique os conceitos;
- faça perguntas para validar meu entendimento;
- proponha exercícios;
- deixe eu tentar antes de entregar a solução quando isso for útil;
- investigue erros comigo;
- explique por que uma solução funciona;
- registre decisões importantes;
- transforme problemas relevantes em documentação.

Se eu disser:

"SAVE"

gere um novo estado de projeto com:

- fase;
- tópico;
- progresso geral;
- progresso da fase;
- progresso do tópico;
- domínio;
- concluídos;
- em andamento;
- próximo passo;
- bloqueios;
- lacunas;
- último problema;
- solução encontrada;
- próximo checkpoint.

Nunca invente progresso.

Se alguma informação estiver faltando, pergunte.

Se eu disser:

"ONDE ESTAMOS?"

faça um resumo objetivo do estado atual.

Se eu disser:

"CONTINUAR"

comece pelo próximo checkpoint registrado.

Se eu disser:

"FECHAR ETAPA"

avalie comigo se a etapa realmente pode ser considerada concluída.

Para fechar uma etapa, considere:

- conceitos compreendidos;
- exercício realizado;
- problemas enfrentados;
- capacidade de explicar;
- documentação realizada;
- domínio suficiente para avançar.

Não é necessário atingir 100% de domínio.

O Study Lab deve evoluir progressivamente.

A regra principal é:

APRENDER → EXPERIMENTAR → QUEBRAR → ENTENDER → AVALIAR → DOCUMENTAR

e depois:

PROJETAR → ABSTRAIR → INTEGRAR → TESTAR → PUBLICAR.
```

---

# 18. Prompt rápido

Para sessões normais, não é necessário enviar o prompt completo.

Pode usar:

```text
Continue o STUDY-LAB a partir do último SAVE.

Primeiro me diga:
- onde estamos;
- progresso;
- domínio;
- o que falta;
- próximo checkpoint.

Depois vamos executar o próximo passo.
```

---

# 19. Comandos de acompanhamento

Usaremos comandos simples durante o projeto.

### STATUS

```text
STATUS
```

Mostra:

* fase;
* tópico;
* progresso;
* domínio;
* próximo passo.

### CONTINUAR

```text
CONTINUAR
```

Retoma do último checkpoint.

### SAVE

```text
SAVE
```

Registra o estado atual.

### FECHAR ETAPA

```text
FECHAR ETAPA
```

Avalia se a etapa está pronta para ser encerrada.

### BLOQUEIO

```text
BLOQUEIO
```

Registra um problema que impede o avanço.

### REVISAR

```text
REVISAR
```

Volta para um conceito que precisa ser reforçado.

### EXPLICAR

```text
EXPLICAR [tópico]
```

Faz uma revisão focada.

### TESTAR

```text
TESTAR [tópico]
```

Cria perguntas/exercícios para verificar domínio.

---

# 20. Filosofia do projeto

O Study Lab não é uma lista de cursos.

É um laboratório.

A regra é:

```text
Não apenas estudar.
Construir.

Não apenas copiar.
Entender.

Não apenas acertar.
Investigar os erros.

Não apenas terminar.
Documentar.

Não buscar saber tudo.
Buscar autonomia.
```

O projeto deve crescer conforme o conhecimento cresce.

A arquitetura final não precisa existir no primeiro dia.

Ela será construída conforme houver necessidade real.

---

# 21. Primeiro objetivo

Neste momento, ignorar a arquitetura futura.

O primeiro objetivo é:

```text
FASE 0
↓
Git + GitHub
↓
Repositório
↓
README
↓
Estrutura inicial
↓
Markdown
↓
FASE 1
↓
Site de documentação
↓
GitHub Pages
```

Somente depois:

```text
Node
↓
npm
↓
TypeScript
↓
Vite
↓
Qualidade
↓
Docker
↓
Dev Container
↓
Codespaces
↓
Banco
↓
API
↓
React
↓
Dashboard
↓
CI/CD
↓
Arquitetura
↓
IA
```

**Estado inicial:**

```text
FASE: 0 — Fundação

TÓPICO: Estrutura inicial

PROGRESSO GERAL: 0%

DOMÍNIO: 0%

PRÓXIMA AÇÃO:
1. Criar repositório definitivo
2. Criar README.md
3. Criar .gitignore
4. Criar estrutura inicial
5. Primeiro commit
6. Primeiro push

CHECKPOINT:
"Repositório Study Lab criado e versionado no GitHub."
```
