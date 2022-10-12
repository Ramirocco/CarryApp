let formularioCarry = document.getElementById("formularioCarry");
let infoFormulario;

let mensajesTarjetas = {
    fumador: "usted podria fumar en el vehiculo",
    noFumador: "usted NO podria fumar en el vehiculo",
    noAnimales: "usted NO podria llevar mascotas",
    animales: "usted podria llevar animales",
    maletas: "usted podria llevar maleta",
    noMaletas: "usted NO podria llevar maletas",
    peajes: "Los precios incluyen los peajes y gastos",
    noPeajes: "Los precios NO incluyen los peajes y gastos",
    precioTotal: `El precio por pasajero es de $ `,
    horaSalida: `El Carry saldrá a las `,
    diaSalida: `El Carry saldrá el dia `,
};

formularioCarry.addEventListener("submit", (e) => {
    e.preventDefault();
    infoFormulario = e.target.children;
    //trayecto en tarjeta
    let provinciaOrigenSelec = document.getElementById("provinciaOrigen").value;
    let provinciaDestinoSelec = document.getElementById("provinciaDestino").value;
    let trayecto = `${provinciaOrigenSelec} hasta ${provinciaDestinoSelec}`;
    tituloParaTarjeta.innerText = trayecto;
    //Horarios
    let horaSalida = document.getElementById("horaSalida").value;
    let horaLlegada = document.getElementById("horaLlegada").value;
    horaSalidaParaTarjeta.innerText = mensajesTarjetas.horaLlegada + horaSalida;
    horaLlegadaParaTarjeta.innerText = mensajesTarjetas.horaSalida + horaLlegada;
    //dia salida
    let diaSalida = document.getElementById("diaSalida").value;
    diaSalidaParaTarjeta.innerText = mensajesTarjetas.diaSalida + diaSalida;
    //mensaje del usuario
    mensajeParaTarjeta.innerText = document.getElementById("mensajeAPasajero").value;
    //fumar
    document.getElementById("fumar").checked ? fumarParaTarjeta.innerText = mensajesTarjetas.fumador: fumarParaTarjeta.innerText = mensajesTarjetas.noFumador ;
    //mascota
    document.getElementById("mascota").checked ? mascotaParaTarjeta.innerText = mensajesTarjetas.animales: mascotaParaTarjeta.innerText = mensajesTarjetas.noAnimales;
    //maleta
    document.getElementById("maleta").checked ? maletaParaTarjeta.innerText = mensajesTarjetas.maletas :maletaParaTarjeta.innerText = mensajesTarjetas.noMaletas ;
    //peajes
    document.getElementById("peajes").checked ? peajeParaTarjeta.innerText = mensajesTarjetas.peajes :peajeParaTarjeta.innerText = mensajesTarjetas.noPeajes;
    //precio
    //funciones de precio a mostrar
function precioTotalCarry() {
    precioTotal = Number(document.getElementById("precio").value);
};
    precioTotalCarry();
    precioParaTarjeta.innerText = mensajesTarjetas.precioTotal + precioTotal;
    //objeto de nuevo viaje
    nuevoViaje = {
        origen: document.getElementById("provinciaOrigen").value,
        destino: document.getElementById("provinciaDestino").value,
        diaSalida: document.getElementById("diaSalida").value,
        horaSalida: document.getElementById("horaSalida").value,
        horaLlegada: document.getElementById("horaLlegada").value,
        mensaje: document.getElementById("mensajeAPasajero").value,
        fumar: document.getElementById("fumar").checked,
        mascotas: document.getElementById("mascota").checked,
        maletas: document.getElementById("maleta").checked,
        peajes: document.getElementById("peajes").checked,
        precio: document.getElementById("precio").value,
    }
    console.log(nuevoViaje);
    arraysViajes.push(nuevoViaje);
    localStorage.setItem (`viaje ${asignarId}`, JSON.stringify (nuevoViaje));
    localStorage.setItem (`viajes`, JSON.stringify (arraysViajes));
    console.log (arraysViajes);
    console.log (nuevoViaje);
    // agrego info de subida
    Swal.fire({
        title: 'Casi listos, Carry',
        text: "no olvides checkear y subir tu viaje",
        icon: 'info',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'entendido Bro'
    })
}
);