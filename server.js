const express = require('express')
const bodyParser = require('body-parser');
const { serverConfig } = require('./config')
const { albumRouter, systemRouter } = require('./routes')
const { createMongoDBConnection } = require('./connections')
const morgan = require('morgan')
const { metricsMiddleware } = require('./metrics')
const cors = require('cors')




const app = express();
const port = process.env.PORT || serverConfig.port || 7075;

// HTTP Request Logs
app.use(morgan(':method :url :status :res[content-length] bytes - :response-time ms'))

// Prometheus Metrics
app.use(metricsMiddleware)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: '*'
}));

// Routers
app.use('/', albumRouter);
app.use('/', systemRouter);


// Connect to DB
createMongoDBConnection(() => { console.log(`Server Connected to Mongo DB`) })

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});