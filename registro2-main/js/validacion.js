const checkbox = document.getElementById("checkbox");
const butonTerminos = document.getElementById("buttonTerm");
let feedback_checkbox = document.getElementById("invalid_feedback_checkbox");

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms) 
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          //Ejecuta la funcion de las password
          validarPassword2()  
          //Feedback del checkbox
          if (!checkbox.checked) {
            feedback_checkbox.innerHTML = `Debe aceptar los términos del servicio`;
            feedback_checkbox.style.color="red";
            butonTerminos.style.color="red";
          }
          if (checkbox.checked) {
            feedback_checkbox.innerHTML = "";
          }

          if (!form.checkValidity()) { //
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated') //muestra todas las validaciones
        }, false)
      })
  })()

  function invalidFeedback_OF() {
    if (checkbox.checked) {
      feedback_checkbox.innerHTML = "";
      butonTerminos.style.color="blue";
    }
  };
  //2 opciones: 1-dar estilo mediante boostrap 2-dar estilo mediante HTML y CSS. Para la 2: ver si es posible poner un evento de escucha en checkbox

//Constantes de las contraseñas
  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");
  
//Escuchador de los input de las password para que las compare en tiempo real  
  password1.addEventListener('keyup',validarPassword2);
  password2.addEventListener('keyup',validarPassword2);
  password1.addEventListener('blur',validarPassword2);
  password2.addEventListener('blur',validarPassword2);
  
//Función para la validacion de las password 
function validarPassword2(){
      if(password1.value !== password2.value && password1.checkValidity() || password1.value !== password2.value && password1.value !== ""){
        password2.classList.add("is-invalid")
        password2.classList.remove("is-valid")
        password2.setCustomValidity("error")
      } else {
        password2.classList.add("is-valid")
        password2.classList.remove("is-invalid")
        password2.setCustomValidity("")
      }
  }
  