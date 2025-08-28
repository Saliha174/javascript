let userChoice;
let computerChoice;
let randomChoice = Math.floor(Math.random() * 3);
// Math.random => génère un chiffre compris entre 0 et 1
// Math.floor => arrondi à l'entier inférieur soit ici = 0
// * 3 => multiplie x 3 les possibilités de choix (0, 1, 2)
let resultMessage = "";
console.log(Math.floor(Math.random()) * 3);

while (true) {
	userChoice = prompt(
		"Entrez votre choix (pierre, feuille, ciseaux) :",
	).toLowerCase();
	if (
		(userChoice === "pierre" ||
			userChoice === "feuille" ||
			userChoice === "ciseaux") &&
		isNaN(userChoice)
	) {
		break;
	} else {
		alert("Choix invalide, veuillez entrer pierre, feuille ou ciseaux.");
	}
}

if (randomChoice === 0) {
	computerChoice = "pierre";
} else if (randomChoice === 1) {
	computerChoice = "feuille";
} else {
	computerChoice = "ciseaux";
}

resultMessage = `Ordinateur a choisi : ${computerChoice} et vous ${userChoice}`;

if (userChoice === computerChoice) {
	resultMessage += "C'est un match nul !";
} else if (
	(userChoice === "pierre" && computerChoice === "ciseaux") ||
	(userChoice === "feuille" && computerChoice === "pierre") ||
	(userChoice === "ciseaux" && computerChoice === "feuille")
) {
	resultMessage += "Vous avez gagné !";
} else {
	resultMessage += "Dommage! Vous avez perdu.";
}

alert(resultMessage);