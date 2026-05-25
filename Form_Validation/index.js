const email = document.getElementById('exampleInputEmail1');
const emailDiv = document.querySelector('.email-div');
let emailVal = "";

let flag = false;
let val = "";

function warning(msg,cls){
    let Warning =  document.createElement('div');
    Warning.innerText = msg;
    Warning.classList.add(cls);
    Warning.style.color = 'red';
    return Warning;
}

email.addEventListener('input',(e)=>{
    val = val + e.data;
    if(e.data == ' ' && flag === false){
        let space = warning('Do not use Space','form-text');
        emailDiv.append(space);
        flag = true;
    }
    if(val.length > 254){
        
        let maxLimit = warning('Max limit Reach','form-text');
        emailDiv.append(maxLimit);
    }
})