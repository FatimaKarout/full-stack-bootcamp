// DOM Tree Navigation
const menuDiv = document.querySelector('.menu');
const headerElement = document.querySelector('header');
const footerElement = document.querySelector('footer');

console.log(menuDiv.children);
console.log(headerElement.children);
console.log(footerElement.children);


// DOM Element Creation
const containerDiv = document.createElement('div');
containerDiv.className = 'container';

const paragraph = document.createElement('p');
paragraph.textContent = 'Hello, World!';

containerDiv.appendChild(paragraph);
document.body.appendChild(containerDiv);


// Element Styling
containerDiv.style.backgroundColor = 'blue';     
paragraph.style.color = 'white';
paragraph.style.fontSize = '24px';
paragraph.style.fontFamily = 'Helvetica';
paragraph.style.border = '1px solid black';

const headingTags = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
headingTags.forEach(tag => {
  tag.style.fontStyle = 'italic';
});    


let newButton = document.createElement("button");
newButton.setAttribute("class", "changingColor");
newButton.textContent = "Click Me!";

newButton.style.width = "100px";
newButton.style.height = "50px";

document.body.appendChild(newButton);

newButton.addEventListener("mouseover", function () {
  newButton.style.backgroundColor = "red";
});

newButton.addEventListener("mouseout", function () {
  newButton.style.backgroundColor = "white";
});

//Event Delegation

let originDiv = document.getElementById("original");
let anyButton = document.querySelector('button');

originDiv.addEventListener("click", function () {
    if(anyButton.click)
  console.log(anyButton.textContent);
});

//Form Data Extraction

let form = document.createElement("form");
document.body.appendChild(form);

let nameLabel = document.createElement("label");
let nameBox = document.createElement("input");
nameBox.type = "text";
nameBox.setAttribute("class", "name");
nameLabel.textContent = "Name: ";
form.appendChild(nameLabel);
form.appendChild(nameBox);

let emailLabel = document.createElement("label");
let emailBox = document.createElement("input");
emailBox.type = "email";
emailBox.setAttribute("class", "email");
emailLabel.textContent = "Email: ";
form.appendChild(emailLabel);
form.appendChild(emailBox);

let subButton = document.createElement("button");
subButton.textContent = "Submit";
form.appendChild(subButton);




