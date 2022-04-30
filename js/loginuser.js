
     let submit_btn = document.getElementById('loginUser');
     submit_btn.addEventListener("click", loginUser);

     function loginUser() {
         //get user data
         let email = document.getElementById("email");
         let password = document.getElementById("password");
         let is_valid = true;

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

             // creat obj of new user
             let newUser = {
                 "email" : email.value,
                 "password" : password.value
             }

             //add new user to user array

             $.ajax({
                 url: 'http://127.0.0.1:3000/users/login',
                 headers: {
                  'Content-Type': 'application/json; charset=utf-8',
                  'Access-Control-Allow-Origin': '*',
                  'Accept': 'application/json',
                },
                 method: 'POST',
                 dataType: 'json',
                 data: JSON.stringify(newUser),
                 success: function (response) {
                     newUser = {
                         "email" : email.value,
                         "id" : response.id
                     }
                     localStorage.user = JSON.stringify(newUser);
                     alert("You logged in");
                     console.log(localStorage.myUsersList);
                 },
                 error: function (error) {
                     console.log(error);
                 }
             });



         } else {

         }

     }
