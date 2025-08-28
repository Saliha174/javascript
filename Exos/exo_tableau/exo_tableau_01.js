let voiture={};

voiture.marque ="porshe";
voiture.année ="2024";
voiture.myBirthday = new Date('2014-04-05');
voiture.name = ["Saliha","Mael","Goundo"];





//  for (const key in voiture) {
// 	document.write(`<h2> ${key} : ${voiture[key]} </h2>`);  /*le i  c est une clef dans le cas de cette boucle for */
// }

 for (const i in voiture) {
	document.write(`<h2> ${i} : ${voiture[i]} </h2>`);
 }