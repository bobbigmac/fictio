
import ServerSide from 'https://serversi.de/api.js';
// import ServerSide from '//localhost:4000/api.js';

const apiKey = 'some-key-abc123';
const serverUrl = localStorage['use-local-api'] ? 'http://localhost:4000/' : 'https://serversi.de/';
const server = new ServerSide({ apiKey, server: serverUrl });

window.addEventListener('DOMContentLoaded', async function() {
	console.log('Loaded DOM')
	try {
		const result = await server.test()
		console.log({ result })
	} catch(exc) {
		console.error({ exc });
	}
})