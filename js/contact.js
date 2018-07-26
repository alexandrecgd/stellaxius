$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                fname: {
                    required: true,
                    minlength: 2
                },
                lname: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                phone: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                cvfile: {
                    required: true
                },
                message: {
                    required: false,
                    minlength: 20
                }
            },
            messages: {
                fname: {
                    required: "Come on, you have a first name, don't you?",
                    minlength: "Your name must consist of at least 2 characters"
                },
                lname: {
                    required: "Come on, you have a last name, don't you?",
                    minlength: "Your last name must consist of at least 2 characters"
                },
                subject: {
                    required: "Come on, you have a subject, don't you?",
                    minlength: "Your subject must consist of at least 4 characters"
                },
                phone: {
                    required: "You have a number?",
                    minlength: "Your Phone Number must consist of at least 5 characters"
                },
                email: {
                    required: "No email, no message"
                },
                cvfile: {
                    required: "No CV, no job"
                },
                message: {
                    required: "Um...yea, you have to write something to send this form.",
                    minlength: "Thats all? Really?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})