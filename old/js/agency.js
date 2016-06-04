/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('#submitContactForm').click(function(e){
    e.preventDefault();
    
    // validate the form fields
    var valid = true;
    var contactForm = $('#contactForm');
    contactForm.find('input,textarea').each(function(e) {
        if(!this.checkValidity()) {
            $(this).closest('.form-group').addClass("has-error");
            valid = false;
        }
        else {
            $(this).closest('.form-group').removeClass("has-error");
        }
    });
    
    if(valid){
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var message = $('#message').val();

        $.ajax("https://script.google.com/macros/s/AKfycbxww7hx_9TeUmDqgUZDGtdZcG1Ql1J1ZK4GTjEXW0a8DvjHVUyo/exec", {
            type: 'POST',
            data: {
               "Name" : name,
               "Email" : email,
               "Phone" : phone,
               "Message" : message
            }
        })
        .success(function(response) {
            if(response.result == 'success') {
                // show success message
                $('#success').html("<div class='alert alert-success'>");
                $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                $('#success > .alert-success').append("<strong>Your message has been sent. </strong>");
                $('#success > .alert-success').append("</div>");

                //clear all fields
                contactForm.trigger("reset");
            }
            else
                // show error message
                $('#success').html("<div class='alert alert-danger'>");
                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                $('#success > .alert-danger').append("<strong>Sorry " + name + ", the contact server is not responding. Please try again later! </strong>");
                $('#success > .alert-danger').append("</div>");

                //clear all fields
                contactForm.trigger("reset");
        })
        .fail(function(response) {
            alert("error: " + response);
        });
    }
    else {
        // show error message
        $('#success').html("<div class='alert alert-danger'>");
        $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
        $('#success > .alert-danger').append("<strong>Please enter the required fields. </strong>");
        $('#success > .alert-danger').append("</div>");
    }
    
    return false;
});

$('.form-group').find('input,textarea').on('focus', function(){
    $(this).closest('.form-group').removeClass('has-error');
});