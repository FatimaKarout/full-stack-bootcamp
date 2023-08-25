// Create button element
var button = document.createElement("button");

// Set button text
button.textContent = "Click me";

// Apply CSS styles to the button
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.backgroundColor = "#3498db";
button.style.color = "#ffffff";
button.style.border = "none";
button.style.cursor = "pointer";

// Add button to the body of the page
document.body.appendChild(button);

// Add click event listener to the button
button.addEventListener("click", function() {
  // Generate a random number between 1 and 1000
  var randomNumber = Math.floor(Math.random() * 1000) + 1;

  // Change the background color and text color of the button
  button.style.backgroundColor = "red";
  button.style.color = "white";

  // Change the button text
  button.textContent = "Clicked " + randomNumber + "!";
}); 



var h1 = document.createElement("h1");
h1.textContent = "Hello, world!";
h1.style.border = "10px dotted green";
document.body.appendChild(h1); 

document.addEventListener("keydown", function(event) {
  var key = event.key;
  switch (key) {
    case "a":
      h1.style.backgroundColor = "red";
      break;
    case "s":
      var currentLeft = parseInt(h1.style.left) || 0;
      h1.style.left = (currentLeft + 10) + "px";
    case "d":
      var paragraph = document.createElement("p");
      paragraph.textContent = "Key D was pressed!";
      document.body.appendChild(paragraph);
      case "w":
      h1.style.display = h1.style.display === "none" ? "block" : "none";
    
    case " ":
      var fontSize = parseInt(window.getComputedStyle(h1).fontSize) || 16;
      h1.style.fontSize = (fontSize + 2) + "px";

  }
});

// Step 3: Create a form and input fields
const form = document.createElement('form');
const fullNameInput = document.createElement('input');
const emailInput = document.createElement('input');
const passwordInput = document.createElement('input');
const confirmPasswordInput = document.createElement('input');
const submitButton = document.createElement('button');

// Add form submit event listener
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        // Check email validity and show alert
        alert('Please enter a valid email address.');
        return;
    }
    if (passwordInput.value !== confirmPasswordInput.value) {
        // Check password match and show alert
        alert('Passwords do not match.');
        return;
    }
    // Show success message if form is valid
    alert('Form submitted successfully!');
}); 
// Set placeholders and styles for input fields metel ma eemil daniel l INPUTS BEFORE FORMS
fullNameInput.placeholder = 'Full Name';
emailInput.placeholder = 'Email Address';
passwordInput.placeholder = 'Password';
passwordInput.type = 'password';
confirmPasswordInput.placeholder = 'Confirm Password';
confirmPasswordInput.type = 'password';
submitButton.textContent = 'Submit';

// Add input fields to the form
[fullNameInput, emailInput, passwordInput, confirmPasswordInput, submitButton].forEach(input => {
    input.style.display = 'block';
    input.style.marginBottom = '10px';
    form.appendChild(input);
}); 
// Append the form to the body same as before
document.body.appendChild(form);

// Add focus and blur event listeners to input fields
[fullNameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
    input.addEventListener('focus', () => {
        // Change background color on focus
        input.style.backgroundColor = 'lightyellow';
    });
    input.addEventListener('blur', () => {
        // Revert background color on blur
        input.style.backgroundColor = 'white';
    });
}); 

