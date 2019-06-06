
/*Ejercicio 1
const adalaber1 = {
    name: 'Susana',
    age: 34,
    profession: 'periodista',
};
adalaber1.run = (phrase) => `${phrase}`;
console.log(adalaber1.run('Estoy corriendo!'));

const spanElement = document.querySelector('.span_uno');
spanElement.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.profession}.`

const adalaber2 = {
    name: 'Rocío',
    age: 25,
    profession: 'actriz',
};
const spanElement2 = document.querySelector('.span_dos');
spanElement2.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.profession}.`*/


/*Ejercicio 
const adalaber1 = {
    name: 'Susana',
    age: 34,
    profession: 'periodista',
};
adalaber1.run = (phrase) => `${phrase}`;
console.log(adalaber1.run('Estoy corriendo!'));
adalaber1.runAMarathon = (distance) => `Estoy corriendo un maratón de ${distance} kilómetros`;
console.log(adalaber1.runAMarathon(`50`))2*/

/*Ejercicio 3
const adalaber1 = {
    name: 'Susana',
    age: 34,
    profession: 'periodista',
};
adalaber1.showBio = function () {
    alert(`Mi nombre es ${this.name} , tengo ${this.age} años y soy ${this.profession}`)
}
adalaber1.showBio();

const adalaber2 = {
    name: 'Rocío',
    age: 25,
    profession: 'actriz',
};
adalaber2.showBio = function () {
    alert(`Mi nombre es ${this.name} , tengo ${this.age} años y soy ${this.profession}`)
}
adalaber2.showBio();*/


/*Ejercicio5
inputElement = document.getElementById('name');
 console.dir(inputElement);*/

/*Ejercicio 6
aumentarElement = document.querySelector('.button_sumar');
disminuirElement = document.querySelector('.button_restar');
restablecerElement = document.querySelector('.button_restablecer');
const contador = {
    max: 10,
    min: 0,
    actual: 1,
    inicial: 0,
}

contador.aumentar = function () {
    if (this.actual == this.max) {
        return
    }
    this.actual += 1;
}
contador.disminuir = function () {
    if (this.actual == this.min) {
        return
    }
    this.actual -= 1;
}
contador.restablecer = function () {
    this.actual = this.inicial;
}
aumentarElement.addEventListener('click', () => {
    contador.aumentar();
    console.log(contador)
})
disminuirElement.addEventListener('click', () => {
    contador.disminuir();
    console.log(contador);
})
restablecerElement.addEventListener('click', () => {
    contador.restablecer();
    console.log(contador);
})*/



/*Ejercicio 7

const job = 'developer';
const usuario = {};
usuario.firstname = 'Olga';
usuario.secondName = 'Shestakova';
usuario.age = 28;
usuario.job = job;

console.log(`${job}, ${usuario.firstname} ${usuario.secondName} ${usuario.age} ${usuario.job}`);*/

/*Ejercico Bonus*/
const buttonElement = document.querySelector('.update');
const selectElement = document.getElementById('face_selector');
const emojiElement = document.querySelector('.emoji');
const containerElement = document.querySelector('.container');

buttonElement.addEventListener('click', () => {
    const value = selectElement.options[selectElement.selectedIndex].value;
    emojiElement.innerHTML = value;
    const numeroAleatorio = getRandomInt(100);
    if (numeroAleatorio % 2 == 0) {
        containerElement.classList.toggle('rojo');
    }
    console.log(numeroAleatorio);
})

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}