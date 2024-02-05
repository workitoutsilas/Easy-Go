// Variables'
const form_here = document.getElementById("form");
const passfield1 = document.getElementById("password_one").value,passfield2 = document.getElementById("password_two").value;
const message_two = document.querySelector(".danger-two");
const passwd1 = document.getElementById("password_one"),passwd2 = document.getElementById("password_two"); 
const iconone = document.querySelector(".icon-one"),icontwo = document.querySelector(".icon-two");

//Function for checking password requirements
function validatePassword(passfield1) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (regex.test(passfield1)) {
    message_two.style.opacity = 1;
    message_two.style.transform = "translate(0px,0px)";
    message_two.style.color = "green";
    message_two.textContent = "Password is valid!";
    $(message_two).fadeOut(400);
    document.getElementById("password_two").removeAttribute("disabled");
  } else {
    let errors = "";
    document.getElementById("password_two").setAttribute("disabled", "true");
    if (!/[a-z]/.test(passfield1)) {
      errors += "Must include at least a lowercase.\n";
    }
    if (!/[A-Z]/.test(passfield1)) {
      errors += "Must include at least a uppercase.\n";
    }
    if (!/\d/.test(passfield1)) {
      errors += "Must include at least a digit.\n";
    }
    if (!/[@$!%*?&]/.test(passfield1)) {
      errors += "Must include at least a special character.\n";
    }
    if (passfield1.length < 8) {
      errors += "Length must be 8 or more.\n";
    }
    if (errors) {
      const errorsE = message_two;
      $(message_two).fadeIn(400);
      errorsE.textContent = errors;
      errorsE.style.opacity = 1;
      errorsE.style.transform = "translate(0px,0px)";
      errorsE.style.color = "red";
    }
  }
}

const submitButton = document.getElementById("password_one");

// EventListener for first input[type:password] field
submitButton.addEventListener("change", () => {
  const passfield1 = document.getElementById("password_one").value;
  validatePassword(passfield1);
});

//Password confirmation from Submit button

form_here.addEventListener("submit", (event) => {
  event.preventDefault(); //prevents form from autosubmitting
  const passfield1 = document.getElementById("password_one").value;
  const passfield2 = document.getElementById("password_two").value;
  if (passfield1 === passfield2) {
    location.href = "homepage.html";
  } else {
    return; //Exit function without further executing
  }
});

//Password confirmation using Password Field Two
const ConfirmButton = document.getElementById("password_two");
ConfirmButton.addEventListener("change", () => {
  const passfield1 = document.getElementById("password_one").value;
  const passfield2 = document.getElementById("password_two").value;
  const message = document.querySelector(".danger");
  if (passfield2 !== passfield1) {
    message.style.opacity = 1;
    message.style.transform = "translate(0px,0px)";
    message.textContent = "Passwords do not match!";
    message.style.color = "red";
  } else {
    message.style.opacity = 1;
    message.style.transform = "translate(0px,0px)";
    message.textContent = "Passwords match.";
    message.style.color = "green";
  }
});

// Eye-icons for password fields
iconone.addEventListener("click",()=>{
  if(iconone.classList.contains("fa-eye-slash") && passwd1.type === "password"){
    passwd1.type = "text";
    iconone.classList.remove("fa-eye-slash");
    iconone.classList.add("fa-eye");
  }
  else{
    passwd1.type = "password";
    iconone.classList.add("fa-eye-slash");
    iconone.classList.remove("fa-eye")
  }
})
icontwo.addEventListener("click",()=>{
  if(icontwo.classList.contains("fa-eye-slash") && passwd2.type === "password"){
    passwd2.type = "text";
    icontwo.classList.remove("fa-eye-slash");
    icontwo.classList.add("fa-eye");
  }
  else{
    passwd2.type = "password";
    icontwo.classList.add("fa-eye-slash");
    icontwo.classList.remove("fa-eye");
  }
})