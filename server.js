const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 3231;

app.use(cors())

startServer = (cb) => {
	server = app.listen(PORT, () => {
		console.log('Server started on port:', PORT);
		cb();
	});
}

startRouter = () => {
	// Return any status with `?status=any`
	app.get('/mock', (req, res) => {
		const status = parseInt(req.query.status) || 500;
    	res.status(status).send({ error: 'Hello', status});
  	});
}


module.exports = {

	startServer: startServer,
	startRouter: startRouter

};
