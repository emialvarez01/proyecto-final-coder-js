class camiseta {
    constructor(indice, club, nombre, precio, stock, imagen) {
        this.indice = indice;
        this.club = club;
        this.nombre = nombre
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;

    }

}
let carrito = document.getElementById('carrito')


const lakers1 = new camiseta(1, 'ANGELES LAKERS', 'Los Angeles Lakers local 2021/2022', '120 USD', 10, 'lakers1.png')
const lakers2 = new camiseta(2, 'ANGELES LAKERS', 'Los Angeles Lakers visitante 2021/2022', '100 USD', 15, 'lakers2.png')
const lakers3 = new camiseta(3, 'ANGELES LAKERS', 'Los Angeles Lakers alternativa 2021/2022', '80 USD', 5, 'lakers3.png')
const cavaliers1 = new camiseta(4, 'CLEVELAND CAVALIERS', 'Cleveland Cavaliers local 2021/2022', '120 USD', 10, 'cavs1.png')
const cavaliers2 = new camiseta(5, 'CLEVELAND CAVALIERS', 'Cleveland Cavaliers visitante 2021/2022', '100 USD', 15, 'cavs2.png')
const cavaliers3 = new camiseta(6, 'CLEVELAND CAVALIERS', 'Cleveland Cavaliers alternativa 2021/2022', '80 USD', 5, 'cavs3.png')
const sixers1 = new camiseta(7, 'PHILADELPHIA 76ERS', 'Philadephia 76ers local 2021/2022', '120 USD', 10, 'sixers1.png')
const sixers2 = new camiseta(8, 'PHILADELPHIA 76ERS', 'Philadephia 76ers visitante 2021/2022', '100 USD', 15, 'sixers2.png')
const sixers3 = new camiseta(9, 'PHILADELPHIA 76ERS', 'Philadephia 76ers alternativa 2021/2022', '80 USD', 5, 'sixers3.png')
const bulls1 = new camiseta(10, 'CHICAGO BULLS', 'Los Angeles lakers local 2021/2022', '120 USD', 10, 'bulls1.png')
const bulls2 = new camiseta(11, 'CHICAGO BULLS', 'Los Angeles lakers local 2021/2022', '100 USD', 15, 'bulls2.png')
const bulls3 = new camiseta(12, 'CHICAGO BULLS', 'Los Angeles lakers local 2021/2022', '80 USD', 5, 'bulls3.png')

let camisetas = [lakers1, lakers2, lakers3, cavaliers1, cavaliers2, cavaliers3, sixers1, sixers2, sixers3, bulls1, bulls2, bulls3]

const buscador = () => {
    let inputTexto = document.getElementById('input');
    inputTexto.addEventListener('change', () => {

        let buscador = inputTexto.value

        let camisetasFiltradas = camisetas.filter(camiseta => camiseta.club.includes(buscador.toUpperCase()))

        let divProductos = document.getElementById('divProductos');

        divProductos.innerHTML = ""

        camisetasFiltradas.forEach(element => {
            const {
                indice,
                club,
                nombre,
                precio,
                stock,
                imagen
            } = element;
            divProductos.innerHTML += `
        <div class="card-body" style="width: 18rem;">
        <img src="${imagen}" class="card-img-top" alt="imagen">
        <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">Precio:${precio}</p>
        <p class="card-text">Stock:${stock}</p>
        <button id="agregar${indice}" class="btn btn-primary">Agregar al Carrito</a>
</div>
</div>
`
        });
        escuchaBotonAgregar();
    })

    function escuchaBotonAgregar() {
        camisetas.forEach((camiseta) => {
            document.querySelector(`#agregar${camiseta.indice}`).addEventListener('click', () => {
                console.log(camiseta)
            });

        });

    }
}
buscador();
















/*camisetasFiltradas.forEach(camiseta => {
            (document.getElementById(`boton${camiseta.indice}`)).addEventListener('click', () => {
                {
                    carrito.innerHTML +=
                        `<div div class="card-body" style="width: 18rem;"">
        <div class="card-body">
        <img src="${camiseta.imagen}" class="card-img-top" alt="imagen">
        <h5 class="card-title">${camiseta.nombre}</h5>
        <p class="card-text">${camiseta.precio}</p>`

                }

            })
        })*/