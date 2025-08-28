// console.log(Math.floor(Math.random()*100+1));
// console.log(Math.random())
// ***************************************************************************



// // // Exemple avec trois valeurs spécifiques : 2, 3, 5
// const valeurs = ["pierre", "feuille","ciseaux"];

// // // Sélection aléatoire
// const valeurAleatoire = valeurs[Math.floor(Math.random() * valeurs.length)];





// // ******************************************************************
// do{
// let a= prompt(" Veuillez choisir entre pierre, feuille , ciseaux :");

// if(a===valeurAleatoire){

//     alert("Bravo")
// } else {
//     alert("Perdu! recommencez ...")
// }

// }while(a!=valeurAleatoire)





let a, b;    
do{
    a = prompt(" Veuillez choisir entre pierre, feuille , ciseaux :");
     if (a==="pierre"){
        a=0;
    }else if (a==="feuille"){
        a=1;
    }else if(a==="ciseaux"){
        a=2

    }

    b = Math.floor(Math.random()*3); 
    console.log(b);
    
    // if (b==0){
    //     b="pierre"

    // }else if (b==1){
    //     b="feuille"

    // }else if(b==2){
    //     b="ciseaux"
    // }
    
    
    if(a==0 && b==1 || a==1 && b==1 || a==2 && b==0  ){
        
        alert("Bravo")


    }else if(a==1 && b==0 || a==2 && b==1 || a==0 && b==2  ){
        alert("Vous avez perdu!")

    }else if (a==b){
        alert ( "Recommencer")

    }
}while(a!=b)



