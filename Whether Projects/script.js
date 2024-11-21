const url = (`https://api.openweathermap.org/data/2.5/weather?q=`)
 
let apikey='7746f14f400aaeab42242d138a52521d'
    
async function report(city){
    let response = await fetch(url + city + `&appid=${apikey}`)
    let data = await response.json();
    console.log(data)
    
    document.querySelector(".degree h1").innerHTML=Math.floor(data.main.temp-273)+"°C";
    document.querySelector(".degree h2").innerHTML=data.name
    document.querySelector(".humid p").innerHTML=data.main.humidity + "%"
    document.querySelector(".humid-1 p").innerHTML=data.wind.speed + "km/h"
    let report=document.querySelector(".report img")

    if(data.weather[0].main=="Clear"){
        report.src="/images/clear.png"
    }else if(data.weather[0].main=="Clouds"){
        report.src="/images/clouds.png"
    }else if(data.weather[0].main=="Haze"){
        report.src="/images/drizzle.png"
    }else if(data.weather[0].main=="Mist"){
        report.src="/images/mist.png"
    }else if(data.weather[0].main=="Snow"){
        report.src="/images/snow.png"
    }else if(data.weather[0].main=="Rain"){
        report.src="/images/rain.png"
    }



}
    
let input = document.querySelector("#input")
let button = document.querySelector("#bttn").addEventListener("click",()=>{
    report(input.value)
})










