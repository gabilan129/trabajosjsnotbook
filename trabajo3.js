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
    let cantidadDepartes1101;
    let cantidadDepartes1102;
    let cantidadDepartes2121;
    let cantidadDepartes2131;
    let cantidadDepartes2141;
    let cantidadDepartes3631;
    let cantidadDepartes3481;


    while (unidadEncontrada != "") {
        switch (unidadEncontrada) {
            case "1101":
                alert("se encontro la unidad 1101")
                alert("se procede con el parte de novedades")
                let parteUnidad1101 = prompt("ingrese el sector del parte");
                cantidadDepartes1101 = parseInt(prompt("cuantos partes desea ingresar al sector"))

                if (parteUnidad1101 == "carroceria") {
                    for (let i = 0; i < cantidadDepartes1101; i++) {
                        parteUnidad1101 = prompt("ingrese el parte de novedades de carroceria numero" + " " + (i + 1))
                        console.log(parteUnidad1101);
                    }
                } else if (parteUnidad1101 == "mecanica") {
                    for (let i = 0; i < cantidadDepartes1101; i++) {
                        parteUnidad1101 = prompt("ingrese el parte de novedades de mecanica numero" + " " + (i + 1))
                        console.log(parteUnidad1101);
                    }

                }
                break;
            case "1102":
                alert("se encontro la unidad 1102")
                alert("se procede con el parte de novedades")
                let parteUnidad1102 = prompt("ingrese el sector del parte");
                cantidadDepartes1102 = parseInt(prompt("cuantos partes desea ingresar al sector"))


                if (parteUnidad1102 == "carroceria") {
                    for (let i = 0; i < cantidadDepartes1102; i++) {
                        parteUnidad1102 = prompt("ingrese el parte de novedades de carroceria numero" + " " + (i + 1))
                        console.log(parteUnidad1102);
                    }
                } else if (parteUnidad1102 == "mecanica") {
                    for (let i = 0; i < cantidadDepartes1102; i++) {
                        parteUnidad1102 = prompt("ingrese el parte de novedades de mecanica numero" + " " + (i + 1))
                        console.log(parteUnidad1102);
                    }

                }
                break;
            case "2121":
                alert("se encontro la unidad 2121")
                alert("se procede con el parte de novedades")
                let parteUnidad2121 = prompt("ingrese el sector del parte");
                cantidadDepartes2121 = parseInt(prompt("cuantos partes desea ingresar al sector"))

                if (parteUnidad2121 == "carroceria") {
                    for (let i = 0; i < cantidadDepartes2121; i++) {
                        parteUnidad2121 = prompt("ingrese el parte de novedades de carroceria numero" + " " + (i + 1))
                        console.log(parteUnidad2121);
                    }
                } else if (parteUnidad2121 == "mecanica") {
                    for (let i = 0; i < cantidadDepartes2121; i++) {
                        parteUnidad2121 = prompt("ingrese el parte de novedades de mecanica numero" + " " + (i + 1))
                        console.log(parteUnidad2121);
                    }

                }

                break;
            case "2131":
                alert("se encontro la unidad 2131")
                alert("se procede con el parte de novedades")
                let parteUnidad2131 = prompt("ingrese el sector del parte");
                cantidadDepartes2131 = parseInt(prompt("cuantos partes desea ingresar al sector"))


                if (parteUnidad2131 == "carroceria") {
                    for (let i = 0; i < cantidadDepartes2131; i++) {
                        parteUnidad2131 = prompt("ingrese el parte de novedades de carroceria numero" + " " + (i + 1))
                        console.log(parteUnidad2131);
                    }
                } else if (parteUnidad2131 == "mecanica") {
                    for (let i = 0; i < cantidadDepartes2131; i++) {
                        parteUnidad2131 = prompt("ingrese el parte de novedades de mecanica numero" + " " + (i + 1))
                        console.log(parteUnidad2131);
                    }

                }
                break;
            case "2141":
                alert("se encontro la unidad 2141")
                alert("se procede con el parte de novedades")
                let parteUnidad2141 = prompt("ingrese el sector del parte");
                cantidadDepartes2141 = parseInt(prompt("cuantos partes desea ingresar al sector"))



                if (parteUnidad2141 == "carroceria") {
                    for (let i = 0; i < cantidadDepartes2141; i++) {
                        parteUnidad2141 = prompt("ingrese el parte de novedades de carroceria numero" + " " + (i + 1))
                        console.log(parteUnidad2141);
                    }
                } else if (parteUnidad2141 == "mecanica") {
                    for (let i = 0; i < cantidadDepartes2141; i++) {
                        parteUnidad2141 = prompt("ingrese el parte de novedades de mecanica numero" + " " + (i + 1))
                        console.log(parteUnidad2141);
                    }

                }
                break;
            case "3631":
                alert("se encontro la unidad 3631")
                alert("se procede con el parte de novedades")
                let parteUnidad3631 = prompt("ingrese el sector del parte");
                cantidadDepartes3631 = parseInt(prompt("cuantos partes desea ingresar al sector"))


                if (parteUnidad3631 == "carroceria") {
                    for (let i = 0; i < cantidadDepartes3631; i++) {
                        parteUnidad3631 = prompt("ingrese el parte de novedades de carroceria numero" + " " + (i + 1))
                        console.log(parteUnidad3631);
                    }
                } else if (parteUnidad3631 == "mecanica") {
                    for (let i = 0; i < cantidadDepartes3631; i++) {
                        let parteUnidad3631 = prompt("ingrese el parte de novedades de mecanica numero" + " " + (i + 1))
                        console.log(parteUnidad3631);
                    }

                }
                break;
            case "3481":
                alert("se encontro la unidad 3481")
                alert("se procede con el parte de novedades")
                let parteUnidad3481 = prompt("ingrese el sector del parte");
                cantidadDepartes3481 = parseInt(prompt("cuantos partes desea ingresar al sector"))
                if (parteUnidad3481 == "carroceria") {
                    for (let i = 0; i < cantidadDepartes3481; i++) {
                        parteUnidad3481 = prompt("ingrese el parte de novedades de carroceria numero" + " " + (i + 1))
                        console.log(parteUnidad3481);
                    }
                } else if (parteUnidad3481 == "mecanica") {
                    for (let i = 0; i < cantidadDepartes3481; i++) {
                        parteUnidad3841 = prompt("ingrese el parte de novedades de mecanica numero" + " " + (i + 1))
                        console.log(parteUnidad3481);
                    }

                }
                break;


        }
        unidadEncontrada = prompt("ingrese la nueva unidad para generar un parte ")
    }
    console.log("fin del parte de novedades")
}








unidadesCreador()