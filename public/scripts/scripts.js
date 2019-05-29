$(document).ready(function () {
    var newWindow = window.open("login.html");


    $("#submitt").on('click', function () {

        let user = {
            name: $('input#name').val(),
            Email: $('input#email').val(),
            phone: $('input#phone').val(),
            password: $('input#password').val()

        }



        $.ajax({
            type: 'POST',
            url: "http://localhost:3000/posts",
            data: user,
            success: function (response) {
                alert(response);
            }
        });



    })

    // $("#login").on('click', function(){
    //     $.ajax({
    //         type: 'GET',
    //         url: "http://localhost:3000/posts",

    //         success: function(response){
    //             alert(response);
    //         }
    //     });

    // })

})
