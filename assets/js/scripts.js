const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");

const result = document.querySelector("#result");
const calcular = document.querySelector("#calculator-button");

const paragraph = document.createElement("p");

calcular.addEventListener("click", () => {

    if (isNaN(altura.value) == false && isNaN(peso.value) == false) {
        
        const imc = peso.value / (altura.value * altura.value);
        
        paragraph.innerHTML = `O seu imc é ${imc.toFixed(2)} || ${classification(imc)}`;

        result.appendChild(resultado(paragraph));

    }

    else {
        paragraph.innerHTML = "Valores inválidos!";
        
        result.appendChild(invalidResult(paragraph));
    }

});

function resultado(value) {

    value.style.color = "#50fa7b";
    return value;
}

function invalidResult(value) {
    value.style.color = "#ff5555";
    return value;
}

function classification(imc) {

    if (imc < 18.5) {
        return "Abaixo do peso";
    }
    else if (imc > 18.6 && imc < 24.9) {
        return "Peso ideal (parabéns)";
    }
    else if (imc > 25 && imc < 29.9) {
        return "Levemente acima do peso";
    }
    else if (imc > 30 && imc < 34.9) {
        return "Obesidade grau I";
    }
    else if (imc > 35 && imc < 39.9) {
        return "Obesidade grau II";
    }
    else if (imc > 40) {
        return "Obesidade III (mórbida)";
    }
    else {
        return "Digite um valor!";
    }
}