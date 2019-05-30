$(document).ready(function () {


    $("#submitt").on('click', function () {

                let user = {
                    name: $('input#name').val(),
                    Email: $('input#email').val(),
                    phone: $('input#phone').val(),
                    password: $('input#password').val()

                }
                var name = $('input#name').val(),
                    Email = $('input#email').val(),
                    phone = $('input#phone').val(),
                    password = $('input#password').val()

                if (name == '' || Email == '' || phone == '' || password == '') {
                    alert("please fill in all form fields");
                } else {

                    $.ajax({
                        type: 'POST',
                        url: "http://localhost:3000/posts",
                        data: user,
                        success: function (response) {
                            window.location.href = "welcome.html";
                            welcomeName = name;
                        }
                    });
                }




            });

    $("#login").on('click', function(){
                let email = $('#email').val();
                let password = $('#password').val();
                
                $.ajax({
                    type: 'GET',
                    url: "http://localhost:3000/posts",
        
                    success: function(response){
                        $.each(response, function(key, value){
                            
                            if(email==value.Email && password==value.password){
                                
                                window.location.href = "welcome.html";
                                
                            }
                                
                            
                        })
                        alert('not found')
                        
                    }
                });
            
        
            });
    
    $("#welcome-section button.transact").click( function() {

                $("#welcome-section #amen").remove();
                
        
                var message = '<div id = "amen"> <input type="number" placeholder="amount" required="required"> <br> <button>submit</button> </div>';
        
        
                $("#welcome-section").append(message); 
            });  

    $("#welcome-section button.update").click( function() {

        $("#welcome-section #amen").remove();

         var message= `<div id="amen">
         <h1> Please enter your details</h1>
         <div class="login-box">
             <form >
 
                 <div>
                     <input class="login-box__input" type="text" id="name" placeholder="Name" required="required">
                 </div>
 
                 <div>
                     
                     <input class="login-box__input" placeholder="Email"  id="email" type="email" required="required">
                 </div>
 
                 <div>
                    
                     <input class="login-box__input" placeholder="Phone number" type="tel" id="phone" required="required">
                 </div>
 
                 <div>
                     
                     <input class="login-box__input" placeholder="Password" type="password" id="password" required="required">
                 </div>
 
 
                 <div class="button">
                     <button type="button" id="update">update</button>
                 </div>
             </form>`

             $("#welcome-section").append(message);

             let user = {
                name: $('input#name').val(),
                Email: $('input#email').val(),
                phone: $('input#phone').val(),
                password: $('input#password').val()

            }
            var name = $('input#name').val(),
                Email = $('input#email').val(),
                phone = $('input#phone').val(),
                password = $('input#password').val();

                $("#update").on('click', function(){

                   

                if (name == '' || Email == '' || phone == '' || password == '') {
                    alert("please fill in all form fields");
                    alert(name);
                }
                    
                
                    
                   
                
            
                });    

            
        

             

             

        
            });

    $("#welcome-section button.view").click( function() {

         $("#welcome-section #amen").remove();
         $.getJSON('http://localhost:3000/posts', function(data){
                var message = '';
            $.each(data, function(key,value){
        
                message += '<div id="amen" >';
                message += '<tr>';
                message +='<td>' + value.name +'</td>';
                message += '<tr>';
                message +='</div>'
        
            
            })
            $("#welcome-section").append(message);
        }) 
           
    });

    
});