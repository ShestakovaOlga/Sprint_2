/*Ejercicio 1
const numbers = [1, 2, 3]
const items = document.querySelector('.list');

for (let list of numbers) {
    const newList = document.createElement('li')
    newList.innerHTML = list;
    console.log(newList)
    items.appendChild(newList);
}*/

/*Ejercicio 2
import img1madrid from './madrid1.jpg'
import img2madrid from './M2.jpg'
import img3madrid from './M3.jpg'
import img1paris from './p1.jpeg'
import img2paris from './p2.jpg'
import img3paris from './p3.jpg'
import img1ny from './NY1.jpg'
import img2ny from './NY2.jpg'
import img3ny from './ny3.jpg'
const img1Element = document.querySelector('.img_list img:nth-child(1)')
const img2Element = document.querySelector('.img_list img:nth-child(2)')
const img3Element = document.querySelector('.img_list img:nth-child(3)')
const selectElement = document.getElementById('form');
selectElement.addEventListener('change', () => {
    const value = selectElement.options[selectElement.selectedIndex].value;
    if (value == 'Madrid') {
        ponerMadrid()
    }
    if (value == 'París') {
        ponerParis()
    }
    if (value == 'Nueva_York') {
        ponerNY()
    }

})
function ponerMadrid() {
    img1Element.src = img1madrid;
    img2Element.src = img2madrid;
    img3Element.src = img3madrid;
}
function ponerParis() {
    img1Element.src = img1paris;
    img2Element.src = img2paris;
    img3Element.src = img3paris;

}
function ponerNY() {
    img1Element.src = img1ny;
    img2Element.src = img2ny;
    img3Element.src = img3ny;

}

ponerMadrid()*/

/*Ejercicio 3
const formulario = [{
    nombre: 'Anna',
    apellidos: 'Blanca Suarez',
    telefono: 689000000,
},
{
    nombre: 'Lila',
    apellidos: 'Villa Gonzales',
    telefono: 689111000,
},
{
    nombre: 'Sara',
    apellidos: 'García García',
    telefono: 689222000,
}]

const input1Element = document.querySelector('#firstname');
const input2Element = document.querySelector('#secondname');
const input3Element = document.querySelector('#num');
const selectElement = document.getElementById('form');

selectElement.addEventListener('change', () => {
    const value = selectElement.options[selectElement.selectedIndex].value;
    for (let add of formulario) {
        if (value == add.nombre) {
            input1Element.value = add.nombre;
            input2Element.value = add.apellidos;
            input3Element.value = add.telefono;
            console.log(input1Element.value)
        }

    }
})*/

/*Ejercicio 6*/
const textElement = document.querySelector('.texto');
const color = ['white;', 'blue', 'red', 'green', 'yellow', 'rosybrown']
let numeroRepetir = '';
for (let i = 0; i < 100; i++) {
    const brElement = document.createElement('br')
    const selectElement = document.createElement('select')
    const optionElement = document.createElement('option')
    const newText = document.createTextNode('He aprendido bien cómo funcionan los bucles');
    console.log(i)
    textElement.appendChild(newText);
    selectElement.appendChild(optionElement);
    textElement.appendChild(selectElement)
    textElement.appendChild(brElement);
}

