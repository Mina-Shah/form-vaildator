const inputUsername = document.querySelector('.input-username');
const inputEmail = document.querySelector('.input-email');
const inputPassword = document.querySelector('.input-password');
const inputConfirmPassword = document.querySelector('.input-confirm-password');
const submitButton = document.querySelector('.submit-button')
const usernameAlterBox = document.querySelector('.alert1')
const emailAlterBox = document.querySelector('.alert2')
const passwordAlertBox = document.querySelector('.alert3')
const confirmPasswordAlertBox = document.querySelector('.alert4')


// sumbitButton.addEventListener('click', getUsername)
const htmlForm = document.querySelector('.container');

htmlForm.addEventListener('submit', getUsername);

function getUsername(e) {
    e.preventDefault();
    const usernameValue = inputUsername.value;

    if (usernameValue.length < 3) {
        inputUsername.style.borderColor = 'red'
        usernameAlterBox.textContent = 'Username must be atleast 3 characters'
    } else {
        inputUsername.style.borderColor = 'green'
        usernameAlterBox.textContent = '';
    }

    const emailValue = inputEmail.value;

    if (emailValue.length < 3) {
        inputEmail.style.borderColor = 'red'
        emailAlterBox.textContent = 'PLease mention email'
    } else {
        inputEmail.style.borderColor = 'green'
        emailAlterBox.textContent = '';
    }

    const passwordValue = inputPassword.value;

    if (passwordValue.length < 6) {
        inputPassword.style.borderColor = 'red'
        passwordAlertBox.textContent = 'Password must be atleast 6 characters'
    } else {
        inputPassword.style.borderColor = 'green'
        passwordAlertBox.textContent = '';
    }

    const confirmPasswordValue = inputConfirmPassword.value;

    if (confirmPasswordValue.length < 6) {
        inputConfirmPassword.style.borderColor = 'red'
        confirmPasswordAlertBox.textContent = 'Password 2 is required'
    } else {
        inputConfirmPassword.style.borderColor = 'green'
        confirmPasswordAlertBox.textContent = '';

    }
}
