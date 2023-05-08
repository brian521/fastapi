const form = document.querySelector('form');
const input = document.querySelector('textarea');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const response = await fetch('/static', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            input: input.value
        })
    });
    const data = await response.json();
    console.log(data);
    const p = document.createElement('p');
    p.innerText = data.input
    form.appendChild(p);
});
