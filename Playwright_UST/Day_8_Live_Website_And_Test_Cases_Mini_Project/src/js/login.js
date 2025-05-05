const loginForm = document.getElementById('login-form');
const loginStatus = document.getElementById('login-status');
loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    // Mock validation
    if (username === 'admin' && password === 'password') {
        loginStatus.textContent = 'Login successful! Redirecting...';
        setTimeout(() => window.location.href = 'index.html', 1000);
    } else {
        loginStatus.textContent = 'Invalid credentials, please try again.';
    }
});