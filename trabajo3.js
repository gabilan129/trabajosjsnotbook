function unidadesCreador() {

    class cUnidades {
        constructor(interno, patente, motor, km, empresa) {

            this.interno = interno,
                this.patente = patente,
                this.motor = motor,
                this.km = km
            this.empresa = empresa
        }
    }




    const unidadess = [{
        interno: "1101",
        empresa: "Chevallier",
        patente: "jlv-783",
        motor: "Mercedes Benz",
        km: 0
    }, {
        interno: "1102",
        empresa: "Chevallier",
        patente: "jlv-782",
        motor: "Mercedes Benz",
        km: 0
    }, {
        interno: "2121",
        empresa: "Chevallier",
        patente: "jlv-781",
        motor: "Mercedes Benz",
        km: 0
    }, {
        interno: "2131",
        empresa: "Chevallier",
        patente: "jlv-780",
        motor: "Mercedes Benz",
        km: 0
    }, {
        interno: "2141",
        empresa: "Chevallier",
        patente: "jpo-210",
        motor: "Mercedes Benz",
        km: 0
    }, {
        interno: "3631",
        empresa: "urquiza",
        patente: "jpo-207",
        motor: "Mercedes Benz",
        km: 0
    }, {
        interno: "3481",
        empresa: "Sierras De Cordoba",
        patente: "oib-285",
        motor: "Scania",
        km: 0
    }];

    // let unidadesAcrear = parseInt(prompt("ingrese la cantidad de unidades que desee crear"))

    // for (let i = 1; i <= unidadesAcrear; i++) {
    //     unidadess.push(new cUnidades(parseInt(prompt("ingrese el interno")), prompt("ingrese la patente"), prompt("ingrese el tipo de motor"), parseFloat(prompt("ingrese los km de la unidad")),prompt("ingrese la empresa de la unidad").toUpperCase()));

    // }



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

    let unidadEncontrada = prompt("ingrese la unidad que desea generar el parte")

    while (unidadEncontrada != "") {
        switch (unidadEncontrada) {
            case "1101":
                alert("se encontro la unidad 1101")
                alert("se procede con el parte de novedades")
                let parteUnidad1101 = prompt("ingrese el sector del parte");
                let cantidadDepartes = parseInt(prompt("cuantos partes desea ingresar al sector"))


                if (parteUnidad1101 == "carroceria") {
                    for (let i = 0; i < cantidadDepartes; i++) {
                        parteUnidad1101 = prompt("ingrese el parte de novedades de carroceria numero" + " " + (i + 1))
                        console.log(parteUnidad1101);
                    }
                } else if (parteUnidad1101 == "mecanica") {
                    for (let i = 0; i < cantidadDepartes; i++) {
                        parteUnidad1101 = prompt("ingrese el parte de novedades de mecanica numero" + " " + (i + 1))
                        console.log(parteUnidad1101);
                    }

                }
                break;
            case "1102":
                let parteUnidad1102 = prompt("ingrese el parte de novedades");
                console.log(parteUnidad1102);
                console.log("se encontro la unidad 1102 desea generar el parte");
                break;
            case "2121":
                let parteUnidad2121 = prompt("ingrese el parte de novedades");
                console.log(parteUnidad2121);
                console.log("se encontro la unidad 2121 desea generar el parte");
                break;
            case "2131":
                let parteUnidad2131 = prompt("ingrese el parte de novedades");
                console.log(parteUnidad2131);
                console.log("se encontro la unidad 2131 desea generar el parte");
                break;
            case "2141":
                let parteUnidad2141 = prompt("ingrese el parte de novedades");
                console.log(parteUnidad2141);
                console.log("se encontro la unidad 2141 desea generar el parte");
                break;
            case "3631":
                let parteUnidad3631 = prompt("ingrese el parte de novedades");
                console.log(parteUnidad3631);
                console.log("se encontro la unidad 3631 desea generar el parte");
                break;
            case "3841":
                let parteUnidad3841 = prompt("ingrese el parte de novedades");
                console.log(parteUnidad3841);
                console.log("se encontro la unidad 3841 desea generar el parte");
                break;

        }
        unidadEncontrada = prompt("ingrese la nueva unidad para generar un parte ")
    }
    console.log("fin del parte de novedades")
}








unidadesCreador()