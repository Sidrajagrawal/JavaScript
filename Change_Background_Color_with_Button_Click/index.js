const body = document.body
const btnChange = document.querySelector('#btn-change');
const btnDisco = document.querySelector('#btn-disco');
const heading = document.querySelector('#heading');

let toggleDisco = false;

btnChange.addEventListener('click', ()=>{
    const red = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    if(red == 0 && blue == 0 && green == 0){
        heading.style.color = 'white';
    }
    body.style.backgroundColor = `rgb(${red},${blue},${green})`
})
btnDisco.addEventListener('click',()=>{
    if(!toggleDisco){
        btnDisco.innerText = 'Stop...';
        btnDisco.style.backgroundColor = 'red';
        toggleDisco = true;
    }else{
        btnDisco.innerText = 'Make it Disco';
        btnDisco.style.backgroundColor = 'blueviolet';
        toggleDisco = false;
    }
})