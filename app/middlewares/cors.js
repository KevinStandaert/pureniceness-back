import cors from 'cors';

// Middleware CORS
const corsOptions = {
  origin: ['http://localhost:5173'],
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Disposition'],
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
