  document.querySelector('.signin-btn').addEventListener('click', function() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (!email || !password) {
                alert('Please enter both email and password');
                return;
            }
            
            // Here you would typically send the data to your server
            console.log('Login attempt with:', { email, password });
            
            // For demo purposes, just show a success message
            alert('Login successful (demo)');
        });