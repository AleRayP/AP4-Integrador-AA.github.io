
// llamado de datos
let user;
$.ajax({
  url: 'https://randomuser.me/api/?exc=gender,login,registered,id,nat&nat=br,de,es,gb,mx,nz',
  dataType: 'json',
  success: function(data) {
	user = data.results[0];
	document.getElementById("img_portrait").src = user.picture.large;
	document.getElementById("img_thumbnail").src = user.picture.thumbnail;
	document.getElementById("nombre").innerHTML = user.name.first + " " + user.name.last;
	document.getElementById("edad").innerHTML = user.dob.age
	document.getElementById("residencia").innerHTML = user.location.city +", "+ user.location.state +", "+ user.location.country
	document.getElementById("email").innerHTML = user.email;
	document.getElementById("telefono").innerHTML = user.phone;
	document.getElementById("cell").innerHTML = user.cell;
	
	document.getElementById("em").dataset.tooltip = document.getElementById("email").innerHTML;
	document.getElementById("tf").dataset.tooltip = document.getElementById("telefono").innerHTML;
	document.getElementById("tm").dataset.tooltip = document.getElementById("cell").innerHTML;

  }
  
});

//Codigo Navbar desaparece y aparece
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navPrincipal").style.top = "0";
		document.getElementById("scrollMenu").style.top = "0";
	} else {
		document.getElementById("navPrincipal").style.top = "-100px";
		document.getElementById("scrollMenu").style.top = "-150";
	}
  prevScrollpos = currentScrollPos;
}

/*Codigo copiado y pegado*/
function copiarAlPortapapeles(id_elemento) {

  // Crea un campo de texto "oculto"
  var aux = document.createElement("input");

  // Asigna el contenido del elemento especificado al valor del campo
  aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);

  // Añade el campo a la página
  document.body.appendChild(aux);

  // Selecciona el contenido del campo
  aux.select();

  // Copia el texto seleccionado
  document.execCommand("copy");

  // Elimina el campo de la página
  document.body.removeChild(aux);
}

document.getElementById("em").onclick= function (){
	copiarAlPortapapeles("email");
}
document.getElementById("tf").onclick= function (){
	copiarAlPortapapeles("telefono");
}
document.getElementById("tm").onclick= function (){
	copiarAlPortapapeles("cell");
}