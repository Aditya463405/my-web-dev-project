
const para = document.querySelector(".Emoji");
const search_btn = document.querySelector('button');
document.body.classList.add("default-bg");
const arr = ["☀️ Sunny", "🌦️ Rainy", "🌥️ Cloudy", "🌨️ Snow", "⛈️ Thunderstrom"];
let previousIndex = -1;

function Repeater() {

    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random()*arr.length);
    } while (randomIndex === previousIndex);

    previousIndex = randomIndex;
    para.innerText = arr[randomIndex];
}

Repeater();
setInterval(Repeater, 1500);

function getWeather(){

    const oldCard = document.querySelector("#Weather-location");

    if(oldCard){
       oldCard.remove();
    }

    const city = document.querySelector('#location').value.trim();
    if(city === ""){
    alert("Please enter a city");
    return;
    }

    const weathermainbox = document.createElement('div');
    weathermainbox.setAttribute("id", "Weather-location");
    

    // ------------- 1st box -------------------- //
    const box1 = document.createElement('div');
    box1.setAttribute("class", "locationxyz");

    const icon = document.createElement('div');
    icon.setAttribute("id", "icon");
    const temp = document.createElement('div');
    temp.setAttribute("id", "temp");
    const condition = document.createElement("div");
    condition.setAttribute("id", "condition");
    const nameofcity = document.createElement('div');
    nameofcity.setAttribute("id", "nameofcity");
    const date = document.createElement('div');
    date.setAttribute("id", "date");

    box1.append(icon, condition, temp, nameofcity, date);
    // ------------------------------------------ //

    // --------------2nd box -------------------- //
    const box2 = document.createElement('div');
    box2.setAttribute("id", "othersthings");

    // --------------- level1 -------------------- //
    const level1 = document.createElement('div');
    level1.setAttribute("class", "box box1");
    const humdi = document.createElement('div');
    humdi.setAttribute("id", "humid");
    const humidity = document.createElement('div');
    humidity.setAttribute("id", "humidity");
    humidity.textContent = "💧 Humidity";
    const humid_per = document.createElement('div');
    humid_per.setAttribute("id", "humid-per");

    const wind = document.createElement('div');
    wind.setAttribute("class", "wind");
    const wind2 = document.createElement('div');
    wind2.setAttribute("id", "wind");
    wind2.textContent = "🌬️ Wind";
    const wind_speed = document.createElement('div');
    wind_speed.setAttribute("id", "wind-speed");

    humdi.append(humidity, humid_per);
    wind.append(wind2, wind_speed);
    level1.append(humdi, wind);
    // ------------------------------------------- //

    //--------------- level2 --------------------- //
    const level2 = document.createElement('div');
    level2.setAttribute("class", "box box2");
    const feel = document.createElement('div');
    feel.setAttribute("class", "feels-like");
    const feels_like = document.createElement('div');
    feels_like.setAttribute("id", "feels-like");
    feels_like.textContent = "🌡️ Feels Like";
    const feel_temp = document.createElement('div');
    feel_temp.setAttribute("id", "feel-temp");

    const pressure = document.createElement('div');
    pressure.setAttribute("class", "pressure");
    const pre = document.createElement('div');
    pre.setAttribute("id", "pre");
    pre.textContent = "📈 Pressure";
    const press_value = document.createElement('div');
    press_value.setAttribute("id", "press-value");

    feel.append(feels_like, feel_temp);
    pressure.append(pre, press_value);
    level2.append(feel, pressure);
    // ------------------------------------------- //

    //--------------- level3 --------------------- //
    const level3 = document.createElement('div');
    level3.setAttribute("class", "box box3");
    const visi = document.createElement('div');
    visi.setAttribute("class", "visi");
    const visibility = document.createElement('div');
    visibility.setAttribute("id", "visibility");
    visibility.textContent = "👁️ Visibility";
    const visi_value = document.createElement('div');
    visi_value.setAttribute("id", "visi-value");

    const clouds = document.createElement('div');
    clouds.setAttribute("class", "clouds");
    const clouds2 = document.createElement('div');
    clouds2.setAttribute("id", "clouds");
    clouds2.textContent = "☁️ Clouds";
    const clouds_per = document.createElement('div');
    clouds_per.setAttribute("id", "clouds-per");

    visi.append(visibility, visi_value);
    clouds.append(clouds2, clouds_per);
    level3.append(visi, clouds);
    // ------------------------------------------- //

    box2.append(level1, level2, level3);
    // ------------------------------------------- //
    
    // ----------------box 3 --------------------- //
    const box3 = document.createElement('div');
    box3.setAttribute("id", "sun");
    const sun_rise = document.createElement('div');
    sun_rise.setAttribute("class", "sun1 sun-rise");
    const sun_set = document.createElement('div');
    sun_set.setAttribute("class", "sun1 sun-set");

    box3.append(sun_rise, sun_set);
    // -------------------------------------------- //

    const backBtn = document.createElement("button");
    backBtn.setAttribute("id", "back-btn");
    backBtn.textContent = "⬅ Back";

    backBtn.addEventListener("click", () => {
    weathermainbox.remove();
    document.querySelector("#main").style.display = "flex";
    document.querySelector("#location").value = "";
    document.querySelector("#location").focus();
    document.body.classList.remove(
    "sunny",
    "cloudy",
    "rainy",
    "snow",
    "thunder"
    );

    document.body.classList.add("default-bg");
    });


    weathermainbox.append(box1, box2, box3, backBtn);


    async function weather(){


        try{
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c33e3ca1340241a8bc6143402261007&q=${city}&days=1&aqi=yes`);

        const Data = await response.json();
        if(Data.error){
           alert(Data.error.message);
           return;
        }
        icon.innerHTML = `<img src = "https:${Data.current.condition.icon}">`;
        condition.textContent = Data.current.condition.text;

        const weather = Data.current.condition.text.toLowerCase();

        document.body.classList.remove(
           "default-bg",
           "sunny",
           "cloudy",
           "rainy",
           "snow",
           "thunder"
        );

      if(weather.includes("sunny") || weather.includes("clear")){
        document.body.classList.add("sunny");
      }
      else if(weather.includes("cloud")){
        document.body.classList.add("cloudy");
      }
      else if(weather.includes("rain")){
        document.body.classList.add("rainy");
      }
      else if(weather.includes("snow")){
        document.body.classList.add("snow");
      }
      else if(weather.includes("thunder")){
        document.body.classList.add("thunder");
      }
      else{
        document.body.classList.add("default-bg");
      }

        temp.textContent = `${Data.current.temp_c}°C`;
        nameofcity.textContent = `📍${Data.location.name}, ${Data.location.country}`;
        date.textContent = `${Data.location.localtime}`;

        humid_per.textContent = `${Data.current.humidity} %`;
        wind_speed.textContent = `${Data.current.wind_kph} km/h`;
        feel_temp.textContent = `${Data.current.feelslike_c}°C`;
        press_value.textContent = `${Data.current.pressure_mb} hPa`;
        visi_value.textContent = `${Data.current.vis_km} km`;
        clouds_per.textContent = `${Data.current.cloud} %`;
        sun_rise.textContent = `🌅 ${Data.forecast.forecastday[0].astro.sunrise}`;
        sun_set.textContent = `🌇 ${Data.forecast.forecastday[0].astro.sunset}`;

        document.querySelector("#main").style.display = "none";
        document.body.append(weathermainbox);
        }

        catch(error){
            console.log(error);
        }
    }

    weather();
}

search_btn.addEventListener('click' ,getWeather);

