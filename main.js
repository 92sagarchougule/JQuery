$(document).ready(function(){



    $('#param').mouseenter(function(){
        $('#param').css('width','420px');
        $('#param').css('background-color','red');
    })


    $('#param').mouseleave(function(){
        $('#param').css('width','8400px');
    })

   

    var a = $('#param').html();

    

    // alert(a);




})