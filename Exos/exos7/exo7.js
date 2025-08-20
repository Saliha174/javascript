// for (let a =1; a <= 10; ++a) { 

//     document.write(`<h1>Vous avez fait ${a} tours de manège </h1>` );
// }

let a = Number(prompt(` Veuillez saisir le nombre de tours souhaités:`));

// let b= 0

// do{
//     document.write(`<h1 style='color:blue'>Vous avez encore ${a} tours de manège </h1>` );
//     --a;
// }while (a>=1)
for(let i=1; i<=a; ++i){
    document.write(`<h1 style='color:purple'>Vous avez fait ${i} tours de manège </h1>` );
}