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
    event.preventDefault();

    const formData = new FormData(this);
    fetch('/login', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Login berhasil!');
            window.location.href = 'index.html';
        } else {
            alert('Login gagal: ' + data.message);
        }
    })
    .catch(error => console.error('Error:', error));
});

// Implementasi serupa untuk reset password
