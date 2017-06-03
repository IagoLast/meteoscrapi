const rp = require('request-promise');
const Prediction = require('./Prediction.js');
const Parser = require('./XMLParser');
const Formatter = require('./Formatter');


function Meteosapi() {
	return {
		getForecast: function(id) {
			return rp(_request(id))
				.then(Formatter.format)
				.then(Parser.parse)
				.then(_generateForecast);
		},
		getSimpleForecast: function(id) {
			return rp(_request(id))
				.then(Formatter.format)
				.then(Parser.parse)
				.then(_generateSimpleForecast);
		}
	};
}


function _generateForecast(data) {
	return Prediction(data);
}

function _generateSimpleForecast(data) {
	let prediction = Prediction(data);
	delete prediction.forecast;
	return prediction;
}

function _request(id) {
	return {
		url: `http://www.aemet.es/xml/municipios/localidad_${id}.xml`,
		encoding: null,
	};
}


module.exports = Meteosapi;
