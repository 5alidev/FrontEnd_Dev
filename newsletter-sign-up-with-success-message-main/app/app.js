const myForm = document.querySelector(".form-container form");
const errorMsgSpan = document.getElementById("error-msg");
const emailInput = document.getElementById("email-input");
const newsletterContainer = document.querySelector(".newsletter-container");

// Regular Expression to check email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(myForm);
  // const formEntries = formData.entries();

  // get the email value from the formData
  const email = formData.get("email");

  // check email validity
  if (!emailRegex.test(email)) {
    errorMsgSpan.innerText = "Valid email required";
    emailInput.style.color = "hsl(4, 100%, 67%)";
    emailInput.style.borderColor = "hsl(4, 100%, 67%)";
    emailInput.style.backgroundColor =
      "hsla(3.9285714285714297, 100%, 67.05882352941177%, 0.153)";
  } else {
    errorMsgSpan.innerText = "";
    emailInput.style.color = "hsl(231, 7%, 60%)";
    emailInput.style.borderColor = "hsl(231, 7%, 60%)";
    emailInput.style.backgroundColor = "none";

    newsletterContainer.innerHTML = "";
    newsletterContainer.classList.add("success-content");
    newsletterContainer.innerHTML += `
            <div class="succes-info">
                <div class="check-icon">
                    <img src="/newsletter-sign-up-with-success-message-main/assets/images/icon-success.svg" alt="success icon" />
                </div>
                <h1>Thanks for subscribing!</h1>
                <p>A confirmation email has been sent to <span class="bold-span">ash@loremcompany.com.</span> Please open it and click the button inside to confirm your subscription.</p>
            </div>
            <button>Dismiss message</button>
        `;
  }
});
