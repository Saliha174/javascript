

let prix = window.prompt(
    "Quel est votre prix hors-taxte (HT)"
);

prix= prix*(1.2);

// alert(prix);

document.write(`<h2>Le prix TTC est donc de: ${prix} euros!</h2>`);