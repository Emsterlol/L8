    // JavaScript code for form validation
	// Prevent form from submitting
  const form = document.querySelector("#myForm");
  form.addEventListener("submit", function(event) {
      event.preventDefault();
      // Retrieve the input field value
      const inputField = document.querySelector("#inputField");
      const inputValue = inputField.value;
      // Regular expression pattern for alphanumeric input
      const alphanumericRegex = /^[a-zA-Z0-9]+$/;
      // Check if the input value matches the pattern
      if (alphanumericRegex.test(inputValue)) {
        // Valid input: display confirmation and submit the form
        alert("Form submitted successfully!");
        // Invalid input: display error message
      } else { 
        alert("Please enter a valid alphanumeric value.");
      }
    });