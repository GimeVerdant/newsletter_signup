let subscribeForm = document.getElementById("form");

subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent form from submitting and refreshing page



  
function validateEmailInput() {
  const emailInput = document.getElementById('email').value;
  const feedbackElement = document.getElementById('email-error');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailInput)) {
    feedbackElement.textContent = ""; // Email is valid
  } else {
    feedbackElement.textContent = "Please enter a valid email address.";
  }
}



  let email = document.getElementById("email");


  if (email.value == "") {
    alert("Ensure you input a value in the email field!");

  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    
    console.log(
      `This form has an email of ${email.value}`
    );

    email.value = "";
  }
});

document.querySelector('.success').style.display = 'block';
document.querySelector('.form-section').style.display = 'none';