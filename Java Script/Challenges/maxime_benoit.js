/*Formateur: Sujet 01 Population intérêts et analyse de données
En utilisant les données ci-dessous dans la constante populations.

1. Comptez tous les docteurs. => 5 POINTS

2. Récupérez les noms des développeurs fullstack. => 5 POINTS

3. Récupérez les noms des personnes qui n'ont jamais travaillés. => 5 POINTS

4. (Facultatif)Etudiez les mots de passe de chaque personne, comptez leurs occurences pour chaque lettre distincte.*/


/*Maxime: Ici j'ai décidé de filtrer les données en fonction de la question ,d'où le flitrage de données puis un autre filtrage de données, etc...*/

const populations = [
    { id: 0, name: "Alan", jobs : ['dev junior', 'dev fullstack'], password : "tyeedsa00" },
    { id: 1, name: "Albert", jobs : [ 'doctor'], password : "tyeidii00" },
    { id: 2, name: "Jhon" , jobs : ['mathematician', 'doctor'], password : "xyuuuoi00"},
    { id: 3, name: "Brice", jobs : ['dev fullstack'] , password : "xytoiab00"},
    { id: 4, name: "Alexendra", jobs : ['dentist'],  password : "aaaoiab33" },
    { id: 5, name: "Brad" },
    { id: 6, name: "Carl" , jobs : ['lead dev', 'dev fullstack']},
    { id: 7, name: "Dallas" , jobs : [ 'dev fullstack']},
    { id: 8, name: "Dennis", jobs : ['integrator', 'dev fullstack'] },
    { id: 9, name: "Edgar", jobs : ['mathematician'] },
    { id: 10, name: "Erika", jobs : ['computer scientist', 'mathematician'] },
    { id: 11, name: "Isaac", jobs : ['doctor'], password : "Axgkj22Kl" },
    { id: 12, name: "Ian", password : "Axgkj00Kl" },
];

//Maxime: Filtrer les docteurs
const doctors = populations.filter(person => person.jobs && person.jobs.includes('doctor'));

//Maxime: Compter le nombre de docteurs
const numberOfDoctors = doctors.length;

console.log(`Nombre de docteurs : ${numberOfDoctors}`); //Maxime: Afficher le réusltat des docteurs

//Maxime: Filtrer les développeurs fullstack
const fullstackDevelopers = populations.filter(person => person.jobs && person.jobs.includes('dev fullstack'));

//Maxime: Récupérer les noms des développeurs fullstack
const fullstackDeveloperNames = fullstackDevelopers.map(person => person.name);

console.log('Noms des développeurs fullstack :', fullstackDeveloperNames); //Maxime: Afficher le réusltat des Dévs Fullstack

//Maxime: Filtrer les personnes sans travail
const unemployedPeople = populations.filter(person => !person.jobs);

//Maxime: Récupérer les noms des personnes sans travail
const unemployedPeopleNames = unemployedPeople.map(person => person.name);

console.log('Noms des personnes sans travail :', unemployedPeopleNames); //Maxime: Afficher le réusltat des noms des personnes sans travail

//Maxime: Compter les occurrences de chaque lettre dans les mots de passe
const passwordLetterCounts = populations.reduce((letterCounts, person) => {
    if (person.password) {
        for (const letter of person.password) {
            letterCounts[letter] = (letterCounts[letter] || 0) + 1;
        }
    }
    return letterCounts;
}, {});

console.log('Occurrences de chaque lettre dans les mots de passe :', passwordLetterCounts); /*Maxime: Afficher le réusltat des occurrences de chaque lettre dans les mots de passe

Ensuite, j'ai mis code amélioré en commentaire, regroupant les filtrages de données selon la catégorie d'emploi et selon les occurences de chaque lettre dans leurs mots de passes

const populations = [
    { id: 0, name: "Alan", jobs: ['dev junior', 'dev fullstack'], password: "tyeedsa00" },
    { id: 1, name: "Albert", jobs: ['doctor'], password: "tyeidii00" },
    { id: 2, name: "Jhon", jobs: ['mathematician', 'doctor'], password: "xyuuuoi00" },
    { id: 3, name: "Brice", jobs: ['dev fullstack'], password: "xytoiab00" },
    { id: 4, name: "Alexendra", jobs: ['dentist'], password: "aaaoiab33" },
    { id: 5, name: "Brad" },
    { id: 6, name: "Carl", jobs: ['lead dev', 'dev fullstack'] },
    { id: 7, name: "Dallas", jobs: ['dev fullstack'] },
    { id: 8, name: "Dennis", jobs: ['integrator', 'dev fullstack'] },
    { id: 9, name: "Edgar", jobs: ['mathematician'] },
    { id: 10, name: "Erika", jobs: ['computer scientist', 'mathematician'] },
    { id: 11, name: "Isaac", jobs: ['doctor'], password: "Axgkj22Kl" },
    { id: 12, name: "Ian", password: "Axgkj00Kl" },
];

// Fonction pour récupérer les noms d'une catégorie d'emploi
const getNamesByJob = (job) => populations
    .filter(person => person.jobs && person.jobs.includes(job))
    .map(person => person.name);

// Compter les occurrences de chaque lettre dans les mots de passe
const passwordLetterCounts = populations.reduce((letterCounts, person) => {
    if (person.password) {
        for (const letter of person.password) {
            letterCounts[letter] = (letterCounts[letter] || 0) + 1;
        }
    }
    return letterCounts;
}, {});

console.log('Noms des docteurs :', getNamesByJob('doctor'));
console.log('Noms des développeurs fullstack :', getNamesByJob('dev fullstack'));
console.log('Noms des personnes sans travail :', populations.filter(person => !person.jobs).map(person => person.name));
console.log('Occurrences de chaque lettre dans les mots de passe :', passwordLetterCounts);
*/


/*Formateur: Sujet 02 : Utiliser une API REST existante avec des promesses et la methode fetch
R1. Utiliser fetch pour récupérer les images depuis l'API*/

const chunkSize = 250; //Maxime: Je demande d'afficher par pas de 250 images

function fetchAndDisplayImages(startIndex, endIndex) {
    return fetch('https://jsonplaceholder.typicode.com/photos') //Maxime: Je récupère les images de l'API
        .then(response => response.json())
        .then(images => {
            const currentPage = images.slice(startIndex, endIndex);

            document.write('<ul>');
            currentPage.forEach(image => {
                document.write(`<li>${image.id} - ${image.title}<br><img src="${image.thumbnailUrl}" alt="${image.title}"></li>`); //Maxime: Puis j'ffiche l'id, le titre, et les images avec document.write
            });
            document.write('</ul>');
        })
        .catch(error => console.error(error));
}

/*Maxime: J'ai crée une fonction showPagesSequentially utilisant setTimeout pour afficher les pages successives avec un léger délai entre chaque lot d'images. 
Elle garantit une meilleure expérience utilisateur sans bloquer l'interface pendant le chargement des images.*/

function showPagesSequentially() {
    const numPages = Math.ceil(5000 / chunkSize);
    let currentIndex = 0;

    function showNextPage() {
        if (currentIndex < numPages) {
            const startIndex = currentIndex * chunkSize;
            const endIndex = Math.min((currentIndex + 1) * chunkSize, 5000);

            fetchAndDisplayImages(startIndex, endIndex)
                .then(() => {
                    currentIndex++;
                    setTimeout(showNextPage, 500); //Maxime: un délai de 500 ms entre chaque lot de 250 images
                });
        }
    }

    showNextPage();
}

showPagesSequentially();

/*Maxime: Enfin j'ai optimisé mon code pour que les pages soient affichées et contiennent 250 images chacunes. Mais j'ai un soucis de script sur Firefox.

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(images => {
        const chunkSize = 250;
        const numPages = Math.ceil(images.length / chunkSize);

        for (let page = 1; page <= numPages; page++) {
            document.write(`<a href="javascript:void(0);" onclick="showPage(${page})">${page}</a>`);
        }
    })
    .catch(error => console.error(error));

Donc j'ai préféré ajouter cette fonctionnalité qui est appeler lorsqu'un lien est cliqué. Elle récupère les images pour la page spécifié et les affiche. 
Les liens sont affichées en focntion du nombre de pages demandés et dont l'utilisateur peut y accéder

function showPage(pageNumber) {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(images => {
            const chunkSize = 250;
            const startIndex = (pageNumber - 1) * chunkSize;
            const endIndex = pageNumber * chunkSize;
            const currentPage = images.slice(startIndex, endIndex);

            document.write('<ul>');
            currentPage.forEach(image => {
                document.write(`<li>${image.id} - ${image.title}<br><img src="${image.thumbnailUrl}" alt="${image.title}"></li>`);
            });
            document.write('</ul>');
        })
        .catch(error => console.error(error));
}*/