const form = document.querySelector('form');
const input = document.querySelector('textarea');
const button = document.querySelector('button');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = input.value;
    const newInput = document.createElement('p');
    newInput.innerText = userInput;
    form.appendChild(newInput);
    input.value = '';
});