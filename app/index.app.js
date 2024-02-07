import express from 'express';
import router from './routers/index.router.js';
import errorMiddleware from './middlewares/error.middleware.js';
import createDoc from './helpers/api.doc.js';
import httpLogger from './middlewares/httpLogger.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

createDoc(app);

app.use(httpLogger);

app.use(router);

app.use(errorMiddleware);

export default app;
