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