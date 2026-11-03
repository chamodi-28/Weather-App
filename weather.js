async function getWeather() {
    let city = document.getElementById("city").value;

    if(city === ""){
        alert("Enter city name !");
        return;
    }

    let apiKey = "f6c11aef2aabd47497945a870e6b193d";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let response = await fetch(url);
    let data= await response.json();

    if(data.cod === 200){
        let temp = data.main.temp;
        let weather = data.weather[0].main;

        document.getElementById("result").innerHTML =
            `Temperature: ${temp}°C <br> Weather: ${weather}`;
    } else {
        document.getElementById("result").innerText = "City not found!";
    }
    
}