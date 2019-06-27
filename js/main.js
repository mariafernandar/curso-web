function enviar() {
  const nombre = document.getElementById("name").value;
  const servicio = document.getElementById("service_select").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;

  if (nombre == "" || servicio == "" || correo == "" || mensaje == "") {
    alert("Debe llenar todos los campos");
  } else if (!validar_email(correo)) {
    alert("El email NO es correcto");
  } else {
    alert("Mensaje enviado...");
  }
}

function validar_email(correo) {
  var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(correo) ? true : false;
}
