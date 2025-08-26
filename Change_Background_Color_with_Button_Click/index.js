const body = document.body;
const btnChange = document.querySelector('#btn-change');
const btnDisco = document.querySelector('#btn-disco');
const heading = document.querySelector('#heading');

let toggle = true;
let timerId = null;

const randomColorGenerator = () =>{
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    const colorObj = {
        'red' : red,
        'blue' : blue,
        'green' : green,
    };
    return colorObj;
}


//Single Change
btnChange.addEventListener('click',()=>{
    const res = randomColorGenerator();
    const {red,blue,green} = res
    if(red == 0 && blue == 0 && green == 0){
        heading.style.color = 'white';
    }
    body.style.backgroundColor = `rgb(${red},${blue},${green})`;
});


//Disco
btnDisco.addEventListener('click',()=>{
    if(toggle){
        btnDisco.innerText = 'Stop...';
        btnDisco.style.backgroundColor = 'red';
        toggle = false;
        timerId = setInterval(()=>{
            console.log("sid");
            const res = randomColorGenerator();
            const {red,blue,green} = res
            body.style.backgroundColor = `rgb(${red},${blue},${green})`;
        },100);
    }else{
        btnDisco.innerText = 'Make it Disco';
        btnDisco.style.backgroundColor = 'blueviolet';
        toggle = true;
        clearInterval(timerId);
        timerId = null;
    }
});