const inputUsername = document.querySelector('.input-username');
const inputEmail = document.querySelector('.input-email');
const inputPassword = document.querySelector('.input-password');
const inputConfirmPassword = document.querySelector('.input-confirm-password');
const usernameAlertBox = document.querySelector('.username-alert')
const emailAlertBox = document.querySelector('.email-alert')
const passwordAlertBox = document.querySelector('.password-alert')
const confirmPasswordAlertBox = document.querySelector('.confirm-password-alert')

const htmlForm = document.querySelector('.container')

htmlForm.addEventListener('submit', getInput)
function getInput(e) {
    e.preventDefault();
    const usernameValue = inputUsername.value;

    if (usernameValue.length < 3) {
        inputUsername.style.borderColor = 'red'
       usernameAlertBox.textContent = 'Username must be atleast 3 characters'
    } else {
        inputUsername.style.borderColor = 'green'
       usernameAlertBox.textContent = '';
    }

    const emailValue = inputEmail.value;

    if (emailValue.length < 3) {
        inputEmail.style.borderColor = 'red'
       emailAlertBox.textContent = 'PLease mention email'
    } else {
        inputEmail.style.borderColor = 'green'
       emailAlertBox.textContent = '';
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
