function somaImpares() {
    let soma = 0;

    for (let i = 1; i <= 500; i++){
        if(i % 2 === 1 && i % 3 === 0){
            soma += i;
        }
        alert("A soma dos impares e multiplos de 3 é: " + soma);
    }
}
function menorEMaiorAltura() {
    const quantidadedealturas = 15;
    
let alturas = [1.80, 1.75,1.50,1.55,1.58,1.45,1.62,1.65,1.85,2.05,1.82,1.64,1.61, 1.59,1.60,
];

let menor = alturas[0];
let maior = alturas[0];

for (let altura of alturas) {
if (altura < menor) {
 menor = altura;
}

if (altura > maior) {
   maior = altura;
}
}
alert(`A quantidade alturas percorridas é: $ 
    {quantidadedealturas}
    A maior altura é ${maior} &
    A menor altura é: ${menor}! `);
}
