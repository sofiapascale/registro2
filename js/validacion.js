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
  