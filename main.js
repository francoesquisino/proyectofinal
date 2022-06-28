//Ingresa la cantidad de empleados que quieras calcular su sueldo anual.
class Empleados {
  constructor(id, nombre, apellido, sueldoMensual) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.sueldoMensual = sueldoMensual;
  }
}

multiplicar = (a, b) => a * b;

let empleados = [];

let btn6 = document.getElementsByClassName("btn6")[0];
btn6.addEventListener("click", () => {
  eliminarEmpleado();
});

function eliminarEmpleado() {
  let eliminaEmpleado = document.getElementById("listadoEmpleado");
  eliminaEmpleado.innerHTML = `<div class="divform">
    
    <label>ID:</label><br>
    <input type="number" name="id" id="id" /><br>
    <button  id="submitDelete">ENVIAR</button>
    </div>`;
  elimEmpleado();
}

function elimEmpleado() {
  let btn = document.getElementById("submitDelete");
  btn.addEventListener("click", () => {
    let id = Number(document.getElementById("id").value);
    let esta = empleados.some((empleado) => empleado.id === id);
    if (esta) {
      let soloIds = empleados.map((empleado) => empleado.id);
      let indice = soloIds.indexOf(id);
      empleados.splice(indice, 1);
      Swal.fire({
        title: `¡Empleado Borrado!`,
        icon: "success",
        confirmButtonText: "¡Gracias!",
      });
    }
  });
}

class Usuario {
  constructor(username, password, nombre, apellido) {
    this.username = username;
    this.password = password;
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

let btn5 = document.getElementsByClassName("btn5")[0];
btn5.addEventListener("click", () => {
  registroAdmin();
});

function registroAdmin() {
  let registroAdmin = document.getElementById("listadoEmpleado");
  registroAdmin.innerHTML = `<div class="divform"> 
    <label>USUARIO:</label><br>
    <input type="text" name="username" id="regUsername" /><br>
    <label>CONTRASEÑA:</label><br>
    <input type="password" name="password" id="regPassword" /><br>
    <label>CONFIRMAR CONTRASEÑA:</label><br>
    <input type="password" name="cpassword" id="cpassword" /><br>
    <label>NOMBRE:</label><br>
    <input type="text" name="nombre" id="nombre" /><br>
    <label>APELLIDO:</label><br>
    <input type="text" name="apellido" id="apellido" /><br>
    <br>
    <button  id="submitCreate">ENVIAR</button></div>`;
  crearAdmin();
}

function crearAdmin() {
  const btn = document.getElementById("submitCreate");
  btn.addEventListener("click", () => {
    crearUsuario();
  });
}

function crearUsuario() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let pwd = document.getElementById("regPassword").value;
  let cpwd = document.getElementById("cpassword").value;
  let username = document.getElementById("regUsername").value;

  if (nombre === "" || apellido === "" || pwd === "" || username === "") {
    Swal.fire({
      title: `¡Hola`,
      text: "Datos incompletos",
      icon: "error",
      confirmButtonText: "¡Gracias!",
    });
  } else if (pwd !== cpwd) {
    Swal.fire({
      title: `¡Hola`,
      text: "Password no coincide",
      icon: "error",
      confirmButtonText: "¡Gracias!",
    });
  } else {
    Swal.fire({
      title: `¡Hola Bienvenido Administrador!`,
      text: "Datos Completos",
      icon: "success",
      confirmButtonText: "¡Gracias!",
    });
    const usuario = new Usuario(username, pwd, nombre, apellido);
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }
}

let btn7 = document.getElementsByClassName("btn7")[0];
btn7.addEventListener("click", () => {
  mostrarAdmin();
});

function mostrarAdmin() {
  mAdmin = JSON.parse(localStorage.getItem("usuario"));
  let nodo = document.getElementById("listadoEmpleado");
  nodo.innerHTML = `<div class="mostrarAdmin">NOMBRE: ${mAdmin.nombre}<br>APELLIDO: ${mAdmin.apellido} <br>USUARIO: ${mAdmin.username}</div>`;
}

let btn2 = document.getElementsByClassName("btn2")[0];
btn2.addEventListener("click", () => listaNueva());

function listaNueva() {
  let tabla = document.getElementById("listadoEmpleado");
  tabla.innerText = "";
  let encabezado = document.createElement("tr");
  encabezado.classList.add("fila");
  let th1 = document.createElement("th");
  th1.innerText = "ID";
  encabezado.appendChild(th1);
  let th2 = document.createElement("th");
  th2.innerText = "Nombre";
  encabezado.appendChild(th2);
  let th3 = document.createElement("th");
  th3.innerText = "Apellido";
  encabezado.appendChild(th3);
  let th4 = document.createElement("th");
  th4.innerText = "Sueldo Mensual";
  encabezado.appendChild(th4);
  let th5 = document.createElement("th");
  th5.innerText = "Sueldo Anual";
  encabezado.appendChild(th5);
  listadoEmpleado.appendChild(encabezado);
  let th6 = document.createElement("th");
  th6.innerText = "Sueldo Anual en Dolares";
  encabezado.appendChild(th6);
  listadoEmpleado.appendChild(encabezado);

  empleados.forEach((empleado) => {
    let nodotr = document.createElement("tr");
    listadoEmpleado.appendChild(nodotr);
    nodotd = document.createElement("td");
    nodotd.innerHTML = empleado.id;
    listadoEmpleado.appendChild(nodotd);
    nodotd = document.createElement("td");
    nodotd.innerHTML = empleado.nombre;
    listadoEmpleado.appendChild(nodotd);
    nodotd = document.createElement("td");
    nodotd.innerHTML = empleado.apellido;
    listadoEmpleado.appendChild(nodotd);
    nodotd = document.createElement("td");
    nodotd.innerHTML = empleado.sueldoMensual;
    listadoEmpleado.appendChild(nodotd);
    nodotd = document.createElement("td");
    nodotd.innerHTML = multiplicar(empleado.sueldoMensual, 12);
    listadoEmpleado.appendChild(nodotd);
    nodotd = document.createElement("td");
    nodotd.innerHTML = (
      multiplicar(empleado.sueldoMensual, 12) / dolarBlue
    ).toFixed();
    listadoEmpleado.appendChild(nodotd);
  });
}

let btn3 = document.getElementsByClassName("btn3")[0];
btn3.addEventListener("click", () => {
  registroEmpleados();
});

function registroEmpleados() {
  let registroEmpleados = document.getElementById("listadoEmpleado");
  registroEmpleados.innerHTML = `<div class="divform">
    
    <label>NOMBRE:</label><br>
    <input type="text" name="nombre" id="nombre" /><br>
    <label>APELLIDO:</label><br>
    <input type="text" name="apellido" id="apellido" /><br>
    <br>
    <label>EDAD:</label><br>
    <input type="number" name="edad" id="edad" /><br>
    <br>
    <label>SUELDO MENSUAL:</label><br>
    <input type="number" name="sueldoMensual" id="sueldoMensual" /><br>
    <br>
    <button  id="submitCreate">ENVIAR</button>
    </div>`;
  crearEmpleados();
}

function crearEmpleados() {
  let btn = document.getElementById("submitCreate");
  btn.addEventListener("click", () => {
    crearEmpleado();
  });
}

function crearEmpleado() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let sueldoMensual = document.getElementById("sueldoMensual").value;
  let edad = document.getElementById("edad").value;

  if (nombre === "" || apellido === "" || sueldoMensual === "" || edad === "") {
    Swal.fire({
      title: `¡Hola!`,
      text: "Datos Incompletos",
      icon: "error",
      confirmButtonText: "¡Gracias!",
    });
  } else {
    edad >= 18
      ? registro()`Correcto`
      : Swal.fire({
          title: `¡Hola!`,
          text: "Eres menor de edad, no puedes registrarte",
          icon: "error",
          confirmButtonText: "¡Gracias!",
        });
  }

  function registro() {
    let empleado = new Empleados(getId(), nombre, apellido, sueldoMensual);
    empleados.push(empleado);
    Swal.fire({
      title: `¡Hola Bienvenido!`,
      text: "Empleado cargado con exito",
      icon: "success",
      confirmButtonText: "¡Gracias!",
    });
    function getId() {
      if (empleados.length === 0) {
        return 1;
      } else {
        let ultimo = empleados[empleados.length - 1];
        return ultimo.id + 1;
      }
    }
  }
}

let btn1 = document.getElementsByClassName("btn1")[0];
btn1.addEventListener("click", () => {
  verDolar();
});

function verDolar() {
  fetch("https://api.bluelytics.com.ar/v2/latest")
    .then((res) => res.json())
    .then((json) => mostrarDolar(json));
}

function mostrarDolar(dolar) {
  let dolarcito = document.getElementById("listadoEmpleado");
  dolarcito.innerHTML = `<div class="dolar">DOLAR BLUE COMPRA: ${dolar.blue.value_buy}<br>
    DOLAR BLUE VENTA: ${dolar.blue.value_sell}</div>`;
}

let dolarBlue = 0;

fetch("https://api.bluelytics.com.ar/v2/latest")
  .then((res) => res.json())
  .then((json) => usarDolar(json));

function usarDolar(dolar) {
  dolarBlue = dolar.blue.value_avg;
}
