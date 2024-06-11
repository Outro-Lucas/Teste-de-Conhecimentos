interface Person {
    name: string;
    age: number;
}

function maisVelha(pessoa: Array<Person>): string {
    let velho = pessoa[0];
    for (let i = 1; i < pessoa.length; i++) {
        if (pessoa[i].age > velho.age) {
            velho = pessoa[i];
        }
    }

    return velho.name;
}

const pessoa: Array<Person> = [
    { name: "Lucas", age: 24 },
    { name: "Diego", age: 37 },
    { name: "Pedro", age: 20 }
];
const velho = maisVelha(pessoa);
console.log("O nome da pessoa mais velha é:", velho);