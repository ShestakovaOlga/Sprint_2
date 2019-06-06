/*const avatarElement= document.querySelector(`.case`);
const userAvatar = 'http://placehold.it/300x300';
let imagen = "";
let defaultImg = 'http://www.fillmurray.com/300/300';
imagen = userAvatar || defaultImg;
avatarElement.src = imagen;*/

const name = "Olga";

if(name === "Lila") {
    console.log(`Bienvenida, ${name}`);
}

else {
    console.log("Lo siento pero el usuario que has introducido no está registrado");
}



let num1 = 0;

if (num1 >= 0) {
    console.log('El número es 0')
  } else if (num1<0) {
    console.log('El número es negativo')
  } else if (num1>1) {
    console.log('El número más 2 es mayor 13')
  } else if (num1>=40) {
    console.log('El número es mayor que 20 pero menor que 50')
  } else {
    console.log('el número no es 123123125')
  }


  let age = 0;
  let dogAge = 12;

  if (dogAge >= 1) {
      age += 15;
      dogAge--;
      console.log(`La edad de tu perro es ${age} de humano`);
  }
  if (dogAge >= 2) {
    age += 9;
    dogAge--;
    console.log(`La edad de tu perro es ${age} de humano`);
}
if (dogAge >= 3) {
    age+=dogAge*5;
    console.log(`La edad de tu perro es ${age} de humano`);
}

const divElement = document.querySelector(`div`);
const titleElement = document.querySelector(`h1`);
const textElement = document.querySelector(`span`);

if (divElement.classList.contains(`warning`)){
  titleElement.innerHTML = 'AVISO';
  textElement.innerHTML = 'Tenga cuidado';
}
if (divElement.classList.contains(`error`)){
  titleElement.innerHTML = 'ERROR';
  textElement.innerHTML = 'Ha surgido un error';
}
if (divElement.classList.contains(`succes`)){
  titleElement.innerHTML = 'CORRECTO';
  textElement.innerHTML = 'Los datos son correctos';
}
let initYear = 2019;
let finalYear = 2050;
for (initYear; initYear <= finalYear; initYear ++){
  if (((initYear % 4 == 0) && (initYear % 100 != 0 )) || (initYear % 400 == 0)){
    document.writeln( initYear + ' Es bisiesto. ');
  }
  /*
  else {
    document.writeln( initYear + ' No es bisiesto ');
  }*/

}
function sum(a, b, c){
  const result = a + b + c;
  return result;
}
console.log(sum(33, 45, 100));

function num(a, b, c, d){
  const result = (a + b + c + d) / 4;
  return result;
}
console.log(num(2, 3, 4, 5));
 

function num3(a) {
  const c = a * 0.21;
  const d = a * 1.21;
  return `Precio sin IVA: ${a}, IVA: ${c} y Total: ${d}`;
}
console.log(num3(300000));

const ejercicio = (borderbox, widthcontent, paddingcontent, bordercontent ) => {
  if (borderbox) {
    return widthcontent + paddingcontent + bordercontent;
  }
  else {
    return widthcontent;
  }

}
console.log(ejercicio(true, 1, 2, 3));