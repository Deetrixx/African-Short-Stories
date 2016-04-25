$(document).ready(function () {
    $('#name').focus();

    var progressTriangle = $('#progress-triangle');

    $('#name').focus(function () {
        progressTriangle.animate({
            top: "48px"
        });
    });
    $('#email').focus(function () {
        progressTriangle.animate({
            top: "118px"
        });
    });
    $('#password').focus(function () {
        progressTriangle.animate({
            top: "190px"
        });
    });
    $('#select').focus(function () {
        progressTriangle.animate({
            top: "262px"
        });
    });
});
