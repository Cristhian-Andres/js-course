console.log('Hello, world')

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const clase_parrafo = document.querySelector('.clase_parrafo');
const id_parrafo = document.querySelector('#id_parrafo');
const input = document.querySelector('input');

console.log(input.value)

console.log({
    h1,
    p,
    clase_parrafo,
    id_parrafo,
    input
});

// Cambiar elementos del párrafo
h1.innerHTML = "holaa";
// Agregar elementos al html
const img = document.createElement('img');
img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png')
console.log(img)
id_parrafo.append(img)
