let prenom1 ="toto";
age1 = 18;

let prenom = window.prompt( "Merci d indiquer votre nom:")


if (prenom ===prenom1){
    let age= window.prompt("Votre âge :");
    if (age==18){
        alert(`bienvenue ${prenom}! Nous sommes ravies de vous retrouver!`)
    }
    else{
        let age= window.prompt("Votre âge svp :")
        if(age==18){
            alert(`bienvenue ${prenom}! Nous sommes ravies de vous retrouver!`)    
        } else {
            alert ("Bouge!!")

                }
        
    }
}else{
    let prenom = window.prompt( "Merci d indiquer votre nom:")
    
    if (prenom ===prenom1){
        let age= window.prompt("Votre âge :");
        if (age==18){
            alert(`bienvenue ${prenom}! Nous sommes ravis de vous retrouver!`)
        }
        else{
            let age= window.prompt("Votre âge svp :")
            if(age==18){
                alert(`bienvenue ${prenom}! Nous sommes ravies de vous retrouver!`)    
            } else {
                alert ("Bouge!!")

            }
            
        }

    }
}








