import pg from 'pg';

// The Pool allows opening multiple connections that can be used in parallel.
const client = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  // host: process.env.PGHOST,
  // user: process.env.PGUSER,
  // database: process.env.PGDATABASE,
  // password: process.env.PGPASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
});
// There is no direct connection with a client when using a pool,
// as the pool manages the opening and closing of connections.

export default client;
