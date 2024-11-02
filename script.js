document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    fetch('/api/register', {
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

// Lakukan hal serupa untuk login dan reset password
