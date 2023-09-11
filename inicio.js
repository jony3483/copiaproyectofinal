let lista = document.getElementById("productos");

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
        `
        listado.append(li)
    });
})