
     let submit_btn = document.getElementById('registerUser');
     submit_btn.addEventListener("click", registerUser);

     function FormatPhone(ThePhone){
       if (ThePhone.length >= 9){
         ThePhone = ThePhone.replace(/\(/gi,"");
         ThePhone = ThePhone.replace(/\)/gi,"");
         ThePhone = ThePhone.replace(/-/gi,"");
         ThePhone = ThePhone.replace(/\ /gi,"");
         return true;
       } else {
         return false;
     } }


     function registerUser() {
         //get user data
         let firstname = document.getElementById("firstname");
         let email = document.getElementById("email");
         let phone = document.getElementById("phone");
         let password = document.getElementById("password");
         let cnf_password = document.getElementById("cnf_password");
         let is_valid = true;

         if (firstname.value === ""){
             firstname.style.borderColor = "red";
             console.log("please enter valid First name");
             is_valid = false;
         } else {
             firstname.style.borderColor = "#ccc";
         }

         if (lastname.value === ""){
             console.log("please enter valid Last Name");
             lastname.style.borderColor = "red";
             is_valid = false;
         } else {
             lastname.style.borderColor = "#ccc";
         }

          if (phone.value === "" || !FormatPhone(phone.value)) {
              phone.style.borderColor = "red";
              console.log("please enter valid phone");
              is_valid = false;
          } else {
              phone.style.borderColor = "#ccc";
          }

         if (email.value === ""){
             email.style.borderColor = "red";
             is_valid = false;
         } else {
             email.style.borderColor = "#ccc";
         }

         if (password.value === ""){
             is_valid = false;
             password.style.borderColor = "red";
         } else {
             password.style.borderColor = "#ccc";
         }

         //valid email
         let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         if (regEx.test(email.value) === false ){
             console.log("please enter valid email");
             is_valid = false;
             email.style.borderColor = "red";
         } else {
             email.style.borderColor = "#ccc";
         }

         //password validation
         let pswd_regEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;


         //match password
         if( password.value === password.value){
             password.style.borderColor = "#ccc";
             password.style.borderColor = "#ccc";
         } else {
             console.log("password and confirm password should be same");
             cnf_password.style.borderColor = "red";
             password.style.borderColor = "red";
             is_valid = false;
         }

         if( pswd_regEx.test(password.value) === false || pswd_regEx.test(password.value) === false){
             password.style.borderColor = "red";
             password.style.borderColor = "red";
             is_valid = false;
             console.log("enter valid password");
         } else {
             password.style.borderColor = "#ccc";
             password.style.borderColor = "#ccc";
         }

         if(is_valid){

             //check existing users
             if(localStorage.myUsersList === undefined){
                 localStorage.myUsersList = JSON.stringify([]);
             }

            // get current user from local storage
             let users =  JSON.parse(localStorage.myUsersList);

             // creat obj of new user
             let newUser = {
                 "firstname" : firstname.value,
                 "lastname" : lastname.value,
                 "email" : email.value,
                 "phone" : phone.value,
                 "password" : password.value
             }

             //add new user to user array

             $.ajax({
                 url: 'http://trading.yogisminter.com/users/register',
                 headers: {
                  'Content-Type': 'application/json; charset=utf-8',
                  'Access-Control-Allow-Origin': '*',
                  'Accept': 'application/json',
                },
                 method: 'POST',
                 dataType: 'json',
                 data: JSON.stringify(newUser),
                 success: function (response) {
                     console.log(response);
                 },
                 error: function (error) {
                     console.log(error);
                 }
             });
             // $.post("http://127.0.0.1:3000/users", JSON.stringify(users), function(data) {
             //     alert(data);
             // });
             localStorage.myUsersList = JSON.stringify(newUser);
             alert("your account has been created");
             console.log(localStorage.myUsersList);


         } else {

         }

     }
