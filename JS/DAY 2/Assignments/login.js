document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value.trim());
    const role = document.getElementById("role").value.trim();
    const salary = parseFloat(document.getElementById("salary").value.trim());
    const email = document.getElementById("email").value.trim();
    const countryCode = document.getElementById("countryCode").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const phone = `${countryCode}${phoneNumber}`;

    // Validation patterns
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const countryCodeRegex = /^\+\d{1,3}$/;
    const phoneNumberRegex = /^[1-9]\d{9}$/;


    function showError(message) {
        document.getElementById("error").innerHTML = message;
    }

    if (name.length < 3) {
        showError("Name must be at least 3 characters.");
        return;
    }

    if (age < 18) {
        showError("Age must be 18 or older.");
        return;
    }

    if (!emailRegex.test(email)) {
        showError("Invalid email format.");
        return;
    }

    if (!countryCodeRegex.test(countryCode)) {
        showError("Country code must start with '+' and have 1–3 digits (e.g., +91).");
        return;
    }

    if (!phoneNumberRegex.test(phoneNumber)) {
        showError("Phone number must be exactly 10 digits and not start with 0.");
        return;
    }


    // Store user data
    const userData = {
        name,
        age,
        role,
        salary,
        email,
        phone
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    showError("");
    window.location.href = "userdetails.html";
});