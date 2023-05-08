const form = document.querySelector('form');
const input = document.querySelector('textarea');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("1");
    const response = await fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            input: input.value
        })
    });
    console.log("2");
    const data = await response.json();
    console.log(data);
    const p = document.createElement('p');
    p.innerText = data.input
    form.appendChild(p);
});
