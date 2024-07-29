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
                texto: "Os alunos estão mais conectada na internet melhores que os seus pais",
                afirmacao: "Os alunos das escolas atuais estão crescendo em uma realidade muito mais conectada e com maior volume de informação que os seus pais"
            },
            {
                texto: "Os pais precisam se conectar mais nas redes sociais?",
                afirmacao: "Sim. Por que o mundo está cada vez mais conectado!"
            }
        ]
    },
    {
        enunciado: "um aluno hackeou o email do outro aluno, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como os hackers impacta nos alunos . Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "tomo a devida providencias com base na professora de tecnologia.",
                afirmacao: "E cada vez mais os hackers estão estudando para ter acesso em contas de alunos e de resonsáveis."
            },
            {
                texto: "Me preocupo com as pessoas que perderão suas contas  de apps  e defender  a importância dos alunos e os responsáveis.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre responsáveis  para discutir meios de utilização de segurança contra virus e hackers de forma ética."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma sistema de segurança no computador que representasse a segurança no ambiente escolar e profissional. E agora?",
        alternativas: [
            {
                texto: "Criar um sistema de segurança que a profeessora de tecnologia indicou.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de tecnologia  utilizando estratégia e métodos para iniciantes."
            },
            {
                texto: "Criar um sistema de segurança  utilizando um sitema de senhas.",
                afirmacao: "acelerar o processo utilizando estratégia para pessoas iniciantes"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho idividual  de química  para entregar no mês seguinte, o andamento está bem adiantado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
