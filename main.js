// ===========================
// GET DOM ELEMENTS
// ===========================
const subscribeForm = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("email-error");
const signupCard = document.querySelector(".card-container");
const successCard = document.getElementById("success-card");
const emailDisplay = document.getElementById("email-display");
const dismissBtn = document.getElementById("dismiss-btn");

// ===========================
// EMAIL VALIDATION FUNCTION
// ===========================
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ===========================
// FORM SUBMIT HANDLER
// ===========================
subscribeForm.addEventListener("submit", (e) => {
  // Step 1: Prevent default form behavior
  e.preventDefault();
  
  // Step 2: Get email value and trim whitespace
  const email = emailInput.value.trim();
  
  // Step 3: Validate the email
  const isValid = validateEmail(email);
  
  if (!isValid || email === "") {
    // Step 4: Email is INVALID - show error state
    emailInput.classList.add("error");
    errorMessage.textContent = "Valid email required";
  } else {
    // Step 5: Email is VALID - clear any error state
    emailInput.classList.remove("error");
    errorMessage.textContent = "";
    
    // Step 6: Show success state
    signupCard.setAttribute("hidden", "");
    successCard.removeAttribute("hidden");
    successCard.setAttribute("aria-hidden", "false");
    
    // Insert user's email into success message
    emailDisplay.textContent = email;

    // Move focus to success card heading
    successCard.querySelector("h1").focus();
  }
});

// ===========================
// DISMISS BUTTON HANDLER
// ===========================
dismissBtn.addEventListener("click", () => {
  // Step 7: Hide success card and show signup form again
  successCard.setAttribute("hidden", "");
  successCard.setAttribute("aria-hidden", "true");
  signupCard.removeAttribute("hidden");
  
  // Optional: Clear the form
  emailInput.value = "";
  emailInput.classList.remove("error");
  errorMessage.textContent = "";
});

// ===========================
// OPTIONAL: REAL-TIME VALIDATION
// ===========================
emailInput.addEventListener("input", () => {
  // Clear error state as user types
  if (emailInput.classList.contains("error")) {
    emailInput.classList.remove("error");
    errorMessage.textContent = "";
  }
});

