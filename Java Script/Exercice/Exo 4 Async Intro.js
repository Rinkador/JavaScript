# Exercices Chapitre 4.1

## Exo 1

### Login callback

```js
const login = (email, password, callback) => {
    setTimeout(() => {
        const user = { email }; // Créer un objet utilisateur avec l'email
        callback(user); // Appeler la fonction de rappel avec l'objet utilisateur
    }, 1000);
}

// Utilisation de la fonction de rappel pour récupérer l'email
login('alan@alan.fr', 1234567890, (user) => {
    console.log(user.email); // Afficher l'email une fois l'utilisateur "connecté"
});
```

## Exo 2

### Additions callback

```js
const add = (number, callback) => {
    setTimeout(() => {
        if (typeof number === 'number') {
            const result = number + 1;
            callback(result);
        } else {
            throw new Error('Bad number...');
        }
    }, 1000);
};

// Utilisation de la fonction add pour additionner 1 et 2
try {
    add(1, (result) => {
        console.log('Result:', result);
    });
} catch (error) {
    console.error('Error:', error.message);
}

try {
    add(2, (result) => {
        console.log('Result:', result);
    });
} catch (error) {
    console.error('Error:', error.message);
}
```

## Exo 3

### Concat async + Promesse

```js
// Fonction asynchrone qui retourne une promesse avec un message
const message = (text) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(text);
    }, 500);
});

// Fonction asynchrone qui appelle la fonction message deux fois de manière séquentielle
const concatenateMessages = async () => {
    try {
        const hello = await message("Hello");
        const world = await message("World!");
        return hello + " " + world;
    } catch (error) {
        console.error("Erreur :", error.message);
    }
};

// Appel de la fonction pour concaténer les messages
concatenateMessages().then((result) => {
    console.log(result); // Affiche "Hello World!"
});
```

## Exo 4

### add avec des promesses + Promise all

```js
const add = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof number === 'number') {
                const result = number + 1;
                resolve(result);
            } else {
                reject(new Error('Bad number...'));
            }
        }, 1000);
    });
};

// Utilisation de la fonction add avec des Promesses
const promise1 = add(1);
const promise2 = add(2);

Promise.all([promise1, promise2])
    .then((results) => {
        const sum = results.reduce((acc, curr) => acc + curr, 0);
        console.log('Sum:', sum);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });
```

## Exo 5

### 1) Changez le code ci-dessus et utilisez une **promesse** pour gérer la récupération des données au format JSON Object dans JS.

```js
const fs = require('fs').promises;

// Utiliser fs.readFile avec promesse
const readJsonFile = (filePath) => {
    return fs.readFile(filePath, { encoding: 'utf8' })
        .then((data) => {
            // Résoudre la promesse avec les données JSON
            return JSON.parse(data);
        })
        .catch((err) => {
            // Rejeter la promesse en cas d'erreur
            throw err;
        });
};

// Appel de la fonction avec le chemin du fichier
readJsonFile('./data/dragons.json')
    .then((jsonData) => {
        console.log('File data:', jsonData);
    })
    .catch((err) => {
        console.error('File read failed:', err);
    });
```

### 2) Quel est le nom du dragon le plus agé ? Faite un script pour répondre à cette question.

```js
const fs = require('fs').promises;

const findOldestDragon = (dragons) => {
    // Triez les dragons par âge de manière décroissante
    const sortedDragons = dragons.sort((a, b) => b.age - a.age);
    
    // Le dragon le plus âgé est maintenant le premier élément du tableau trié
    const oldestDragon = sortedDragons[0];

    return oldestDragon;
};

// Utilisez fs.readFile avec promesse pour lire le fichier JSON
const readJsonFile = (filePath) => {
    return fs.readFile(filePath, { encoding: 'utf8' })
        .then((data) => JSON.parse(data))
        .catch((err) => {
            throw err;
        });
};

// Appel de la fonction avec le chemin du fichier
readJsonFile('./data/dragons.json')
    .then((dragons) => {
        const oldestDragon = findOldestDragon(dragons);
        console.log('The oldest dragon is:', oldestDragon.name);
    })
    .catch((err) => {
        console.error('File read failed:', err);
    });
```

### 3) Quel est le nom du dragon le plus jeune ? Faite un script pour répondre à cette question.

```js
const fs = require('fs').promises;

const findYoungestDragon = (dragons) => {
    // Triez les dragons par âge de manière croissante
    const sortedDragons = dragons.sort((a, b) => a.age - b.age);
    
    // Le dragon le plus jeune est maintenant le premier élément du tableau trié
    const youngestDragon = sortedDragons[0];

    return youngestDragon;
};

// Utilisez fs.readFile avec promesse pour lire le fichier JSON
const readJsonFile = (filePath) => {
    return fs.readFile(filePath, { encoding: 'utf8' })
        .then((data) => JSON.parse(data))
        .catch((err) => {
            throw err;
        });
};

// Appel de la fonction avec le chemin du fichier
readJsonFile('./data/dragons.json')
    .then((dragons) => {
        const youngestDragon = findYoungestDragon(dragons);
        console.log('The youngest dragon is:', youngestDragon.name);
    })
    .catch((err) => {
        console.error('File read failed:', err);
    });
```

### 4) Récupérez les dragons et ordonnez les par age décroissant.

```js
const fs = require('fs').promises;

// Utilisez fs.readFile avec promesse pour lire le fichier JSON
const readJsonFile = (filePath) => {
    return fs.readFile(filePath, { encoding: 'utf8' })
        .then((data) => JSON.parse(data))
        .catch((err) => {
            throw err;
        });
};

// Fonction pour ordonner les dragons par âge décroissant
const orderDragonsByAgeDescending = (dragons) => {
    return dragons.sort((a, b) => b.age - a.age);
};

// Appel de la fonction avec le chemin du fichier
readJsonFile('./data/dragons.json')
    .then((dragons) => {
        const dragonsOrderedByAgeDescending = orderDragonsByAgeDescending(dragons);
        console.log('Dragons ordered by age descending:', dragonsOrderedByAgeDescending);
    })
    .catch((err) => {
        console.error('File read failed:', err);
    });
```

### Async await + Anim

```js
// Fonction simulant la Promesse anim
const anim = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 9) + 1;
            const randomLetter = String.fromCharCode(Math.floor(Math.random() * 24) + 65);
            const result = `${randomNumber}${randomLetter}`;
            resolve(result);
        }, 500);
    });
};

// Fonction pour exécuter la Promesse anim 10 fois
const generateRandomString = async () => {
    let randomString = '';
    for (let i = 0; i < 10; i++) {
        const animResult = await anim();
        randomString += animResult;
    }
    return randomString;
};

// Appel de la fonction pour générer la chaîne aléatoire
generateRandomString()
    .then((result) => {
        console.log('Random string:', result);
    })
    .catch((err) => {
        console.error('Error:', err);
    });
```

### Async await + Fetch

```js
const fetch = require('node-fetch');
const fs = require('fs');

const fetchData = async () => {
    try {
        // Utiliser fetch pour récupérer les utilisateurs
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        // Enregistrer les noms et coordonnées GPS dans une structure de données
        const userData = users.map(user => ({
            name: user.name,
            coordinates: {
                lat: user.address.geo.lat,
                lng: user.address.geo.lng,
            },
        }));

        // Enregistrer ces données dans un fichier
        const jsonData = JSON.stringify(userData, null, 2);
        fs.writeFileSync('userData.json', jsonData);

        console.log('Data saved successfully.');
    } catch (error) {
        console.error('Error:', error.message);
    }
};

// Appel de la fonction fetchData
fetchData();

//Commande à exécuter: node fetchData.js
```

### Async await + TODOS

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- ... (le reste du code reste inchangé) -->
</head>

<body>
    <h1>Todos</h1>
    <ul id="todos">
    </ul>
    <script>
        const fetchTodos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const todos = await response.json();

                const todosList = document.getElementById('todos');

                // Parcourir les 3 premiers résultats
                for (let i = 0; i < 3; i++) {
                    const todo = todos[i];

                    // Créer un élément de liste pour chaque todo
                    const li = document.createElement('li');

                    // Afficher le titre et le statut du todo
                    li.textContent = `${todo.title} - ${todo.completed ? 'Completé' : 'Non Completé'}`;

                    // Ajouter l'élément de liste à la liste des todos
                    todosList.appendChild(li);

                    // Attendre 500ms avant de traiter le prochain todo
                    await new Promise(resolve => setTimeout(resolve, 500));
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        // Appel de la fonction fetchTodos
        fetchTodos();
    </script>
</body>
</html>
```
