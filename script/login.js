const passwd1 = document.getElementById("password-one");
const iconone = document.querySelector(".iconone")

// Eye-icon for password field
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