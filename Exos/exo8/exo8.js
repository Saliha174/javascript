let a=Number(prompt("veuillez entrer votre moyenne :"))

    if (a>=12){

        document.write(`Bravo vous avez obtenu ${a}! Vous êtes reçu avec mention!!`);
    }else if ( a<12 && a>=10){

        document.write(`Bravo vous avez obtenu ${a}! Vous êtes reçu!!`);
    }else if ( a< 10){

        document.write(`Désolé vous avez obtenu ${a}! Vous êtes recalé!`);
    }


