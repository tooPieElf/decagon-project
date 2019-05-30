$(document).ready(function () {
    


    $("#submitt").on('click', function () {

        let user = {
            name: $('input#name').val(),
            Email: $('input#email').val(),
            phone: $('input#phone').val(),
            password: $('input#password').val()

        }
var name= $('input#name').val(), Email= $('input#email').val(), phone= $('input#phone').val(), password= $('input#password').val()

if(name==''||Email==''||phone==''||password=='')
        {
        alert("please fill in all form fields");
        }else{

            $.ajax({
                type: 'POST',
                url: "http://localhost:3000/posts",
                data: user,
                success: function (response) {
                    window.location.href = "welcome.html";
                }
            });
        }
        



    })

    

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
    

    })


})
