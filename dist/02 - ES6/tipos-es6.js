"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
//arrow function
const increment = (value) => ++value;
console.log(increment(5));
const saudacao = () => console.log("Olá");
const salve = (pessoa) => console.log("Olá" + pessoa);
//spreed(espalhar) & rest (juntar)
const numbers = [1, 88, 6123413412, 99, 5, 4, 2, 4, 255, 55, 2, 2, 666, 88];
console.log(Math.max(...numbers));
const turmaA = ["ana", "maria"];
const turmaB = ["pedro", ...turmaA];
function retornaArray(...args) {
    return console.log(args);
}
retornaArray(1, 2, 569, 7, 8, 9, 6, 111, 22, 54, 6);
//Destructuring(ARRAY)
const caracteristicas = ["Motor Zetec 1.8", 2020];
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
// console.log(ano, motor);
const [motor, ano] = caracteristicas;
console.log(ano, motor);
//Destructuring(OBJECT)
exports.person = {
    name: "jora",
    age: 20,
};
// console.log(person.name);
// console.log(person.age);
const { name, age } = exports.person;
console.log(exports.person.name);
console.log(exports.person.age);
// Callback
function esperar3s(callback) {
    setTimeout(() => {
        callback('3s depois...');
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
function esperar3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3s depois promie...');
        }, 3000);
    });
}
//promisses
esperar3sPromise()
    .then(dado => console.log(dado));
fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title))
    .catch(err => console.log('Catch!!!!' + err));
