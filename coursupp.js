// !permet d avoir les donnees de l event

document.addEventListener("keypress", (e)=>{
    console.log(e);
    
});
// !pour avoir la lettre on log ( e.key)
// car on se trouve dans un objet si on log que e

 inputField.addEventListener("input", function () {
    output.innerHTML = `input utilisé avec succès: ${inputField.value}`;
 })


  function handleClick() {
    output.innerHTML = `Ryan a dit qu'il irait au parc Asterix!!!`
}


 
 clickBtn.addEventListener("click", handleClick)
 
// Suppression du gestionnaire d'événement après un certain temps
setTimeout(function () {
    clickBtn.removeEventListener("click", handleClick)
    output.innerHTML = `Ryan nous a fait une feinte !!!!`
}, 5000) 


 
// ---- 7. Événement au chargement de la page -----
/* Cet événement se déclenche après le chargement complet de la page, y compris toutes les ressources
    externes comme les images, les styles CSS et les scripts.
*/
window.addEventListener("load", function () {
    output.innerHTML = `La page est complètement chargée`
})
 
 
 
 
// ---- 8. Événement au chargement du DOM -----
 
/* Cet événement se déclenche lorsque le DOM (Document Object Model) est complètement chargé et analysé,
    c'est-à-dire que tous les éléments HTML sont accessibles et peuvent être manipulés par JavaScript.
*/
window.addEventListener("DOMContentLoaded", function () {
    output.innerHTML = `Le DOM est complètement chargé et analysé`
})
