class Unidad {
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
        motor: "Mercedes Benz"
    }, {
        interno: "1102",
        empresa: "Chevallier",
        patente: "jlv-782",
        motor: "Mercedes Benz"
    }, {
        interno: "2121",
        empresa: "Chevallier",
        patente: "jlv-781",
        motor: "Mercedes Benz"
    }, {
        interno: "2131",
        empresa: "Chevallier",
        patente: "jlv-780",
        motor: "Mercedes Benz"
    }, {
        interno: "2141",
        empresa: "Chevallier",
        patente: "jpo-210",
        motor: "Mercedes Benz"
    }, {
        interno: "2151",
        empresa: "Chevallier",
        patente: "jpo-207",
        motor: "Mercedes Benz"
    }, {
        interno: "3481",
        empresa: "Sierras De Cordoba",
        patente: "oib-285",
        motor: "Scania"
    }, {
        interno: "3482",
        empresa: "Sierras De Cordoba",
        patente: "ojc-253",
        motor: "Scania"
    }, {
        interno: "3483",
        empresa: "Sierras De Cordoba",
        patente: "ojc-259",
        motor: "Scania"

    },
    {
        interno: "3631",
        empresa: "Urquiza",
        patente: "AA591RL",
        motor: "Scania"

    }, {
        interno: "3632",
        empresa: "Urquiza",
        patente: "AA711TC",
        motor: "Scania"

    }, {
        interno: "3633",
        empresa: "Urquiza",
        patente: "AA591RM",
        motor: "Scania"

    }, {
        interno: "3634",
        empresa: "Urquiza",
        patente: "AA711RM",
        motor: "Scania"

    }
]


unidades.push(new Unidad("1252", "Empresa Argentina", "krf-221", "Mercedes Benz"));
unidades.push(new Unidad("1251", "empresa argentina", "krf-222", "Mercedes Benz"));



function ingresarUnidad() {

    let interno;
    do {

        interno = parseInt(prompt("ingresar el interno a buscar"))
        if (isNaN(interno)) {
            break
            
        }   
        

        let unidadAbuscar = buscarUnidad(interno)
        if (unidadAbuscar == undefined) {
            console.log("no encontre nada")
            
        }else {
            console.table(unidadAbuscar)
        }  
        
    }
    while (interno != "");
}



function buscarUnidad(internoAencontrar) {
    for (const objunidad of unidades) {
        if (internoAencontrar == objunidad.interno) {
            return objunidad
        }
    }

}




ingresarUnidad();





// function encontrarIndixe(unidadesArray, internoAencontrar) {
//     for (const interno of unidadesArray) {
//         if (internoAencontrar == interno.interno) return unidadesArray.indexOf(interno)

//     }
// }

// function mostrarUnidadEncontrada(unidadesArray) {
//     for (const interno of unidadesArray) {
//         if (interno.interno == unidades) {
//             console.log(interno.interno)
//         }

//     }
// };


//


// let cargaGasoil = parseInt(prompt("ingresa la carga"))    500
// let gasoilGastado = destinos.km / 10  800    80  
// let totalGasiol  = cargaGasoil - gasoilGastado   500 80 420 ;    


