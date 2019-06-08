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

/*Ejercicio 4*/
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

}

