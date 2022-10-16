//OBTENER ELEMENTOS DEL DOM (FORMULARIO DE SERCARRY.HTML Y LUGAR PARA IMPRIMIR DE INDEX.HTML)
//formulario
let formularioCarry = document.getElementById("formularioCarry");
//sitio a imprimir
let tarjetasEnHTML = document.getElementById("tarjetear");


let infoFormulario;
let nuevoViaje;
let objetoViaje;
let arraysViajes = [];

//ESTA VARIABLE ES EL CONTENIDO DE LA TARJETA, QUE NO PUEDO HACERLA GLOBAL A TODOS LOS HTML
let viajeEnTarjetaIndex;

//mensajes para tarjetas
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

//constructor de viaje con ensajes a imprimir
class Viaje {
    constructor(obj) {
        this.idUnico = obj.idUnico;
        this.trayecto = obj.origen + "hasta " + obj.destino;
        this.horarioSalida = `El Carry sale a las` + obj.horaSalida;
        this.horarioDestino = `El Carry llega a las` + obj.horaDestino;
        this.diaSalida = `El carry saldrá el dia ` + obj.diaSalida;
        this.diaLlegada = `El carry legará el dia ` + obj.diaLlegada;
        this.mensaje = obj.mensaje;
        //if optimizado
        obj.fumar == true ? this.fumar = mensajesTarjetas1.fumador : this.fumar = mensajesTarjetas1.noFumador;
        //mascota
        obj.mascota == true ? this.mascotas = mensajesTarjetas1.animales : this.mascotas = mensajesTarjetas1.noAnimales;
        //maleta
        obj.maleta == true ? this.maletas = mensajesTarjetas1.maleta : this.maletas = mensajesTarjetas1.noMaleta;
        //peajes
        obj.peajes == true ? this.peajes = mensajesTarjetas1.peaje : this.peajes = mensajesTarjetas1.noPeaje;
        //
        this.precio = Number(obj.precio);
    }
}

//FUNCION SI, SI HAY FORMULARIO CREA LA TARJETA A IMPRIMIR
formularioCarry != null ?
    //escucha evento Submit
    formularioCarry.addEventListener("submit", (e) => {
        e.preventDefault();
        infoFormulario = e.target.children;
        //variables del form
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

        //objeto a subir al Local
        nuevoViaje = {
            idUnico: idSelec,
            origen: provinciaOrigenSelec,
            destino: provinciaDestinoSelec,
            diaSalida: diaSalidaSelec,
            horaSalida: horaSalidaSelec,
            horaLlegada: horaLlegadaSelec,
            mensaje: mensajeSelec,
            fumar: fumarSelec,
            mascotas: mascotasSelec,
            maletas: maletasSelec,
            peajes: peajesSelec,
            precio: precioSelec,
        }



        //ALERT PARA CONFIRMAR LA SUBIDA 
        Swal.fire({
            title: 'Casi listos, Carry',
            html: `<h3>Si llenaste todo bien dale al botón Azul.</h3>
        <p>Origen: ${provinciaOrigenSelec}, Dia Salida: ${diaSalidaSelec}, Hora Salida: ${horaSalidaSelec} </p>
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
            //  SI CONFIRMA EL RESULTADO ME CREA LA ETIQUETA PRA IMPRIMIR
        }).then((result) => {
            if (result.isConfirmed) {
        //subida de objeto
        localStorage.setItem(`viaje ${idSelec}`, JSON.stringify(nuevoViaje));
                //Obtiene datos del Local
                let cargados = JSON.parse(localStorage.getItem(`viaje ${idSelec}`));
                //Crea por constructor la tarjeta
                console.log(cargados);
                objetoViaje = new Viaje(cargados);
                console.log(objetoViaje);
                // VARIABLE PARA HACER GLOBAL (HTML que escribe}
                viajeEnTarjetaIndex = `<section  class="CardsViajeCargados">
                <div class="card">
                    <img src="./assets/img/images.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 id="tituloTarjetaCarry" class="card-title">${objetoViaje.trayecto}</h5>
                        <p id="mensajeCarry" class="card-text">${objetoViaje.mensaje}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li id="diaSalidaCarry" class="list-group-item">${objetoViaje.diaSalida}</li>
                        <li id="horaSalidaCarry" class="list-group-item">${objetoViaje.horarioSalida}</li>
                        <li id="horaLlegadaCarry" class="list-group-item">${objetoViaje.horarioLlegada}</li>
                        <li id="idUnicoCarry" class="list-group-item">${objetoViaje.idUnico}</li>
                        <li id="fumarCarry" class="list-group-item">${objetoViaje.fumar}</li>
                        <li id="mascotaCarry" class="list-group-item">${objetoViaje.mascotas}</li>
                        <li id="maletaCarry" class="list-group-item">P${objetoViaje.maletas}</li>
                        <li id="peajeCarry" class="list-group-item">${objetoViaje.peajes}</li>
                        <li id="precioCarry" class="list-group-item">${objetoViaje.precio}</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="reservarAsiento">ELIMINAR VIAJE (PROXIMAMENTE)</a>
                    </div>
                </div>
            </section>`;
                console.log(viajeEnTarjetaIndex);
                //Codigo para subir a array y despues filtrar
                arraysViajes.push(nuevoViaje);
                localStorage.setItem(`viajes`, JSON.stringify(arraysViajes));
                localStorage.setItem(`stringViaje`, JSON.stringify(viajeEnTarjetaIndex));
            }
            //Si no hay formulario (index.html) Consolea esto
        });
    }) : console.log("No se encuentra FormularioCarry");
//FUNCION SI, SI EXISTE EL LUGAR PARA IMPRMIR HACE UN INNER!!!! Mediante la funcion
//funcion para escribir
viajeEnTarjetaIndex = JSON.parse(localStorage.getItem(`stringViaje`));

function escribirTarjeta() { tarjetasEnHTML.innerHTML += viajeEnTarjetaIndex };
console.log (viajeEnTarjetaIndex);
//funcion SI con funcion de escribir, sino (sercarry.html) consolea eso. 
tarjetasEnHTML != null ? escribirTarjeta() : console.log("No se encuentra el id");

