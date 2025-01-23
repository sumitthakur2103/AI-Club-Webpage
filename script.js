document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;

    alert(`Thank you, ${name}! You've successfully registered with the email ${email}.`);

    // Clear form after submission
    document.getElementById('registrationForm').reset();
});

// JavaScript to toggle the hamburger menu
const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
});

