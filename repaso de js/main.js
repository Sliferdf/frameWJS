
var nombre
var altura


function MuestraMinom(nombre, altura){
    var daticos =
    `
    <h1>hola soy la caja de datos </h1>
    <h2>mi nombre es : ${nombre} </h2>
    <h2>mi altura es : ${altura} cm</h2>
    `;

    return daticos;
}
  
function imprimir() {
    var datos = document.getElementById("info");
    datos.innerHTML = MuestraMinom("Alexis", 175)
}

if (altura >= 170 && altura <= 185) {
    datos.innerHTML += '<h1> tienes una altura promedio </h1>'
}

imprimir()

var coche = {
    modelo: 'Mercedes clase A',
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos() {
        console.log(this.modelo, this.maxima, this.antiguedad);
    }
};

document.write("<h1>" + coche.modelo + "</h1>")
coche.mostrarDatos();
console.log(coche);
//uina promesa captara la respuesta positiva o negariva de una petición
//llega de forma asincrona

var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "Hola desde la promesa";
        saludo = false;
        if (saludo) {
            resolve(saludo);
            
        } else (
            reject('no hay saludo disponible')
        )
    }, 2000)
})

saludar.then(resultado => {
    alert(resultado);
})
    .catch(err => {
        alert(err);
    })

    