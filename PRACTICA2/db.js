import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host:"localhost",
    user: "root",
    password:"admin123",
    database: "practica2_web3",
    port:"3306",
    waitForConnections: true,
    connectionlimit: 10,
    queueLimit:0
});

export default pool;