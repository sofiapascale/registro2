
  
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms) 
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          validarPassword2()
          if (!form.checkValidity()) { //
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated') //muestra todas las validaciones
        }, false)
      })
  })()

  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");
  const todobien = document.getElementById("todobien");

password1.addEventListener('keyup',validarPassword2);
  password2.addEventListener('keyup',validarPassword2);
  password1.addEventListener('blur',validarPassword2);
  password2.addEventListener('blur',validarPassword2);
  
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