(function traducir() {
	var signIn=document.getElementById('form-signin-heading');
	signIn.innerHTML= "Por favor inicia sesión";

	var mail=document.getElementById('inputEmail');
	mail.placeholder="Correo Electrónico";

	var password=document.getElementById('inputPassword');
	password.placeholder="Contraseña";

	var remember=document.querySelector('.checkbox span')
	remember.innerHTML="Recordar datos";

	var boton=document.getElementsByTagName('button')[0];
	boton.innerHTML="Iniciar Sesión";

})();