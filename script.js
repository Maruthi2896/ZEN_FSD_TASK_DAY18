async function getCountriesData(){
    let res = await fetch('https://restcountries.com/v2/all')
    let data = await res.json()
    console.log(data)
    showCountryDetails(data)
    getWeatherData(data)
}
getCountriesData()
    
function showCountryDetails(data){
var row = document.getElementById('row')
for(var i=0;i<3;i++){
        row.innerHTML += (
            `<div class="card col-lg-3 col-sm-3 item mt-3 mb-3">
                <div class="card-header text-light bg-dark">
                    ${data[i].name}
                </div>
                <div class="card-body text-light align-items-center">
                    <img src=${data[i].flag} class="img-fluid">
                    <p>Capital: ${data[i].capital}</p>
                    <p>region: ${data[i].region}</p>
                    <p>Country code: ${data[i].alpha3Code}</p>
                    <button id=btn${i}>Click for weather</button>
                </div>
            </div>` 
        )
}



}

function getWeatherData(data)
{  
    var btn0 = document.getElementById(`btn0`);     
    console.log(btn0);     
    btn0.addEventListener("click", () => {              
    dummy(data[0].name);     
    });
    var btn1 = document.getElementById(`btn1`);     
    console.log(btn1);     
    btn1.addEventListener("click", () => {              
    dummy(data[1].name);     
    });
    var btn2 = document.getElementById(`btn2`);     
    console.log(btn2);     
    btn2.addEventListener("click", () => {              
    dummy(data[2].name);     
    });   
    
}

async function dummy(cname){
var res_cont = document.getElementById('result-cont')
var weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cname}&appid=07284452d2baaf8d9574a7a9bcae338b`)
var data1 = await  weather.json()
resbody.innerHTML =(
    `   <h5 class="card-title">Country : ${data1.name}</h5>
        <p class="card-text">Temperature : ${data1.main.temp}</p>
        <p class="card-text">Feels Like : ${data1.main.feels_like}</p>
        <p class="card-text">TimeZone : ${data1.timezone}</p>
        <p class="card-text">Wind Speed : ${data1.wind.speed}</p>
        <p class="card-text">Wind Degree : ${data1.wind.deg}</p>
    `
)
} 