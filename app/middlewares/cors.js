import cors from 'cors';

// Middleware CORS
const corsOptions = {
  origin: [process.env.PROD_FRONT_URL, process.env.DEV_FRONT_URL],
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Disposition'],
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
