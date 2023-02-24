console.log('Hello, world')

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const id_calculo_1 = document.querySelector('#id_calculo-1');
const id_calculo_2 = document.querySelector('#id_calculo-2');
const bnt_calcular = document.querySelector('#bnt_calcular');
const result = document.querySelector('#result');

// Escuchar eventos con addEventListener
form.addEventListener('submit', btnClick);

function btnClick(event){
    const suma =  id_calculo_1.value + id_calculo_2.value;
    result.innerText = "La suma es: "+suma;
}


