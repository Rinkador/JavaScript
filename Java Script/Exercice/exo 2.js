//Ex 1 = Tableau et reference

let fruits = ['Apple', 'Orange'];
//ici on ne cree pas un nouveau tableau mais une nouvelle reference qui pointe vers le tableau fruit[]
//En d'autres termes, les deux variables, newFruits et fruits, partagent le même objet tableau en mémoire. comme un pointeur c ou c++
let newFruits = fruits;
newFruits.push('Banana');
//Ce code retourne true car newFruits et fruits font référence au même tableau en mémoire
console.log(newFruits === fruits);

// 2 nouveau tableau qui n'a pas de reference au tableau fruit
newFruits = [];
//ici on pousse chaque element du tableau d'origine dnas un nouveau tableau
for (const fruit of fruits) {
    newFruits.push(fruit);
}
// retourne false car créé de nouveaux tableaux indépendants de celui d'origine. Cela signifie que les nouveaux tableaux ne partagent pas
//la même référence en mémoire que le tableau d'origine.
console.log(newFruits === fruits);
// Comme c'est un tableau de valeurs primitives simple, on peut faire une copie peu profonde à l'aide du spread operator
//spread operator === opérateur de propagation
newFruit = [...fruits];



//Ex 2 = la puissance sur un tableau

//Tableau de 1 a 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Creer un nouveau tableau avec map() +
//num % 3 est ce que chaque element est / 3 ?
//Si oui chaque elemnt * 3
//Sinon les elements sont inchangé
//1 n'est pas divisible par 3, donc il est élevé au cube : 1^3 = 1.
// 2 n'est pas divisible par 3, donc il est élevé au cube : 2^3 = 8.
// 3 est divisible par 3, donc il reste inchangé : 3.
// 4 n'est pas divisible par 3, donc il est élevé au cube : 4^3 = 64.
// Et ainsi de suite...

const newNumbers = numbers.map(num => num % 3 ? num ** 3 : num);
console.log(newNumbers);



//Ex 3

const populations = [
    { "id": 0, "name": "Alan" },
    { "id": 1, "name": "Albert" },
    { "id": 2, "name": "Jhon" },
    { "id": 3, "name": "Brice" },
    { "id": 4, "name": "Alexendra" },
    { "id": 5, "name": "Brad" },
    { "id": 6, "name": "Carl" },
    { "id": 7, "name": "Dallas" },
    { "id": 8, "name": "Dennis" },
    { "id": 9, "name": "Edgar" },
    { "id": 10, "name": "Erika" },
    { "id": 11, "name": "Isaac" },
    { "id": 12, "name": "Ian" }
];


// 1. Parcourez le tableau populations et ajoutez un champ count qui compte le nombre d'occurence(s) de a, dans les noms. Utilisez un for of.

for (const pop of populations) { //iteration sur le tableau population a travers chaque objet pop
    //Extrait la propriété name de chaque objet du tableau
    const { name } = pop;
    //creer un tableau letter qui divise le nom en tableau de caracète avec spread opéreateur (opérateur de propagation)
    const letters = [...name];
    //reduce compte le nombre de a et de l dans le tableau letter :
    //le callback verifie que current (le nom) possède un a ou un l apres convertion en minuscule
    //Si c le cas on incremente acc (accumulateur) sinon on retouen acc courant
    const count = letters.reduce((acc, curr) => {
        if (["a", "l"].includes(curr.toLowerCase()))
            return acc += 1; else return acc;
    }, 0);
    //ajout de la propriété count a chaque objet pop avec la valeur calculée
    pop.count = count;
}
//En résumé, le code ajoute un champ count à chaque objet dans le tableau populations,
//représentant le nombre d'occurrences des lettres "a" et "l" dans le nom associé à chaque objet.
console.log(populations);

// Ordonnez en fonction du nombre d'occurence du count le plus haut au plus bas
//compare les valeurs de count de manière décroissante
populations.sort((p1, p2) => p2.count - p1.count);
console.log(populations);


//Ex 4 Reprenez l'objet numbers (array) de numériques et utilisez la méthode reduce pour calculer le max.
//https://devdocs.io/javascript/global_objects/array/reduce
//Trouve la valeur la + grande du tableau

const numbers = [1, 2, 3, 4, 50, 6, 7, 8, 9, 10];

const maxNumber = numbers.reduce((acc, curr) => curr > acc ? curr : acc, 0);
//1 - reduce agrège les elements du tableau en une seule valeur
//2 - le callback (La fonction de rappel) prend deux paramètres, acc (accumulateur) et curr (élément actuel du tableau).
//3 - Au début, l'accumulateur (acc) est initialement défini à 0 (c'est le deuxième argument de reduce).
//4 - La fonction de rappel compare l'élément actuel (curr) avec l'accumulateur (acc).
//5 - Si l'élément actuel (curr) est supérieur à l'accumulateur (acc), la fonction renvoie l'élément actuel (curr), sinon, elle renvoie l'accumulateur (acc).
// Cela garantit que l'accumulateur contient toujours la valeur la plus grande vue jusqu'à présent.
// Ce processus est répété pour chaque élément du tableau, mettant à jour l'accumulateur à chaque étape.

//en compare chaque élément du tableau avec l'accumulateur et en mettant à jour l'accumulateur avec la valeur la plus grande rencontrée jusqu'à présent
console.log(maxNumber);



//Ex 5 Somme des impaires
//Tableau de nombre

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//1 - Utilise la méthode reduce pour agréger les éléments du tableau en une seule valeur (dans ce cas, la somme des nombres impairs).
//2 - La fonction de rappel prend deux paramètres, acc (accumulateur) et curr (élément actuel du tableau).
//3 - par defaut acc = 0
//4 - La fonction de rappel vérifie si l'élément actuel (curr) est impair en utilisant l'opérateur modulo (curr % 2) = reste de la division eclidienne.
//Si c'est le cas, elle ajoute cet élément à l'accumulateur (curr + acc), sinon, elle renvoie simplement l'accumulateur (acc).
//5 - Ce processus est répété pour chaque élément du tableau.
//À la fin, la valeur finale de l'accumulateur (acc) sera la somme des nombres impairs du tableau.
const sumOdd = numbers.reduce((acc, curr) => curr % 2 ? curr + acc : acc, 0);
console.log(sumOdd);

//Ex 6
//Tableau d'objets téléphone nom + prixHT

const phones = [
    { name: "iphone XX", priceHT: 900 },
    { name: "iphone X", priceHT: 700 },
    { name: "iphone B", priceHT: 200 },
];

// Première version simple map
//Creer un nouveau tableau pricesTTC : pricesHT * (20/100)
const pricesTTC = phones.map(phone => phone.priceHT * 1.2); // bien comprendre cette version
console.log(pricesTTC);

// sans modifier le table initial
//Cette version crée un nouveau tableau pricesTTC_v2 où chaque élément est un nouvel objet contenant
//name, priceHT et priceTTC. Cela garantit que le tableau d'origine phones n'est pas modifié.
const pricesTTC_v2 = phones.map(phone => ({ name: phone.name, priceHT: phone.priceHT, priceTTC: phone.priceHT * 1.2 }));
console.log(pricesTTC_v2);
//Cette version utilise l'opérateur de propagation ({ ...phone })
//pour créer un nouvel objet contenant toutes les propriétés de l'objet phone d'origine,
//et ajoute la nouvelle propriété priceTTC. Cela crée également un nouveau tableau pricesTTC_v3 sans modifier le tableau phones d'origine.
const pricesTTC_v3 = phones.map(phone => ({ ...phone, priceTTC: phone.priceHT * 1.2 }));
console.log(pricesTTC_v3);



//Ex 7 Distance en un point et un tableau de points
//Soit le point A suivant, calculez la distance de ce point à l'ensemble de chaques points de la liste positions.
//Vous donnerez les résultats dans un nouveau tableau distances.

//Position x et y  du point A dans un tableau
const A = [8.3, 7.5];
//Tableau de position des autres points [x,y]
const positions = [[1, 1], [2, 2], [3, 4.5], [0, 9]];
//Tableau des distances entre A et les autres points vide
const distances = [];
//Assignation de 8.3 a Ax et 7.5 a Ay
const [Ax, Ay] = A;
const PRECISION = 100;
//une boucle for...of pour parcourir chaque position dans le tableau positions.
for (const [x, y] of positions) {
    //Ajout au tableau de distance
    distances.push(
        //calcule la distance entre le point A et la position actuelle en utilisant la formule de distance euclidienne,
        //et ajoute un objet { point: [x, y], distance: distance_calculée } au tableau distances.
        {
            point: [x, y],
            //Math.sqrt = retourne la racine carrée d'un nombre.
            distance: Math.floor(Math.sqrt((Ax - x) ** 2 + (Ay - y) ** 2) * PRECISION) / PRECISION
        }
    );
}
//Resultat de la distance entre le point A et chaque point du tableau position
console.log(distances);
// 2. Trouvez le point le plus éloigné du point A.
//initialise une variable pMax avec un objet { p: null, d: 0 }.
//Cela sera utilisé pour stocker le point le plus éloigné et sa distance par rapport à A.
let pMax = { p: null, d: 0 };
// boucle for...of pour parcourir chaque objet { point, distance } dans le tableau distances.
for (const { point, distance } of distances) {
    //Pour chaque objet, on vérifie si la distance est supérieure à pMax.d (la distance actuellement stockée).
    //Si c'est le cas, il met à jour pMax avec le nouveau point et la nouvelle distance.
    if (distance > pMax.d) { pMax.d = distance; pMax.p = point };
}

console.log(pMax);



//Ex 8
//1 - inverser la chaine de caratères

const sentence = "Bonjour tout le monde, vous aimez JS ?";
str = [...sentence].reverse().join('');
console.log(str);

// 2. la longueur des mots
//  word =>({ }) demande à JS de retourner un littérale dans la fonction fléchée
//Dexoupe les mots de la phrase a l'aide des espaces puis count compte le nombre de lettre par mot
const words = sentence.split(' ').map(word => ({
    count: word.length, word
}));
console.log(words);

//3 - une phrase et qui retourne dans un tableau le nombre de caractères de chaque mot
//1 - Un ensemble Set(string) = ne contient que des elements unique et evite les doublons
const letters = new Set(sentence);
//2 - un tableau contenant les caractères à ignorer lors du calcul des statistiques.
const santize = [',', '?', ' '];
//3 -  tableau vide statistic qui sera utilisé pour stocker les statistiques de chaque lettre.
const statistic = [];
//Spread opérator = Il convertit la phrase sentence en un tableau sentencesArray contenant chaque caractère en tant qu'élément du tableau.
const sentencesArray = [...sentence];

// boucle for...of pour itérer sur chaque lettre unique dans l'ensemble letters.
for (const letter of letters) {
    //Pour chaque lettre, il vérifie si elle fait partie des caractères à ignorer. Si c'est le cas, il passe à l'itération suivante en utilisant continue.
    if (santize.includes(letter)) continue; // saut une itération il fait un next saute une itération
    //On utilise la méthode filter sur le tableau sentencesArray pour compter combien de fois la lettre apparaît dans la phrase,
    const count = sentencesArray.filter(l => l === letter).length;
    //puis stocke cette information dans l'objet { letter, count } qu'il ajoute au tableau statistic.
    statistic.push({ letter, count });
}
console.log(statistic);


//Ex 9

// 1 - Comptez chacune des lettres dans "Mississipi". Affichez le résultat dans une structure de données lisible
const phrase = "Mississipi";
let statistic = {};
//1 - garantit que seules les lettres uniques de la phrase sont incluses dans l'ensemble.
const letters = new Set(phrase);

console.log(letters);

// itérer sur chaque lettre unique dans l'ensemble letters.
for (const letter of letters) {
    //Init du compteur
    let count = 0;
    // À l'intérieur de cette boucle, il utilise une autre boucle for...of pour parcourir chaque caractère de la phrase (phrase).
    for (const caractere of phrase) {
        //Pour chaque lettre dans letters, il compte le nombre d'occurrences dans la phrase en comparant chaque caractère de la phrase avec la lettre actuelle.
        //Le résultat est stocké dans l'objet statistic avec la lettre comme clé et le nombre d'occurrences comme valeur.
        if (letter == caractere) count++;
    }

    // console.log(letter, count);
    statistic[letter] = count;
}

console.log(statistic);



//Ex 10 : Soit la chaîne de caractères suivante, récupérez tous les numériques de cette chaîne dans un tableau :
// Number filtre les nombres c'est une fonction elle renvoie soit le nombre "8790" -> 8790 
// soit NaN si c'est une chaîne de caractères (lettres uniquement) par exemple Number("bonjour le monde") -> NaN 
// pour le filter NaN c'est false et un nombre est considéré comme true
const phrase = '8790:bonjour le monde:8987:7777:Hello World:9007';
// 1 -utilise la méthode split(':') pour diviser la chaîne en un tableau statistic en utilisant le point : comme séparateur.
// 2 - utilise la méthode filter pour filtrer les éléments du tableau en utilisant la fonction de rappel Number. 
// Cela a pour effet de supprimer tous les éléments qui ne peuvent pas être convertis en nombre (par exemple, les chaînes de texte).
// Si un élément peut être converti en nombre, il est conservé dans le tableau.
// Si un élément ne peut pas être converti en nombre, il est rejeté.
const statistic = phrase.split(':').filter(Number);
console.log(statistic);