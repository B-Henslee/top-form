const password = document.querySelector('#password');
const passConfirm = document.querySelector('#password_confirm');
const form = document.querySelector('.fifty');                          //create selector for our form
const passwordMatch = form.querySelector('.middle-left:nth-child(5)');
const rightSideMatch = form.querySelector('.middle-right:nth-child(6)');

// Add an input event listener to the password and confirm password fields
password.addEventListener('input', checkPasswordMatch);
passConfirm.addEventListener('input', checkPasswordMatch);


// Create a new div element
const newDiv = document.createElement('div');
const blankDiv = document.createElement('div');



function checkPasswordMatch() {
    // Compare the values of the password and confirm password fields
    if (passConfirm.value !== password.value) {
        newDiv.textContent = "*Passwords don't match!";
        newDiv.style.color='red';
        passwordMatch.appendChild(newDiv);

    }else {
        newDiv.textContent = "";  // Reset the message if passwords match
    }
}