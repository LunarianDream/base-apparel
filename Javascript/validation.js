$(document).ready(function() {
    let isValid = true;
    $('.error').hide();

    $('form').submit(function(e) {
        e.preventDefault();
    });

    let mailingValidation = function () {
        if ($('#email').val() == '') {
            $('#email').css('border-color', 'var(--softRed)');
            $('.error').show();
            $('.error').text(`Please provide a valid email`);
            isValid = false;
        } else {
            isValid = true;
            $('#email').css('border-color', 'gainsboro');
            $('.error').hide();

        }

        console.log(isValid);
    };

    $('.form_submit').click(mailingValidation);
});