function WeatherService() {
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise'

	var appid = '&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
	var apiUrl
	var celsius = '&units=metric'
	var fahrenheit = '&units=imperial'

	this.getWeatherKelvin = function getWeatherKelvin(weatherDataCb) {
		apiUrl = url + encodeURIComponent(url2 + appid)
		$.get(apiUrl, function (res) {
			res = JSON.parse(res)
			localStorage.setItem('weather', JSON.stringify(res))
			// HEY FUN FACT 
			// Have you ever wanted to know the temperature measured in kelvin?
			// You should probably convert the temperature data
			weatherDataCb(res);
		})
	}
	this.getWeatherCelsius = function getWeatherCelsius(weatherDataCb) {
		apiUrl = url + encodeURIComponent(url2 + celsius + appid)
		$.get(apiUrl, function (res) {
			res = JSON.parse(res)
			localStorage.setItem('weather', JSON.stringify(res))
			// HEY FUN FACT 
			// Have you ever wanted to know the temperature measured in kelvin?
			// You should probably convert the temperature data
			weatherDataCb(res);
		})
	}
	this.getWeatherFahrenheit = function getWeatherFahrenheit(weatherDataCb) {
		apiUrl = url + encodeURIComponent(url2 + fahrenheit + appid)
		$.get(apiUrl, function (res) {
			res = JSON.parse(res)
			localStorage.setItem('weather', JSON.stringify(res))
			// HEY FUN FACT 
			// Have you ever wanted to know the temperature measured in kelvin?
			// You should probably convert the temperature data
			console.log('this is the res', res)
			weatherDataCb(res);
		})
	}
}

