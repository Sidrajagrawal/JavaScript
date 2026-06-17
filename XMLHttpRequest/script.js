const APIbtn = document.querySelector('.call-api');
const quote = document.querySelector('.quote');
const autor = document.querySelector('.autor');

quote.style.color = 'red'
autor.style.color = 'blue';

APIbtn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://dummyjson.com/quotes/random');

    xhr.responseType = 'json';

    xhr.send();

    //Method 1
    // xhr.addEventListener('load', () => {
    //     quote.innerText = xhr.response.quote;
    //     autor.innerText = xhr.response.author;
    //     APIbtn.innerText = 'Change Quote'
    // });
    //Method2 
    xhr.onload = () => {
        quote.innerText = xhr.response.quote;
        autor.innerText = xhr.response.author;
        APIbtn.innerText = 'Change Quote'
    }
});