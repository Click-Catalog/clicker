const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('executed query', text);
    }
    return pool.query(text, params, callback);
  },
};