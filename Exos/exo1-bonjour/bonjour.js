let nom = window.prompt(
    "Veuillez saisir votre nom"
);
let prenom = window.prompt(
    "Veuillez saisir votre prénom"
);

let affichage = nom +" "+ prenom;
alert(affichage); 


// correction

let name;
let firstname;

name = prompt("Entrez votre nom : ");
firstname = prompt("Entrez votre prénom :");

// Concaténation
alert("Bonjour, " + firstname + " " + name);

/* Revient à faire
   alert(`Bonjour, ${firstname} ${name}`);
*/
