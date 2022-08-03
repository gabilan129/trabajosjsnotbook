class cUnidades {
    constructor(interno, patente, motor, km, anio) {

        this.interno = interno,
            this.patente = patente,
            this.motor = motor,
            this.km = km
        this.anio = anio
    }
}




const unidadess = [];

let unidadesAcrear = parseInt(prompt("ingrese las unidades que desea crear"))

for (let i = 1; i <= unidadesAcrear; i++) {
    unidadess.push(new cUnidades(parseInt(prompt("ingrese el interno")), prompt("ingrese la patente"), prompt("ingrese el tipo de motor"), parseFloat(prompt("ingrese los km de la unidad")),parseInt(prompt("ingrese el año de la unidad")) ));

}



function buscarInterno(parqueMovil, nInterno) {

    const unidadBuscada = parqueMovil.find((uni) => uni.interno == nInterno);
    return unidadBuscada;

}

let unidadesAbuscar = parseInt(prompt("cuantas unidades quiere buscar"))

for (let i = 1; i <= unidadesAbuscar; i++) {

    let unidadEncontrada = parseInt(prompt("ingrese el numero de la unidad que busca"));
    const encontrada = buscarInterno(unidadess, unidadEncontrada);

    if (encontrada != undefined) {

        console.log(encontrada);
    } else {
        console.log("la unidad no se encuentra")
    }
}





const filtroAnio = unidadess.filter((ani) => ani.anio < 5);
console.log("estas unidades tiene menos de 5 años")
console.log(filtroAnio);