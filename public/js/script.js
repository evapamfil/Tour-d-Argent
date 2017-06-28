$( document ).ready(function() {

    $('#chef').hover(function() {
        $('#chef ul').fadeIn('low');
        $('#chef a img').addClass('rotate');
    }, function () {
        $('#chef ul').fadeOut('low');
        $('#chef a img').removeClass('rotate');
    }); 

    $('#reservation').hover(function() {
        $('#reservation ul').fadeIn('low');
        $('#reservation a img').addClass('rotate');
    }, function () {
        $('#reservation ul').fadeOut('low');
        $('#reservation a img').removeClass('rotate');
    }); 


    $('#comptoir').hover(function() {
        $('#comptoir ul').fadeIn('low');
        $('#comptoir a img').addClass('rotate');
    }, function () {
        $('#comptoir ul').fadeOut('low');
        $('#comptoir a img').removeClass('rotate');
    }); 


    $('#language').hover(function() {
        $('#language ul').fadeIn('low');
        $('#language a img').addClass('rotate');
    }, function () {
        $('#language ul').fadeOut('low');
        $('#language a img').removeClass('rotate');
    });    





    $(function(){
        $(window).scroll(function () {//Au scroll dans la fenetre on déclenche la fonction
            if ($(this).scrollTop() > 50) { //si on a défilé de plus de 160px du haut vers le bas
                $('header').addClass("fixe"); //on ajoute la classe "fixe" au header
                $('nav').addClass("fixe1");
            } else {
                $('header').removeClass("fixe");//sinon on retire la classe "fixe" (c'est pour laisser le header à son endroit de départ lors de la remontée
                $('nav').removeClass("fixe1");
            }
        });
    });
    
        $(function(){
        $(window).scroll(function () {//Au scroll dans la fenetre on déclenche la fonction
            if ($(this).scrollTop() > 50) { //si on a défilé de plus de 160px du haut vers le bas
                $('#menu-fixed').addClass("menu-fixe"); //on ajoute la classe "fixe" au header
               
            } else {
                $('#menu-fixed').removeClass("menu-fixe");//sinon on retire la classe "fixe" (c'est pour laisser le header à son endroit de départ lors de la remontée
                
            }
        });
            
    
        


});
    
    $('.btn-navigation').click(function(){
        $('.navigation').toggleClass('isOpen');
    });


});
