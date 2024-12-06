document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('usernameDisplay').textContent = username;
    }

    const firstLoginDate = localStorage.getItem('firstLoginDate');
    if (firstLoginDate) {
        document.getElementById('loginDate').textContent = firstLoginDate;
    }

    // Toggle dropdown on "Setting" click
    const settingToggle = document.getElementById('settingToggle');
    const settingOptions = document.getElementById('settingOptions');

    settingToggle.addEventListener('click', function(event) {
        event.preventDefault();
        settingOptions.style.display = settingOptions.style.display === 'block' ? 'none' : 'block';
    });

    // Sidebar toggle for mobile view
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.menu-toggle');

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('show');
    });

    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', function(event) {
        event.preventDefault();
        localStorage.removeItem('username');
        localStorage.removeItem('firstLoginDate');
        alert('You have been logged out successfully!');
        window.location.href = 'login.html'; // Redirect to login page after logout
    });
});
