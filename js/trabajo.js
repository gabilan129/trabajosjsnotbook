const carrito = [];


class suplementoTarjeta {
    constructor(nombre, precio, img) {
        this.nombre = nombre,
            this.precio = precio,
            this.img = img
    }
}





const misTajetasDeCompra = [{
    nombre: "proteina star",
    precio: 5000,
    imagen: src = "./assets/proteinas/proteinaStar.jpg"
}, {
    nombre: "proteina animal",
    precio:  6000,
    imagen: src = "./assets/proteinas/proteinaAnimal.jpg"
}, {
    nombre: "proteina hard",
    precio: 1500,
    imagen: src = "./assets/proteinas/proteinaHard.jpg"
}, {
    nombre: "creatina star",
    precio:  720,
    imagen: src = "./assets/creatinas/creatinaStar.jpg"
}, {
    nombre: "creatina animal",
    precio: 800,
    imagen: src = "./assets/creatinas/creatinaAnimal.jpg"
}, {
    nombre: "creatina hard",
    precio: 500,
    imagen: src = "./assets/creatinas/creatinaHard.jpg"
}, {
    nombre: "quema grasa star",
    precio: 1720,
    imagen: src = "./assets/quemaGrasa/Qgstar.jpg"
}, {
    nombre: "quema grasa animal",
    precio: 1800,
    imagen: src="./assets/quemaGrasa/QgAnimal.jpg"
}, {
    nombre: "quema grasa hard",
    precio: 3500,
    imagen: src = "./assets/quemaGrasa/QgHard.jpg"
}, ]



let cards = document.getElementById("tarjetaDos");
for (const imagen of misTajetasDeCompra) {
    let card = document.createElement("div");
    card.className = "card col-3 text-align-center";
    card.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src= ${imagen.imagen} class="card-img-top" alt="...">
    <h5 class="card-title">${imagen.nombre}</h5>
    <p class="card-text">${imagen.precio}</p>
    <button id="miBoton--${imagen.nombre}" class="btn btn-primary">COMPRAR</button></div>
    </div>`
    cards.append(card);
    
    
    
    
    let miBoton = document.getElementById(`miBoton--${imagen.nombre}`);
    
    miBoton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Agregaste" + " " + imagen.nombre + " " +"al carrito");
        carrito.push(imagen);
    })
    
}
    



let botonFinDeCompra = document.getElementById("fin")
let precioFinal = 0
let checkOut = 0
botonFinDeCompra.addEventListener ("click", (e) => {
    e.preventDefault ();
    precioFinal = carrito.map (carrito => carrito.precio)
    checkOut = precioFinal.reduce ((ac,el) => ac + el,0)
    console.log ("El total a pagar es $" + checkOut)

})















function saludar() {
    alert("bienvenido a intervalo gym")
}

saludar()

class Suplementos {
    constructor(tipo, marca, precio, Unidades) {

        this.tipo = tipo,
            this.marca = marca,
            this.precio = parseFloat(precio),
            this.Unidades = Unidades
    }
};

const productos = [];

        
let precio = 0;


let producto = prompt("ingrese el producto que desea \nproteina: star,hard o animal \ncreatina star,hard o animal\nquema grasa star,hard o animal ");

function compra() {


    while (producto != "fin") {
        switch (producto) {
            case "proteina star":
                productos.push(new Suplementos("proteina", "Star Nutrition", 5000, 30));
                console.log("el precio de la proteina Star Nutrition es de $5000");
                precio = precio + 5000;
                break;
            case "proteina animal":
                productos.push(new Suplementos("proteina", "animal", 6000, 30));
                console.log("el precio de la proteina animal es de $6000");
                precio = precio + 6000;
                break;
            case "proteina hard":
                productos.push(new Suplementos("proteina", "hard", 1500, 30));
                console.log("el precio de la proteina hard es de $1500");
                precio = precio + 1500;
                break;
            case "creatina star":
                productos.push(new Suplementos("creatina", "Star Nutrition", 720, 150));
                console.log("el precio de la creatina Star Nutrition es de $720");
                precio = precio + 720;
                break;
            case "creatina animal":
                productos.push(new Suplementos("creatina", "animal", 800, 120));
                console.log("el precio de la creatina animal es de $800");
                precio = precio + 800;
                break;
            case "creatina hard":
                productos.push(new Suplementos("creatina", "hard", 500, 150));
                console.log("el precio de la creatina hard es de $500");
                precio = precio + 500;
                break;
            case "quema grasa star":
                productos.push(new Suplementos("quema grasa", "Star Nutrition", 1720, 60));
                console.log("el precio del quema grasa Star Nutrition es de $1720");
                precio = precio + 1720;
                break;
            case "quema grasa animal":
                productos.push(new Suplementos("quema grasa", "animal", 1800, 60));
                console.log("el precio del quema grasa es de $1800");
                precio = precio + 1800;
                break;
            case "quema grasa hard":
                productos.push(new Suplementos("quema grasa", "hard", 3500, 60));
                console.log("el precio del quema grasa hard es de $3500");
                precio = precio + 3500;
                break;
            default:
                console.log("no hay producto en stock")
                break;
        }
        producto = prompt("ingrese el nuevo producto o fin para la suma total")
    }

    const productosUnidades = productos.filter((marc) => marc.Unidades >= 60)
    console.log("los siguientes productos rinden mas de 2 meses de uso")
    console.log(productosUnidades)

    let precioTotal = precio * 1.21;

    console.log("El totales de $" + precioTotal);


}

compra();
