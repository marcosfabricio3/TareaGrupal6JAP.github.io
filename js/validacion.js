const formulario = document.getElementById('myForm');
const inputs = document.querySelectorAll('#myForm input');

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
})()
  
//Validacion Contraseña
const validarpass = () =>{
  var pass1 = document.getElementById("password1");
  var pass2 = document.getElementById("password2");
    
  if(pass1.value !== pass2.value || pass1.value == "" ){
   pass2.setCustomValidity('no coinside');
  } else {
    pass2.setCustomValidity('');
  }
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "password2":
			validarpass();
		break;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

// Validacion checkbox

var form =document.querySelector("form");

form.addEventListener("submit", (event) => {
  var checkboxCheck = document.getElementById("terminos").checked;
  
  event.preventDefault();
  
  if(checkboxCheck){
    form.submit();
  }

  var nuevoBotonDeTerminos = `<button type="button" class="btn btn-link ps-0" id="btn-modal-terminos" data-bs-toggle="modal" data-bs-target="#modalTerminos" style="color:red ;">Términos del servicio</button>`
  if(!checkboxCheck){
    document.getElementById("botonTerminos").innerHTML = nuevoBotonDeTerminos;
  }
})

//Checkbox en tiempo real
 document.getElementById("terminos").addEventListener('click', ()=> {

  var nuevoBotonChekeado = ` <button type="button" class="btn btn-link ps-0" id="btn-modal-terminos" data-bs-toggle="modal" data-bs-target="#modalTerminos">Términos del servicio</button>`;
  var checkboxCheck = document.getElementById("terminos").checked;

  if(checkboxCheck){
    document.getElementById("botonTerminos").innerHTML = nuevoBotonChekeado;
  }

});