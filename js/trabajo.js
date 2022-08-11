function saludar() {
    alert("bienvenido a intervalo gym")
}

saludar()



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
    imagen: src = "./assets/quemaGrasa/QgHard.jpg" ,
    Unidades : 220
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
    checkOut = checkOut * 1.21;
    console.log ("El total a pagar es $" + checkOut)

    
    
})











