// auth.js
document.addEventListener('DOMContentLoaded', () => {
    const user = localStorage.getItem('loggedInUser');
    const container = document.getElementById('profile-icon-container');

    if (user && container) {
        container.innerHTML = `
            <a href="./profile.html" title="${user.username}">
                <img src="./images/profile-icon.png" alt="Profile" class="nav-profile-icon">
            </a>
        `;
    }
});

    