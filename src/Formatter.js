const iconv = require('iconv-lite');

function format(data) {
	return iconv.decode(data, 'ISO-8859-1');
}

module.exports = {
	format: format
};