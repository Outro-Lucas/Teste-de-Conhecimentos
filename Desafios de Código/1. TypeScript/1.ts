function maiorNumero(lista: Array<number>): number {

    let maior = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
        }
    }

    return maior;
}

const lista: Array<number> = [10, 8, 3, 5];
const maior = maiorNumero(lista);
console.log("Maior número da lista: ", maior);