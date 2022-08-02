class cUnidades {
    constructor(interno, patente, motor, km) {

        this.interno = interno,
            this.patente = patente,
            this.motor = motor,
            this.km = km
    }
}


const unidadess = [{
    interno: "1101",
    empresa: "Chevallier",
    patente: "jlv-783",
    motor: "Mercedes Benz",
    km: 0
}];



for (let i = 1; i <= 1; i++) {
    unidadess.push(new cUnidades(parseInt(prompt("ingrese el interno")), prompt("ingrese la patente"), prompt("ingrese el tipo de motor"), parseFloat(prompt("ingrese los km de la unidad"))));

}



function buscarInterno(parqueMovil, nInterno) {

    const unidadBuscada = parqueMovil.find((uni) =>  uni.interno == nInterno);
    return unidadBuscada;

}

for (let i = 1; i <= 1; i++) {

    let unidadEncontrada = parseInt(prompt("ingrese el numero de la unidad que busca"));
    const encontrada = buscarInterno(unidadess, unidadEncontrada);

    if (encontrada != undefined) {

        console.log(encontrada);
    } else {
        console.log("vamos que se puede")
    }
}