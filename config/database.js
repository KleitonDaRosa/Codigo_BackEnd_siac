const Pool = require('pg').Pool;
  
const pool = new Pool({
    user: 'oiqkuxnclquqfh',
    host: 'ec2-34-225-159-178.compute-1.amazonaws.com',
    database: 'd8l1m2ihd40t19',
    password: 'd2b8e118cc006679937aae3fc1716ed2bd9dc7c7d4c2e6cdf5c0080534f5f0c1',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;
