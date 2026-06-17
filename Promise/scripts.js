// const p = new Promise(()=>{});

const resolveBtn = document.querySelector('.resolve-btn');
const rejectBtn = document.querySelector('.reject-btn');

const p = new Promise((resolve, reject) => {
    resolveBtn.addEventListener('click', (e) => {
        resolve({ name: "Sid" });
    })
    rejectBtn.addEventListener('click', (e) => {
        reject({ err: "Promise Rejected" });
    });
});

p.then((data) => {
    console.log("From 1st then",data);
    return data;
}).then((data) => {
    console.log("From 2nd then",data);
}).catch((err) => {
    console.log(err);
})