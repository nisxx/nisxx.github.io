// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (validateInput(nameInput) && validateInput(emailInput) && validateInput(messageInput)) {
            // Form is valid, you can add your logic here (e.g., submitting the form)
            alert('Form submitted successfully!');
        } else {
            alert('Please fill out all fields');
        }
    });

    function validateInput(input) {
        return input.value.trim() !== '';
    }
});
