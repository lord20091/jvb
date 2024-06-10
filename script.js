document.addEventListener('DOMContentLoaded', (event) => {
    let input = document.querySelector('input');
    let addButton = document.querySelector('button');
    let displayDiv = document.querySelector('#display');

    let savedWord = localStorage.getItem('word');
    if (savedWord) {
        displayDiv.textContent = savedWord;
    }

    addButton.addEventListener('click', () => {
        let newWord = input.value;
        if (newWord) {
            localStorage.setItem('word', newWord);
            displayDiv.textContent = newWord;
            input.value = '';
        }
    });
});