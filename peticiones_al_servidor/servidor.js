/*Ejercicio 3
function getData(username) { //creamos una funcion para traernos los datos del servidor cuando alguien pulse boton
    console.log('getdata', username)
    fetch(`https://api.github.com/users/${username}`) //hacemos fetch
        .then(r => r.json())
        .then(data => {
            const userNameElement = document.querySelector('.username_text');
            userNameElement.innerHTML = data.name
            const photouserElement = document.querySelector('img')
            photouserElement.src = data.avatar_url
            const repositorioElement = document.querySelector('.number_of_rep')
            repositorioElement.innerHTML = data.public_repos
        })
}
const buttonElement = document.querySelector('.button');
const inputElement = document.querySelector('#userName');

buttonElement.addEventListener('click', () => {
    const value = inputElement.value;
    getData(value)
})*/

/*Ejercicio 4
const buttonElement = document.querySelector('.button');
const inputElement = document.querySelector('#input');

buttonElement.addEventListener('click', () => {
    const value = inputElement.value;
    getData(value)
})

function getData(organizations) {
    console.log('getdata', organizations)
    fetch(`https://api.github.com/orgs/${organizations}`)
        .then(orgsResponse => orgsResponse.json())
        .then(Data => {
            console.log(Data)
            return fetch(Data.repos_url)
        })
        .then(r => r.json())
        .then(resp => {
            console.log('Breeds data response: ', resp);
            const ulElement = document.querySelector('ul');
            let ul = '';
            for (const repo of resp) {
                const liElement = `<li>${repo.name}</li>`
                ul += liElement;
            }
            ulElement.innerHTML = ul;
        })
        .catch(error => console.log(`Ha sucedido un error: ${error}`));

}*/

/*Ejercicio 5
const listElement = document.querySelector('ul');
fetch(`https://dog.ceo/api/breeds/list`)
    .then(dogResponse => dogResponse.json())
    .then(data => {
        const dogList = data.message;
        const i = getRandomInt(dogList.length - 1)
        listElement.innerHTML = dogList[i]
    })
    .catch(error => console.log(`Ha sucedido un error: ${error}`));


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}*/

/*Ejercicio 2 Servidor2*/


const buttonElement = document.querySelector('.button');
const inputElement = document.querySelector('#name');

buttonElement.addEventListener('click', () => {
    const value = inputElement.value;

    localStorage.setItem('data', JSON.stringify(data));
    const savedData = JSON.parse(localStorage.getItem('data'));
    console.log(savedData.length)

    fetch(`https://swapi.co/api/people/?search=${value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.results)
            const ulElement = document.querySelector('ul');
            let ul = '';
            for (const per of data.results) {
                const liElement = `<li>${per.name}, height: ${per.height}cm</li>`
                ul += liElement;
            }
            ulElement.innerHTML = ul;

        })
})

