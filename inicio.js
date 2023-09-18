
let lista = document.getElementById("productos");

// se llama a los productos
 fetch("./productos.json")
.then((response) => response.json ())
.then((data) => {
    data.forEach(item => {
        const li = document.createElement("li");
        // creacion de cards
        li.innerHTML = `
        <div class= "card" style="witch: 302px;">
            <img src="${item.imagen}" class="card-img-top" alt="">    
            <div class="card-body">
                <h5 class="card-title">${item.nombre}</h5>
                <p class="card-text">precio: <b>${item.precio}</b></p>
                <button id="comprar${item.id}" class="btn btn-primary">añadir al carrito</button>
            </div>
        </div>`;
        // cargar los productos
        lista.append(li);
            // funcuncion boton mas alerta libreria
            const btnComprar = document.getElementById(`comprar${item.id}`);
            btnComprar.addEventListener("click", () => {
               //alert de libreira
                Swal.fire({
                    title: 'Selecionado',
                    text: 'Producto Añadido al Carrito',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                })
                ComprarProductos(id)
            });
    });
})
