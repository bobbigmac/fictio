
// import ServerSide from 'https://serversi.de/api.js';
// console.log({ServerSide});
// import ServerSide from '//localhost:4000/api.js';


window.addEventListener('DOMContentLoaded', async function() {
	const apiKey = 'some-key-abc123';
	const serverUrl = localStorage['use-local-api'] ? 'http://localhost:4000/' : 'https://serversi.de/';

	const server = new ServerSide({ apiKey, server: serverUrl });
	console.log('Loaded DOM', { serverUrl, server })
	try {
		const result = await server.test()
		console.log({ result })
	} catch(exc) {
		console.error({ exc });
	}
})