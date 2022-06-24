let id = (id) => document.getElementById(id);
let classes = (classes)  => document.getElementsByClassName(classes);

let username = id("username"),
 password = id("password"),
 fullname = id("fullname"),
 email = id("email"),
 phoneNumber = id("phoneNumber"),
 year = id("year"),
 bio = id("bio"),
 form = id("form");
 errorMsg = classes("error-block"),
 successIcon =classes("success"),
 failureIcon =classes("failure");

 form.addEventListener('submit', (e) =>{
     e.preventDefault();
     
     engine(username, 0, "Enter Username");
     engine(password, 1, "Enter  your password");
     engine(fullname, 2, "Enter Fullname");
     engine(email, 3, "Enter valid Email");
     engine(phonenumber, 4, "phone number can not be empty");
     engine(year, 5, "Enter DOB");
     engine(bio, 6, "Enter Biography");
    
 })




 let engine = (id, serial, message) => {
   if (id.value === "") {
     errorMsg[serial].innerHTML = message;
     failureIcon[serial].style.opacity = "1";
     successIcon[serial].style.opacity = "0";
   } else {
     errorMsg[serial].innerHTML = "";
     successIcon[serial].style.opacity = "1";
     failureIcon[serial].style.opacity = "0";
   }
 };




// let user = document.getElementById('userError');
// let password = document.getElementById('passwordError');
// let fullname = document.getElementById('FullnameError');
// let email = document.getElementById('emailError');
// let  phone=getElementById('phoneError');
// let dob = document.getElementById('dobError');
// let submit = document.getElementById('submitError');


// function validateUser (){
//     var name = document.getElementById('username').value;
//     if (name.value === "") {
//       user.innerHTML = "Username is Required";
//       return false;
//     }
//     if (!name.match(/^[a-zA-Z\-]+$/)) {
//       errorMsg.innerHTML = "Invalid username";
//       return false;
//     } 
//       errorMsg.innerHTML = "";
//       return true
    

// }