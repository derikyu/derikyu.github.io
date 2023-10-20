const bionicReading = document.querySelector('.bionic-reading');
const text = bionicReading.querySelector('p');
const words = text.textContent.split(' ');
let currentWordIndex = 0;

function highlightWord(index) {
    text.innerHTML = words
        .map((word, i) => (i === index ? `<span class="highlight">${word}</span>` : word))
        .join(' ');
}

highlightWord(currentWordIndex);

bionicReading.addEventListener('click', () => {
    if (currentWordIndex < words.length - 1) {
        currentWordIndex++;
        highlightWord(currentWordIndex);
    }
});
