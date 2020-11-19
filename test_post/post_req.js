const axios = require('axios')                //установить

axios.default.post('http://localhost:3000/counter', { value: -5 })
	.then(({ data }) => console.log(data))

	//! надо две консоли два файла запустиь сначала server.js