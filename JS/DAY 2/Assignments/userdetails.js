document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("detailsContainer");
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (!userData) {
        container.innerHTML = "<p>No user data found.</p>";
        return;
    }

    // Create common user details
    let detailsHTML = `
      <p><strong>Name:</strong> ${userData.name}</p>
      <p><strong>Age:</strong> ${userData.age}</p>
      <p><strong>Email:</strong> ${userData.email}</p>
      <p><strong>Phone:</strong> ${userData.phone}</p>
      <p><strong>Salary:</strong> $${userData.salary}</p>
    `;

    // Add role-specific content
    if (userData.role === "trainer") {
        detailsHTML = `
          <h3>Trainer Dashboard</h3>
          ${detailsHTML}
          <div class="trainer-specific">
            <p><strong>Role:</strong> Trainer</p>
            <p>You have access to manage students and courses.</p>
            <button class="dashboard-btn">View Students</button>
            <button class="dashboard-btn">Manage Courses</button>
          </div>
        `;
    } else if (userData.role === "student") {
        detailsHTML = `
          <h3>Student Dashboard</h3>
          ${detailsHTML}
          <div class="student-specific">
            <p><strong>Role:</strong> Student</p>
            <p>You have access to your courses and learning materials.</p>
            <button class="dashboard-btn">My Courses</button>
            <button class="dashboard-btn">Learning Materials</button>
          </div>
        `;
    }

    container.innerHTML = detailsHTML;
});

function logout() {
    // Clear localStorage
    localStorage.removeItem("userData");
    window.location.href = "./login.html";
}