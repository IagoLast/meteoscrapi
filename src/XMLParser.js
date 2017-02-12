const xml2js = require('xml2js');
const parser = new xml2js.Parser({
	explicitRoot: false,
	explicitArray: false,
	ignoreAttrs: false,
});


function parse(data) {
	return new Promise((resolve, reject) => {
		parser.parseString(data, (err, result) => {
			err ? reject() : resolve(result);
		});
	});
}

module.exports = {
	parse: parse,
};