const emailInput = document.getElementById("email");
const submitBtn = document.querySelector(".submit-button");
const sucsDiv = document.querySelector(".contain");
const dismissBtn = document.querySelector(".Dismiss");
const label = document.getElementById("label");
const userEmail = document.getElementById("user-email");

//submit email
submitBtn.addEventListener("click", function () {
  let email = emailInput.value.trim();
  if (email.includes("@gmail.com")) {
    sucsDiv.style.visibility = "visible";
    userEmail.textContent = email;
  } else {
    emailInput.classList.add("error");
    label.classList.add("errorMsg");
    return;
  }
});
//Dismiss
dismissBtn.addEventListener("click", function () {
  sucsDiv.style.visibility = "hidden";
});
