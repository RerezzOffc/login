const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Koneksi ke database MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // ganti dengan username database Anda
    password: '', // ganti dengan password database Anda
    database: 'nama_database' // ganti dengan nama database Anda
});

db.connect((err) => {
    if (err) throw err;
    console.log('Koneksi ke database berhasil!');
});

// Rute dasar
app.get('/', (req, res) => {
    res.send('API Server Berjalan!');
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
