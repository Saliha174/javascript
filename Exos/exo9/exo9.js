// document.write("<h1>Jai 1000 euros sur mon compte </h1>")
// let i = 0
// for (let a= 1050 ; a<=2000; a +=50){
//     ++i
//     document.write(`<h1>Le mois suivant j'ai : ${a} euros</h1>`)
// }
// document.write( `<h1 style="color=pink">Il me faut ${i} mois pour pouvoir avoir la jolie somme de 2000 euro TTC évidemment </h1>.`)


let a =Number(prompt ("somme de départ")) ;
let b =Number(prompt(" somme d'arrivée")) ;
let x = Number(prompt("Quel est votre apport personnel?:"));
let etape= (b-a)/x
for ( a+=x; a<=b; a+=x){
    // console.log(`${a}, ${b}, ${x}`);
    
    document.write(`<h1>Le mois suivant vous avez : ${a} euros</h1>`);
}
document.write( `<h1 style="color: purple">Il vous faut ${etape} mois pour pouvoir avoir la jolie somme de ${b} euro TTC évidemment </h1>.`)

