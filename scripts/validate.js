const formValidation = {
  formSelector: '.popup__content',
  inputSelector: '.popup__input-form',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input-form_type_error',
  errorClass: 'popup__error_visible'
};

function disableSubmit(event) {
  event.preventDefault();
};


function enableValidation(config) {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((form) => {
    form.addEventListener('submit', disableSubmit);
    form.addEventListener('input', function () {
      toggleButton(form, config);
    });
    addInputListeners(form, config);
    toggleButton(form, config);

    form.addEventListener('reset', () => {
      setTimeout(() => {
        toggleButton(form, config);
      }, 0);
    });

  });
};

function handleFormInput(event, config) {
  const input = event.target;
  const inputId = input.id;
  const errorElement = document.querySelector(`#${inputId}-error`);

  if (input.validity.valid) {
    input.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
  } else {
    input.classList.add(config.inputErrorClass);
    errorElement.textContent = input.validationMessage;
  }
};

function toggleButton(form, config) {
  const buttonSubmit = form.querySelector(config.submitButtonSelector);
  const isFormValid = form.checkValidity();
  buttonSubmit.disabled = !isFormValid;

  buttonSubmit.classList.toggle(config.inactiveButtonClass, !isFormValid);
}

function addInputListeners(form, config) {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));

  inputList.forEach(function (item) {
    item.addEventListener('input', function (event) {
      handleFormInput(event, config)
    });
  });
};



enableValidation(formValidation);


