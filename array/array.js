
/*Ejercicio 1 Array 
function workWithMovies() {
    const movies = [
        'Snow',
        'Winter',
        'Amor',
    ]
    movies[3] = 'Spring';
    movies[3] = 'Summer';
    movies[0] = 'River';
    console.log(movies);
}

workWithMovies();*/


/*Ejercicio 2 Bucles
for (let i = 0; i<10; i++){
    console.log('Voy por la vuelta ' + i);
}*/

/*Ejercicio 3
let acc = 0;
for (let i = 0; i<10; i++){
    acc+=2;
}
console.log('El resultado es: ' + acc);*/

/*Ejercicio 4

let año = 2017; //Guardamos el ultimo año de luna
for (let i = 0; i<15; i++){  //el bucle da vueltas 15 veces 
    año+=3;// le sumamos 3 años
    console.log(`Siguiente luna del cazador será: ` + año); //pintamos en la consola el resultado
}*/

/*Ejercicio 5
const numbers = [1, 1 ,1, 1, 1, 1, 1,];
/*let acc = 0;
for (let i = 0; i < numbers.length; i++){
    acc += numbers[i] / 6;
    console.log('La media es: ' + acc);
}
function average(numbers) {
    let acc = 0;
    for (let i = 0; i < numbers.length; i++){
        acc += numbers[i] / 7;
        console.log('La media es: ' + acc);
    } 
}
average(numbers);*/

/*Ejercicio 6
const input1Element = document.querySelector('.film');//Traemos los elementos de html
const input2Element = document.querySelector('.film2');
const buttonElement = document.querySelector('.button');
const arrFilms = []; // creamos un array vacio

buttonElement.addEventListener('click',()=>{ //hacemos un addEventListener para escuchar el evento click del boton 
    const film1 = input1Element.value; //Sacamos el valor de los inputs y lo guardamos en las variables 
    const film2 = input2Element.value;
    arrFilms.push(film1,film2); //utilizando el metodo .push añadimos los valores de los inputs en el array que estaba vacio
    for( let peli of arrFilms){ // en la variable peli guardamos elemento del array arrFilms
        console.log(`¡A mí también me encantó "${peli}"! Tenemos mucho en común, humana.`) //pintamos el resultado por la consola
    }
})*/


/*Ejercicio 7

const adalabers = [
    {
        name: 'Maria',
        age: 29,
        profession: 'diseñadora',
    },
    {
        name: 'Lucía',
        age: 31,
        profession: 'inginiera química',
    },
    {
        name: 'Susana',
        age: 34,
        profession: 'periodista',
    },
    {
        name: 'Rocío',
        age: 25,
        profession: 'actriz',
    },
    {
        name: 'Inmaculada',
        age: 21,
        profession: 'diseñadora',
    }
]

function countAdalabers(adalabers1) { //creamos una funcion para sacar la longitud del array
    return adalabers1.length;
}
console.log(countAdalabers(adalabers)); //lo pintamos por la consola llamando la funcion con el array

function averageAge(adalabers1) { // creamos una funcion para sacar la media de la edad del array, 
    let totalAge = 0; //en una variable guardamos un valor 
    for (let ad of adalabers1) { // con el for of sacamos las edades del array
        totalAge += ad.age; // sumamos las edades y las guardamos en la var totalAge
    }
    return totalAge / adalabers1.length; //devolvemos el resultado de totalAge y lo dividimos entre el numero de los .age
}
console.log(averageAge(adalabers));

function theYoungest(adalabers1) { //creamos una funcion para sacar la edad mas pequeña
    let minAge   //creamos una variable vacia donde guardadmos luego el valor de la edad minima
    for (let ad of adalabers1) { //cogemos un for of y sacamos todas las edades del array
        if (minAge) { //creamos un if para comparar las edades
            if (ad.age < minAge) {
                minAge = ad.age;
            }
        } else {
            minAge = ad.age;
        }
    }
    return minAge;
}
console.log(theYoungest(adalabers));


function countDesigners(adalabers1) { //creamos una funcion para devolver un numero de adalabers que son diseñadores
    let diseñadoras = 0;
    for (let ad of adalabers1) {
        if (ad.profession == 'diseñadora'){
            diseñadoras++;
        }
    }
    return diseñadoras;
}

console.log(countDesigners(adalabers));*/

/*Ejercicio 8 Lista de tareas*/
const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Soy to buena', completed: true },
    { name: 'Soy la mejor programadora del mundo', completed: true },
    { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false }
];
let textElement = document.querySelector('span');
function contarTareas() {
    let completadasTareas = 0;
    let porRealizar = 0;
    for (let ad of tasks) {
        if (ad.completed == true) {
            completadasTareas++;
        }
        if (ad.completed == false) {
            porRealizar++;
        }
    }
    textElement.innerHTML = `Tienes ${completadasTareas + porRealizar} tareas.Te quedan ${porRealizar} por realizar. Tienes realizadas ${completadasTareas}.`
}

contarTareas();


const listElement = document.querySelector('ul');
function hacerLista(task) {
    const li = document.createElement('li');
    const check = document.createElement('input');
    check.type = 'checkbox';
    if (task.completed) {
        li.classList.add('list_tarea');
        check.checked = true;
    }
    li.innerHTML = task.name;// cuando alquien pulse el checkbox, hay que cambiar la propiedad completed de la tarea a true
    li.appendChild(check);
    check.addEventListener('click', () => {//escuchar evento en checkbox, investigar que evento se usa en checkbox
        if (check.checked == true) {
            task.completed = true;
        } else {
            task.completed = false;
        }
        console.log(tasks)
        pintarLista()// y volver a pintar todas las tareas
        contarTareas()
    })


    listElement.appendChild(li);
}
function pintarLista() {
    listElement.innerHTML = '';
    for (let tarea of tasks) {
        hacerLista(tarea)
    }
}
pintarLista();



/*Ejercicio 9 bonus

function pintarArbol(num){ //creamos una funcion
    let estrella = ''; //creamos una var donde guardamos un string con espacio
    for(let x=0; x<num; x++){
        estrella += " "; //guardamos el resultado de for en la var estrella
    }
    estrella += "*"; //
    console.log(estrella)
    for( let i=0; i<num; i++){ //con for le dicimos que pinte espacio por cada linea y tiene que ser menor que el numero de triangulos
        let out = '';
        for(let x=0; x<num-i; x++){
            out += " ";
        }
        for(let x=0; x<=i*2; x++){
            out += "▲";
        }
        console.log(out);
    }
    let palito = '';
    for(let x=0; x<num; x++){
        palito += " ";
    }
    palito += "|";
    console.log(palito)
}
pintarArbol(20);*/