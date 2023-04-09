let say = document.querySelector('#say');

say.addEventListener('click', () => {
    let displayName = document.querySelector('#display-name');
    let name = displayName.value;

    let response = document.querySelector('#response');

    if (!name) {
        response.classList.remove('active');
    } else {
        response.innerHTML = `Hi, ${name}`;
        response.classList.add('active');
    }
})