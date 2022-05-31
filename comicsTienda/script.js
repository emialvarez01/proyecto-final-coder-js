const btnCarrito = document.querySelector("#btnCarrito");
const sidebar = document.querySelector(".sidebar");

btnCarrito.addEventListener("click", (e) => {
  sidebar.classList.toggle("active");
});

let productos = [
  {
    id: 1,
    nombre: "Justice League: Odysey",
    precio: 1500,
    stock: 3,
    imagen: "./images/01.jpg",
  },
  {
    id: 2,
    nombre: "JL: Zack Snyder's",
    precio: 2300,
    stock: 2,
    imagen: "./images/02.jpg",
  },
  {
    id: 3,
    nombre: "Aquaman: Fosa",
    precio: 1000,
    stock: 20,
    imagen: "./images/03.jpg",
  },
  {
    id: 4,
    nombre: "Detective Comics : Especial",
    precio: 5000,
    stock: 1,
    imagen: "./images/04.jpg",
  },
];
const caja = document.querySelector(".caja");

let carrito = [];

function mostrarCards() {
  const cardsMap = productos.map((element) => {
    const { imagen, nombre, precio, id, stock } = element;
    if (stock >= 1) {
      return `<div class="cajita">
      <div>
        <img class="imgComic" src="${imagen}">
      </div>
      <div>
        <h3>${nombre}</h3>
        <p>$${precio}</p>
        <p>Stock: ${stock}</p>
        <button id="agregar${id}">Agregar</button>
      </div>
    </div>`;
    } else {
      return `<div class="cajita">
      <div>
        <img class="imgComic" src="${imagen}">
      </div>
      <div>
        <h3>${nombre}</h3>
        <p>$${precio}</p>
        <p>Stock: ${stock}</p>
        <button disabled="true" id="agregar${id}">Agregar</button>
      </div>
    </div>`;
    }
  });

  caja.innerHTML = cardsMap.join("");

  escucharBotonAgregar();
}

function escucharBotonAgregar() {
  productos.forEach((producto, index) => {
    //#agregar${producto.id}
    document
      .querySelector(`#agregar${producto.id}`)
      .addEventListener("click", () => {
        enviarAlCarrito(producto);
      });
  });
}

function enviarAlCarrito(producto) {
  /*  cart.some(pCart => pCart.id == product.id) ?  product.cant++ : (product.cant = 1, cart.push(product)); */
  const existe = carrito.some((element) => element.id === producto.id);

  productos.map((element) => {
    if (element.id === producto.id) {
      element.stock--;
      return element;
    }
  });

  const productoAlCarrito = { ...producto, cantidad: 1 };
  delete productoAlCarrito.stock;

  if (existe) {
    carrito.map((element) => {
      if (element.id === producto.id) {
        element.cantidad++;
        return element;
      }
    });
  } else {
    carrito.push(productoAlCarrito);
  }
  mostrarCards();
  pintarCarrito();
}

function pintarCarrito() {
  sidebar.innerHTML = "";
  carrito.forEach((element) => {
    sidebar.innerHTML += `<div class="cajita">
        <div>
          <img class="imgComicShop" src="${element.imagen}">
        </div>
        <div>
          <h3>${element.nombre}</h3>
          <p>$${element.precio}</p>
          <p>Cant.: ${element.cantidad}</p>
          <button class="btnBorrar" id="${element.id}">Eliminar</button>
          </div>
      </div>`;
  });
  borrarProducto();
}

function borrarProducto() {
  let btnBorrar = document.querySelectorAll(".btnBorrar");
  btnBorrar.forEach((element) => {
    element.addEventListener("click", (e) => {
      /* selecciono el id del boton, que corresponde */
      let id = parseInt(e.target.id);

      /* Necesito verificar la cantidad antes de borrar, la guardo en la variable cantidad.*/
      let prod = carrito.find((element) => element.id === id);
      let cantidad = prod.cantidad;

      /* Uso filter para que me devuela unicamente los productos que sean diferentes al id a borrar. */
      carrito = carrito.filter((element) => element.id !== id);

      /* Busco el producto e ingreso en su propiedad stock para volver asignarle el valor de la variable cantidad */
      let prodCarrito = productos.find((element) => element.id === id);
      prodCarrito.stock += cantidad;

      /* Pinto nuevamente los productos del carrito y las cards */
      pintarCarrito();
      mostrarCards();
    });
  });
}

mostrarCards();
