    // let largura = window.prompt("Digite a largura: ");

    // function calArea(larg=6, comp=25){ 
    //     let area = larg * comp;
    //     return "Área: " + area;
    // }

    // console.log(calArea(10,30));
    // console.log(calArea());
    // console.log(calArea(largura,30));
    // console.log(calArea(5,20));

    let largura = window.prompt("Digite a largura: ");
    let area; 

        function calArea(larg=null, comp=null){
            if(larg != null && larg != 0 && comp != null && comp != 0){
                area = larg * comp;
            }else{
                alert("Parâmetros incorretos!");
            }
            return "Área: " + area;
        }

    console.log(calArea(largura,30));
    // console.log(calArea(0, 30));

    console.log("---------- REST PARAMATERS ----------");

    function FuncaoVariosParam(param1, ...maisParams){
        console.log(param1); // 10
        // console.log(maisParams); // [3, 5, 6, 89, 2, 4, 23]

        for (const value of maisParams) {
            console.log(value);
        }

    }
    FuncaoVariosParam(10, 3, 5, 6, 89, 2, 4, 23);

    console.log("---------- Funções Anônimas ----------");

    let a = parseFloat(window.prompt("Digite o 1º valor: "));
    let b = parseFloat(window.prompt("Digite o 2º valor: "));
    // É possível passar uma outra função como parâmetro
    const soma = function(x,y){ // função que executa uma soma 
        return x + y; 
    } 
    const mostrarResult = function(a,b,operacao = soma){
        console.log(operacao(a,b));
    }
    mostrarResult(a,b); // Output: 50

    console.log("----------- Funções de seta -----------");

    let n1 = parseFloat(window.prompt("Digite a 1º nota: "));
    let n2 = parseFloat(window.prompt("Digite a 2º nota: "));
    let media = (n1,n2) => {
        return `Média: ${(n1+n2)/2}`;
    }
    console.log(media(n1,n2)); // Output: Média: 8.5