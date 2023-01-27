const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
        // 'X-RapidAPI-Key': '9d11b94a5cmsh4e4c306f7894cc2p1ce86ajsn89d67f716e54',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees


        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

// getWeather("Mumbai")
// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai', options)
//     .then(response => response.json())
//     .then((response) => {
//         console.log(response)
//         temp01.innerHTML = response.temp
//         feels_like01.innerHTML = response.feels_like
//         humidity01.innerHTML = response.humidity
//         min_temp01.innerHTML = response.min_temp
//         max_temp01.innerHTML = response.max_temp
//         wind_speed01.innerHTML = response.wind_speed
//         wind_degrees01.innerHTML = response.wind_degrees

//     })
getWeather("Patna")
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Patna', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        temp02.innerHTML = response.temp
        feels_like02.innerHTML = response.feels_like
        humidity02.innerHTML = response.humidity
        min_temp02.innerHTML = response.min_temp
        max_temp02.innerHTML = response.max_temp
        wind_speed02.innerHTML = response.wind_speed
        wind_degrees02.innerHTML = response.wind_degrees

    })
getWeather("Gorakhpur")
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gorakhpur', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        temp04.innerHTML = response.temp
        feels_like04.innerHTML = response.feels_like
        humidity04.innerHTML = response.humidity
        min_temp04.innerHTML = response.min_temp
        max_temp04.innerHTML = response.max_temp
        wind_speed04.innerHTML = response.wind_speed
        wind_degrees04.innerHTML = response.wind_degrees

    })
getWeather("Ghaziabad")
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ghaziabad', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        temp05.innerHTML = response.temp
        feels_like05.innerHTML = response.feels_like
        humidity05.innerHTML = response.humidity
        min_temp05.innerHTML = response.min_temp
        max_temp05.innerHTML = response.max_temp
        wind_speed05.innerHTML = response.wind_speed
        wind_degrees05.innerHTML = response.wind_degrees

    })
getWeather("Lucknow")
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        temp03.innerHTML = response.temp
        feels_like03.innerHTML = response.feels_like
        humidity03.innerHTML = response.humidity
        min_temp03.innerHTML = response.min_temp
        max_temp03.innerHTML = response.max_temp
        wind_speed03.innerHTML = response.wind_speed
        wind_degrees03.innerHTML = response.wind_degrees

    })


getWeather("Delhi")