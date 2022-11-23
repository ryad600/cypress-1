var loginOverlay = document.getElementById("login-overlay");

var usernameField = document.getElementById("username-field");
var passwordField = document.getElementById("password-field");

/**
 * Called as onsubmit event by the login form itself.
 * Submits the login form as an AJAX request.
 * Will hide the overlay on success.
 */
function authenticate(event) {
	event.preventDefault();

	sendRequest("POST", "API/V1/Authenticate", onLoginSuccess, onLoginError, {
		username: usernameField.value,
		password: passwordField.value
	});
}

function onLoginSuccess(request) {
	loginOverlay.classList.remove("visible");
}

function onLoginError(request) {
	alert("Invalid credentials. Please try again!");
}