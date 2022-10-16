function obtenerViajes() {
    const archivo = "./assets/js/index.json";

    fetch(archivo)
        .then(resultado => resultado.json())
        .then(datos => {
            console.log (datos)
            console.log(datos.viajesEnJSON);
            const { viajesEnJSON } = datos;
            console.log(viajesEnJSON);

            viajesEnJSON.forEach(viaje => {
                console.log(viaje);
                console.log(viaje.diaSalida);

                //ESCRITURA DE CODIGO VIAJE.ALGO
                //Mensajes que cambian los truty
                viaje.fumar == "true" ? viaje.fumar = "usted podria fumar en el vehiculo" : viaje.fumar = "usted NO podria fumar en el vehiculo";
                //mascota
                viaje.mascotas == "true" ? viaje.mascotas = "usted podria llevar animales" : viaje.mascotas = "usted NO podria llevar animales";
                //maleta
                viaje.maletas == "true" ? viaje.maletas = "usted podria llevar maleta" : viaje.maletas = "usted NO podria llevar maleta";
                //peajes
                viaje.peajes == "true" ? viaje.peajes = "Los precios incluyen los peajes y gastos " : viaje.peajes = "Los precios NO incluyen los peajes y gastos ";

                let viajesDeJson = `<section ; " class="CardsViaje" ">
                <div class="card">
                    <img src="./assets/img/images.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 id="tituloTarjetaCarry" class="card-title"><b>${viaje.origen} HASTA ${viaje.destino} </b></h5>
                        <p id="mensajeCarry" class="card-text"><b>Mensaje del Carry:</b> ${viaje.mensaje}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li id="diaSalidaCarry" class="list-group-item"><b>El día de salida es el</b> ${viaje.diaSalida}</li>
                        <li id="horaLlegadaCarry" class="list-group-item"><b>El carry llegará a destino a las </b>${viaje.horaLlegada}</li>
                        <li id="idUnicoCarry" class="list-group-item"> <b>El ID es </b>${viaje.idUnico}</li>
                        <li id="fumarCarry" class="list-group-item">${viaje.fumar}</li>
                        <li id="mascotaCarry" class="list-group-item">${viaje.mascotas}</li>
                        <li id="maletaCarry" class="list-group-item">${viaje.maletas}</li>
                        <li id="peajeCarry" class="list-group-item">${viaje.peajes}</li>
                        <li id="precioCarry" class="list-group-item">El precio del viaje es de $ ${viaje.precio}</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="reservarAsiento">Contactar al Carry</a>
                    </div>
                </div>
            </section>`;

                let tarjetasDeJson = document.getElementById("tarjetasJson");
                function escribirTarjeta() { tarjetasDeJson.innerHTML += viajesDeJson };
                //funcion SI con funcion de escribir, sino (sercarry.html) consolea eso. 
                tarjetasDeJson != null ? escribirTarjeta() : console.log("No se encuentra el id");

            });
        })
    //____________________________________________//
    //Codigo para filtrar y generar tarjetas
    let infoBusqueda;
    let busquedaFiltro = document.getElementById("busquedaFiltro");
    let infoFiltroMayuscula;
    let infoFiltro;
    let cargadosArray;
    let filtrados;
    //FUNCION SI

    busquedaFiltro != null ?
        //escucha evento Submit
        busquedaFiltro.addEventListener("submit", (e) => {
            e.preventDefault();
            infoBusqueda = e.target.children;
            //variable del form busqueda
            infoFiltro = document.getElementById("infoFiltro").value;
            infoFiltroMayuscula = infoFiltro.toUpperCase();
            console.log(infoFiltroMayuscula);
            //recupero json

            fetch(archivo)
                .then(resultado => resultado.json())
                .then(datos => {
                    console.log(datos.viajesEnJSON);
                    const { viajesEnJSON } = datos;
                    console.log(viajesEnJSON);

                    //filtro los viajes de ese destino
                    filtrados = viajesEnJSON.filter(viaje => viaje.destino == infoFiltroMayuscula);
                    console.log(filtrados);
                    //reset tarjetas
                    let tarjetasDeJson = document.getElementById("tarjetasJson");
                    tarjetasDeJson.innerHTML = ""; 
                    //POR CADA OBJETO FILTRADO CREO LA TARJETA
                    filtrados.forEach(viajeFiltrado => {
                        console.log(viajeFiltrado.diaSalida);
                    
                        //ESCRITURA DE CODIGO VIAJE.ALGO
                //Mensajes que cambian los truty
                viajeFiltrado.fumar == "true" ? viajeFiltrado.fumar = "usted podria fumar en el vehiculo" : viajeFiltrado.fumar = "usted NO podria fumar en el vehiculo";
                //mascota
                viajeFiltrado.mascotas == "true" ? viajeFiltrado.mascotas = "usted podria llevar animales" : viajeFiltrado.mascotas = "usted NO podria llevar animales";
                //maleta
                viajeFiltrado.maletas == "true" ? viajeFiltrado.maletas = "usted podria llevar maleta" : viajeFiltrado.maletas = "usted NO podria llevar maleta";
                //peajes
                viajeFiltrado.peajes == "true" ? viajeFiltrado.peajes = "Los precios incluyen los peajes y gastos " : viajeFiltrado.peajes = "Los precios NO incluyen los peajes y gastos ";

                let viajesDeJsonFiltrado = `<section ; " class="CardsViaje" ">
                <div class="card">
                    <img src="./assets/img/images.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 id="tituloTarjetaCarry" class="card-title"><b>${viajeFiltrado.origen} HASTA ${viajeFiltrado.destino} </b></h5>
                        <p id="mensajeCarry" class="card-text"><b>Mensaje del Carry:</b> ${viajeFiltrado.mensaje}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li id="diaSalidaCarry" class="list-group-item"><b>El día de salida es el</b> ${viajeFiltrado.diaSalida}</li>
                        <li id="horaLlegadaCarry" class="list-group-item"><b>El carry llegará a destino a las </b>${viajeFiltrado.horaLlegada}</li>
                        <li id="idUnicoCarry" class="list-group-item"> <b>El ID es </b>${viajeFiltrado.idUnico}</li>
                        <li id="fumarCarry" class="list-group-item">${viajeFiltrado.fumar}</li>
                        <li id="mascotaCarry" class="list-group-item">${viajeFiltrado.mascotas}</li>
                        <li id="maletaCarry" class="list-group-item">${viajeFiltrado.maletas}</li>
                        <li id="peajeCarry" class="list-group-item">${viajeFiltrado.peajes}</li>
                        <li id="precioCarry" class="list-group-item">El precio del viaje es de $ ${viajeFiltrado.precio}</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="reservarAsiento">Contactar al Carry</a>
                    </div>
                </div>
            </section>`;

            console.log(viajesDeJsonFiltrado);
                    
            let tarjetasDeJson = document.getElementById("tarjetasJson");
            function escribirTarjeta() { tarjetasDeJson.innerHTML += viajesDeJsonFiltrado };
            //funcion SI con funcion de escribir, sino (sercarry.html) consolea eso. 
            tarjetasDeJson != null ? escribirTarjeta() : console.log("No se encuentra el id");
                    
                    
                    
                    })

                    
                })
        }):"";
        };
obtenerViajes();

