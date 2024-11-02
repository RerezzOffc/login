document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    fetch('/register', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Pendaftaran berhasil!');
            window.location.href = 'login.html';
        } else {
            alert('Pendaftaran gagal: ' + data.message);
        }
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form default

    const formData = new FormData(this); // Mengambil data dari form
    fetch('/login', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Login berhasil! Selamat datang!');
            window.location.href = 'home.html'; // Mengarahkan pengguna ke halaman home
        } else {
            alert('Login gagal: ' + data.message);
        }
    })
    .catch(error => console.error('Error:', error));
});


// Implementasi serupa untuk reset password
