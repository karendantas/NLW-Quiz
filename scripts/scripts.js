const perguntas = [
    {
        pergunta: "O que é Git?",
        respostas: [
            "Um sistema de gerenciamento de banco de dados",
            "Um sistema de controle de versão distribuído",
            "Uma linguagem de programação",
        ],
        correta: 1
    },
    {
        pergunta: "O que é GitHub?",
        respostas: [
            "Uma ferramenta de desenvolvimento web",
            "Uma rede social para desenvolvedores",
            "Uma plataforma de hospedagem de código",
        ],
        correta: 3
    },
    {
        pergunta: "Qual comando é usado para clonar um repositório Git?",
        respostas: [
            "git pull",
            "git clone",
            "git push",
        ],
        correta: 2
    },
    {
        pergunta: "Qual comando é usado para verificar o status dos arquivos no repositório Git?",
        respostas: [
            "git status",
            "git check",
            "git verify",
        ],
        correta: 1
    },
    {
        pergunta: "Qual comando é usado para criar um novo branch no Git?",
        respostas: [
            "git new-branch",
            "git branch-create",
            "git checkout -b",
        ],
        correta: 3
    },
    {
        pergunta: "Qual comando é usado para fazer commit das alterações no Git?",
        respostas: [
            "git save",
            "git commit",
            "git push",
        ],
        correta: 2
    },
    {
        pergunta: "Qual comando é usado para enviar alterações locais para o repositório remoto?",
        respostas: [
            "git sync",
            "git upload",
            "git push",
        ],
        correta: 3
    },
    {
        pergunta: "O que é um conflito de merge no Git?",
        respostas: [
            "Um erro no sistema Git",
            "Quando há alterações incompatíveis entre os branches",
            "Quando o repositório remoto não pode ser acessado",
        ],
        correta: 2
    },
    {
        pergunta: "Qual comando é usado para mesclar branches no Git?",
        respostas: [
            "git merge",
            "git branch-merge",
            "git join",
        ],
        correta: 1
    },
    {
        pergunta: "Qual comando é usado para visualizar o histórico de commits no Git?",
        respostas: [
            "git log",
            "git history",
            "git show",
        ],
        correta: 1
    },
];

const template = document.querySelector('template')

//cloneNode(true) faz uma cópia de todos os elementos filhos dentro de template
const quizItem = template.content.cloneNode(true)

for ( const item of perguntas){
    alert(item.pergunta)
}