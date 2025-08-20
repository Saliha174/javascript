for(let a=0; a<20;a +=3){

    document.write(`<h2> ${a} hello !</h2>`);
}

//i c est l itérateur
// dans le for ( ) ce sont les arguments
//  for et while sont pareils ont a les conditions des le depart

// do while on lance deja une instruction ensuite si c verifié ca continue


// FOR

/* 
for (3 arguments) {
// instructions à éxécuter
}
*/

/*
- let i = 0 => initialisation de la variable i qui va itérer notre boucle : point de dépaart de la boucle
- i < 10 => condition pour mettre fin à la boucle
- ++i => qui permet de rajouter +1 tant que la condition est true
*/

for (let i = 0; i <= 10; ++i) {
	document.write(`<h1 style='color:blue'>Nous avons le nombre ${i}</h1>`);
}

// a = a + 2
for (let a = 0; a <= 10; a += 2) {
	document.write(
		`<h1 style='color:red'>Je recommence avec le nombre ${a}</h1>`,
	);
}

for (let b = 10; b >= 0; --b) {
	document.write(
		`<h1 style='color:green'>Je recommence avec le nombre ${b}</h1>`,
	);
}

// WHILE => TANT QUE...

let c = 0;

while (c < 5) {
	document.write(`<h1 style='color:blue'>Avec la boucle WHILE ${c}</h1>`);
	++c;
}

let d = 0;

while (d < 5) {
	if (d === 3) {
		document.write(`<h1 style='color:orange'>Avec la boucle WHILE ${d}</h1>`);
	}
	++d;
}

// DO... WHILE => FAIRE... TANT QUE...
// Utile quand on a une action qui nécessite de faire une vérification avant de poursuivre

let e = 0;
let f = 5;

do {
	document.write(`<h1 style='color:purple'>Avec la boucle DO WHILE </h1>
                    <p style='color:purple'>Mon action se lance ${e} fois</p>
                    `);
	++e; // rajoute + 1
} while (e > f);
