/*Ejercicio 1
const button = document.querySelector('.push');
const textElement = document.querySelector('p');

button.addEventListener ('click',  () => {
    textElement.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!'});*/

/*Ejercicio 2
const button = document.querySelector('.enter');
const textElement = document.querySelector('input');

button.addEventListener('click', () => {
    console.log(`Hola ${textElement.value}`);
})*/

/*Ejercicio 3
const textElement = document.querySelector('p');

textElement.addEventListener('mouseover', () => {
    const p = document.createElement('p');
    p.innerHTML = 'lorem ipsum';
    document.body.appendChild(p);
})*/
/*
const plusOneButtonElement = document.querySelector('.button__add-one');

function handlePlusOneButton(event) {
  // Recogemos el elemento sobre el que pusimos el listener
  // y lo asignamos a una constante
  const buttonElement = event.currentTarget;
  buttonElement.innerHTML = parseInt(buttonElement.innerHTML) + 1;
}

plusOneButtonElement.addEventListener('click', handlePlusOneButton);*/

/*Ejercicio 4
const button_filmElement = document.querySelector('.button_film');
const listElement = document.querySelector('ul');
const pelis = ['Inception', 'The butterfly effect', 'Eternal sunshine', 'Blue velvet', 'Split']

button_filmElement.addEventListener('click', () => {
    for (let film of pelis) {
        const li = document.createElement('li');
        li.innerHTML = film;
        li.addEventListener('click', name)
        listElement.appendChild(li);
    }
});

function name(event){
    console.log(event.currentTarget.innerHTML)
}*/

/*Ejercicio 5

const listElement = document.querySelectorAll('li');

for (let li of listElement) {
    li.addEventListener('click', () => {
        li.classList.toggle('teacher--selected');
        const span = li.querySelector('.favorite');
        if (span.innerHTML == 'Quitar') {
            span.innerHTML = 'Añadir';
        } else {
            span.innerHTML = 'Quitar'
        }
    })
}
*/

/*Ejercicio 8*/

const aElement = document.querySelector('.navbar');

function handleAScroll(event) {
    event.preventDefault();
    console.log('Hacer scroll');
}

aElement.addEventListener('click', handleAScroll);
