// corsMiddleware.js
import cors from 'cors';

// Middleware CORS
const corsOptions = {
  origin: '*', // Liste des domaines autorisés
  methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Méthodes HTTP autorisées
  // allowedHeaders: ['Content-Type', 'Authorization'], // En-têtes autorisés
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
