$(document).ready(function() {
    let isValid = true;
    $('.error').hide();

    $('form').submit(function(e) {
        e.preventDefault();
    });

    const regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    let mailingValidation = function () {
        if ($('#email').val() == '' || regex.test($('#email').val()) == false ) {
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