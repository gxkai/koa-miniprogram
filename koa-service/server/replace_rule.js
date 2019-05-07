var proxy = require('nproxy-plus');
module.exports = [
	{
		pattern : 'https://www.ksgxkai.top',
		responder : proxy.mix(
			proxy.route('fetch', 'http://localhost:4001')
		)
	}
]
