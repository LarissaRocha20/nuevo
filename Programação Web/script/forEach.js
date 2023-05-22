

console.log("--------------- forEach ---------------");
console.log("-------------- Exemplo 1 --------------");

let numero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Vetor

    function tabuadaDe2(item){
        console.log (item * 2);
    }

numero.forEach(tabuadaDe2);

console.log("-------------- Exemplo 2 --------------");

let num = [1600, 1500, 2500, 3500, 4500, 5000, 6500, 7500, 8500, 9500, 10000]; // Vetor

    function percen(num0){
        let val = 2/100;  // 2%
        let per = num0 * val;
        console.log (num0 + per);
    }

num.forEach(percen);

console.log("-------------- Exemplo 3 --------------");

let salarios = [1600, 1700, 1400, 1800, 2000];

    function calcAdd(fato){
        // let add = 3/100;  // 3%
        // let salario = fato * add;

        // console.log(fato + salario)

        let add = (fato/100) * 3;
        console.log(fato + add);

    }

salarios.forEach(calcAdd);

console.log("---------- Pegando os índices ----------");

let valores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

    function somar(item, indice) {
        total += item; // adiciona o valor de cada item do array 
        console.log("Posição:" + indice + " - Soma = " + total); 
    }


valores.forEach(somar);

console.log("--- Usando forEach com função anônima ---")

let modelPhones = ["A31","MotoOne","A51","A72","Redmi"];

    modelPhones.forEach(function(item,indice){
        console.log(indice+" = "+ item);  
    });



