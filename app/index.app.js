import express from 'express';
import router from './routers/index.router.js';
import errorMiddleware from './middlewares/error.middleware.js';
import createDoc from './helpers/api.doc.js';
import httpLogger from './middlewares/httpLogger.js';
import corsMiddleware from './middlewares/cors.js';
import uploadMiddleware from './middlewares/uploadFile.js';

const app = express();

app.use(corsMiddleware);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(uploadMiddleware);

createDoc(app);

app.use(httpLogger);

app.use(router);

app.use(errorMiddleware);

export default app;
