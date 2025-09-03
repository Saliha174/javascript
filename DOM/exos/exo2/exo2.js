const phrases = [
    { id: 0, text: "C'est une belle journée." },
    { id: 1, text: "J'aime apprendre de nouvelles choses." },
    { id: 2, text: "Le café est délicieux." },
    { id: 3, text: "Il fait beau aujourd'hui." },
    { id: 4, text: "Apprendre en groupe c'est fun !" },
];
let sentences = document.querySelector('#sentences-list');
for ( let i=0 ; i<phrases.length ;++i){


    let phrase = document.createElement("p");
    phrase.textContent = `${phrases [i].text}`;
    document.body.appendChild(phrase);
    let btn = document.createElement("button");
    btn.textContent= "Supprimer";
    document.body.appendChild(btn);
}


