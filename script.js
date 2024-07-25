const url = 'https://weather-api138.p.rapidapi.com/weather?city_name=Fergana';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'cfeef00abcmsh0b0503c73422bacp176b58jsnd7898ebd3159',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};



async function fetchweather() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    
}

fetchweather();