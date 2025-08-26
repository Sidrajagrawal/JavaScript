const bulbImg = document.querySelector('#bulbImg');
const btn = document.querySelector('.btn');

bulbImg.src = 'https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg';

let toggle = true;

const switchbtn = function() {
    if(toggle){
        bulbImg.src = 'https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg';
        btn.innerText = 'Off';
        btn.style.backgroundColor = 'red';
        toggle = false;
    }else{
        btn.innerText = 'On';
        bulbImg.src = 'https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg';
        btn.style.backgroundColor = 'green';
        toggle = true;
    }
};

btn.addEventListener('click',()=>{
    switchbtn();
})

bulbImg.addEventListener('click',()=>{
    switchbtn();
})