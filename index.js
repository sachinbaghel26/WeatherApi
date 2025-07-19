const input = document.querySelector('input')
const searchBtn = document.querySelector('#searchBtn')
const weather_img = document.querySelector('.weather-img')
const temp = document.querySelector('.temp')
const description = document.querySelector('.description')
const humidity = document.querySelector('#humidity')
const wind_speed = document.querySelector('#wind-speed')


async function checkweather(city) {
    const apiKey = 'f26b1891983b4b01b8a122534252204';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`

    // const weather_data = fetch(`${url}`)
    //     .then(res => res.json())

    //     console.log(weather_data)
    let weather_data = await axios.get(url);

    temp.innerHTML=`${weather_data.data.current.temp_c}°C`
    humidity.innerHTML=`${weather_data.data.current.humidity}%`
    wind_speed.innerHTML=`${weather_data.data.current.wind_kph}Km/h`
    description.innerHTML=`${weather_data.data.current.condition.text}`

    switch (weather_data.data.current.condition.text) {
        case 'Clouds':
            weather_img.src='/Assest_files/cloud.png'            
            break;
        case 'Clear':
            weather_img.src='/Assest_files/clear.png'            
            break;
        case 'Rain':
            weather_img.src='/Assest_files/rain.png'            
            break;
        case 'Mist':
            weather_img.src='/Assest_files/mist.png'            
            break;
        case 'Snow':
            weather_img.src='/Assest_files/snow.png'            
            break;
        case 'Partly cloudy':
            weather_img.src='/Assest_files/partyCloud.png'            
            break;
    }
    
    console.log(weather_data)    
    input.value=''

}
searchBtn.addEventListener('click', () => {
    checkweather(input.value)
})
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkweather(input.value);
    }
});
