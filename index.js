const inputUsername = document.querySelector('.input-username');
const inputEmail = document.querySelector('.input-email');
const inputPassword = document.querySelector('.input-password');
const inputConfirmPassword = document.querySelector('.input-confirm-password');
const sumbitButton = document.querySelector('.submit-button')
const alertBox1 = document.querySelector('.alert1')
const alertBox2 = document.querySelector('.alert2')
const alertBox3 = document.querySelector('.alert3')
const alertBox4 = document.querySelector('.alert4')


sumbitButton.addEventListener('click', getUsername)
function getUsername(e) {
    e.preventDefault();
    const usernameValue = inputUsername.value;

    if (usernameValue.length < 3) {
        inputUsername.style.borderColor = 'red'
        alertBox1.textContent = 'Username must be atleast 3 characters'
    } else {
        inputUsername.style.borderColor = 'green'
        alertBox1.textContent = '';
    }

    const emailValue = inputEmail.value;

    if (emailValue.length < 3) {
        inputEmail.style.borderColor = 'red'
        alertBox2.textContent = 'PLease mention email'
    } else {
        inputEmail.style.borderColor = 'green'
        alertBox2.textContent = '';
    }

    const passwordValue = inputPassword.value;

    if (passwordValue.length < 6) {
        inputPassword.style.borderColor = 'red'
        alertBox3.textContent = 'Password must be atleast 6 characters'
    } else {
        inputPassword.style.borderColor = 'green'
        alertBox3.textContent = '';
    }

    const confirmPasswordValue = inputConfirmPassword.value;

    if (confirmPasswordValue.length < 6) {
        inputConfirmPassword.style.borderColor = 'red'
        alertBox4.textContent = 'Password 2 is required'
    } else {
        inputConfirmPassword.style.borderColor = 'green'
        alertBox4.textContent = '';

    }
}
