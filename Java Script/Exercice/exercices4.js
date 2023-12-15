//Ex 1 : simulation async avec setTimeout et un callback

//Undifined 

// La fonction login ne retourne pas explicitement une valeur,
//En outre, la fonction setTimeout ne bloque pas l'exécution du programme,
// donc le code continue à s'exécuter après avoir appelé la fonction login, 
//et le console.log(email) est exécuté avant que la fonction setTimeout ne soit terminée.

//Solution
const login = (email, password) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ email });
        }, 1000);
    });
};

login('alan@alan.fr', 1234567890)
    .then((result) => {
        console.log(result.email);
    });


// asynchrone PARTIE 2

    //callback est une fonction qui simule une opération asynchrone avec un delais de 1 seconde = 1000 ms
    //ici l'agument de fonction callback est une fonction(email, password, degree) = une closure
const login = (email, password, callback) => {
    setTimeout(() => {
        callback(email, password, 'Météo:  20 - degré'); // une fonction qui appelée ici
    }, 1000);
};

// logic
login('alan@alan.fr', '123', (email, password, degree) => {
    console.log(' EXECUTION ', email, password, degree);
    // Ici on peut faire ce que l'on veut par exemple modifier le DOM pour afficher quelque chose
});

// les scripts peuvent continuer à s'exécuter de manière asynchrone
console.log("ici je peux traiter d'autre chose dans la page")


///////////////////////////////////////////////////Ex 2 : additions callback

//Protoype
const Add = (number, callback, error) => {
    //Si number n'est pas un nombre => on retourne une erreur
    if (parseFloat(number) != number) {
        error(number);
    } else {
        //Simulation asynchrone avec fonction de rappel du nombre
        setTimeout(() => {
            callback(number);
        }, 500);
    }
};

// throw new Error("ceci n'est pas un nombre")
const error = (err) => console.error(`Ceci n'est pas un nombre ${err}`);
//Chainer les appel asynchrone
Add(1, (number) => {
    // variable définie au niveau du bloc
    let sum = parseFloat(number);
    //Ajout de 12.9 a nombre
    Add("12.9", (number) => {
        sum += parseFloat(number); // on récupère la somme précédente
        //Chaine le resultat a une autre addiction
        Add("4.9", (number) => {
            sum += parseFloat(number);

            console.log(sum);
        }, error);
    }, error);
}, error);



///////////////////////////////////////////////Ex 3 concat async

//Ce code démontre comment utiliser des fonctions de rappel pour gérer des opérations asynchrones et comment les chaîner de manière séquentielle.
//Chaque appel à la fonction concat déclenche une opération asynchrone,
//et les fonctions de rappel successives permettent d'assembler les résultats de ces opérations dans une chaîne finale.

const TMER = 500;

const concat = (content, callback) => {
    setTimeout(() => {
        callback(content); // fonction de callback
    }, TMER);
};

concat("Hello ", content => {
    let str = content;
    concat("World ", content => {
        str += content;
        concat("! ", content => {
            str += content;

            console.log(str);
        })
    })
});



//////////////////////////////////////////////////////Ex 4 = add avec des promesses

//Cette fonction prend en paramètre number et renvoie une promesse
const add = (number) =>
    //La promesse est tenue ou rejetée
    new Promise((resolve, reject) => {
        //Delais de 0.5s
        setTimeout(() => {
            //Si number n'est un int ou float = la promesse est rejetée
            if (parseFloat(number) != number) {
                reject(new Error("not a number ..."));
                return;
            }
            resolve(parseFloat(number));
        }, 500);
    });

//Promise.all est utilisé pour attendre que toutes ces promesses soient résolues. 
Promise.all([add(1), add(2), add(3)])

//Une fois que toutes les promesses sont résolues, 
//la méthode .then est appelée avec un tableau contenant les valeurs résolues de chaque promesse. 

    .then((numbers) => {
        console.log(numbers);
        console.log(numbers.reduce((acc, curr) => acc + curr));
    })
    .catch((err) => console.error(err));

// si une des promesses au moins échoue => aucune n'est résolue
    //l'echec est lié a add("Bonjour") qui n'est pas un nombre définis dans le prototype
Promise.all([add(1), add("Bonjour"), add(3)])
    .then((numbers) => {
        console.log(numbers);
        console.log(numbers.reduce((acc, curr) => acc + curr));
    })
    .catch((err) => console.error(err));



/////////////////////////////////////////////////////////////////////////////////////Ex 5 JSON
//Module node File System destiné au opération de crud sur un fichier locale

const fs = require("fs");
//Lire le contenu d'un fichier de manière asynchrone
//retourne une promesse qui sera résolue avec le contenu d'un fichier ou rejetée en cas d'erreur de lecture

//Ce code met en œuvre une logique asynchrone pour la lecture du fichier, puis effectue diverses opérations
//sur les données extraites du fichier JSON, démontrant l'utilisation des Promesses pour gérer
//des opérations asynchrones de manière plus lisible et maintenable.

const filePromise = (url) =>
    //Constructeur Promise() -> ok ou rejet
    new Promise((resolve, reject) => {
        //Chemin du fichier locale + encodage + soit erreur soit donnée
        fs.readFile(url, { encoding: "utf8" }, (err, data) => {
            //Si on rencontre une erreur de lecture
            if (err) {
                reject(new Error("File read failed:"))
                return;
            }
            //Sinon on recupere les données en lecture
            resolve(data);
        });
    });
//Chemin du fichier locale + promesse
filePromise('../../data/dragons.json').then(data => {
    //Extraction des données de donnée parsée dans un objet dragons
    //parse = analyse une chaîne de caractères JSON et construit la valeur JavaScript ou l'objet décrit par cette chaîne.
    const { dragons } = JSON.parse(data);
    //init du dragon le + vieux
    let oldDragon = { age: 0, name: null };

    for (const dragon of dragons) {
        //Affectation par decomposition
        //let age = dragon.age
        //let name = dragon.name
        const { age, name } = dragon;
        //Si age dans dans json est > 0
        if (age > oldDragon.age) {
            //On affecte tous les age et nom du json a oldDragon
            oldDragon.age = age;
            oldDragon.name = name;
        }
    }
    //test de debug
    console.log(oldDragon);
    //La méthode sort est utilisée pour trier le tableau dragons en fonction de l'âge,
    //et le dernier élément (le plus jeune dragon) est affiché avec console.log.
    dragons.sort((d1, d2) => d1.age - d2.age);

    //Les dragons sont à nouveau triés, cette fois-ci en ordre décroissant d'âge.
    //Les méthodes slice et shift sont utilisées pour obtenir le premier (le plus vieux dragon)
    //et le dernier (le plus jeune dragon) éléments du tableau.
    console.log(dragons.slice(-1));

    const { age: ageY, name: nameY } = dragons.slice(-1).shift();
    const { age: ageO, name: nameO } = dragons.slice(0, 1).shift();

    console.log(`Le plus vieux : ${ageY} ans est : ${nameY}`)
    console.log(`Le plus jeune : ${ageO} ans est : ${nameO}`);



    console.log('\nListe des dragons triés par age décroissant !\n');
    dragons.sort((d1, d2) => d2.age - d1.age);
    console.log(dragons);

});



////////////////////////////////////////////////////////////////////////////////Ex ++ Anim

//Fonction asychrone pour generer une chaine aléatoire

const generateRandomString = async () => {
    let result = "";
    let i = 0;
    for (i = 0; i < 10; i++) {
        try {
            // Exécute la promesse anim pour obtenir une valeur aléatoire
            const randomValue = await anim();
            result += randomValue.number.toString() + randomValue.letter;
        } catch (erreur) {
            console.error("Une erreur est survenue : " + erreur)
        }
    }
    return result;
}

// Fonction générant une promesse avec une valeur aléatoire
const anim = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //Chiffre de 1 a 10
            const number = Math.floor(Math.random() * 9) + 1;
            console.log(number);
            // ASCII code for A-X
            const letter = String.fromCharCode(Math.floor(Math.random() * 24) + 65);
            console.log(letter);

            const randomValue = { number, letter };
            resolve(randomValue);
        }, 1000);
    });
};

//Appel de la fonction
generateRandomString()
    .then(result => {
        console.log(result);
    })


//////////////////////////////////////Ex FETCH Placeholder USERS + Write fs

const fs = require('fs');
//Tableau vide des valeur a recuperer a partir de l'API
let users_data = [];
//URL de API
fetch('https://jsonplaceholder.typicode.com/users')
    //Retourne un resultat de lecture au format json
    .then(res => res.json())
    //Boucle sur les données
    .then(datas => {
        datas.forEach(data => {
            users_data.push({
                //nom + tableau adresse + geo + latitude et longitude
                name: data.name,
                lat: data.address.geo.lat,
                lng: data.address.geo.lng
            });
        });

        // Écriture dans le fichier une fois que la boucle est terminée
        fs.writeFileSync('./data/users.json', JSON.stringify(users_data), erreur => {
            if (erreur) {
                console.error(erreur);
            }
        });

        console.log(users_data); // Affiche les données après les avoir ajoutées au tableau
    })
    .catch(erreur => console.error(erreur));

//Attention ici : node public/js/exercices4.js et non nmp start nodemon pour eviter les boucles infinie


//Ex TODO : fetch + html todo placeholder API

const fetchDataWithDelay = () => {
    const todo_parent = document.getElementById('todo-parent');
    const results = [];
    let i = 1;

    const fetchNextTodo = () => {
        // Vérifier si on a atteint le nombre maximum d'éléments
        if (i > 3) {
            return Promise.resolve(results);
        }

        // Effectuer la requête pour récupérer les données
        return fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
            .then(response => response.json())
            .then(data => {
                results.push(data);

                let todo_children = document.createElement('li');
                todo_children.innerHTML = `Titre : ${data.title} et status : ${data.completed}`;
                todo_parent.appendChild(todo_children);

                // Simulation du délai de 500ms entre chaque requête
                return new Promise(resolve => setTimeout(resolve, 500));
            })
            .then(() => {
                // Passer à l'élément suivant
                i++;
                // Récupérer les données du prochain élément
                return fetchNextTodo();
            })
            .catch(error => {
                console.error("Une erreur s'est produite :", error);
            });
    };

    return fetchNextTodo();
};

// Appel de la fonction
fetchDataWithDelay()
    .then(results => {
        console.log("Résultats récupérés avec délai :", results);
    })
    .catch(error => {
        console.error("Une erreur s'est produite :", error);
    });


//MEME CHOSE AVEC ASYNC AWAIT

const fetchDataWithDelay = async () => {
    //Le parent HTML
    const todo_parent = document.getElementById('todo-parent');
    //tableau de resultat
    const results = [];

    // Récupération des données => les 3 premier element du json
    for (let i = 1; i <= 3; i++) {
        try {
            //Fetch url + id dynamique
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`);
            //Reponse de la requete HTTP GET au format json
            const data = await response.json();
            //Ajout des resultat au tableau
            results.push(data);
            //Creer un <li> pour les 3 resultat + titre et status
            let todo_children = document.createElement('li');
            todo_children.innerHTML = `Titre : ${data.title} et status : ${data.completed}`;
            //Ajout de <li> a <ul>
            todo_parent.appendChild(todo_children);

            // Simulation du délai de 500ms entre chaque requête
            await new Promise(resolve => setTimeout(resolve, 500));

        } catch (error) {
            console.error("Une erreur s'est produite :", error);
        }
    }

    return results;
};

// Appel de la fonction asynchrone
fetchDataWithDelay()
    .then(results => {
        console.log("Résultats récupérés avec délai :", results);
    })
    .catch(error => {
        console.error("Une erreur s'est produite :", error);
    });

    












//PARTIE 2

//Ex 1 = réecrire la fonction avec des fonctions flechées

const myPromise = (data, state) => {

    return (new Promise((successCallback, failureCallback) => {
        if (state)
            successCallback(data);
        else
            failureCallback('error');
    })
    );
}

const error = () => "Error";

// Consommation
myPromise([1, 2, 3], true)
    .then(resultat => console.log(resultat))
    .catch(error);



//Ex 2 pile ou face

//Ce code simule le lancer de trois pièces de monnaie de manière asynchrone et détermine le gain en fonction des combinaisons obtenues.
//Il utilise les Promesses pour gérer les opérations asynchrones et Promise.all pour lancer plusieurs Promesses en parallèle.

//Cette fonction retourne une promesse = lancer de piece avec 50% de chance de pile et de face

const coin = () => (
    new Promise((resolve, reject) => {
        setTimeout(() => Math.random() - .5 > 0 ? resolve("pile") : resolve("face"))
    }, 500)
);
//Promise.all est utilisé pour lancer trois pièces simultanément.
//Cela crée un tableau de trois Promesses qui représentent chacune le résultat d'un lancer de pièce.

//La fonction de rappel reçoit un tableau res contenant les résultats de chaque lancer de pièce.

Promise.all([coin(), coin(), coin()]).then(res => {
    //La constante combinations est créée en filtrant le tableau res pour ne conserver que les occurrences de "pile".
    const combinations = res.filter(p => p === 'pile');

    //En fonction du nombre de "pile" obtenu, le gain est calculé. Si les trois lancers donnent "pile",
    //le gain est de 100. Si un seul lancer donne "pile", le gain est de 0.001. Sinon, le gain est de -0.5.

    if (combinations.length === 3) return 100;
    if (combinations.length === 1) return 0.001;

    return -0.5

}).then(
    gain => {
        console.log(gain)
        if (gain === 100) {
            console.log("3 piles")
        } else if (gain === 0.001) {
            console.log("1 seule pile")
        } else {
            console.log("50% 2 piles")
        }
    }
);


//Ex 3 fibonacci

//En mathématiques, la suite de Fibonacci est une suite de nombres entiers dans laquelle
//chaque nombre est la somme des deux nombres qui le précèdent.
// (n-1) + (n-2)
// 1 1 2 3 5 8

const fibo = (n) => {
    let [n1, n2] = [0, 1];
    let sum = 0;

    for (let i = 2; i <= n; i++) {
        sum = n1 + n2;
        [n1, n2] = [n2, sum];
    }

    return sum;
};

console.log(fibo(10));

// Async

// algo avec générateur

function* algoFib(n) {
    let [n1, n2] = [0, 1];
    let sum = 0;
    while (true) {
        sum = n1 + n2;
        [n1, n2] = [n2, sum];

        yield sum;
    }
}

// let generator = algoFib();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

const generator = algoFib();
let count = 0;
const interval = setInterval(() => {
    if (count === 10) {
        clearInterval(interval);
        console.log(generator.next());
    } else {
        count++;
        console.log(generator.next());
    }
}, 500);



