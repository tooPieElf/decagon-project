

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



$('#id').click(function(e){
e.preventDefault();
//something
// targetanimal eg
//something
$.ajax({
    type: "PUT",
    url: "url.targetanimal.id",
    data: "data",
    dataType: "dataType",
    success: function (response) {
        alert("success")
    }
});

})