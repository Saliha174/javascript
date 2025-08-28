let result = document.querySelector("h1"); // result = h1
let variable;
// function somme(x, y) {
// 	result = x+y; //result = 10
//     result.innerHTML = `La somme des deux nombres choisis par moi meme est egale ${result} `;
//     //10.innerHTML ?
function somme(x, y) {
	variable = x+y; 
    result.innerHTML = `La somme des deux nombres choisis par moi meme est egale ${variable} .`;
       

}   



x=Number(prompt("Donner un premier chiffre"));
y=Number(prompt("Maintenant un deuxieme"));
 
somme(x,y)
// console.log(typeof(x));
// somme(10,5);
// console.log(result);





 