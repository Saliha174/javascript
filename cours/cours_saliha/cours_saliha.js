//!attention
//todo a faire
//? comment faire
 
// let heure ="" ;
// heure=prompt("veuillez indiquez l heure : ")
// if(heure>=0 && heure <= 12){
//     alert("c'est le matin");
// }else if (heure >12 && heure <=18){
//     alert("c'est l' apres midi");
// }else if(heure>18 && heure <24){
//     alert('c\'est le soir')
// }else{
//     alert("valeur érronée")
// }
 
 
 
//**********************boucles**********************
 
//  boucles sert a repeter une instruction tant que la condition est vraie
// la boucle whhile = "tant que"
// !on doit incrementer ou decrementer
 
 
// let x= 0;
 
// while(x<10){
//     alert(`la valeur de x est : ${x}`)
//     x++;
// }
 
 
//boucle do while
 
// let x = 0;
 
// do{
 
//     alert (`la valeur de x est : ${x} ` );
//     x--;
// }
// while(x>-10);
 
// !la difference entre le while et le do while c est que la
// seconde va excecuter une premiere instruction car la condition est à la fin
 
// Boucle for !!! c est la plus performante
 
// let i="";
 
// for (i=0; i<10; i++){
//     alert ( " i contient la valeur :     "+ i)    /*!attention l incrementation se fait
//                                                    *apres le premier passage de la boucle*/
// }
 
//fonction
// let x = ""
 
// function multiplication(x, y){
//     alert (x*y);
 
   
// }
// multiplication(2,3);
 
// Pour recuperer une valeur et l utiliser plus tard ( car en haut on la direct envoyer
//     dans une boite de dialogue sur le navigateur)
// let x = ""
 
// function multiplication(x, y){
//     return x*y;
//     alert ( " ce message ne sera jamais affiché");              //!tout ce qui est apres un return est ignoré
 
   
// }
// let resultat=(multiplication(2,3));
//  //on va sstocker la valeur dans une variable
//  resultat += 10;
//  alert(resultat);
 
 
//********************les objets******************** */
// Les objets :
// Javascript est un langage orienté objets
// par exemple ; l objet crayon a des tailles forme couleur : les propriétés
//                                                  valeur : seront differente
//                             Sa fonction (ou methode ): ecrire
//     Donc un objet contiendra un ensemble de propriété et de methode
//     une proprité peut etre "assimilé " a une variable , mm si ce n 'est pas trop la meme chose'
 
// let primitive = "je suis une valeur primitive"
 
// let moi = {
//     prenom : "Saliha",
//     nom : " Bekhti",
//     age : 50,
 
//     identite : function(){
//         return 'prenom : '+this.prenom+
//                '\nNom :'+ this.nom +
//                '\nAge : '+ this.age;
 
//     }
// }
 
// alert(moi.identite())
 
// Il y a des objets natifs ; String Number Boolean Array
// A partir de l objet String par exemple on va creer des objets TYPE String
 
// let primitive = " Je suis une valeur primitive";
// let type_prim = typeof(primitive);
// let chaine = new String("Je suis un objet") ;    //!on a utlisé l objet String
//                                                  //!La variable chaine stocke un objet de type string
// let type_chai= typeof(chaine);
// alert('type de primitive : '+type_prim+
//       '\nType de chaine : '+type_chai);
 
    //   Les proprités et les methodes de l objet string s applique sur les primitive de type string
    //   c est tjrs mieux d utiliser les primitives kan on peut
// let primitive = "Je suis une valeur primitive";
// let longueur_prim = primitive.length;    
// // length est une proprité de String
// let paj_primitive = primitive.toUpperCase();
 
// let chaine = new String("Je suis un objet") ;
// let maj_chai = chaine.toUpperCase();
// alert( 'longueur de primitive : '+longueur_prim+
//     '\nPrimitive en majuscule : '+paj_primitive+
//     '\nChaine en majuscule : '+ maj_chai);
 
    // syntaxe pour acceder au propriete et methode d un objet  : nom de la variable.proprité
    //!Il est impossible de comparer les objet entre eux contairement aux primitives
 
 
 
    //*****************creer des objets*************************************
 
    // AVec le mot clef Objet pas conseillé
    // let obj_sting = new String ("Je suis un objet");
    // let obj_cree= new Object();
 
 
    // obj_cree.prenom = " Saliha";
    // obj_cree.nom = "Bekhti";
    // obj_cree.age =50;
 
    // alert(obj_cree.age);
 
    // La vrai methode !!!!!
//     let fils ={
//         prenom : "Omar",
//         surnom : "Gros crane",
//         age : 13,
//         age_mental : 2,
 
//         id : function(){
//             return this.surnom+ " age mentale : "+this.age_mental +" mois";
 
//         }
 
//     }
//  alert(fils.id())   //!ne pas oublier les ()apres Id pour declencher l 'excecussion
 
 
 
 //*****************Création des Contructeurs**************************
 
//  function Identite( p, n, a){
//     this.prenom = p;
//     this.surnom = n;
//     this.age = a;
 
//  }
 
//  let bateul = new Identite("Bateul", "la chelou",15);
//  let salsabile= new Identite("Salsabile", "Pirouette",11);
 
//  alert('Age de Bateul est :'+ bateul.age +
//        '\nEt celui de salsabile est : ' + salsabile.age );
 
 
// let x=10;
// let y=x;
// y+=10;
 
// alert( 'valeur de x :'+x+      
    //on peut contenir une variable primitive dans une autre
    //    '\nValeur de y :'+y);
    //!Pour les objets c differents var si on change l objet de ref alors tt change
 
//  function Identite( p, n, a){
//     this.prenom = p;
//     this.surnom = n;
//     this.age = a;
 
//  }
 
//  let saliha = new Identite("saliha","sasa",50);
//  let omar=saliha;
 
//  omar.prenom= "gros crane";
 
//  alert( saliha.prenom);
 
//**************proprité de Number**********/
// let min = Number.MIN_VALUE;
// let max = Number.MAX_VALUE;
// let infneg= Number.NEGATIVE_INFINITY;
// let infpos= Number.POSITIVE_INFINITY;
// let notnumber=Number.NaN;
 
// alert(min +" " +max+" "+infneg+" "+infpos+" "+notnumber);
 
// ***************metod de Number***********
// toString pour convertir Number en String
// toFixe pour arrondir a deux chiffre apres virgule
//toprecision prend les ""premier chiffres
//
 
 
// let x = 31.4659;
// let y =x.toFixed(2);
// alert(y)
 
// let t = true;
// let f=false;
// let d=new Date();
 
// alert(Number(t)+ "   "+Number(f)+"   "+Number(d))
 
// ! parseInt et parseFloat
 
// let x= "10.4528";
// let int = parseInt(x);             //c 'est pour renvoyer les valeurs en Number
// let dec= parseFloat(x);
// alert ( int + "    "+dec);
 
 
 
//**************objet Array***************/
 
// let tab= ["sasa", "omar","bateul","salsabile",25];
 
// alert(tab[2]);
 
 
// ***********************DOM***************************************
//!exercice sur le quiz
 
// // SELECTEURS
//  document.querySelector('body');   // a faire aussi dans la console pour voir
//  document.querySelector('h4')
//  //on pointe les element et on demande c 'est quoi
 
// // Le querySelector est une methode( foncction déja codé)
 
// //! je vais cloisonner un element dans une variable immuable
 
// const baliseHtml = document.querySelector('h4');
// console.log(baliseHtml);
 
//*************clik-event*****************/
// const questionContainer = document.querySelector(".click-event");
// console.log(questionContainer);
// // questionContainer.style.borderRadius = "150px";
// ! pour ajouter un evenement
 
// questionContainer.addEventListener('evenement',function());
//balise je t ajoute un evenement et des que l evenement se passe je veux que sois tu appel la fonction
//deja faite plus haut ou ke tu passe la fonvtion flechée
 
 
// questionContainer.addEventListener('click', ()=>{
//     // console.log("click!!!");
//     // questionContainer.style.background="pink";
 
//     });
//injecter une classe  pour
//pas ecrire tt ca en haut,
//on va ds le css et on creer une nvelle classe .question-click
 
// questionContainer.addEventListener('click', ()=>{
//     questionContainer.classList.add("question-click");
// });
//si on veut elle s'enleve qd elle y est ou s ajoute kan elle y est pas
//on mets toggle a la place de add
 
// pour pointer les bouttons
// const questionContainer = document.querySelector(".click-event");
// const btn1 = document.querySelector('#btn-1');
// const btn2 = document.getElementById('btn-2');    //on voit les 2 manieres
// const response = document.querySelector('p');
 
// // questionContainer.addEventListener('click', ()=>{
// //     questionContainer.classList.add("question-click");
// // });
 
// btn1.addEventListener("click", ()=>{
//     // console.log('clik!!');
//     response.classList.add('show')
//     // response.style.visibility = "visible";
//     questionContainer.classList.add("question-click");
//     response.style.background = "red";
// });
 
// btn2.addEventListener("click", ()=>{
//     // console.log('clik!!');
//     response.classList.add('show')
//     // response.style.visibility = "visible";
//     questionContainer.classList.add("question-click");
//     response.style.background = "green";
   