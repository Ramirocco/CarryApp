function obtenerViajes() {
    const archivo = '../assets/Json/index.json';

    fetch(archivo)
        .then(resultado => resultado.json())
        .then(datos => {
            console.log(datos.viajesEnJSON);
            const { viajesEnJSON } = datos;
            console.log(viajesEnJSON);

            viajesEnJSON.forEach(viaje => {
                console.log(viaje);
                console.log (viaje.diaSalida);





                //ESCRITURA DE CODIGO VIAJE.ALGO


                //Mensajes que cambian los truty
                viaje.fumar == "true" ?   viaje.fumar = "usted podria fumar en el vehiculo" : viaje.fumar = "usted NO podria fumar en el vehiculo" ;
                //mascota
                viaje.mascotas == "true" ? viaje.mascotas = "usted podria llevar animales" : viaje.mascotas = "usted NO podria llevar animales" ;
                //maleta
                viaje.maletas == "true" ?  viaje.maletas = "usted podria llevar maleta" : viaje.maletas = "usted NO podria llevar maleta";
                //peajes
                viaje.peajes == "true" ?  viaje.peajes = "Los precios incluyen los peajes y gastos " : viaje.peajes = "Los precios NO incluyen los peajes y gastos " ;               
                
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

            let tarjetasDeJson = document.getElementById ("tarjetasJson");
            function escribirTarjeta() { tarjetasDeJson.innerHTML += viajesDeJson };
            //funcion SI con funcion de escribir, sino (sercarry.html) consolea eso. 
            tarjetasDeJson != null ? escribirTarjeta() : console.log("No se encuentra el id");

            });
        })

};
obtenerViajes();