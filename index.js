const password = document.querySelector('#password');
const passConfirm = document.querySelector('#password_confirm');
const form = document.querySelector('.fifty');                          //create selector for our form
const passwordMatch = form.querySelector('.middle-left:nth-child(5)');

// Add an input event listener to the password and confirm password fields
password.addEventListener('input', checkPasswordMatch);
passConfirm.addEventListener('input', checkPasswordMatch);


// Create a new div element
const newDiv = document.createElement('div');


function checkPasswordMatch() {
    // Compare the values of the password and confirm password fields
    if (passConfirm.value !== password.value) {
        newDiv.textContent = "Passwords don't match!";
        passwordMatch.appendChild(newDiv);
    } else {
        newDiv.textContent = "";  // Reset the message if passwords match
    }
}