const apiKey = "81d245522387fc5e988eb28db352f6f5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


 const searchBox = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")


 async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404){
            document.querySelector(".error").style.display ="block";
            document.querySelector(".weather").style.display ="none";
        }else{
            document.querySelector(".error").style.display = "none"
        }
        const data = await response.json();
        console.log(data); // Debugging step
 

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


        const weatherCondition = data.weather[0].main.toLowerCase(); // Convert to lowercase

if (weatherCondition === "clouds") {
    weatherIcon.src = "clouds.png";
} else if (weatherCondition === "clear") {
    weatherIcon.src = "clear.png";
} else if (weatherCondition === "rain") {
    weatherIcon.src = "rain.png";
} else if (weatherCondition === "drizzle") {
    weatherIcon.src = "drizzle.png";
} else if (weatherCondition === "mist") {
    weatherIcon.src = "mist.png";
} else {
    weatherIcon.src = "three.png"; // Fallback for unknown conditions
}
document.querySelector(".weather").style.display = "block";

console.log("Weather Condition:", weatherCondition);
console.log("Image Source Set To:", weatherIcon.src);


 } catch (error) {
        console.log("API Error:", error);
    }
}

 searchBtn.addEventListener("click", () => {
    console.log("Button Clicked!"); // Check if event fires
    checkWeather(searchBox.value);
});


checkWeather()


 