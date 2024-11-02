from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

# Fungsi untuk membuat koneksi database
def get_db_connection():
    conn = sqlite3.connect('users.db')
    conn.row_factory = sqlite3.Row
    return conn

# Buat tabel pengguna jika belum ada
with get_db_connection() as conn:
    conn.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        )
    ''')
    conn.commit()

@app.route('/register', methods=['POST'])
def register():
    name = request.form['name']
    email = request.form['email']
    password = request.form['password']

    try:
        with get_db_connection() as conn:
            conn.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
                         (name, email, password))
            return jsonify(success=True), 201
    except sqlite3.IntegrityError:
        return jsonify(success=False, message='Email sudah terdaftar!'), 400

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']

    with get_db_connection() as conn:
        user = conn.execute('SELECT * FROM users WHERE email = ? AND password = ?', (email, password)).fetchone()
        if user:
            return jsonify(success=True), 200
        else:
            return jsonify(success=False, message='Email atau password salah!'), 401

if __name__ == '__main__':
    app.run(debug=True)
