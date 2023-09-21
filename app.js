const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Get a reference to the Login button using its ID
const loginButton = document.getElementById('login-button');

// Add a click event listener to the Login button
loginButton.addEventListener('click', function () {
  // Set the destination URL to "home.html"
  window.location.href = 'home.html';
});
