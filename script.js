document.addEventListener('DOMContentLoaded', () => {
    // Função para embaralhar arrays (Fisher-Yates)
    function embaralharArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Array de perguntas do quiz
    const perguntas = [
        {
            pergunta: "Qual planeta tem o dia mais longo em relação ao tempo de rotação?",
            opcoes: ["A) Vênus", "B) Marte", "C) Urano"],
            respostaCorreta: "A) Vênus"
        },
        {
            pergunta: "Quantos planetas anões são oficialmente reconhecidos no Sistema Solar?",
            opcoes: ["A) 5", "B) 8", "C) 3"],
            respostaCorreta: "A) 5" // Ceres, Plutão, Haumea, Makemake, Éris
        },
        {
            pergunta: "O que é a Nuvem de Oort?",
            opcoes: ["A) Um buraco negro", "B) Uma região de cometas", "C) Um satélite natural"],
            respostaCorreta: "B) Uma região de cometas"
        },
        {
            pergunta: "Qual planeta tem uma rotação retrógrada, ou seja, gira ao contrário dos outros?",
            opcoes: ["A) Vênus", "B) Saturno", "C) Terra"],
            respostaCorreta: "A) Vênus"
        },
        {
            pergunta: "Qual planeta possui mais de 80 luas conhecidas?",
            opcoes: ["A) Netuno", "B) Saturno", "C) Mercúrio"],
            respostaCorreta: "B) Saturno"
        },
        {
            pergunta: "O que é um cometa?",
            opcoes: ["A) Estrela moribunda", "B) Corpo celeste congelado", "C) Satélite artificial"],
            respostaCorreta: "B) Corpo celeste congelado"
        },
        {
            pergunta: "Qual é o menor planeta do Sistema Solar?",
            opcoes: ["A) Marte", "B) Mercúrio", "C) Vênus"],
            respostaCorreta: "B) Mercúrio"
        },
        {
            pergunta: "Qual é o planeta com a maior inclinação axial?",
            opcoes: ["A) Urano", "B) Terra", "C) Júpiter"],
            respostaCorreta: "A) Urano"
        },
        {
            pergunta: "Qual planeta tem ventos que podem ultrapassar 2.000 km/h?",
            opcoes: ["A) Saturno", "B) Netuno", "C) Júpiter"],
            respostaCorreta: "B) Netuno"
        },
        {
            pergunta: "Como é chamado o movimento da Terra ao redor do Sol?",
            opcoes: ["A) Rotação", "B) Revolução", "C) Translação"],
            respostaCorreta: "C) Translação"
        },
        {
            pergunta: "Quantas luas naturais tem Marte?",
            opcoes: ["A) 1", "B) 2", "C) 3"],
            respostaCorreta: "B) 2" // Fobos e Deimos
        },
        {
            pergunta: "Qual é o nome das luas de Marte?",
            opcoes: ["A) Deimos e Fobos", "B) Io e Europa", "C) Calisto e Ganimedes"],
            respostaCorreta: "A) Deimos e Fobos"
        },
        {
            pergunta: "O que é a heliosfera?",
            opcoes: ["A) A superfície do Sol", "B) Região de influência do vento solar", "C) Cinturão de meteoros"],
            respostaCorreta: "B) Região de influência do vento solar"
        },
        {
            pergunta: "Qual planeta é conhecido por ter um sistema de anéis muito amplo e visível?",
            opcoes: ["A) Júpiter", "B) Saturno", "C) Urano"],
            respostaCorreta: "B) Saturno"
        },
        {
            pergunta: "Qual é o principal componente da atmosfera de Marte?",
            opcoes: ["A) Oxigênio", "B) Dióxido de Carbono", "C) Nitrogênio"],
            respostaCorreta: "B) Dióxido de Carbono"
        },
        {
            pergunta: "O que são luas galileanas?",
            opcoes: ["A) Luas de Marte", "B) Luas descobertas por Galileu em Júpiter", "C) Luas do cinturão de asteroides"],
            respostaCorreta: "B) Luas descobertas por Galileu em Júpiter"
        },
        {
            pergunta: "Quais são as quatro luas galileanas?",
            opcoes: ["A) Io, Europa, Ganimedes, Calisto", "B) Deimos, Fobos, Europa, Io", "C) Titã, Reia, Dione, Encélado"],
            respostaCorreta: "A) Io, Europa, Ganimedes, Calisto"
        },
        {
            pergunta: "Qual planeta tem o maior campo magnético do Sistema Solar?",
            opcoes: ["A) Saturno", "B) Júpiter", "C) Terra"],
            respostaCorreta: "B) Júpiter"
        },
        {
            pergunta: "Qual planeta é mais denso?",
            opcoes: ["A) Terra", "B) Júpiter", "C) Vênus"],
            respostaCorreta: "A) Terra"
        },
        {
            pergunta: "Onde está localizado o Cinturão de Kuiper?",
            opcoes: ["A) Entre Marte e Júpiter", "B) Além de Netuno", "C) Entre Terra e Vênus"],
            respostaCorreta: "B) Além de Netuno"
        },
        {
            pergunta: "O que são meteoritos?",
            opcoes: ["A) Asteroides no espaço", "B) Fragmentos que entram na atmosfera e atingem o solo", "C) Estrelas cadentes"],
            respostaCorreta: "B) Fragmentos que entram na atmosfera e atingem o solo"
        },
        {
            pergunta: "Qual o nome da sonda que visitou Plutão em 2015?",
            opcoes: ["A) Voyager 1", "B) New Horizons", "C) Cassini"],
            respostaCorreta: "B) New Horizons"
        },
        {
            pergunta: "Qual planeta leva mais tempo para dar uma volta ao redor do Sol?",
            opcoes: ["A) Urano", "B) Saturno", "C) Netuno"],
            respostaCorreta: "C) Netuno"
        },
        {
            pergunta: "Por que Mercúrio não possui atmosfera significativa?",
            opcoes: ["A) É pequeno e muito quente", "B) Está longe do Sol", "C) É composto por gelo"],
            respostaCorreta: "A) É pequeno e muito quente"
        },
        {
            pergunta: "Como é chamado o ponto mais próximo do Sol na órbita de um planeta?",
            opcoes: ["A) Afélio", "B) Periélio", "C) Apogeu"],
            respostaCorreta: "B) Periélio"
        },
        {
            pergunta: "Qual planeta do Sistema Solar tem a órbita mais inclinada?",
            opcoes: ["A) Plutão", "B) Mercúrio", "C) Urano"],
            respostaCorreta: "A) Plutão"
        },
        {
            pergunta: "Qual planeta do Sistema Solar tem a órbita mais excêntrica?",
            opcoes: ["A) Marte", "B) Mercúrio", "C) Saturno"],
            respostaCorreta: "B) Mercúrio"
        },
        {
            pergunta: "Qual é o único planeta do Sistema Solar que gira no sentido horário (de cima)?",
            opcoes: ["A) Urano", "B) Vênus", "C) Terra"],
            respostaCorreta: "B) Vênus"
        },
        {
            pergunta: "O que acontece durante um eclipse solar?",
            opcoes: ["A) A Terra fica entre o Sol e a Lua", "B) A Lua cobre o Sol", "C) O Sol entra em erupção"],
            respostaCorreta: "B) A Lua cobre o Sol"
        },
        {
            pergunta: "O que é um cinturão de asteroides?",
            opcoes: ["A) Anel em torno de planetas", "B) Região entre Marte e Júpiter com muitos asteroides", "C) Atmosfera de Saturno"],
            respostaCorreta: "B) Região entre Marte e Júpiter com muitos asteroides"
        },
        {
            pergunta: "Qual o maior vulcão conhecido do Sistema Solar?",
            opcoes: ["A) Mauna Loa", "B) Olympus Mons", "C) Monte Fuji"],
            respostaCorreta: "B) Olympus Mons"
        },
        {
            pergunta: "Qual é o tempo médio de translação da Terra?",
            opcoes: ["A) 24 horas", "B) 365 dias", "C) 30 dias"],
            respostaCorreta: "B) 365 dias"
        },
        {
            pergunta: "Qual lua de Saturno pode ter um oceano subterrâneo?",
            opcoes: ["A) Encélado", "B) Titã", "C) Réia"],
            respostaCorreta: "A) Encélado"
        },
        {
            pergunta: "Como são chamadas as pequenas partículas de poeira no espaço que queimam na atmosfera?",
            opcoes: ["A) Estrelas cadentes", "B) Meteoros", "C) Satélites"],
            respostaCorreta: "B) Meteoros"
        }
    ];

    // Seções
    const secaoInicial = document.getElementById('secao-inicial');
    const secaoQuiz = document.getElementById('secao-quiz');
    const secaoOpcoes = document.getElementById('secao-opcoes');
    const secaoSobre = document.getElementById('secao-sobre');

    // Elementos do quiz
    const feedbackElement = document.getElementById('feedback');
    const containerOpcoes = document.getElementById('container-opcoes');
    let perguntaAtual = 0;
    let acertos = 0;
    let perguntasEmbaralhadas = [];

    // Elementos do Histórico
    const historicoLista = document.getElementById('historico-lista');
    const limparHistoricoButton = document.getElementById('limparHistoricoButton');

    // Botões
    const startButton = document.getElementById('startButton');
    const opcoesButton = document.getElementById('OpcoesButton');
    const sobreButton = document.getElementById('SobreButton');
    const backButton = document.getElementById('backButton');
    const backFromOpcoes = document.getElementById('backFromOpcoes');
    const backFromSobre = document.getElementById('backFromSobre');

    // Áudios e botão volume
    const somAcerto = document.getElementById('som-acerto');
    const somErro = document.getElementById('som-erro');
    const botaoVolume = document.getElementById('botao-volume');
    let somAtivo = true;

    botaoVolume.addEventListener('click', () => {
        somAtivo = !somAtivo;
        botaoVolume.textContent = somAtivo ? '🔊' : '🔇';
    });

    function tocarSomAcerto() {
        if (somAtivo) {
            somAcerto.currentTime = 0;
            somAcerto.play();
        }
    }

    function tocarSomErro() {
        if (somAtivo) {
            somErro.currentTime = 0;
            somErro.play();
        }
    }

    // Função para mostrar uma seção com fadeIn
    function mostrarSecao(secaoParaMostrar) {
        // Esconde todas as seções
        secaoInicial.style.display = 'none';
        secaoQuiz.style.display = 'none';
        secaoOpcoes.style.display = 'none';
        secaoSobre.style.display = 'none';

        // Mostra a seção desejada
        secaoParaMostrar.style.display = 'block';

        // Remove classes de animação caso existam
        secaoParaMostrar.classList.remove('animate__animated', 'animate__fadeIn');

        // Força reflow para resetar animação
        void secaoParaMostrar.offsetWidth;

        // Adiciona classes do Animate.css para fadeIn
        secaoParaMostrar.classList.add('animate__animated', 'animate__fadeIn');

        // Remove as classes depois que a animação termina
        secaoParaMostrar.addEventListener('animationend', () => {
            secaoParaMostrar.classList.remove('animate__animated', 'animate__fadeIn');
        }, { once: true });
    }

    // Função para embaralhar as perguntas
    function embaralhar(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    // Carregar histórico do localStorage
    function carregarHistorico() {
        const historico = JSON.parse(localStorage.getItem('quizHistorico')) || [];
        historicoLista.innerHTML = '';

        if (historico.length === 0) {
            historicoLista.innerHTML = '<p>Nenhum resultado ainda.</p>';
            limparHistoricoButton.style.display = 'none';
            return;
        }

        limparHistoricoButton.style.display = 'block';
        historico.forEach((resultado, index) => {
            const item = document.createElement('p');
            item.textContent = `Quiz ${index + 1}: ${resultado.acertos} acertos de ${resultado.totalPerguntas} (${resultado.data})`;
            historicoLista.appendChild(item);
        });
    }

    // Salvar resultado no histórico
    function salvarResultado(totalAcertos, totalPerguntas) {
        const historico = JSON.parse(localStorage.getItem('quizHistorico')) || [];
        const dataAtual = new Date().toLocaleDateString('pt-BR');
        historico.push({
            acertos: totalAcertos,
            totalPerguntas: totalPerguntas,
            data: dataAtual
        });
        localStorage.setItem('quizHistorico', JSON.stringify(historico));
    }


    // Limpar histórico
    function limparHistorico() {
        {
            localStorage.removeItem('quizHistorico');
            carregarHistorico();
        }
    }

    // Carregar pergunta atual
    function carregarPergunta() {
        if (perguntaAtual >= perguntasEmbaralhadas.length) {
            salvarResultado(acertos, perguntasEmbaralhadas.length);
            exibirResultado(`Parabéns, você completou o quiz! Você acertou ${acertos} de ${perguntasEmbaralhadas.length} perguntas.`);
            acertos = 0;
            mostrarSecao(secaoInicial);
            return;
        }

        const questao = perguntasEmbaralhadas[perguntaAtual];
        document.getElementById('titulo-pergunta').textContent = `Pergunta ${perguntaAtual + 1}`;
        document.getElementById('texto-pergunta').textContent = questao.pergunta;
        containerOpcoes.innerHTML = '';
        feedbackElement.textContent = '';

        questao.opcoes.forEach(opcao => {
            const button = document.createElement('button');
            button.className = 'opcao';
            button.textContent = opcao;
            button.addEventListener('click', () => checarResposta(button, opcao, questao.respostaCorreta));
            containerOpcoes.appendChild(button);
        });
    }

    // Checar resposta
    function checarResposta(botaoClicado, opcaoSelecionada, respostaCorreta) {
        Array.from(containerOpcoes.children).forEach(button => {
            button.disabled = true;
        });

        if (opcaoSelecionada === respostaCorreta) {
            botaoClicado.classList.add('correto');
            feedbackElement.textContent = 'Correto!';
            acertos++;
            tocarSomAcerto();
        } else {
            botaoClicado.classList.add('errado');
            feedbackElement.textContent = 'Errado!';
            tocarSomErro();

            Array.from(containerOpcoes.children).forEach(button => {
                if (button.textContent === respostaCorreta) {
                    button.classList.add('correto');
                }
            });
        }

        setTimeout(() => {
            perguntaAtual++;
            carregarPergunta();
        }, 2000);
    }

    // Eventos dos botões
    startButton.addEventListener('click', () => {
        perguntasEmbaralhadas = embaralhar([...perguntas]);
        perguntaAtual = 0;
        acertos = 0;
        mostrarSecao(secaoQuiz);
        carregarPergunta();
    });

    opcoesButton.addEventListener('click', () => {
        mostrarSecao(secaoOpcoes);
        carregarHistorico();
    });

    limparHistoricoButton.addEventListener('click', limparHistorico);

    sobreButton.addEventListener('click', () => {
        mostrarSecao(secaoSobre);
    });

    backButton.addEventListener('click', () => {
        if (perguntaAtual > 0) {
            salvarResultado(acertos, perguntaAtual);

        } else {

        }
        acertos = 0;
        perguntaAtual = 0;
        mostrarSecao(secaoInicial);
    });

    backFromOpcoes.addEventListener('click', () => {
        mostrarSecao(secaoInicial);
    });

    backFromSobre.addEventListener('click', () => {
        mostrarSecao(secaoInicial);
    });




});  // ← Fecha o document.addEventListener('DOMContentLoaded', …

// Função simplificada para exibir o resultado (sem pop-up)
function exibirResultado(pontuacao, totalPerguntas) {
    // Seleciona o elemento onde o resultado será mostrado (crie no HTML: <div id="mensagem-resultado"></div>)
    const mensagemResultado = document.getElementById('mensagem-resultado');

    // Verifica se o elemento existe antes de atualizar o texto
    if (mensagemResultado) {
        mensagemResultado.textContent = `Quiz finalizado! Você acertou ${pontuacao} de ${totalPerguntas} perguntas.`;
    } else {
        // Caso o elemento não exista, mostra no console
        console.log(`Quiz finalizado! Você acertou ${pontuacao} de ${totalPerguntas} perguntas.`);
    }

    // Aqui você pode voltar para a tela inicial, se quiser:
    // secaoQuiz.style.display = 'none';
    // secaoInicial.style.display = 'flex';
}



// Em algum lugar no seu código, no final do quiz,
// chame a função assim:
// exibirResultado(pontuacao, perguntas.length);
