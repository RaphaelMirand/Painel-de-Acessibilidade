// Adiciona um ouvinte de evento para o controle deslizante
document.getElementById("slider-font").addEventListener("input", function () {
    // Obtém o valor do slider
    var valorSlider = this.value;

    // Atualiza o valor exibido
    document.getElementById("sliderValue-font").innerText = valorSlider;

    // Altera o tamanho da fonte para todos os elementos dentro do body
    var elementos = document.querySelectorAll('body *');

    elementos.forEach(function (elemento) {
        // Verifica se o elemento não está dentro de .container-acessibilidade ou é .container-acessibilidade
        if (!elemento.closest('.container-acessibilidade')) {
            elemento.style.fontSize = valorSlider + 'px';
            console.log('Novo tamanho da fonte para ' + valorSlider + 'px');
        }
    });
});

// Adiciona um ouvinte de evento para o controle deslizante
document.getElementById("slider-espaco").addEventListener("input", function () {
    // Obtém o valor do slider
    var valorSlider = this.value;

    // Atualiza o valor exibido
    document.getElementById("sliderValue-espaco").innerText = valorSlider;

    // Altera o espaçamento entre as linhas para todos os elementos dentro do body
    var elementos = document.querySelectorAll('body *');

    elementos.forEach(function (elemento) {
        // Verifica se o elemento não está dentro de .container-acessibilidade ou é .container-acessibilidade
        if (!elemento.closest('.container-acessibilidade')) {
            elemento.style.lineHeight = valorSlider + 'px';
            console.log('Novo espaçamento entre linhas para ' + valorSlider + 'px');
        }
    });
});


// Função para transformar estilos em monocromático
function tornarMonocromatico() {
    // Seletor para todas as imagens na página
    var imagens = document.querySelectorAll('img');

    // Loop através de cada imagem
    imagens.forEach(function (imagem) {
        // Aplica o filtro de escala de cinza à imagem
        imagem.style.filter = 'grayscale(1)';
    });

    // Seletor para todos os elementos no corpo da página
    var elementos = document.querySelectorAll('*');

    // Loop através de cada elemento
    elementos.forEach(function (elemento) {
        // Obtém os estilos computados do elemento
        var estilos = getComputedStyle(elemento);

        // Verifica se o elemento tem cor de fundo
        if (estilos.backgroundColor && estilos.backgroundColor !== 'rgba(0, 0, 0, 0)') {
            // Converte a cor de fundo para escala de cinza
            var corCinza = calcularEscalaCinza(estilos.backgroundColor);

            // Aplica a cor de fundo monocromática ao elemento
            elemento.style.backgroundColor = corCinza;
        }

        // Verifica se o elemento tem cor de texto
        if (estilos.color && estilos.color !== 'rgba(0, 0, 0, 0)') {
            // Converte a cor de texto para escala de cinza
            var corTextoCinza = calcularEscalaCinza(estilos.color);

            // Aplica a cor de texto monocromática ao elemento
            elemento.style.color = corTextoCinza;
        }
    });
}

// Função para converter uma cor para escala de cinza
function calcularEscalaCinza(cor) {
    // Converte a cor para o formato RGB
    var rgb = cor.match(/\d+/g);

    // Calcula a média ponderada dos componentes de cor para obter escala de cinza
    var escalaCinza = (parseInt(rgb[0]) * 0.3 + parseInt(rgb[1]) * 0.59 + parseInt(rgb[2]) * 0.11).toFixed(0);

    // Retorna a cor em formato RGB
    return 'rgb(' + escalaCinza + ',' + escalaCinza + ',' + escalaCinza + ')';
}

// Chama a função para tornar o site monocromático
tornarMonocromatico();

document.getElementById("mySlider").addEventListener("input", function () {
    // Atualiza o valor exibido
    document.getElementById("sliderValue").innerText = this.value;
});