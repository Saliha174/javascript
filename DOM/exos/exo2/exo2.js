const phrases = [
    { id: 0, text: "C'est une belle journée." },
    { id: 1, text: "J'aime apprendre de nouvelles choses." },
    { id: 2, text: "Le café est délicieux." },
    { id: 3, text: "Il fait beau aujourd'hui." },
    { id: 4, text: "Apprendre en groupe c'est fun !" },
];
//  let sentences = document.querySelector('#sentences-list');
//  let btn = document.createElement("button");
 
 
//  let phrase = document.createElement("p");
// for ( let i=0 ; i<phrases.length ;++i){
 
   
//     let div = document.createElement("div");
//     let phrase = document.createElement("p");
//     div.appendChild('p');
//     div.appendChild('button');

//     phrase.id = i;
//     phrase.textContent = `${phrases[i].text}`;
//     sentences.appendChild(phrase);
//     let btn = document.createElement("button");
//     btn.classList.add('remove-button');
//     btn.textContent= "Supprimer";
//     sentences.appendChild(btn);
// }
 
// function supp(){
//     phrase.remove();
//     sentences.removeChild('phrase');
 
// }

for ( const phrase of phrases){
    document.querySelector("#sentences-list").innerHTML+=`
    <div class= "sentence">
        <p>${phrase.text}</p>
        <button class="remove-button" id=${phrase.id}>Supprimer</button>
    </div>`;
}

function supp(){
    document.querySelector("#sentences-list").remove();

} 
document.querySelector(".remove-button").addEventListener("click", supp);

//Deux versions de corecction
//***********************version********************

// BOUCLE POUR AFFICHER CHAQUE PHRASES AVEC BOUTON SUPPRIMER
for (const prhrase of phrases ) {
    let sentence = document.getElementById("sentences-list")
    let newDiv = document.createElement("div")
    sentence.appendChild(newDiv)
    newDiv.setAttribute("id", `${prhrase.id}`)
    newDiv.setAttribute("style", `padding: 1.5em; border : 1px grey solid; margin-bottom: 0.5em;`)
    let newTxt = document.createElement("h2")
    newTxt.innerText = `${prhrase.text}`
    newDiv.appendChild(newTxt)
    let newBut = document.createElement("button")
    newBut.setAttribute("onclick", `delElement(${prhrase.id})`)
    newBut.setAttribute("style", `color: red;`)
    newBut.innerText = `Supprimer`
    newDiv.appendChild(newBut)
}

// FONCTION / FUNCTION SUPPRIMANT LA DIV PARENT AU BOUTON 
function delElement(num) {
    console.log(num);
    let dlt = document.getElementById(`${num}`)
    console.log(dlt);
    dlt.remove()
}

// =========================== OTHER VER. ===========================

// TABLEAU DE PHRASES  

const phrases = [
    { id: 0, text: "C'est une belle journée." },
    { id: 1, text: "J'aime apprendre de nouvelles choses." },
    { id: 2, text: "Le café est délicieux." },
    { id: 3, text: "Il fait beau aujourd'hui." },
    { id: 4, text: "Apprendre en groupe c'est fun !" },
];

// BOUCLE POUR AFFICHER CHAQUE PHRASES AVEC BOUTON SUPPRIMER
for (const prhrase of phrases ) {
    document.querySelector("#sentences-list").innerHTML += `<div id="${prhrase.id}" style="padding: 1.5em; border : 1px grey solid; margin-bottom: 0.5em;"><h2>${prhrase.text}</h2><button onclick="delElement(${prhrase.id})" type="button" style="color: red;">Supprimer</button></div>`;
}

// FONCTION / FUNCTION SUPPRIMANT LA DIV PARENT AU BOUTON 
function delElement(num) {
    console.log(num);
    let dlt = document.getElementById(`${num}`)
    console.log(dlt);
    dlt.remove()
}
   



