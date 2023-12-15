# Exercices Chapitre 4.2

## Exo 1

### Comsommation d'une promesse

```js
const myPromise = (data, state) => new Promise((successCallback, failureCallback) => {
    state ? successCallback(data) : failureCallback('error');
});

const error = () => 'Error';

// Consommation
myPromise([1, 2, 3], true)
    .then(resultat => {
        console.log(resultat);
        return resultat;
    })
    .catch(error);
```

## Exo 2

### Pile ou face

```js
const coinFlip = () => new Promise((resolve) => {
    setTimeout(() => {
        const result = Math.random() < 0.5 ? 'pile' : 'face';
        resolve(result);
    }, 500);
});

const makeBet = async () => {
    try {
        const results = await Promise.all([coinFlip(), coinFlip(), coinFlip()]);

        const countPile = results.filter(result => result === 'pile').length;

        if (countPile === 3) {
            console.log('Vous gagnez 1 bitcoin!');
        } else if (countPile === 1) {
            console.log('Vous gagnez 0.001 bitcoin!');
        } else {
            console.log('Vous perdez 0.5 bitcoin.');
        }
    } catch (error) {
        console.error('Erreur:', error);
    }
};

// Appel de la fonction makeBet
makeBet();
```

## Exo 3

### Fibonacci async (**)

```js
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const fibonacciAsync = async () => {
    let a = 0, b = 1;

    while (true) {
        console.log(b);
        const temp = a;
        a = b;
        b += temp;
        await delay(500);
    }
};

// Appel de la fonction fibonacciAsync
fibonacciAsync();
```

## Exo 4

### Algorithmique (**)

```js
const fs = require('fs');

const calculateRowAverage = (row) => {
    const filteredRow = row.filter(value => value !== null && !isNaN(value));
    const sum = filteredRow.reduce((acc, val) => acc + val, 0);
    return sum / filteredRow.length;
};

const fillMissingValues = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        const average = calculateRowAverage(row);

        for (let j = 0; j < row.length; j++) {
            if (row[j] === null || isNaN(row[j])) {
                matrix[i][j] = average;
            }
        }
    }
};

fs.readFile('./data/matrix.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    try {
        const matrix = JSON.parse(data);
        fillMissingValues(matrix);

        // Affiche la matrice avec les valeurs manquantes complétées
        console.log(matrix);
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
});
```
