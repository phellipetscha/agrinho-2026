const reveals = document.querySelectorAll('.reveal');

function mostrar() {

reveals.forEach(sec => {

const top = sec.getBoundingClientRect().top;
const altura = window.innerHeight;

if(top < altura - 100){
sec.classList.add('active');
}

});

}

window.addEventListener('scroll',mostrar);
mostrar();

function contador(id,valor){

let numero = 0;

const tempo = setInterval(()=>{

numero++;

document.getElementById(id).innerText = numero + "%";

if(numero >= valor){
clearInterval(tempo);
}

},20);

}

contador("n1",95);
contador("n2",90);
contador("n3",100);