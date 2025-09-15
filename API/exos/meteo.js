let temps = document.getElementById("temp");
let feels = document.getElementById("feels");
let humidity= document.getElementById("humidity");
let wind = document.getElementById("wind");
let form = document.querySelector("#form");
let city = document.getElementById("city");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    meteo(city.value);


});

function meteo (city){
let CLE_API = '9d14fab5293af26cf8dc10b7ff26e891';
const API =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${CLE_API}&units=metric`

    try{
    fetch(API)
        .then((response)=>{
            
            return response.json();
        }).then((response)=>{
            console.log(response);
            temps.innerHTML= `${ response.main.temp} degrés`;
            feels.innerHTML= response.main.feels_like + ` degres`;
            humidity.innerHTML = response.main.humidity +` %`;
            wind.innerHTML=response.wind.speed + `km/h`;


        })
        }catch(error){
            console.error(error)
        }
        


}



// *********************************ludovic*************************

const cityForm = document.getElementById("form");
const Ucity = document.getElementById("city");
const Temp = document.getElementById("temp");
const Feel = document.getElementById("feels");
const Humid = document.getElementById("humidity");
const Wind = document.getElementById("wind");

function meteoDisplay(City) {

    let CLE_API = '9d14fab5293af26cf8dc10b7ff26e891';
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${CLE_API}&units=metric`;

    fetch(API)
        .then((response) => {
            console.log(response);
            return response.json();
        }).then ((data) => {
            console.log(data);
            Temp.innerText = `${data.main.temp} °C`
            Feel.innerText = `${data.main.feels_like} °C`
            Humid.innerText = `${data.main.humidity} %`
            Wind.innerText = `${data.wind.speed} mph`
        })
};

cityForm.addEventListener("submit", (e) => {
    e.preventDefault();
    meteoDisplay(Ucity.value);
});

// *********************************Johane***********************************************
// const APIKEY = "9d14fab5293af26cf8dc10b7ff26e891";

// let city;
// let input = document.querySelector("#city");

// input.addEventListener("input", function (e) {
// 	city = e.target.value;
// 	console.log(city);
// 	console.log(e);
// 	weather();
// });

// const weather = () => {
// 	const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;

// 	fetch(URL)
// 		.then((response) => response.json())
// 		.then((data) => {
// 			console.log(data);
// 			document.querySelector("#temp").innerHTML = `${data.main.temp} °`;
// 			document.querySelector("#feels").innerHTML = `${data.main.feels_like} °`;
// 			document.querySelector("#humidity").innerHTML = `${data.main.humidity} %`;
// 			document.querySelector("#wind").innerHTML = `${data.wind.speed} km/h`;
// 		})
// 		.catch((err) => {
// 			console.log(`Échec de récupération: ${err}`);
// 		});
// };
