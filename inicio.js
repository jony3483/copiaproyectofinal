let lista = document.getElementById("productos");

document.addEventListener("DOMContentLoaded", () => {
    generarCardsProductos(productosDisponibles)
})

fetch("./productos.json")
.then((response) => response.json ())
.then((data) => {
    data.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
        <h2>ID: ${item.id}</h2>
        <img src= "${item.imagen}"/>
        <p>nombre: ${item.nombre}</p>
        <b>precio: ${item.precio}</b>
        <button id="comprar${id}" class="btn btn-primary">añadir al carrito</button>
        `
        listado.appendchild(li)

        const btnComprar = document.getElementById(`comprar${id}`)
            btnComprar.addEventListener("click", () => {
               //alert de libreira
                Swal.fire({
                    title: 'Selecionado',
                    text: 'Producto Añadido al Carrito',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                })
                comprarProducto(id)
            });




    });
})