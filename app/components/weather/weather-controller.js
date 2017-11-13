function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();
	var weatherElem = document.getElementById('weather-area')


	var unit = 'fahrenheit'


	//NEED TO GET WEATHER INFO FROM SERVICE TO DRAW ONTO THE SCREEN-----------DONE
	//NEED TO CONVERT KELVIN TO FAHRENHEIT(STRETCH GOAL MAKE A TOGGLE BETWEEN DEGREE MEASUREMENTS)----------DONE

	//LOOK INTO ONCLICK FOR THE WEATHER ID DIV

	function drawWeather() {

		var weatherTemplate = ''
		if (unit == 'kelvin') {
			weatherService.getWeatherKelvin(function (weather) {
				console.log(weather);
				console.log(weather.main.temp)
				// var fahrenheit = 9/5 * (weather.main.temp - 273) + 32
				weatherTemplate += `
			<h2 class="weather-cycle ilb m-tb" onclick="app.controllers.weatherController.cycleWeather()">${weather.main.temp.toFixed(1)}°K <img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png"><br>
			${weather.name}</h2>

			<div class="image-refresh pull-right" onclick="app.controllers.imgController.refreshBackgroundImage()">
				<i class="fa fa-picture-o" aria-hidden="true"></i><i class="fa fa-refresh" 	aria-hidden="true"></i>
			</div>
			`
				//What can you do with this weather object?
				weatherElem.innerHTML = weatherTemplate
			})
			unit = 'celsius'
			return
		}

		if (unit == 'celsius') {
			weatherService.getWeatherCelsius(function (weather) {
				console.log(weather);
				console.log(weather.main.temp)
				// var fahrenheit = 9/5 * (weather.main.temp - 273) + 32
				weatherTemplate += `
			<h2 class="weather-cycle ilb m-tb" onclick="app.controllers.weatherController.cycleWeather()">${weather.main.temp.toFixed(1)}°C <img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png"><br>
			${weather.name}</h2>

			<div class="image-refresh pull-right" onclick="app.controllers.imgController.refreshBackgroundImage()">
				<i class="fa fa-picture-o" aria-hidden="true"></i><i class="fa fa-refresh" 	aria-hidden="true"></i>
			</div>
			`
				//What can you do with this weather object?
				weatherElem.innerHTML = weatherTemplate
			})
			unit = 'fahrenheit'
			return
		}

		if (unit == 'fahrenheit') {
			weatherService.getWeatherFahrenheit(function (weather) {
				console.log(weather);
				console.log(weather.main.temp)
				// var fahrenheit = 9/5 * (weather.main.temp - 273) + 32
				weatherTemplate += `
			<h2 class="weather-cycle ilb m-tb" onclick="app.controllers.weatherController.cycleWeather()">${weather.main.temp.toFixed(1)}°F <img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png"><br>
			${weather.name}</h2>

			<div class="image-refresh pull-right" onclick="app.controllers.imgController.refreshBackgroundImage()">
				<i class="fa fa-picture-o" aria-hidden="true"></i><i class="fa fa-refresh" 	aria-hidden="true"></i>
			</div>
			`
				//What can you do with this weather object?
				weatherElem.innerHTML = weatherTemplate
			})
			unit = 'kelvin'

			return
		}
	}
	this.cycleWeather = function cycleWeather() {
		drawWeather()
	}
	drawWeather()
}
