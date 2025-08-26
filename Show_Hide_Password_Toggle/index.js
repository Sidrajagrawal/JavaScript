const passDiv1 = document.querySelector('.pass1-div');
const passDiv2 = document.querySelector('.pass2-div');

const pass1 = document.querySelector('#pass1');
const pass2 = document.querySelector('#pass2');

const toggle = { state: true };

function createEye(inputField, div, toggleRef) {
    const eye = document.createElement('i');
    eye.classList.add('ri-eye-line');

    inputField.addEventListener('input', (e) => {
        let val = e.target.value;
        if (val.length > 0 && !div.contains(eye)) {
            div.appendChild(eye);
        } else if (val.length == 0 && div.contains(eye)) {
            div.removeChild(eye);
        }
    });

    eye.addEventListener('click', () => {
        if (toggleRef.state) {
            eye.classList.replace('ri-eye-line', 'ri-eye-off-line');
            inputField.type = 'text';
        } else {
            eye.classList.replace('ri-eye-off-line', 'ri-eye-line');
            inputField.type = 'password';
        }
        toggleRef.state = !toggleRef.state;
    });
}

createEye(pass1, passDiv1, toggle);
createEye(pass2, passDiv2, toggle);
