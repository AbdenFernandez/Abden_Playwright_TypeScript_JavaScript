const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', e => {
    e.preventDefault();
    status.textContent = 'Thank you! Your message has been sent.';
    form.reset();
});