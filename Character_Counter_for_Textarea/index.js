const charCount = document.getElementById('char-count');
const wordCount = document.getElementById('word-count');
const textArea = document.querySelector('textarea');

textArea.addEventListener('input', (e) => {
    let getInput = e.target.value;

    charCount.innerText = getInput.length;

    let words = getInput.trim().split(/\s+/).filter(word => word.length > 0);
    let count = getInput.trim() ? words.length : 0;

    if (count > 200) {
        wordCount.style.color = 'red';
        wordCount.innerText = "Max Limit Reached";
        textArea.value = words.slice(0, 200).join(" "); 
    } else {
        wordCount.style.color = 'black';
        wordCount.innerText = count;
    }
});
