let formularioCarry = document.getElementById("formularioCarry");
let infoFormulario;
let nuevoViaje;
let objetoViaje;
let tarjetasEnHTML = document.getElementById("tarjetear");

let mensajesTarjetas1 = {
    fumador: "usted podria fumar en el vehiculo",
    noFumador: "usted NO podria fumar en el vehiculo",
    noAnimales: "usted NO podria llevar mascotas",
    animales: "usted podria llevar animales",
    maleta: "usted podria llevar maleta",
    noMaleta: "usted NO podria llevar maletas",
    peaje: "Los precios incluyen los peajes y gastos",
    noPeaje: "Los precios NO incluyen los peajes y gastos",
    precioTotal: `El precio por pasajero es de $ `,
    horaSalida: `El Carry saldrá a las `,
    diaSalida: `El Carry saldrá el dia `,
};

class Viaje {
    constructor(obj) {
        this.id = obj.id;
        this.trayecto = obj.origen + "hasta " + obj.destino;
        this.horarioSalida = `El Carry sale a las` + obj.horaSalida;
        this.horarioDestino = `El Carry llega a las` + obj.horaDestino;
        this.diaSalida = `El carry saldrá el dia ` + obj.diaSalida;
        this.diaLlegada = `El carry legará el dia ` + obj.diaLlegada;
        this.mensaje = obj.mensaje;
        //if optimizado
        obj.fumar == "true" ? this.maletas = mensajesTarjetas1.fumador : this.maletas = mensajesTarjetas1.noFumador;
        //mascota
        obj.mascota == "true" ? this.mascotas = mensajesTarjetas1.animales : this.mascotas = mensajesTarjetas1.noAnimales;
        //maleta
        obj.maleta == "true" ? this.maletas = mensajesTarjetas1.maleta : this.maletas = mensajesTarjetas1.noMaleta;
        //peajes
        obj.peajes == "true" ? this.peajes = mensajesTarjetas1.peaje : this.peajes = mensajesTarjetas1.noPeaje;
        //
        this.precio = Number(obj.precio);
    }
}


formularioCarry.addEventListener("submit", (e) => {
    e.preventDefault();
    infoFormulario = e.target.children;
    let provinciaOrigenSelec = document.getElementById("provinciaOrigen").value;
    let provinciaDestinoSelec = document.getElementById("provinciaDestino").value;
    let horaSalidaSelec = document.getElementById("horaSalida").value;
    let horaLlegadaSelec = document.getElementById("horaLlegada").value;
    let diaSalidaSelec = document.getElementById("diaSalida").value;
    let mensajeSelec = document.getElementById("mensajeAPasajero").value;
    let fumarSelec = document.getElementById("fumar").checked;
    let mascotasSelec = document.getElementById("mascota").checked;
    let maletasSelec = document.getElementById("maleta").checked;
    let peajesSelec = document.getElementById("peajes").checked;
    let precioSelec = document.getElementById("precio").value;
    let idSelec = Math.ceil(Math.random() * 10000000 + 10000);

    nuevoViaje = {
        idUnico: idSelec,
        origen: provinciaOrigenSelec,
        destino: provinciaDestinoSelec,
        diaSalida: diaSalidaSelec,
        horaLlegada: diaSalidaSelec,
        horaLlegada: horaSalidaSelec,
        mensaje: horaLlegadaSelec,
        fumar: fumarSelec,
        mascotas: mascotasSelec,
        maletas: maletasSelec,
        peajes: peajesSelec,
        precio: precioSelec,
    }

    localStorage.setItem(`viaje ${idSelec}`, JSON.stringify(nuevoViaje));




    Swal.fire({
        title: 'Casi listos, Carry',
        html: `<h3>Si llenaste todo bien dale al botón Azul.</h3>
        <p>Origen: ${provinciaOrigenSelec}, Dia Salida: ${diaSalidaSelec}, Hora Salid: ${horaSalidaSelec} </p>
        <p>Destino:${provinciaDestinoSelec},Hora Llegada:${horaLlegadaSelec} </p>
        <p>Mensaje: ${mensajeSelec} </p>
        <p>Fumar: ${fumarSelec} </p>
        <p>Mascotas: ${mascotasSelec} </p>
        <p>Maletas:${maletasSelec} </p>
        <p>Peajes:${peajesSelec} </p>
        <p>Precio:${precioSelec} </p>
        <p>ID ASIGNADO: ${idSelec}</p>`,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'entendido Bro',
    }).then((result) => {
        if (result.isConfirmed) {
            let cargados = JSON.parse(localStorage.getItem(`viaje ${idSelec}`));
            objetoViaje = new Viaje (cargados);
            console.log (objetoViaje);

            let viajeEnTarjetaIndex = `<section  class="CardsViaje">
                <div class="card" style="width: 18rem">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 id="tituloTarjetaCarry" class="card-title">${objetoViaje.trayecto}</h5>
                        <p id="mensajeCarry" class="card-text">${objetoViaje.mensaje}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li id="diaSalidaCarry" class="list-group-item">${objetoViaje.diaSalida}</li>
                        <li id="horaSalidaCarry" class="list-group-item">${objetoViaje.horaSalida}</li>
                        <li id="horaLlegadaCarry" class="list-group-item">${objetoViaje.horaLlegada}/li>
                        <li id="idUnicoCarry" class="list-group-item">${objetoViaje.id}</li>
                        <li id="fumarCarry" class="list-group-item">${objetoViaje.fumar}</li>
                        <li id="mascotaCarry" class="list-group-item">${objetoViaje.mascotas}</li>
                        <li id="maletaCarry" class="list-group-item">P${objetoViaje.maletas}</li>
                        <li id="peajeCarry" class="list-group-item">${objetoViaje.peajes}</li>
                        <li id="precioCarry" class="list-group-item">${objetoViaje.precio}</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="reservarAsiento">Reservar asiento</a>
                        <a href="#" class="verPerfilDelCarry">Ver perfil del Carry</a>
                    </div>
                </div>
            </section>`;
            console.log (viajeEnTarjetaIndex);
            
            console.log(miSection);
            tarjetaEnHTML.innerText +=  viajeEnTarjetaIndex;
            console.log(miSection);
            
        }
    })

});