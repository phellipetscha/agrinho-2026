function contador(id, valor){

    let numero = 0;

    let intervalo = setInterval(() => {

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