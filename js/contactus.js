//contactus.js

$(function() {
    $("h3").fitText();
    $("#dialog").dialog({
        dialogClass: "no-close",

        buttons: [
            {
                text: "Ok",
                click: function() {
                    $( this ).dialog( "close" );
                }
            }
        ]
    });

    $('#submit').on('click', function() {
        $("#contactForm").validate({
            onsubmit: true
        });
        var name = $('name');
        var email = $('email');
        var notes = $('notes');
        var join = $('join');
    });
});
