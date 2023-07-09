const form = document.querySelector('form');
const output = document.querySelector('#output');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const inputText = document.querySelector('#text').value;
  output.innerHTML = findUniqueLetter(inputText);
});


function findUniqueLetter(text) {
    if (text === '') {
        alert('Ви не ввели текст!');
        return null;
    }

    const wordSet = new Set();
    const uniqueLetters = [];

    // Розбиваємо текст на слова та перебираємо кожне слово
    text.split(" ").forEach((word) => {
        let uniqueLetter = null;
        const letterCount = {};

        // Перебираємо кожен символ у слові
        for (let letter of word) {
        // Збільшуємо лічильник для кожного символа
        letterCount[letter] = (letterCount[letter] || 0) + 1;

        // Якщо символ зустрічається лише один раз, зберігаємо його
        if (letterCount[letter] === 1) {
            uniqueLetter = letter;
        }

        // Якщо символ зустрічається більше одного разу, видаляємо його з множини унікальних символів
        if (letterCount[letter] > 1 && wordSet.has(letter)) {
            wordSet.delete(letter);
        }
        }

        // Додаємо унікальний символ у множину унікальних символів
        if (uniqueLetter) {
        wordSet.add(uniqueLetter);
        uniqueLetters.push(uniqueLetter);
        }
    });

    // Шукаємо перший унікальний символ, який більше не зустрічається у множині унікальних символів
    for (let letter of uniqueLetters) {
        if (!wordSet.has(letter)) {
        return letter;
        }
    }

    // Якщо такого символу нема, повертаємо null
    return null;
    }

// деякі вирішення отримані за допомогою асистента ChatGPT