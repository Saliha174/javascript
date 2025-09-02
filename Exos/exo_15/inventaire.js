const produits = [
    { product: "Ordinateur", price: 1000, category: "Electronique" },
    { product: "Téléphone", price: 600, category: "Electronique" },
    { product: "T-shirt", price: 20, category: "Vêtements" },
    { product: "Jeans", price: 40, category: "Vêtements" },
    { product: "Pantalon", price: 50, category: "Vêtements" },
];

function produit(x){

    if (x=3){
        for (let i=0; i<produits.length; ++i){
             document.write(`
            <li>La valeur est : ${produits[i]}</li>
        `);
             }

            
    }
}
