

  // Initialize form validation on the registration form.
  // It has the id "registration"
  $("#registration").validate({
    // Specify rules for error icon placement
      errorPlacement: function (error, element) {
          error.insertAfter(element);
          if (element.hasClass('reg')) {
            element.addClass('red')
            element.next().removeClass('passValid').addClass('passError');
          }
      },
      success: function (div) {
          if (div.prev().hasClass('reg')) {
            div.prev().removeClass('red');
          }
      },
      highlight: function (element, errorClass, validClass) {
          if ($(element).hasClass('reg')) {
              $(element).next().removeClass('passValid').addClass('passError');
          } else {
              $(element).addClass(errorClass).removeClass(validClass);
          }
      },
      unhighlight: function (element, errorClass, validClass) {
          if ($(element).hasClass('reg')) {
              $(element).next().removeClass('passError').addClass('passValid');
          } else {
              $(element).removeClass(errorClass).addClass(validClass);
          }
      },

    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      password: {
        required: true,
        minlength: 5,
        maxlength: 12
      }
    },

    // Specify validation error messages
    messages: {
      firstname: "First Name cannot be empty",
      lastname: "Last Name cannot be empty",
      email: {
        required: "Email cannot be empty",
        email: "Looks like this is not an email",
      },
      password: {
        required: "Password cannot be empty",
        minlength: "Your password must be at least 5 characters long",
        maxlength: "Your password must not exceed 12 characters"
      },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();     
    },
  }
  });
