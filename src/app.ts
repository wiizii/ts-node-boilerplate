import * as express from 'express';

function runServer() {
	const app = express();
	app.listen(3000, () => {
		console.log('start server');
	});
}
runServer();
