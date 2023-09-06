
         const inputBuscar = document.getElementById("inputBuscar"); 
         const btnBuscar = document.getElementById("btnBuscar"); 
         const contenedor = document.getElementById("contenedor"); 
         btnBuscar.addEventListener("click", () => { 
            const searchTerm = inputBuscar.value; 
            const url = `https://images-api.nasa.gov/search?q=${searchTerm}`;
             fetch(url) 
             .then((response) => response.json()) 
             .then((data) => { mostrar(data); }) 
             .catch((error) => { console.error("Error", error); });
             }); 
             function mostrar(data) { 
                const items = data.collection.items; 
                contenedor.innerHTML = ""; 
                items.forEach((item) => { 
                    const imagen = item.links[0].href; 
                    const titulo = item.data[0].title; 
                    const descripcion = item.data[0].description; 
                    const fecha = item.data[0].date_created; 
                    const elementos = document.createElement("div"); 
                    elementos.classList.add("result"); 
                    elementos.innerHTML = ` 
                    <img src="${imagen}"> 
                    <h2>${titulo}</h2> 
                    <p>Descripción: ${descripcion}</p> 
                    <p>Fecha: ${fecha}</p> `; 
                    contenedor.appendChild(elementos); 
                }); 
            }

