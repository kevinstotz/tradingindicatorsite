
     let submit_btn = document.getElementById('affiliatesignup');
     submit_btn.addEventListener("click", AffiliateSignUp);

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


     function AffiliateSignUp() {
         //get user data
         let name = document.getElementById("name");
         let email = document.getElementById("email");
         let phone = document.getElementById("phone");
         let is_valid = true;

         if (name.value === ""){
             name.style.borderColor = "red";
             console.log("please enter valid name");
             is_valid = false;
         } else {
             name.style.borderColor = "#ccc";
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

         //valid email
         let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         if (regEx.test(email.value) === false ){
             console.log("please enter valid email");
             is_valid = false;
             email.style.borderColor = "red";
         } else {
             email.style.borderColor = "#ccc";
         }


         if(is_valid){

             // creat obj of new user
             let newAffiliate = {
                 "name" : name.value,
                 "email" : email.value,
                 "phone" : phone.value
             }

             //add new user to user array

             $.ajax({
                 url: 'http://127.0.0.1:3000/affiliates/register',
                 headers: {
                  'Content-Type': 'application/json; charset=utf-8',
                  'Access-Control-Allow-Origin': '*',
                  'Accept': 'application/json',
                },
                 method: 'POST',
                 dataType: 'json',
                 data: JSON.stringify(newAffiliate),
                 success: function (response) {
                     console.log(response);
                 },
                 error: function (error) {
                     console.log(error);
                 }
             });

             alert("We will contact you shortly");

         } else {

         }

     }
