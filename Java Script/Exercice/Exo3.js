# Exercices Chapitre 3

## Exo 1

### Permutez les valeurs a et b suivantes

```js
function permute(arr, a, b) {
    // Vérifier si les indices sont valides
    if (a < 0 || a >= arr.length || b < 0 || b >= arr.length) {
      console.error("Indices invalides");
      return arr;
    }
  
    // Échanger les éléments aux indices spécifiés
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  
    return arr;
  }
  
  // Exemple d'utilisation
  const myArray = [1, 2, 3, 4, 5];
  console.log("Avant permutation :", myArray);
  
  permute(myArray, 1, 2);
  console.log("Après permutation :", myArray);
```

### - Soient les trois variables a, b, et c permutez les valeurs dans l'ordre suivant

- a <- b
- b <- c
- c <- a

```js
let a = 1, b = 2, c = 4;

function permute(arr) {
    // Vérifier si les indices sont valides
    if (a < 0 || a >= arr.length || b < 0 || b >= arr.length || c < 0 || c >= arr.length) {
        console.error("Indices invalides");
        return arr;
    }

    // Vérifier si les indices sont distincts
    if (a === b || a === c || b === c) {
        console.error("Les indices doivent être distincts");
        return arr;
    }

    // Échanger les éléments aux indices spécifiés
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = arr[c];
    arr[c] = temp;

    return arr;
}

// Exemple d'utilisation
let myArray = [1, 2, 3, 4, 5];
console.log("Avant permutation :", myArray);

permute(myArray);
console.log("Après permutation :", myArray);
```

## Exo 2

```js
const student = {
  name: "Alan",
  notes: [10, 16, 17],
  average: null,
};
//1 - une fonction avec l'objet student en paramètre
//2 - la fonction reduce pour agréger le tableau
//3 - return Math.floor pour les arrondis
//4 - Afficher le resultat a l'aide de backticks (backquotes alt-gr 7) 

// TODO ...

// constantes
console.log(name, notes, average);
```

### 1. Calculez la moyenne des notes de l'étudiant. Modifiez la référence du littéral

```js
const student = {
  name: "Alan",
  notes: [10, 16, 17],
  average: null,
};

// 1. Fonction pour calculer la moyenne avec l'objet student en paramètre
function calculateAverage(student) 
{
  // 2. Utilisation de la fonction reduce pour agréger le tableau de notes
  const sum = student.notes.reduce((acc, note) => acc + note, 0);

  // 3. Utilisation de Math.floor pour les arrondis
  student.average = Math.floor(sum / student.notes.length);

  // 4. Retourner la moyenne
  return student.average;
}

// Appel de la fonction pour calculer la moyenne
calculateAverage(student);

// 5. Afficher le résultat à l'aide de backticks
console.log(`Étudiant : ${student.name}\nNotes : ${student.notes}\nMoyenne : ${student.average}`);
```

### 2. Puis assignez les valeurs **name**, **notes** et **average** dans les constantes name, notes et average dans le script courant

```js
const student = {
    name: "Alan",
    notes: [10, 16, 17],
    average: null,
  };
  
  // 1. Fonction pour calculer la moyenne avec l'objet student en paramètre
  function calculateAverage(student) 
  {
    // 2. Utilisation de la fonction reduce pour agréger le tableau de notes
    const sum = student.notes.reduce((acc, note) => acc + note, 0);
  
    // 3. Utilisation de Math.floor pour les arrondis
    student.average = Math.floor(sum / student.notes.length);
  
    // 4. Retourner la moyenne
    return student.average;
  }

  // Appel de la fonction pour calculer la moyenne
    calculateAverage(student);

    // Assigner les valeurs dans des constantes distinctes
    const { name, notes, average } = student;

    // Afficher les constantes
    console.log("Nom :", name);
    console.log("Notes :", notes);
    console.log("Moyenne :", average);
```

## Exo 3

### Exercice iterate destructuring

/*Nom : Alan soeur : Sylvie*/

```js
const students = [
  {
    name: "Alan",
    family: {
      mother: "Yvette",
      father: "Paul",
      sister: "Sylvie",
    },
    age: 35,
  },
  {
    name: "Bernard",
    family: {
      mother: "Martine",
      father: "Cécile",
      sister: "Sophie",
    },
    age: 55,
  },
];
// Boucle for...of pour parcourir chaque étudiant
for (const student of students) {
    // Extraire les propriétés nécessaires de l'objet student
    const { name, family: { sister } } = student;
  
    // Afficher le résultat à l'aide de backticks
    console.log(`Nom : ${name} soeur : ${sister}`);
  }
  ```

## Exo 4

/*Exercice push value*/

```js
const str1 = ["one", "two"];
const str2 = ["three", "four"];
//Creer un nouveau tableau et ajouter les 2 tableau str avec le spread opérator
```

/*Nom de propriété calculé et décomposition*/

```js
const state = {
  name: "",
  email: "alan@alan.fr",
};

// définition d'une clé dynamique
let name = "email";
const newState = { ...state, [name]: "bernard@bernard.fr" };

  console.log(state);
  console.log(newState);
```

### Exercice push value

```js
const str1 = ["one", "two"];
const str2 = ["three", "four"];

//Creer un nouveau tableau et ajouter les 2 tableau str avec le spread opérator
const strNumbers = [...str1, ...str2];

// Afficher le tableau résultant
console.log(strNumbers);
```

### Nom de propriété calculé et décomposition

```js
const state = {
    name: "",
    email: "alan@alan.fr",
  };
  
  // Définition d'une clé dynamique
  let name = "email";
  const newState = { ...state, [name]: "bernard@bernard.fr" };
  
  console.log(state);
  // Output: { name: '', email: 'alan@alan.fr' }
  
  console.log(newState);
  // Output: { name: '', email: 'bernard@bernard.fr' }
```

## Exo 6

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// retourne la première valeur du tableau en la supprimant du tableau
numbers.shift();

function accumulator(numbers, acc = 0) {
  // Une condition d'arrêt et retourner la somme des valeurs du tableau
  // dans la fonction on ré-appelle la fonction elle-même
  // accumulator(numbers, 10);
}

//utilisation de numbers.shift() modifie le tableau original, en le raccourcissant à chaque appel de la fonction récursive
// Cela continue jusqu'à ce que le tableau soit vide,
//à ce moment-là la fonction récursive s'arrête et retourne la somme des éléments du tableau.

console.log(accumulator(numbers)); // doit retourner 55
```

### Challenge Exercice accumulator et fonction recusive

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function accumulator(numbers, acc = 0) {
  // Condition d'arrêt : si le tableau est vide, retourner l'accumulateur
  if (numbers.length === 0) {
    return acc;
  }

  // Dépiler la première valeur du tableau
  const currentValue = numbers.shift();

  // Appel récursif avec la nouvelle valeur accumulée
  return accumulator(numbers, acc + currentValue);
}

console.log(accumulator(numbers)); // doit retourner 55
```

## Exo 7

```js
const students = [
  {
    name: "Alan",
    family: {
      mother: "Yvette",
      father: "Paul",
      sister: "Sylvie",
    },
    age: 35,
  },
  {
    name: "Bernard",
    family: {
      mother: "Martine",
      father: "Cécile",
      sister: "Sophie",
    },
    age: 55,
  },
];

//Creer un nouveau tableau a partir du tableau d'objet existant
//la fonction fléchée passée à map est exécutée. 
//Elle utilise la déstructuration pour extraire les propriétés name, family, et age de chaque objet étudiant.
```

### Challenge deep copy

[Copie Profonde](https://developer.mozilla.org/fr/docs/Glossary/Deep_copy)

```js
const students = [
  {
    name: "Alan",
    family: {
      mother: "Yvette",
      father: "Paul",
      sister: "Sylvie",
    },
    age: 35,
  },
  {
    name: "Bernard",
    family: {
      mother: "Martine",
      father: "Cécile",
      sister: "Sophie",
    },
    age: 55,
  },
];

// Créer une copie profonde du tableau d'objets avec JSON.parse et JSON.stringify
const deepCopyStudents = JSON.parse(JSON.stringify(students));

// Afficher la copie profonde
console.log(deepCopyStudents);
```
