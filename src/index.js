const email = document.getElementById("email");
const submitBtn = document.getElementById("submit");
const btnResponse = document.getElementById("btn-response");

// event listener
submitBtn.addEventListener("click", handleClick); //listens to the btn
email.addEventListener("input", clearMessage);  // Listen for input events

function handleClick() {
    // Clear previous messages
    btnResponse.innerHTML = "";  // Corrected clearing method

    // Basic email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Checking if the email input has a value and matches the pattern
    if (email.value) {
        if (emailPattern.test(email.value)) {
            btnResponse.innerHTML = `<p class = "text-green-500 text-center">Email sent</p>`;
        } else {
            btnResponse.innerHTML = `<p class="text-red-500 text-center">Please enter a valid email address</p>`;
        }
    } else {
        btnResponse.innerHTML = `<p class="text-red-500 text-center">Please enter your email</p>`;
    }
}

function clearMessage() {
    btnResponse.innerHTML = "";  // Clears the message when the user starts typing
}


