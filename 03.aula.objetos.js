Sintase de um objeto literal

const daniel = {
    nome: ' Debora Ester',
    idade: 27
};

console.log(daniel.nome);
console.log(daniel.idade);

Editando informações do objeto efetuando esse processo abaixo inseri altura e deleta a leitura do nome

const daniel = {
    nome: ' Debora Ester',
    idade: 27,
};

daniel.altura = 1.58;
delete daniel.nome;
console.log(daniel);

Criando metodos para objetos '

const pessoa = {
    nome: ' Debora Ester',
    idade: 27,

    descrever: function() {

        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
};

pessoa.descrever();

Acessando dinamicamente valores do objeto

const pessoa = {
    nome: ' Debora Ester',
    idade: 27,

    descrever: function() {

        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
};

const atributo = 'idade';

console.log(pessoa[atributo]);