const val = document.querySelector('#val');
const btnIncrement = document.querySelector('.increment');
const btnDecrement = document.querySelector('.decrement');
const btnReset = document.querySelector('.reset');

btnIncrement.addEventListener('click',()=>{
    let getVal = parseInt(val.innerText);
    val.innerText = getVal + 1;
});
btnDecrement.addEventListener('click',()=>{
    let getVal = parseInt(val.innerText);
    if(getVal == 0) {
        return;
    }else{
        val.innerText = getVal - 1;
    }
});

btnReset.addEventListener('click',()=>{
    val.innerText = 0;
})