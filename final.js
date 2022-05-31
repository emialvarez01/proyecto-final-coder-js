const divProductos = document.querySelector("#divProductos");

fetch("datos1.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((element) => {
            divProductos.innerHTML += `
        <div class="card" style="width: 20rem;margin:auto; margin: 32px; padding:10px; background-color:#222121;">
<img src="${element.imagen}" class="card-img-top" alt="imagen">
<div class="card-body">
    <h5 class="nombre" style:"color: white;">"${element.nombre}"</h5>
    <p class="stock" style:"color:white">Stock: ${element.stock}</p>
    <p class="precio">Precio: ${element.precio}</p>
    <button id="${element.id}" class="btn btn-outline-light">Añadir al carrito</button>
</div>
</div>
        `;
        });
    })