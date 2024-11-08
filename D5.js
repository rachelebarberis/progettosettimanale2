/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log(pets[0]);
console.log(pets[1]);
console.log(pets[2]);
console.log(pets[3]);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse ();
console.log(pets);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const firstpets=pets.shift();
pets.push(firstpets);
console.log(pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let i=0; i<cars.length; i++) {
  cars[i].licensePlate= "1123344";
}
console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push({ brand: 'Alfa Romeo',
  model: 'Mito',
  color: 'rossa',
  trims: ['active', 'style', 'GT'],
  licensePlate: '4566789'})

  console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (let i=0; i<cars.length; i++) {
  justTrims.push(cars[i].trims[0])
}
console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i=0; i<cars.length; i++) {
  if(cars[i].color[0]=== 'b') {
    console.log('Fizz');
  } else {
    console.log('Buzz');
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i=0
for (let i=0; i<numericArray.length; i++) {
  console.log(numericArray[i]);
  if(numericArray[i]===32) {
    break;
  }
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

const numerico =[]

for (let i=0; i<charactersArray.length; i++) {
  let posicion; 
  switch(charactersArray[i]) {
    case 'a': posicion=1;
    break;
    case 'b': posicion=2;
    break;
    case 'c': posicion=3;
    break;
    case 'd': posicion=4;
    break;
    case 'e': posicion=5;
    break;
    case 'f': posicion=6;
    break;
    case 'g': posicion=7;
    break;
    case 'h': posicion=8;
    break;
    case 'i': posicion=9;
    break;
    case 'l': posicion=10;
    break;
    case 'm': posicion=11;
    break;
    case 'n': posicion=12;
    break;
    case 'o': posicion=13;
    break;
    case 'p': posicion=14;
    break;
    case 'q': posicion=15;
    break;
    case 'r': posicion=16;
    break;
    case 's': posicion=17;
    break;
    case 't': posicion=18;
    break;
    case 'u': posicion=19;
    break;
    case 'v': posicion=20;
    break;
    case 'z': posicion=21;
    break;
  }
  numerico.push(posicion);

}
 console.log(numerico);
