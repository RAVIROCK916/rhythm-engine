const promBundle = require("express-prom-bundle");
// Add the options to the prometheus middleware most option are for http_request_duration_seconds histogram metric
const metricsMiddleware = promBundle({
    includeMethod: true,
    includePath: true,
    includeStatusCode: true,
    includeUp: true,
    customLabels: { project_name: 'rhythm_engine', project_type: 'metric_labels' },
    promClient: {
        collectDefaultMetrics: {

        }
    }
});

module.exports = { metricsMiddleware }