function Prediction(data) {
	var name = data.nombre;
	var province = data.provincia;
	var forecast = data.prediccion.dia;

	var today = _getForecast(forecast[0]);
	var tomorrow = _getForecast(forecast[1]);
	var next2 = _getForecast(forecast[2]);


	return {
		name: name,
		province: province,
		today: today,
		tomorrow: tomorrow,
		next2: next2,
		forecast: forecast,
	};
}

function _getForecast(data) {
	var forecast = data.estado_cielo.find(forecast => forecast !== '');
	delete forecast.periodo;
	forecast.tmp = {
		min: data.temperatura.minima,
		max: data.temperatura.maxima
	};
	return forecast;
}

module.exports = Prediction;