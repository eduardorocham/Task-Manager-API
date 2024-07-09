const Router = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../swagger');

const docsRoutes = Router();

docsRoutes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = docsRoutes;