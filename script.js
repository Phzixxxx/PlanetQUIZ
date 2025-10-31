document.addEventListener('DOMContentLoaded', () => {
    // === Botões para iniciar o quiz por ano ===
const btn6 = document.getElementById('btn-6ano');
const btn7 = document.getElementById('btn-7ano');
const btn8 = document.getElementById('btn-8ano');
const btn9 = document.getElementById('btn-9ano');

if (btn6) btn6.addEventListener('click', () => iniciarQuizPorAno("6ano"));
if (btn7) btn7.addEventListener('click', () => iniciarQuizPorAno("7ano"));
if (btn8) btn8.addEventListener('click', () => iniciarQuizPorAno("8ano"));
if (btn9) btn9.addEventListener('click', () => iniciarQuizPorAno("9ano"));

    console.log("✅ Script carregado!");

   // === Banco de perguntas por ano ===
    const perguntasPorAno = {
        "6ano": [
            { pergunta: "Qual planeta é conhecido como 'Planeta Vermelho'?", opcoes: ["A) Júpiter", "B) Marte", "C) Vênus"], respostaCorreta: "B) Marte" },
        { pergunta: "Qual é o centro do nosso sistema solar?", opcoes: ["A) Terra", "B) Lua", "C) Sol"], respostaCorreta: "C) Sol" },
        { pergunta: "O que é a Via Láctea?", opcoes: ["A) Onde comemos cereais", "B) Um tipo de chocolate", "C) Nossa galáxia"], respostaCorreta: "C) Nossa galáxia" },
        { pergunta: "O que é o movimento de rotação da Terra?", opcoes: ["A) A volta da Terra ao redor do Sol", "B) O giro da Terra em torno do seu próprio eixo", "C) A mudança das estações do ano"], respostaCorreta: "B) O giro da Terra em torno do seu próprio eixo" },
        { pergunta: "Qual planeta é conhecido por sua cor azul?", opcoes: ["A) Terra", "B) Netuno", "C) Vênus"], respostaCorreta: "B) Netuno" },
        { pergunta: "O que é uma lua?", opcoes: ["A) Asteroide", "B) Satélite natural que orbita um planeta", "C) Cometa"], respostaCorreta: "B) Satélite natural que orbita um planeta" },
        { pergunta: "Qual planeta possui vulcões ativos gigantescos?", opcoes: ["A) Marte", "B) Vênus", "C) Júpiter"], respostaCorreta: "A) Marte" },
        { pergunta: "O que é um cometa?", opcoes: ["A) Estrela moribunda", "B) Corpo celeste congelado", "C) Satélite artificial"], respostaCorreta: "B) Corpo celeste congelado" },
        { pergunta: "Qual planeta tem anéis visíveis?", opcoes: ["A) Saturno", "B) Urano", "C) Júpiter"], respostaCorreta: "A) Saturno" },
        { pergunta: "O que é o cinturão de asteroides?", opcoes: ["A) Entre Marte e Júpiter", "B) Além de Netuno", "C) Entre Terra e Vênus"], respostaCorreta: "A) Entre Marte e Júpiter" },
        { pergunta: "Qual é o planeta mais próximo do Sol?", opcoes: ["A) Mercúrio", "B) Vênus", "C) Marte"], respostaCorreta: "A) Mercúrio" },
        { pergunta: "Qual planeta tem maior inclinação axial?", opcoes: ["A) Urano", "B) Saturno", "C) Terra"], respostaCorreta: "A) Urano" },
        { pergunta: "O que é a translação da Terra?", opcoes: ["A) Giro da Terra em torno do Sol", "B) Giro da Terra em torno do eixo", "C) Movimento da Lua"], respostaCorreta: "A) Giro da Terra em torno do Sol" },
        { pergunta: "O que é a rotação da Terra?", opcoes: ["A) Giro da Terra em torno do Sol", "B) Giro da Terra em torno do eixo", "C) Movimento da Lua"], respostaCorreta: "B) Giro da Terra em torno do eixo" },
        { pergunta: "O que é a atmosfera de um planeta?", opcoes: ["A) Camada de gases que envolve o planeta", "B) Núcleo rochoso", "C) Anel de cometas"], respostaCorreta: "A) Camada de gases que envolve o planeta" }
    ],
        "7ano": [
            { pergunta: "O que acontece durante um eclipse solar?", opcoes: ["A) A Terra fica entre o Sol e a Lua", "B) A Lua cobre o Sol", "C) O Sol entra em erupção"], respostaCorreta: "B) A Lua cobre o Sol" },
        { pergunta: "Qual o maior vulcão conhecido do Sistema Solar?", opcoes: ["A) Mauna Loa", "B) Olympus Mons", "C) Monte Fuji"], respostaCorreta: "B) Olympus Mons" },
        { pergunta: "Como é chamado o movimento da Terra ao redor do Sol?", opcoes: ["A) Rotação", "B) Revolução", "C) Translação"], respostaCorreta: "C) Translação" },
        { pergunta: "Qual planeta tem ventos que podem ultrapassar 2.000 km/h?", opcoes: ["A) Saturno", "B) Netuno", "C) Júpiter"], respostaCorreta: "B) Netuno" },
        { pergunta: "Qual planeta é conhecido como o 'Planeta Gás Gigante'?", opcoes: ["A) Júpiter", "B) Marte", "C) Vênus"], respostaCorreta: "A) Júpiter" },
        { pergunta: "O que é uma estrela?", opcoes: ["A) Planeta luminoso", "B) Bola de gás que emite luz e calor", "C) Cometa"], respostaCorreta: "B) Bola de gás que emite luz e calor" },
        { pergunta: "Qual planeta possui maior número de luas?", opcoes: ["A) Saturno", "B) Júpiter", "C) Netuno"], respostaCorreta: "B) Júpiter" },
        { pergunta: "O que é uma estrela cadente?", opcoes: ["A) Cometa", "B) Meteorito entrando na atmosfera", "C) Lua em movimento"], respostaCorreta: "B) Meteorito entrando na atmosfera" },
        { pergunta: "Qual planeta tem o dia mais longo que o ano?", opcoes: ["A) Vênus", "B) Mercúrio", "C) Marte"], respostaCorreta: "A) Vênus" },
        { pergunta: "O que é uma nebulosa?", opcoes: ["A) Nuvem de gás e poeira", "B) Lua gigante", "C) Planeta distante"], respostaCorreta: "A) Nuvem de gás e poeira" },
        { pergunta: "O que é a fotosfera do Sol?", opcoes: ["A) Camada visível do Sol", "B) Núcleo do Sol", "C) Atmosfera solar"], respostaCorreta: "A) Camada visível do Sol" },
        { pergunta: "O que é a fusão nuclear no Sol?", opcoes: ["A) Processo que gera luz e calor", "B) Explosão de cometa", "C) Formação de asteroides"], respostaCorreta: "A) Processo que gera luz e calor" },
        { pergunta: "Qual planeta é mais frio do Sistema Solar?", opcoes: ["A) Netuno", "B) Mercúrio", "C) Vênus"], respostaCorreta: "A) Netuno" },
        { pergunta: "O que são anéis planetários?", opcoes: ["A) Fragmentos e gelo que orbitam planetas", "B) Satélites naturais", "C) Cometas"], respostaCorreta: "A) Fragmentos e gelo que orbitam planetas" },
        { pergunta: "O que é o núcleo de um planeta?", opcoes: ["A) Camada rochosa externa", "B) Parte central do planeta", "C) Atmosfera"], respostaCorreta: "B) Parte central do planeta" },
        { pergunta: "O que é a cromosfera do Sol?", opcoes: ["A) Camada atmosférica acima da fotosfera", "B) Núcleo do Sol", "C) Superfície do Sol"], respostaCorreta: "A) Camada atmosférica acima da fotosfera" },
        { pergunta: "Qual planeta possui mais vulcões conhecidos?", opcoes: ["A) Vênus", "B) Marte", "C) Júpiter"], respostaCorreta: "A) Vênus" },
        { pergunta: "O que é um satélite natural?", opcoes: ["A) Planeta pequeno", "B) Lua que orbita um planeta", "C) Cometa"], respostaCorreta: "B) Lua que orbita um planeta" },
        { pergunta: "O que é a translação de um planeta?", opcoes: ["A) Movimento ao redor do Sol", "B) Giro em torno do próprio eixo", "C) Movimento de uma lua"], respostaCorreta: "A) Movimento ao redor do Sol" },
        { pergunta: "Qual planeta possui atmosfera composta principalmente por hidrogênio e hélio?", opcoes: ["A) Júpiter", "B) Marte", "C) Terra"], respostaCorreta: "A) Júpiter" },
        { pergunta: "Qual planeta tem a maior lua do Sistema Solar?", opcoes: ["A) Júpiter", "B) Saturno", "C) Netuno"], respostaCorreta: "A) Júpiter" },
        { pergunta: "O que é um asteróide?", opcoes: ["A) Planeta pequeno", "B) Corpo rochoso no espaço", "C) Cometa"], respostaCorreta: "B) Corpo rochoso no espaço" },
        { pergunta: "Qual planeta tem vulcões gigantescos, como o Olympus Mons?", opcoes: ["A) Marte", "B) Vênus", "C) Júpiter"], respostaCorreta: "A) Marte" },
        { pergunta: "O que é a atmosfera de Marte?", opcoes: ["A) Rica em oxigênio", "B) Rica em dióxido de carbono", "C) Rica em nitrogênio"], respostaCorreta: "B) Rica em dióxido de carbono" },
        { pergunta: "Qual planeta tem ventos mais rápidos do Sistema Solar?", opcoes: ["A) Júpiter", "B) Netuno", "C) Saturno"], respostaCorreta: "B) Netuno" }
    ],
        "8ano": [
            { pergunta: "Qual planeta tem uma rotação retrógrada?", opcoes: ["A) Vênus", "B) Saturno", "C) Terra"], respostaCorreta: "A) Vênus" },
        { pergunta: "Qual planeta possui mais de 80 luas conhecidas?", opcoes: ["A) Netuno", "B) Saturno", "C) Mercúrio"], respostaCorreta: "B) Saturno" },
        { pergunta: "Qual planeta tem o maior campo magnético do Sistema Solar?", opcoes: ["A) Saturno", "B) Júpiter", "C) Terra"], respostaCorreta: "B) Júpiter" },
        { pergunta: "O que é um cometa?", opcoes: ["A) Estrela moribunda", "B) Corpo celeste congelado", "C) Satélite artificial"], respostaCorreta: "B) Corpo celeste congelado" },
        { pergunta: "Qual planeta é conhecido como 'Planeta Vermelho'?", opcoes: ["A) Marte", "B) Júpiter", "C) Saturno"], respostaCorreta: "A) Marte" },
        { pergunta: "Qual planeta possui maior número de luas?", opcoes: ["A) Saturno", "B) Júpiter", "C) Netuno"], respostaCorreta: "B) Júpiter" },
        { pergunta: "O que é uma estrela?", opcoes: ["A) Planeta luminoso", "B) Bola de gás que emite luz e calor", "C) Cometa"], respostaCorreta: "B) Bola de gás que emite luz e calor" },
        { pergunta: "Qual planeta é o maior do Sistema Solar?", opcoes: ["A) Saturno", "B) Júpiter", "C) Netuno"], respostaCorreta: "B) Júpiter" },
        { pergunta: "Qual planeta é conhecido por sua cor azul?", opcoes: ["A) Terra", "B) Netuno", "C) Vênus"], respostaCorreta: "B) Netuno" },
        { pergunta: "O que é uma lua?", opcoes: ["A) Asteroide", "B) Satélite natural que orbita um planeta", "C) Cometa"], respostaCorreta: "B) Satélite natural que orbita um planeta" },
        { pergunta: "Qual planeta possui vulcões ativos gigantescos?", opcoes: ["A) Marte", "B) Vênus", "C) Júpiter"], respostaCorreta: "A) Marte" },
        { pergunta: "O que é um cometa?", opcoes: ["A) Estrela moribunda", "B) Corpo celeste congelado", "C) Satélite artificial"], respostaCorreta: "B) Corpo celeste congelado" },
        { pergunta: "Qual planeta tem anéis visíveis?", opcoes: ["A) Saturno", "B) Urano", "C) Júpiter"], respostaCorreta: "A) Saturno" },
        { pergunta: "O que é a Via Láctea?", opcoes: ["A) Galáxia onde estamos", "B) Sistema de planetas", "C) Constelação"], respostaCorreta: "A) Galáxia onde estamos" },
        { pergunta: "O que é o cinturão de asteroides?", opcoes: ["A) Entre Marte e Júpiter", "B) Além de Netuno", "C) Entre Terra e Vênus"], respostaCorreta: "A) Entre Marte e Júpiter" },
        { pergunta: "Qual planeta tem maior inclinação axial?", opcoes: ["A) Urano", "B) Saturno", "C) Terra"], respostaCorreta: "A) Urano" },
        { pergunta: "O que é a translação da Terra?", opcoes: ["A) Giro da Terra em torno do Sol", "B) Giro da Terra em torno do eixo", "C) Movimento da Lua"], respostaCorreta: "A) Giro da Terra em torno do Sol" },
        { pergunta: "O que é a rotação da Terra?", opcoes: ["A) Giro da Terra em torno do Sol", "B) Giro da Terra em torno do eixo", "C) Movimento da Lua"], respostaCorreta: "B) Giro da Terra em torno do eixo" },
        { pergunta: "O que é uma estrela cadente?", opcoes: ["A) Cometa", "B) Meteorito entrando na atmosfera", "C) Lua em movimento"], respostaCorreta: "B) Meteorito entrando na atmosfera" },
        { pergunta: "Qual planeta tem o dia mais longo que o ano?", opcoes: ["A) Vênus", "B) Mercúrio", "C) Marte"], respostaCorreta: "A) Vênus" },
        { pergunta: "O que é uma nebulosa?", opcoes: ["A) Nuvem de gás e poeira", "B) Lua gigante", "C) Planeta distante"], respostaCorreta: "A) Nuvem de gás e poeira" },
        { pergunta: "O que é a fotosfera do Sol?", opcoes: ["A) Camada visível do Sol", "B) Núcleo do Sol", "C) Atmosfera solar"], respostaCorreta: "A) Camada visível do Sol" },
        { pergunta: "O que é a fusão nuclear no Sol?", opcoes: ["A) Processo que gera luz e calor", "B) Explosão de cometa", "C) Formação de asteroides"], respostaCorreta: "A) Processo que gera luz e calor" },
        { pergunta: "Qual planeta é mais frio do Sistema Solar?", opcoes: ["A) Netuno", "B) Mercúrio", "C) Vênus"], respostaCorreta: "A) Netuno" },
        { pergunta: "O que são anéis planetários?", opcoes: ["A) Fragmentos e gelo que orbitam planetas", "B) Satélites naturais", "C) Cometas"], respostaCorreta: "A) Fragmentos e gelo que orbitam planetas" },
        { pergunta: "Qual planeta possui atmosfera composta principalmente por hidrogênio e hélio?", opcoes: ["A) Júpiter", "B) Marte", "C) Terra"], respostaCorreta: "A) Júpiter" },
        { pergunta: "Qual planeta tem a maior lua do Sistema Solar?", opcoes: ["A) Júpiter", "B) Saturno", "C) Netuno"], respostaCorreta: "A) Júpiter" },
        { pergunta: "O que é um asteróide?", opcoes: ["A) Planeta pequeno", "B) Corpo rochoso no espaço", "C) Cometa"], respostaCorreta: "B) Corpo rochoso no espaço" },
        { pergunta: "Qual planeta tem vulcões gigantescos, como o Olympus Mons?", opcoes: ["A) Marte", "B) Vênus", "C) Júpiter"], respostaCorreta: "A) Marte" },
        { pergunta: "O que é a atmosfera de Marte?", opcoes: ["A) Rica em oxigênio", "B) Rica em dióxido de carbono", "C) Rica em nitrogênio"], respostaCorreta: "B) Rica em dióxido de carbono" },
        { pergunta: "Qual planeta tem ventos mais rápidos do Sistema Solar?", opcoes: ["A) Júpiter", "B) Netuno", "C) Saturno"], respostaCorreta: "B) Netuno" },
        { pergunta: "O que é um planeta anão?", opcoes: ["A) Planeta pequeno que não domina sua órbita", "B) Lua de Júpiter", "C) Cometa"], respostaCorreta: "A) Planeta pequeno que não domina sua órbita" }
    ],
        "9ano": [
            { pergunta: "Qual é o maior planeta do Sistema Solar?", opcoes: ["A) Júpiter", "B) Saturno", "C) Netuno"], respostaCorreta: "A) Júpiter" },
    { pergunta: "Qual planeta é conhecido como Planeta Vermelho?", opcoes: ["A) Marte", "B) Vênus", "C) Mercúrio"], respostaCorreta: "A) Marte" },
    { pergunta: "Qual planeta tem os famosos anéis?", opcoes: ["A) Saturno", "B) Urano", "C) Netuno"], respostaCorreta: "A) Saturno" },
    { pergunta: "Qual é o planeta mais próximo do Sol?", opcoes: ["A) Vênus", "B) Mercúrio", "C) Marte"], respostaCorreta: "B) Mercúrio" },
    { pergunta: "Qual planeta tem ventos muito fortes?", opcoes: ["A) Netuno", "B) Júpiter", "C) Marte"], respostaCorreta: "A) Netuno" },
    { pergunta: "Qual planeta é o mais quente do Sistema Solar?", opcoes: ["A) Mercúrio", "B) Vênus", "C) Marte"], respostaCorreta: "B) Vênus" },
    { pergunta: "Qual planeta está entre Marte e Júpiter?", opcoes: ["A) Cinturão de asteroides", "B) Saturno", "C) Urano"], respostaCorreta: "A) Cinturão de asteroides" },
    { pergunta: "Qual planeta tem muitos satélites naturais?", opcoes: ["A) Saturno", "B) Júpiter", "C) Urano"], respostaCorreta: "B) Júpiter" },
    { pergunta: "O que é um cometa?", opcoes: ["A) Uma estrela cadente", "B) Um corpo celeste gelado que orbita o Sol", "C) Um planeta pequeno"], respostaCorreta: "B) Um corpo celeste gelado que orbita o Sol" },
    { pergunta: "Qual planeta é conhecido como 'Planeta Azul'?", opcoes: ["A) Netuno", "B) Terra", "C) Urano"], respostaCorreta: "B) Terra" },
    { pergunta: "Qual planeta é famoso por sua cor vermelha?", opcoes: ["A) Marte", "B) Júpiter", "C) Vênus"], respostaCorreta: "A) Marte" },
    { pergunta: "Qual planeta é conhecido por ser o mais denso?", opcoes: ["A) Terra", "B) Júpiter", "C) Mercúrio"], respostaCorreta: "A) Terra" },
    { pergunta: "Qual planeta gira mais rápido?", opcoes: ["A) Júpiter", "B) Saturno", "C) Marte"], respostaCorreta: "A) Júpiter" },
    { pergunta: "Qual planeta possui maior dia solar (rotação lenta)?", opcoes: ["A) Vênus", "B) Mercúrio", "C) Marte"], respostaCorreta: "A) Vênus" },
    { pergunta: "Qual planeta tem uma coloração azul devido ao metano?", opcoes: ["A) Netuno", "B) Urano", "C) Júpiter"], respostaCorreta: "A) Netuno" },
    { pergunta: "Qual planeta é considerado um gigante gasoso?", opcoes: ["A) Júpiter", "B) Marte", "C) Vênus"], respostaCorreta: "A) Júpiter" },
    { pergunta: "Qual planeta é conhecido por ter ventos mais rápidos?", opcoes: ["A) Netuno", "B) Júpiter", "C) Saturno"], respostaCorreta: "A) Netuno" },
    { pergunta: "Qual é o planeta mais distante do Sol?", opcoes: ["A) Netuno", "B) Urano", "C) Plutão"], respostaCorreta: "A) Netuno" },
    { pergunta: "Qual planeta tem superfície rochosa e é o mais interno do Sistema Solar?", opcoes: ["A) Mercúrio", "B) Marte", "C) Vênus"], respostaCorreta: "A) Mercúrio" },
    { pergunta: "Qual planeta é o único com água em estado líquido na superfície?", opcoes: ["A) Terra", "B) Marte", "C) Vênus"], respostaCorreta: "A) Terra" },
    { pergunta: "Qual planeta é mais próximo da Terra?", opcoes: ["A) Vênus", "B) Marte", "C) Mercúrio"], respostaCorreta: "A) Vênus" },
    { pergunta: "Qual planeta tem uma grande mancha vermelha?", opcoes: ["A) Júpiter", "B) Saturno", "C) Netuno"], respostaCorreta: "A) Júpiter" },
    { pergunta: "Qual planeta é considerado o mais leve em densidade?", opcoes: ["A) Saturno", "B) Júpiter", "C) Urano"], respostaCorreta: "A) Saturno" },
    { pergunta: "Qual planeta é conhecido por sua rotação retrógrada?", opcoes: ["A) Vênus", "B) Urano", "C) Marte"], respostaCorreta: "A) Vênus" },
    { pergunta: "Qual planeta possui mais de 80 luas conhecidas?", opcoes: ["A) Saturno", "B) Júpiter", "C) Urano"], respostaCorreta: "A) Saturno" },
    { pergunta: "Qual planeta tem o maior campo magnético?", opcoes: ["A) Júpiter", "B) Terra", "C) Saturno"], respostaCorreta: "A) Júpiter" },
    { pergunta: "Qual é a principal composição da atmosfera de Marte?", opcoes: ["A) Dióxido de carbono", "B) Nitrogênio", "C) Oxigênio"], respostaCorreta: "A) Dióxido de carbono" },
    { pergunta: "Quais são as quatro luas galileanas?", opcoes: ["A) Io, Europa, Ganimedes, Calisto", "B) Titã, Reia, Dione, Encélado", "C) Fobos, Deimos, Europa, Io"], respostaCorreta: "A) Io, Europa, Ganimedes, Calisto" },
    { pergunta: "Onde está localizado o Cinturão de Kuiper?", opcoes: ["A) Além de Netuno", "B) Entre Marte e Júpiter", "C) Entre Terra e Vênus"], respostaCorreta: "A) Além de Netuno" },
    { pergunta: "O que são meteoritos?", opcoes: ["A) Fragmentos que entram na atmosfera e atingem o solo", "B) Asteroides no espaço", "C) Estrelas cadentes"], respostaCorreta: "A) Fragmentos que entram na atmosfera e atingem o solo" },
    { pergunta: "Qual planeta possui o maior satélite natural chamado Ganimedes?", opcoes: ["A) Júpiter", "B) Saturno", "C) Marte"], respostaCorreta: "A) Júpiter" },
    { pergunta: "Qual planeta possui satélite chamado Titã?", opcoes: ["A) Saturno", "B) Júpiter", "C) Urano"], respostaCorreta: "A) Saturno" },
    { pergunta: "Qual planeta é conhecido como o 'irmão da Terra'?", opcoes: ["A) Vênus", "B) Marte", "C) Mercúrio"], respostaCorreta: "A) Vênus" },
    { pergunta: "Qual planeta é famoso por suas tempestades visíveis?", opcoes: ["A) Júpiter", "B) Saturno", "C) Netuno"], respostaCorreta: "A) Júpiter" },
    { pergunta: "Qual planeta é o mais frio do Sistema Solar?", opcoes: ["A) Netuno", "B) Urano", "C) Plutão"], respostaCorreta: "B) Urano" },
    { pergunta: "Qual planeta possui rotação mais rápida que qualquer outro?", opcoes: ["A) Júpiter", "B) Saturno", "C) Terra"], respostaCorreta: "A) Júpiter" },
    { pergunta: "Qual planeta possui uma superfície de lava e vulcões ativos?", opcoes: ["A) Vênus", "B) Marte", "C) Mercúrio"], respostaCorreta: "A) Vênus" },
    { pergunta: "Qual planeta tem uma lua chamada Fobos?", opcoes: ["A) Marte", "B) Júpiter", "C) Saturno"], respostaCorreta: "A) Marte" },
    { pergunta: "Qual planeta tem uma lua chamada Deimos?", opcoes: ["A) Marte", "B) Júpiter", "C) Saturno"], respostaCorreta: "A) Marte" },
    { pergunta: "Qual planeta é famoso por seu grande sistema de anéis?", opcoes: ["A) Saturno", "B) Júpiter", "C) Urano"], respostaCorreta: "A) Saturno" },
    { pergunta: "Qual planeta é considerado um gigante gasoso?", opcoes: ["A) Júpiter", "B) Marte", "C) Terra"], respostaCorreta: "A) Júpiter" },
    { pergunta: "Qual planeta tem anéis feitos de gelo e rochas?", opcoes: ["A) Saturno", "B) Urano", "C) Netuno"], respostaCorreta: "A) Saturno" },
    { pergunta: "Qual planeta é conhecido por seu tom azul claro?", opcoes: ["A) Urano", "B) Netuno", "C) Terra"], respostaCorreta: "A) Urano" },
    { pergunta: "Qual planeta é mais parecido com a Terra em tamanho?", opcoes: ["A) Vênus", "B) Marte", "C) Mercúrio"], respostaCorreta: "A) Vênus" },
    { pergunta: "Qual planeta é chamado de 'Planeta das tempestades'?", opcoes: ["A) Júpiter", "B) Netuno", "C) Saturno"], respostaCorreta: "A) Júpiter" },
    { pergunta: "Qual planeta possui a maior rotação retrógrada?", opcoes: ["A) Vênus", "B) Urano", "C) Mercúrio"], respostaCorreta: "A) Vênus" },
    { pergunta: "Qual planeta é o mais luminoso visto da Terra?", opcoes: ["A) Vênus", "B) Marte", "C) Júpiter"], respostaCorreta: "A) Vênus" },
    { pergunta: "Qual planeta tem uma superfície com cânions gigantes?", opcoes: ["A) Marte", "B) Mercúrio", "C) Vênus"], respostaCorreta: "A) Marte" },
    { pergunta: "Qual planeta possui uma camada atmosférica densa de dióxido de carbono?", opcoes: ["A) Vênus", "B) Marte", "C) Terra"], respostaCorreta: "A) Vênus" },
    { pergunta: "Qual planeta possui calotas polares de gelo?", opcoes: ["A) Marte", "B) Terra", "C) Mercúrio"], respostaCorreta: "A) Marte" },
    { pergunta: "Qual planeta é famoso por sua cor azul escura?", opcoes: ["A) Netuno", "B) Urano", "C) Terra"], respostaCorreta: "A) Netuno" },
    { pergunta: "Qual planeta tem um dia mais longo que um ano?", opcoes: ["A) Vênus", "B) Mercúrio", "C) Marte"], respostaCorreta: "A) Vênus" }
]
    };
    // === Variáveis globais ===
    let perguntasAtivas = [];
    let indicePerguntaAtual = 0;
    let pontuacao = 0;

    const secaoInicial = document.getElementById('secao-inicial');
    const secaoQuiz = document.getElementById('secao-quiz');
    const secaoOpcoes = document.getElementById('secao-opcoes');
    const secaoSobre = document.getElementById('secao-sobre');
    const secaoDificuldade = document.getElementById('secao-dificuldade');
    const mensagemResultado = document.getElementById('mensagem-resultado');

    const backButton = document.getElementById('backButton');
    const confirmacaoVoltar = document.getElementById('confirmacao-voltar');
    const confirmarVoltar = document.getElementById('confirmar-voltar');
    const cancelarVoltar = document.getElementById('cancelar-voltar');

    // === Função para trocar de seção ===
    function mostrarSecao(secao) {
        [secaoInicial, secaoQuiz, secaoOpcoes, secaoSobre, secaoDificuldade, mensagemResultado].forEach(s => s.style.display = 'none');
        secao.style.display = 'block';
    }

    // === Função de confirmação "Voltar" ===
    function mostrarConfirmacao() {
        confirmacaoVoltar.style.display = 'flex';
        confirmacaoVoltar.classList.remove('animate__fadeOutUp');
        confirmacaoVoltar.classList.add('animate__animated', 'animate__fadeInDown');
    }

    function esconderConfirmacao(callback) {
        confirmacaoVoltar.classList.remove('animate__fadeInDown');
        confirmacaoVoltar.classList.add('animate__fadeOutUp');
        confirmacaoVoltar.addEventListener('animationend', function handler() {
            confirmacaoVoltar.style.display = 'none';
            confirmacaoVoltar.classList.remove('animate__animated', 'animate__fadeOutUp');
            confirmacaoVoltar.removeEventListener('animationend', handler);
            if (callback) callback();
        });
    }

    backButton.addEventListener('click', mostrarConfirmacao);
    confirmarVoltar.addEventListener('click', () => {
        esconderConfirmacao(() => {
            mostrarSecao(secaoInicial);
            indicePerguntaAtual = 0;
            pontuacao = 0;
        });
    });
    cancelarVoltar.addEventListener('click', () => esconderConfirmacao());

    // === Botões principais ===
    document.getElementById('startButton').addEventListener('click', iniciarQuizCompleto);
    document.getElementById('OpcoesButton').addEventListener('click', () => mostrarSecao(secaoOpcoes));
    document.getElementById('SobreButton').addEventListener('click', () => mostrarSecao(secaoSobre));
    document.getElementById('backFromOpcoes').addEventListener('click', () => mostrarSecao(secaoInicial));
    document.getElementById('backFromSobre').addEventListener('click', () => mostrarSecao(secaoInicial));
    document.getElementById('backFromDificuldade').addEventListener('click', () => mostrarSecao(secaoOpcoes));
    document.getElementById('botao-dificuldade').addEventListener('click', () => mostrarSecao(secaoDificuldade));

    // === Funções do quiz ===
    function carregarProximaPergunta() {
        if (indicePerguntaAtual < perguntasAtivas.length) {
            const perguntaAtual = perguntasAtivas[indicePerguntaAtual];
            document.getElementById('titulo-pergunta').textContent = `Pergunta ${indicePerguntaAtual + 1} de ${perguntasAtivas.length}`;
            document.getElementById('texto-pergunta').textContent = perguntaAtual.pergunta;

            const containerOpcoes = document.getElementById('container-opcoes');
            containerOpcoes.innerHTML = '';

            perguntaAtual.opcoes.forEach(opcao => {
                const button = document.createElement('button');
                button.textContent = opcao;
                button.classList.add('opcao-btn');
                button.addEventListener('click', () => verificarResposta(opcao, perguntaAtual.respostaCorreta, button));
                containerOpcoes.appendChild(button);
            });
        } else {
            mostrarSecao(mensagemResultado);
            mensagemResultado.innerHTML = `
                <p>Parabéns! Você acertou ${pontuacao} de ${perguntasAtivas.length} perguntas.</p>
                <button id="vlt-inicio">Tentar Novamente</button>
            `;
            document.getElementById('vlt-inicio').addEventListener('click', () => {
                mostrarSecao(secaoInicial);
                indicePerguntaAtual = 0;
                pontuacao = 0;
            });
        }
    }

    function verificarResposta(opcaoSelecionada, respostaCorreta, botaoSelecionado) {
        const botoes = document.querySelectorAll('.opcao-btn');
        botoes.forEach(b => b.disabled = true);

        if (opcaoSelecionada === respostaCorreta) {
            botaoSelecionado.classList.add('correta');
            document.getElementById('som-acerto').play();
            pontuacao++;
        } else {
            botaoSelecionado.classList.add('errada');
            document.getElementById('som-erro').play();
            const correta = Array.from(botoes).find(b => b.textContent === respostaCorreta);
            if (correta) correta.classList.add('correta');
        }

        setTimeout(() => {
            indicePerguntaAtual++;
            carregarProximaPergunta();
        }, 1000);
    }

    // === Funções de iniciar quiz ===
    function iniciarQuizCompleto() {
        perguntasAtivas = [
            ...perguntasPorAno["6ano"],
            ...perguntasPorAno["7ano"] || [],
            ...perguntasPorAno["8ano"] || [],
            ...perguntasPorAno["9ano"] || []
        ];
        embaralharArray(perguntasAtivas);
        indicePerguntaAtual = 0;
        pontuacao = 0;
        mostrarSecao(secaoQuiz);
        carregarProximaPergunta();
    }

    function iniciarQuizPorAno(ano) {
        perguntasAtivas = perguntasPorAno[ano] || [];
        embaralharArray(perguntasAtivas);
        indicePerguntaAtual = 0;
        pontuacao = 0;
        mostrarSecao(secaoQuiz);
        carregarProximaPergunta();
    }

    // === Função de embaralhar ===
    function embaralharArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

});

