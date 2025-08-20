let nb1 = prompt( "veuillez saisir un premier nombre :");
let nb2 = prompt( "veuillez saisir un deuxieme nombre :");
nb1 = parseInt(nb1);
nb2 = parseInt(nb2);
if (typeof nb1==="number" && typeof nb2==="number"){
    if ( nb1 < nb2 ){

        alert( `${nb1} est plus petit que ${nb2}  et les deux nombres sont des ${typeof nb1}` );
    }else if(nb1>nb2){
        alert(` ${nb1} est plus grand que ${nb2} et les deux nombres sont des ${typeof nb1}` );
        // document.write(`<h5>Le type de mes valeurs est typeof nb1}</h5>`);
    }
    else if (nb1==nb2){
        alert (`Les deux nombres sont egaux et sont des ${typeof nb1}`);
        
    }
    else{
        alert("Veuillez entrer des nombres");
    }
} else{
        alert("Veuillez entrer des nombres");
    }
