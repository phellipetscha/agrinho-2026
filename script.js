const reveals = document.querySelectorAll('.reveal');

function revealSections(){
    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){
            section.classList.add('active');
        }

    });
}

window.addEventListener('scroll', revealSections);
revealSections();

function contador(id, valor){

    let numero = 0;

    const intervalo = setInterval(() => {

        numero++;

        document.getElementById(id).innerText = numero + "%";

        if(numero >= valor){
            clearInterval(intervalo);
        }

    }, 20);

}

contador("n1",95);
contador("n2",90);
contador("n3",100);