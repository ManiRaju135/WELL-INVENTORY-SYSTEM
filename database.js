const mysql = require('mysql2');

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'DEVI@2827',
  database: 'well_inventory'
});

// Connect to the database
db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL.');
});

// Export the database connection
module.exports = db;