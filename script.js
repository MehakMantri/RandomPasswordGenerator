const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_+{}:[]';/";

const allChar = upperCase + lowerCase + numbers + symbols;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    passwordBox.value = password;
}
function copyPassword() {
    if (passwordBox) {
        navigator.clipboard.writeText(passwordBox.value)
            .then(function () {
                showMessage("copied!");
            })
            .catch(function (err) {
                showMessage("Unable to copy password. Please try again.");
                console.error('Unable to copy password to clipboard', err);
            });
    } else {
        showMessage("Password box not found!");
    }
}

function showMessage(message) {
    var messageElement = document.createElement("div");
    messageElement.className = "copy-message";
    messageElement.textContent = message;

    // Set initial position off-screen
    messageElement.style.left = "-100px";
    messageElement.style.top = "-100px";

    // Append the message element to the document body
    document.body.appendChild(messageElement);

    // Update position on mousemove
    document.addEventListener("mousemove", function (event) {
        var x = event.clientX;
        var y = event.clientY;

        // Set the position relative to the cursor
        messageElement.style.left = x + 10 + "px"; // Adjust the offset as needed
        messageElement.style.top = y - 20 + "px";  // Adjust the offset as needed
    });

    // Display the message for a short duration (e.g., 2 seconds)
    setTimeout(function () {
        document.body.removeChild(messageElement);
    }, 2000);
}

