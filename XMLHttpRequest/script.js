const APIbtn = document.querySelector('.call-api');
const quote = document.querySelector('.quote');
const autor = document.querySelector('.autor');

quote.style.color='red'
autor.style.color = 'blue';

APIbtn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://dummyjson.com/quotes/random');
    
    xhr.responseType = 'json';

    xhr.send();

    xhr.addEventListener('load', () => {
        quote.innerText = xhr.response.quote;
        autor.innerText = xhr.response.author;
        APIbtn.innerText = 'Change Quote'
    });
});