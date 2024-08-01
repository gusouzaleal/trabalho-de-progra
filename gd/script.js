const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Escola nos tempos atuais. Qual alternativa está correta?",
        alternativas: [
            {
                texto: "Os alunos estão mais conectada na internet que os seus pais",
                afirmacao: "Os alunos das escolas atuais estão crescendo em uma realidade muito mais conectada e com maior volume de informação que os seus pais. "
            },
            {
                texto: "Isso é uma boa ideia!",
                afirmacao: "Os pais precisam se conectar mais nas redes sociais!."
            }
        ]
    },
    {
        enunciado: "Com as grandes descobertas da tecnologia, chamada Inteligência Artificial, um professor de programação  da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim do curso você adquiri um certificado e o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utilizar métodos e estratégias que possam faciliatr suas aulas e na vida pessoal.",
                afirmacao: "Utilizei o método do professor e o que eu aprendi durante as aulas."
            },
            {
                texto: "Escrever um trabalho na base do seu grupo e explicações para que possam ter um bom resultado.",
                afirmacao: "ficou mais fácil para realizar o trabalho de programação."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, o professor  realizou uma crítica entre a turma para entender como foi realizado o trabalho. Nessa conversa os alunos levantou um ponto muito importante: como os hackers  impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "É uma questão muito importante para ser analisada.",
                afirmacao: "Essa questão que está sendo impactada no futuro."
            },
            {
                texto: "Me preocupo com as pessoas que serão impactadas com esse problema mundial.",
                afirmacao: "Minha preocupação fez criar um projeto de estudos de análises de sistema de seguraça ."
            }
        ]
    },
    {
        enunciado: "Ao final do curso os integrantes precisarão fazer um sistema de segurança",
        alternativas: [
            {
                texto: "Criar um sistema utilizando o mnétodo do professor .",
                afirmacao: "Percebi que os alunos no começo sentiram muita dificuldade de executar."
            },
            {
                texto: "Criar um sistema de segurança para uma casa",
                afirmacao: "Damos um prazo de 10 dias"
            }
        ]
    },
    {
        enunciado: "Seu primeiro trabalho após ter feito o curso. O que você faz? ",
        alternativas: [
            {
                texto: "Fazer um planejamento para poder fazer execução correta.",
                afirmacao: "fomos para instalação e tivemos um bom resultado."
            },
            {
                texto: "Conseguimos executar um bom trablho.",
                afirmacao: "E o nosso primeiro cliente gostou e ficamos muitos felizes. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
