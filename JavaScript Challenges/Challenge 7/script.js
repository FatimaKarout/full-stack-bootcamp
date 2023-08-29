
const containerDiv = document.createElement('div');
containerDiv.classList.add('container');

const loginContainerDiv = document.createElement('div');
loginContainerDiv.classList.add('login__container');

const loginSigninDiv = document.createElement('div');
loginSigninDiv.classList.add('login__signin');

const loginSigninNowDiv = document.createElement('div');
loginSigninNowDiv.classList.add('login__signin-now');

const h1 = document.createElement('h1');
h1.textContent = 'Sign up NOW!';

const h3 = document.createElement('h3');
h3.textContent = 'Enter your details';

const form = document.createElement('form');

const emailLabel = document.createElement('label');
emailLabel.textContent = 'Email';

const emailInput = document.createElement('input');
emailInput.classList.add('input-field');
emailInput.type = 'email';
emailInput.placeholder = 'Email';
emailInput.required = true;

emailLabel.appendChild(emailInput);

const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Password';

const passwordInput = document.createElement('input');
passwordInput.classList.add('input-field');
passwordInput.type = 'password';
passwordInput.placeholder = 'Password';
passwordInput.required = true;

passwordLabel.appendChild(passwordInput);

const confirmPasswordLabel = document.createElement('label');
confirmPasswordLabel.textContent = 'Confirm Password';

const confirmPasswordInput = document.createElement('input');
confirmPasswordInput.classList.add('input-field');
confirmPasswordInput.type = 'cPassword';
confirmPasswordInput.placeholder = 'Confirm Password';
confirmPasswordInput.required = true;

confirmPasswordLabel.appendChild(confirmPasswordInput);

const submitButton = document.createElement('button');
submitButton.classList.add('filled-btn');
submitButton.id = 'submit-btn';
submitButton.textContent = 'Submit';

form.append(emailLabel, passwordLabel, confirmPasswordLabel, submitButton);

loginSigninNowDiv.append(h1, h3, form);
loginSigninDiv.appendChild(loginSigninNowDiv);
loginContainerDiv.appendChild(loginSigninDiv);
containerDiv.appendChild(loginContainerDiv);


document.body.appendChild(containerDiv);  













