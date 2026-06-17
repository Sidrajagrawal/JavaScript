
document.getElementById('blockBtn')
    .addEventListener('click', () => {
        const start = Date.now();

        while (Date.now() - start < 5000) {

        }
        console.log("Blocking Finished");
    });

const rand = () => {
    return Math.floor(Math.random() * 255);
}

document.getElementById('normalBtn')
    .addEventListener('click', () => {

        document.body.style.backgroundColor = `rgb(${rand()},${rand()},${rand()})`
    });