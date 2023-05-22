let cliente = ["José",30,1.60,true]; 
// índice        0     1    2   3
// O índice não precisa ser definido,pois é definido pelo próprio sistema e sempre começará pelo valor 0
// Ele serve para pegar os elementos que tem em uma mesma variável

console.log(cliente[0]); // É para aparecer o primeiro elemento dentro da variável, que no caso será José
console.log(cliente[3]); // É para aparecer o quarto elemento dentro da variável, que no caso será true

cliente[4] = 1700;

console.log(cliente); // Mostra as propriedades do array, ou seja, os elementos dele
console.log(cliente[4]); // É para aparecer o quinto elemento dentro da variável, que no caso será 1700

console.log(" Concatenação de variáveis/Conteúdo no JS ");
console.log(`Tamanho do vetor: ${cliente.length}`); // Mostra as propriedades do vetor, ou seja, quantos elementos ele tem, template String JS, tem que ser colocado entre crase ``
console.log("Tamanho do vetor: " +cliente.length); // Forma padrão

cliente.push("Masculino"); // Serve para adicionar um novo elemento ao vetor e para colocar outros elementos
console.log(cliente[5]); // Para exibir o novo elemento inserido, que será Masculino
console.log(cliente); 
console.log(`Size Uograde: ${cliente.length}`); // Para mostrar a atualização, ou seja que agora tem seis elementos dentro do vetor cliente 
// Pois no JavaScript ele ler linha por linha então se vc quiser colocar mais uma coisa e atualizar tem que mostrar tudo depois.

cliente.push({id:5}); // Adicionar um objeto no Array, tem que enta entre chaves {}
console.log(cliente);
console.log("Id do cliente: " +cliente[6].id); // Serve para mostrar o objeto adicionado acima que no caso é 5

cliente.pop(); // Remove o último elemento do vetor com o .pop()

console.log(cliente);

// console.log(cliente[6].id); // Irá dar erro pois está posição foi deletada quando utilizamos o cliente.pop()

delete cliente[2]; // Deleta até o índice, vc pode escolher qual elemento excluir pelo valor do índice
console.log(cliente);