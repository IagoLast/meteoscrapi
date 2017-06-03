function Prediction(data) {
  var name = data.nombre;
  var province = data.provincia;
  var forecast = data.prediccion.dia;

  console.log('Today\n')
  var today = _getForecast(forecast[0]);
  console.log('Tomorrow\n')
  var tomorrow = _getForecast(forecast[1]);
  console.log('NEXT2\n')
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
  var forecast = data.estado_cielo.find(forecast => forecast._ !== undefined);
  forecast = {
    value: forecast._,
    description: forecast.$.descripcion,
  };
  delete forecast.periodo;
  forecast.tmp = {
    min: parseFloat(data.temperatura.minima),
    max: parseFloat(data.temperatura.maxima),
    current: getCurrentTmp(data.temperatura),
  };
  return forecast;
}


function getCurrentTmp(data) {
  var hour = new Date().getHours();
  if (!data.dato) {
    return (data.maxima + data.minima) / 2;
  }
  if (hour <= 6) {
    return data.dato[0]['_'];
  }
  if (hour <= 12) {
    return data.dato[1]['_'];
  }
  if (hour <= 18) {
    return data.dato[2]['_'];
  }
  if (hour <= 24) {
    return data.dato[3]['_'];
  }
}

module.exports = Prediction;
