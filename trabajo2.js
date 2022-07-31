class unidadNueva {
    constructor(interno, empresa, patente, motor) {
        this.interno = interno;
        this.empresa = empresa;
        this.patente = patente;
        this.motor = motor;
        this.km = 0;
    }
}


const unidades = [{
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
        interno: "2151",
        empresa: "Chevallier",
        patente: "jpo-207",
        motor: "Mercedes Benz",
        km: 0
    }, {
        interno: "3481",
        empresa: "Sierras De Cordoba",
        patente: "oib-285",
        motor: "Scania",
        km: 0
    }, {
        interno: "3482",
        empresa: "Sierras De Cordoba",
        patente: "ojc-253",
        motor: "Scania",
        km: 0
    }, {
        interno: "3483",
        empresa: "Sierras De Cordoba",
        patente: "ojc-259",
        motor: "Scania",
        km: 0

    },
    {
        interno: "3631",
        empresa: "Urquiza",
        patente: "AA591RL",
        motor: "Scania",

    }, {
        interno: "3632",
        empresa: "Urquiza",
        patente: "AA711TC",
        motor: "Scania",
        km: 0

    }, {
        interno: "3633",
        empresa: "Urquiza",
        patente: "AA591RM",
        motor: "Scania",
        km: 0

    }, {
        interno: "3634",
        empresa: "Urquiza",
        patente: "AA711RM",
        motor: "Scania",
        km: 0
        
    }
]


unidades.push(new unidadNueva("1252", "Empresa Argentina", "krf-221", "Mercedes Benz", 0));
unidades.push(new unidadNueva("1251", "empresa argentina", "krf-222", "Mercedes Benz", 0));

function buscarUnidad(parqueMovil, micro) {
    for (const unidad of parqueMovil) {
        if (unidad.interno == micro) {
            return unidad
        }

    }
}

function ingresarUnidad() {


    let unidadBuscada = prompt("ingrese la unidad que busca")
    const unidadEncontrada = buscarUnidad(unidades, unidadBuscada)
    if (unidadEncontrada != undefined) {

        console.log(unidadEncontrada)
    } else {
        console.log("no encontrado")
    }
}

ingresarUnidad()

let cargaGasoil = parseInt(prompt("ingresa la carga de combustible "))

let km = 0




class destinos {
    constructor(provincia, km) {
        this.provincia = provincia;
        this.km = km;
    }
}

const destinoUnidad = [];


let destinoViaje = prompt("ingrese su destino").toLowerCase();

while (destinoViaje != "") {
    switch (destinoViaje) {
        case "cordoba":
            destinoUnidad.push(new destinos("cordoba", 800));
            km = km + 800;
            console.log("la unidad recorrio a cordoba" + " " + km)
            break;
        case "capilla del monte":
            destinoUnidad.push(new destinos("capilla del monte", 1600));
            km = km + 1600;
            console.log("la unidad recorrio a capilla del monte" + " " + km)

            break;

        case "la rioja":
            destinoUnidad.push(new destinos("la rioja", 3000));
            km = km + 3000;
            console.log("la unidad recorrio la rioja" + " " + km)

            break;

        case "rosario":
            destinoUnidad.push(new destinos("rosario", 400));
            km = km + 400;
            console.log("la unidad recorrio a rosario " + " " + km)

            break;
        default:
            console.log("el destino no es valido");
            break;
    }
    destinoViaje = prompt("ingresar nuevo destino");

}





