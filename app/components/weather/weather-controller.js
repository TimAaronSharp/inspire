function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();
	var weatherElem = document.getElementById('weather-area')
	
	
	
	//NEED TO GET WEATHER INFO FROM SERVICE TO DRAW ONTO THE SCREEN-----------DONE
	//NEED TO CONVERT KELVIN TO FAHRENHEIT(STRETCH GOAL MAKE A TOGGLE BETWEEN DEGREE MEASUREMENTS)----------DONE
	
	
	
	function drawWeather() {
		var weatherTemplate = ''
		weatherService.getWeather(function (weather) {
			console.log(weather);
			console.log(weather.main.temp)
			var fahrenheit = 1.8 * (weather.main.temp - 273) + 32
			weatherTemplate += `
			<h4>${fahrenheit.toFixed(1)} Degrees Fahrenheit</h4>		
			`
			//What can you do with this weather object?
			weatherElem.innerHTML = weatherTemplate
		})
	}
drawWeather()
}
