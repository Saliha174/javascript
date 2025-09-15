const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const error = document.getElementById("error");
const succes = document.getElementById("succes");





let regexMaj=/[A-Z]/;
let regexMin = /[a-z]/;
let regexSpe = /[^a-zA-Z0-9]/;
let rgexNum = /[0-9]/;


emailForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailValeur = emailInput.value;
    console.log(emailValeur);

     if (regexMaj.test(emailValeur) && regexMin.test(emailValeur) && regexSpe.test(emailValeur) && regexNum.test(emailValeur) ) {
        succes.innerHTML = " Formulaire envoyé avec succes";
        succes.style.display = "block";
    } else {
        error.innerHTML = "Veuillez entrer un email au format valide SVP";
        error.style.display = "block";
    }


    
});

//**********************correction A***********************************

// const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;



// let succes = document.getElementById('succes')
// let error = document.getElementById('error')

// const userFrom = document.getElementById('user-sub')
// const userName  =  document.getElementById("nom")
// const userAge  =  document.getElementById("age")
// console.log(typeof userAge);

// const userPassword  =  document.getElementById("password")

// const showPassword =document.getElementById('showPass')

// userFrom.addEventListener('submit', function(e){
//     e.preventDefault();
//     // console.log(userName.value)
//     if (isNaN(userName.value)) {
//             succes.style.display = 'block';
//         if (userAge.value >= 20 && userAge.value <=40 ) {
//             if (regex.test(userPassword.value)) {
//                 alert('succes')
//                 succes.style.display = 'block';
//                 error.style.display = 'none';
//                 succes.innerText = `succes ;;;; welcome mr/mrs ${userName.value} ; `
//                 userName.value = ''
//                 userAge.value = ''
//                 userPassword.value = ''

//             }else{
//                 alert('"Your password must contain min 8 carac  at least one lowercase letter, one uppercase letter, one digit, and one special character."')
//                 error.innerText = `Your password must contain min 8 carac at least one lowercase letter, one uppercase letter, one digit, and one special character. `
//                 succes.style.display = 'none';
//                 error.style.display = 'block';


//             }
//         }else{
//             alert('age should be between 20-40')
//             succes.style.display = 'none';

//             error.style.display = 'block';

//             error.innerText = `errore ;;;; if your age is between 20-40, please put it , otherwise this site it's not for u `

//         }
//     }else{
//         alert('user name is not ok ')
//         succes.style.display = 'none';

//         error.style.display = 'block';
//         error.innerText = `errore ;;;; you have to put your name `


//     }


// })




// showPassword.addEventListener('click', function(){
//       let tog = document.getElementById('password')
//         if (tog.type === 'password') {
//             tog.type = 'text'
//         }else{
//             tog.type = 'password'
//         }
        
// })
