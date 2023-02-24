console.log('Hello, world')

const h1 = document.querySelector('h1');
const id_calculo_1 = document.querySelector('#id_calculo-1');
const id_calculo_2 = document.querySelector('#id_calculo-2');
const bnt_calcular = document.querySelector('#btn_calcalar');
const result = document.querySelector('#result');

function btnOnClick(){
    const suma =  id_calculo_1.value + id_calculo_2.value;
    result.innerHTML = "La suma es: "+suma;
}


