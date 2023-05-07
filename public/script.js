const div = document.querySelector('div');
const input = document.querySelector('textarea');
const button = document.querySelector('button');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = input.value;
    const newInput = document.createElement('p');
    newInput.innerText = userInput;
    div.appendChild(newInput);
    input.value = '';
});