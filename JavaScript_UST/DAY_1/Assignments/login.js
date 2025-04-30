/* 
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username == 'abden' && password == 'pass1234') {
        alert('Login successful!');
        document.getElementById('message').textContent = 'Welcome, ' + username + '!';
        document.getElementById('message').style.color = 'green';
    } else {
        alert('Invalid username or password!');
        document.getElementById('message').textContent = 'Invalid username or password.';
    }
});
 */
function store() {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const userDetails = {
            fullName: document.getElementById('fullname').value,
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            phone: document.getElementById('phone').value
        };

        localStorage.setItem('userDetails', JSON.stringify(userDetails,null,2));

        /*         
        console.log("User Details as JSON Object:", userDetails);
        const userDetailsString = JSON.stringify(userDetails, null, 2);
        const messageEl = document.getElementById('message');
        messageEl.textContent = `Details saved!\n${userDetailsString}`;
        */
        window.location.href = "userDetails.html";
    });
}

function displayUserDetails() {
    const userDetails = localStorage.getItem('userDetails');
    const userDetailsEl = document.getElementById('userDetails');

    if (userDetails) {
        const data = JSON.parse(userDetails);

        // Clear existing content
        userDetailsEl.innerHTML = '';

        // Build HTML with labels
        const htmlContent = `
            <p><strong>Full Name:</strong> ${data.fullName}</p>
            <p><strong>Username:</strong> ${data.username}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Password:</strong> ${data.password}</p>
            <p><strong>Phone Number:</strong> ${data.phone}</p>
        `;

        userDetailsEl.innerHTML = htmlContent;
    } else {
        userDetailsEl.textContent = 'No user details found.';
    }
}