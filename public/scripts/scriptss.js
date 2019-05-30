

$(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/posts/",
        success: function (response) {
            $.each(response, function (indexInArray, valueOfElement) { 
                 console.log(valueOfElement.id);
                 
            });
        }
    });
});