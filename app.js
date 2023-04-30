// Get form elements
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const genderSelect = document.getElementById('gender');

// Add event listener for form submit
form.addEventListener('submit', (event) => {
  // Prevent form from submitting
  event.preventDefault();

  // Check if name input is empty
  if (nameInput.value.trim() === '') {
    alert('Please enter your name');
    nameInput.focus();
    return false;
  }

  // Check if email input is empty
  if (emailInput.value.trim() === '') {
    alert('Please enter your email');
    emailInput.focus();
    return false;
  }

  // Check if email input is valid
  if (!isValidEmail(emailInput.value.trim())) {
    alert('Please enter a valid email');
    emailInput.focus();
    return false;
  }

  // Check if password input is empty
  if (passwordInput.value.trim() === '') {
    alert('Please enter a password');
    passwordInput.focus();
    return false;
  }

  // Check if password input is at least 6 characters
  if (passwordInput.value.length < 6) {
    alert('Password must be at least 6 characters');
    passwordInput.focus();
    return false;
  }

  // Check if confirm password input is empty
  if (confirmPasswordInput.value.trim() === '') {
    alert('Please confirm your password');
    confirmPasswordInput.focus();
    return false;
  }

  // Check if passwords match
  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Passwords do not match');
    confirmPasswordInput.focus();
    return false;
  }

  // Check if gender is selected
  if (genderSelect.value === '') {
    alert('Please select your gender');
    genderSelect.focus();
    return false;
  }

  // Submit the form if all validations pass
  form.submit();
});

// Function to validate email format
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
