const caja = document.querySelector("#caja");
fetch("./datos.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      caja.innerHTML += `<button class="btn">Agregar</button>
      <img style="width:200px;" src="${element.imagen}" >
      <p>${element.nombre}</p>
      `;
    });
    let btns = document.querySelectorAll(".btn");
    btns.forEach((e) =>
      e.addEventListener("click", () => console.log("click"))
    );
  });