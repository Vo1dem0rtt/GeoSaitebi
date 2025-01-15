document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.registration-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Simple validation
        if (name === '' || email === '' || password === '' || confirmPassword === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        
        alert('Registration successful!');

        
        form.reset();
    });
});
