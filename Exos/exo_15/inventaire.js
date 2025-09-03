// const produits = [
//     { product: "Ordinateur", price: 1000, category: "Electronique" },
//     { product: "Téléphone", price: 600, category: "Electronique" },
//     { product: "T-shirt", price: 20, category: "Vêtements" },
//     { product: "Jeans", price: 40, category: "Vêtements" },
//     { product: "Pantalon", price: 50, category: "Vêtements" },
// ];
 
// const elec = [
//     { product: "Ordinateur", price: 1000, category: "Electronique" },
//     { product: "Téléphone", price: 600, category: "Electronique" },
   
// ];
 
// const vet = [
//     { product: "T-shirt", price: 20, category: "Vêtements" },
//     { product: "Jeans", price: 40, category: "Vêtements" },
//     { product: "Pantalon", price: 50, category: "Vêtements" },
// ];
 
 
// console.log(produits);
// //for (variable of objet){
// // instruction}
 
// function leila(){
//     document.querySelector('.box').style.display= ('flex');
//     document.querySelector('.box').style.gap= "50px";
   
 
//     for(const produit of produits){
//        document.querySelector('#list').innerHTML += `
//         <ul>
//             <li> ${produit.product} ${produit.price} ${produit.category}</li>
 
//         </ul>
//         `
//     };
 
//     for(const produit of elec){
//        document.querySelector('#elec').innerHTML += `
//         <ul>
//             <li> ${produit.product} ${produit.price} ${produit.category}</li>
 
//         </ul>
//         `
//     };
 
//     for(const produit of vet){
//        document.querySelector('#vetement').innerHTML += `
//         <ul>
//             <li> ${produit.product} ${produit.price} ${produit.category}</li>
 
//         </ul>
//         `
//     };
// };
 
// leila()
 

const produits = [
    { product: "Ordinateur", price: 1000, category: "Electronique" },
    { product: "Téléphone", price: 600, category: "Electronique" },
    { product: "T-shirt", price: 20, category: "Vêtements" },
    { product: "Jeans", price: 40, category: "Vêtements" },
    { product: "Pantalon", price: 50, category: "Vêtements" },
];
console.log(produits);

function leila(){
    document.querySelector('#list').innerHTML = ''   //c 'est pour remettre la list a zero avant d affciher
    for(const produit of produits){
       document.querySelector('#list').innerHTML += `
        <ul>
            <li> ${produit.product} ${produit.price} ${produit.category}</li>

        </ul>
        `
    };
};

function leila2(category) {
    document.querySelector('#list').innerHTML = ''
    for(const produit of produits){
        if(produit.category == category){
            document.querySelector('#list').innerHTML += `
        <ul>
            <li> ${produit.product} ${produit.price} ${produit.category}</li>

        </ul>
        `
        };
    };
};