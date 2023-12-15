# Challenge 3

```js
const populations = [
    { id: 0, name: "Alan" },
    { id: 1, name: "Albert" },
    { id: 2, name: "Jhon" },
    { id: 3, name: "Brice" },
    { id: 4, name: "Alexendra" },
    { id: 5, name: "Brad" },
    { id: 6, name: "Carl" },
    { id: 7, name: "Dallas" },
    { id: 8, name: "Dennis" },
    { id: 9, name: "Edgar" },
    { id: 10, name: "Erika" },
    { id: 11, name: "Isaac" },
    { id: 12, name: "Ian" },
  ];
```

## Q1

```js
// Ordonner par ordre croissant de la longueur des noms
populations.sort((a, b) => a.name.length - b.name.length);

// Afficher les résultats
console.log("Populations triées par longueur de nom :", populations);
```

## Q2

```js
// Ajouter une clé lenName aux éléments du tableau populations
populations.forEach((person) => {
  person.lenName = person.name.length;
});

// Ordonner par ordre croissant de la longueur des noms
populations.sort((a, b) => a.name.length - b.name.length);

// Afficher les résultats
console.log("Populations triées par longueur de nom avec lenName :", populations);
```

## Q3

```js
// Ajouter une clé lenName aux éléments du tableau populations
populations.forEach((person) => {
  person.lenName = person.name.length;
});

// Ordonner par ordre croissant de la longueur des noms
populations.sort((a, b) => a.name.length - b.name.length);

// Regrouper les noms de même longueur dans un nouveau tableau groupNames
const groupNames = populations.reduce((acc, person) => {
  const len = person.lenName;
  if (!acc[len]) {
    acc[len] = [];
  }
  acc[len].push(person.name);
  return acc;
}, {});

// Afficher les résultats
console.log("Populations triées par longueur de nom avec lenName :", populations);
console.log("Groupes de noms par longueur :", groupNames);
```

## Q4  

```js
  // Créer un tableau de relations pour chaque personne
  populations.forEach((person) => {
    // Exemple : Chaque personne a des relations avec toutes les autres personnes
    person.relations = populations
      .filter((otherPerson) => otherPerson.id !== person.id)
      .map((otherPerson) => otherPerson.name);
  });
  
  // Ordonner les personnes par ordre croissant du nombre de relations
  populations.sort((a, b) => a.relations.length - b.relations.length);
  
  // Afficher la personne qui a le plus de relations
  const personWithMostRelations = populations[populations.length - 1];
  console.log("Personne avec le plus de relations :", personWithMostRelations);
  
  // Afficher le tableau populations avec la clé relations
  console.log("Populations avec la clé relations :", populations);
  ```
