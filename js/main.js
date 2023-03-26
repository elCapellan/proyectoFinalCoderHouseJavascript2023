const formulario = document.getElementById("formulario");


formulario.addEventListener("submit", (e) =>{
    e.preventDefault();

    const primerNombre = document.getElementById("primerNombre");
    const segundoNombre = document.getElementById("segundoNombre");
    const tercerNombre = document.getElementById("tercerNombre");
    const primerApellido = document.getElementById("primerApellido");
    const segundoApellido = document.getElementById("segundoApellido");
    const nacimiento = document.getElementById("nacimiento");

    const edad = calcularEdad(document.getElementById("nacimiento").value);

    const nacionalidad = document.getElementById("nacionalidad");
    const dni = document.getElementById("dni");
    const estadoCivil = document.getElementById("estadoCivil");

    const telefonoFijo = document.getElementById("telefonoFijo");
    const email = document.getElementById("email");



    const domicilio = document.getElementById("domicilio");
    const altura = document.getElementById("altura");

    const provincia = document.getElementById("elegirProvincia");
    const municipio = document.getElementById("elegirMunicipio");
    const localidad = document.getElementById("elegirLocalidad");


    const telefonoMovil = document.getElementById("telefonoMovil");
    const estudios1 = document.getElementById("estudios1");
    const estudios1_estado = document.getElementById("estudios1_estado");
    const estudios1_fin = document.getElementById("estudios1_fin");
    let estudios1_anio = new Date(estudios1_fin.value);   
    const estudios1_titulo = document.getElementById("estudios1_titulo");
    const estudios1_institucion = document.getElementById("estudios1_institucion");

    const estudios2 = document.getElementById("estudios2");
    const estudios2_estado = document.getElementById("estudios2_estado");
    const estudios2_fin = document.getElementById("estudios2_fin");
    let estudios2_anio = new Date(estudios2_fin.value);
    const estudios2_titulo = document.getElementById("estudios2_titulo");
    const estudios2_institucion = document.getElementById("estudios2_institucion");

    const curso1 = document.getElementById("curso1");
    const curso1_inicio = document.getElementById("curso1_inicio");
    let curso1_inicial = new Date(curso1_inicio.value);
    const curso1_fin = document.getElementById("curso1_fin");
    let curso1_final = new Date(curso1_fin.value);
    const curso1_lugar = document.getElementById("curso1_lugar");

    const curso2 = document.getElementById("curso2");
    const curso2_inicio = document.getElementById("curso2_inicio");
    let curso2_inicial = new Date(curso2_inicio.value);
    const curso2_fin = document.getElementById("curso2_fin");
    let curso2_final = new Date(curso2_fin.value);
    const curso2_lugar = document.getElementById("curso2_lugar");

    const empresa1 = document.getElementById("empresa1");
    const empresa1_inicio = document.getElementById("empresa1_inicio");
    let empresa1_inicial = new Date(empresa1_inicio.value);
    const empresa1_fin = document.getElementById("empresa1_fin");
    let empresa1_final = new Date(empresa1_fin.value);
    const empresa1_tarea = document.getElementById("empresa1_tarea");

    const empresa2 = document.getElementById("empresa2");
    const empresa2_inicio = document.getElementById("empresa2_inicio");
    let empresa2_inicial = new Date(empresa2_inicio.value);
    const empresa2_fin = document.getElementById("empresa2_fin");
    let empresa2_final = new Date(empresa2_fin.value);
    const empresa2_tarea = document.getElementById("empresa2_tarea");

    const sobreMi = document.getElementById("sobreMi");




    formulario.innerHTML = `<h1>${primerNombre.value}  ${segundoNombre.value} ${tercerNombre.value} <b> ${primerApellido.value}  ${segundoApellido.value}</b></h1><br><br>
        <div class="cvDatosPersonales">
            <h4>Datos personales</h4>
                <p>Nacionalidad: <b>${nacionalidad.value}</b> &nbsp;&nbsp;&nbsp;&nbsp; Edad: <b>${edad} años </b></p>
                <p>Fecha de nacimiento: <b>${nacimiento.value}</b>  
                <p>DNI: <b>${dni.value}</b> &nbsp;&nbsp;&nbsp;&nbsp; Estado Civil: <b>${estadoCivil.value}</b> </p>
                <p>Domicilio: <b>${domicilio.value} ${altura.value}, ${localidad.value}</b></p>
                <p>Teléfono móvil: <b>${telefonoMovil.value}</b>&nbsp;&nbsp;&nbsp;&nbsp; Teléfono fijo: <b>${telefonoFijo.value}</b></p>
                <p>Dirección de correo electrónico: <b>${email.value}</b></p>
        </div><br>
        <div class="cvEstudios">
        <h4>Estudios cursados</h4>
            <p>
                <ul>
                <li><b>${estudios1.value} (${estudios1_estado.value})</b> - ${estudios1_anio.getFullYear()}<br>
                    Título: ${estudios1_titulo.value}<br>  Establecimiento: ${estudios1_institucion.value}
                </li>
                <li><b>${estudios2.value} (${estudios2_estado.value})</b> - ${estudios2_anio.getFullYear()}<br>
                    Título: ${estudios2_titulo.value}<br> Establecimiento: ${estudios2_institucion.value}
                </li>
                </ul>
            </p>
    </div><br>
    <div class="cvCursos">
        <h4>Otros cursos</h4>
            <p>
                <ul>
                <li><b>${curso1.value}</b> - (${curso1_inicial.getFullYear()} - ${curso1_final.getFullYear()})<br>
                    ${curso1_lugar.value}
                </li>
                <li><b>${curso2.value}</b> - (${curso2_inicial.getFullYear()} - ${curso2_final.getFullYear()})<br>
                    ${curso2_lugar.value}
                </li>
                </ul>
            </p>
    </div><br>
    <div class="cvXp">
        <h4>Experiencia laboral</h4>
            <p>
                <ul>
                    <li><b>${empresa1.value}</b> (${empresa1_inicial.getFullYear()} - ${empresa1_final.getFullYear()})<br>
                    Tareas desarrolladas: <b>${empresa1_tarea.value}</b></li>
                    <li><b>${empresa2.value}</b> (${empresa2_inicial.getFullYear()} - ${empresa2_final.getFullYear()})<br>
                    Tareas desarrolladas: <b>${empresa2_tarea.value}</b></li>
                </ul>
            </p>
    </div><br>
<div class="apt">
    <h4>Perfil profesional</h4>
        <p>${sobreMi.value}</p>
</div>`

Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Sus datos se han procesado correctamente',
    showConfirmButton: false,
    timer: 1700
  })

});


function calcularEdad(fecha) {
    const hoy = new Date();
    const cumpleanios = new Date(fecha);
    const edad = hoy.getFullYear() - cumpleanios.getFullYear();
    const m = hoy.getMonth() - cumpleanios.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanios.getDate())) {
        edad--;
    }

    return edad;
}


const elegirLocalidad = document.getElementById("elegirLocalidad");

function localidad() {
    fetch("https://apis.datos.gob.ar/georef/api/localidades?municipio=lamatanza&max=15")
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        let opciones = `<option value="Elegir una localidad">Elegir una localidad</option>`;

        json.localidades.forEach(el => opciones += `<option value="${el.id}">${el.nombre}</option>`);

        elegirLocalidad.innerHTML = opciones;
    })
    .catch(error => {
        let message = error.statusText || "Ocurrió un error";

        elegirLocalidad.nextElementSibling.innerHTML = `Error: ${error.status}: ${message}`;
    })
}
document.addEventListener("DOMContentLoaded", localidad)

function loggearse() {
    // Obtener los valores de los campos de usuario y contraseña
    const username = document.getElementById("nombre").value;
    const password = document.getElementById("clave").value;
  
    // Verificar si el usuario y la contraseña son correctos
    if (username === "eljavas" && password === "1234") {
      // Redirigir a la página de inicio de sesión      
      window.location.replace("formulario.html")
    } else {
        Swal.fire({
            icon: 'error',
            title: '¡Atención!',
            text: '"Nombre de usuario o contraseña incorrectos"',
          })
      
    }
  }