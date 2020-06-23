$(document).ready(function(){
    $('#open').on('click', function(){
        $('#popup').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        return false;
    });
 
    $('#close').on('click', function(){
        $('#popup').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });

    $('#open2').on('click', function(){
        $('#popup2').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        return false;
    });
 
    $('#close2').on('click', function(){
        $('#popup2').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });

    $('#open3').on('click', function(){
        $('#popup3').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        return false;
    });
 
    $('#close3').on('click', function(){
        $('#popup3').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });
});