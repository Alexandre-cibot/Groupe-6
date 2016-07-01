/**
 * Created by Ttan-mba on 23/06/2016.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
/*$(function() {
 $('a.page-scroll').bind('click', function(event) {
 var $anchor = $(this);
 $('html, body').stop().animate({
 scrollLeft: $($anchor.attr('href')).offset().left
 }, 1500, 'easeInOutExpo');
 event.preventDefault();
 });
 });*/

function changeBackground(){
    //Changement de fond de la nav
    $('nav').css('transition', 'background 1.5s linear');
    switch($('.on').parent().attr('id')) {

        case "link1":
            $('nav').css('background-color',"#4FCAFB");
            break;

        case "link2":
            $('nav').css('background-color',"#468DEA");
            break;

        case "link3":
            $('nav').css('background-color', '#2B3FA5');
            break;
        case "link4":
            $('nav').css('background-color',"#141A42");
            break;
        default:
            console.log('fail');

    }
}


function moveNavigation() {
    $('.page-scroll').find('img').show();
    $('.line').show();
    $('.on').remove();
    $(this).find('img').hide();
    $(this).parent('li').find('.line').hide();
    $(this).append('<img class="on ship" src="img/Spaceship.png">');
    //On apelle la fonction qui change le Background
    changeBackground();
}

$(document).ready(function () {
    //nav
    $('.link1').click(function(){
        $('.chiffre-position').html("1");
    });
    $('.link2').click(function(){
        $('.chiffre-position').html("2");
    });
    $('.link3').click(function(){
        $('.chiffre-position').html("3");
    });
    $('.link4').click(function(){
        $('.chiffre-position').html("4");
    });
    $('.link5').click(function(){
        $('.chiffre-position').html("5");
    });
    $('.scrollTo').click(function () { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 1000; // Durée de l'animation (en ms) (750 à la base)
        $('html, body').animate({scrollLeft: $(page).offset().left}, speed); // Go
        return false;
    });
    $('.link1').find('img').hide();
    $('.link1').append('<img class="on ship" src="img/Spaceship.png">');
    $('.link1').parent('li').find('.line').hide();
    $('.page-scroll').click(moveNavigation);
    document.onkeydown = function(e)
    {
        if(e.keyCode == 39 ) {//right
            switch ($('.fp-slides .active').attr('id')) {
                case "section0":
                    $('.page-scroll').find('img').show();
                    $('.line').show();
                    $('.on').remove();
                    $('.link1').find('img').hide();
                    $('.link1').parent('li').find('.line').hide();
                    $('.link1').append('<img class="on ship" src="img/Spaceship.png">');
                    $('.chiffre-position').html("1");
                    break;
                case "section2":
                    $('.page-scroll').find('img').show();
                    $('.line').show();
                    $('.on').remove();
                    $('.link2').find('img').hide();
                    $('.link2').parent('li').find('.line').hide();
                    $('.link2').append('<img class="on ship" src="img/Spaceship.png">');
                    $('.chiffre-position').html("2");
                    break;
                case "section3":
                    $('.page-scroll').find('img').show();
                    $('.line').show();
                    $('.on').remove();
                    $('.link2').find('img').hide();
                    $('.link2').parent('li').find('.line').hide();
                    $('.link2').append('<img class="on ship" src="img/Spaceship.png">');
                    $('.chiffre-position').html("2");
                    break;
                case "section4":
                    $('.page-scroll').find('img').show();
                    $('.line').show();
                    $('.on').remove();
                    $('.link3').find('img').hide();
                    $('.link3').parent('li').find('.line').hide();
                    $('.link3').append('<img class="on ship" src="img/Spaceship.png">');
                    $('.chiffre-position').html("3");
                    break;
                case "section5":
                    $('.page-scroll').find('img').show();
                    $('.line').show();
                    $('.on').remove();
                    $('.link3').find('img').hide();
                    $('.link3').parent('li').find('.line').hide();
                    $('.link3').append('<img class="on ship" src="img/Spaceship.png">');
                    $('.chiffre-position').html("3");
                    break;
                case "section6":
                    $('.page-scroll').find('img').show();
                    $('.line').show();
                    $('.on').remove();
                    $('.link4').find('img').hide();
                    $('.link4').parent('li').find('.line').hide();
                    $('.link4').append('<img class="on ship" src="img/Spaceship.png">');
                    $('.chiffre-position').html("4");
                    break;
                case "section7":
                    $('.page-scroll').find('img').show();
                    $('.line').show();
                    $('.on').remove();
                    $('.link4').find('img').hide();
                    $('.link4').parent('li').find('.line').hide();
                    $('.link4').append('<img class="on ship" src="img/Spaceship.png">');
                    $('.chiffre-position').html("4");
                    break;
                case "section8":
                    $('.page-scroll').find('img').show();
                    $('.line').show();
                    $('.on').remove();
                    $('.link5').find('img').hide();
                    $('.link5').parent('li').find('.line').hide();
                    $('.link5').append('<img class="on ship" src="img/Spaceship.png">');
                    $('.chiffre-position').html("5");
            }
        }
        else if(e.keyCode == 37){
            switch ($('.fp-slides .active').attr('id')) {
                case "section0":
                    $('.page-scroll').find('img').show();
                    $('.line').show();
                    $('.on').remove();;
                    $('.link1').find('img').hide();
                    $('.link1').parent('li').find('.line').hide();
                    $('.link1').append('<img class="on ship" src="img/Spaceship.png">');
                    $('.chiffre-position').html("1");
                    break;
                case "section2":
                    $('.page-scroll').find('img').show();
                    $('.line').show();
                    $('.on').remove();
                    $('.link1').find('img').hide();
                    $('.link1').parent('li').find('.line').hide();
                    $('.link1').append('<img class="on ship" src="img/Spaceship.png">');
                    $('.chiffre-position').html("1");
                    break;
                case "section3":
                    $('.page-scroll').find('img').show();
                    $('.line').show();
                    $('.on').remove();
                    $('.link2').find('img').hide();
                    $('.link2').parent('li').find('.line').hide();
                    $('.link2').append('<img class="on ship" src="img/Spaceship.png">');
                    $('.chiffre-position').html("2");
                    break;
                case "section4":
                    $('.page-scroll').find('img').show();
                    $('.line').show();
                    $('.on').remove();
                    $('.link2').find('img').hide();
                    $('.link2').parent('li').find('.line').hide();
                    $('.link2').append('<img class="on ship" src="img/Spaceship.png">');
                    $('.chiffre-position').html("2");
                    break;
                case "section5":
                    $('.page-scroll').find('img').show();
                    $('.line').show();
                    $('.on').remove();
                    $('.link3').find('img').hide();
                    $('.link3').parent('li').find('.line').hide();
                    $('.link3').append('<img class="on ship" src="img/Spaceship.png">');
                    $('.chiffre-position').html("3");
                    break;
                case "section6":
                    $('.page-scroll').find('img').show();
                    $('.line').show();
                    $('.on').remove();
                    $('.link3').find('img').hide();
                    $('.link3').parent('li').find('.line').hide();
                    $('.link3').append('<img class="on ship" src="img/Spaceship.png">');
                    $('.chiffre-position').html("3");
                    break;
                case "section7":
                    $('.page-scroll').find('img').show();
                    $('.line').show();
                    $('.on').remove();
                    $('.link4').find('img').hide();
                    $('.link4').parent('li').find('.line').hide();
                    $('.link4').append('<img class="on ship" src="img/Spaceship.png">');
                    $('.chiffre-position').html("4");
                    break;
                case "section8":
                    $('.page-scroll').find('img').show();
                    $('.line').show();
                    $('.on').remove();
                    $('.link4').find('img').hide();
                    $('.link4').parent('li').find('.line').hide();
                    $('.link4').append('<img class="on ship" src="img/Spaceship.png">');
                    $('.chiffre-position').html("4");
            }
        }

        //On apelle la fonction qui change le fond
        changeBackground();
    };


    var soundPinkPlanete = new Audio("sounds-space/pinkPlanete.mp3");
        soundRocket = new Audio('sounds-space/rocket.mp3');
        soundShip = new Audio('sounds-space/ship.mp3');
        soundComete = new Audio('sounds-space/comete.mp3');
        soundYellowPlanete = new Audio('sounds-space/yellowPlanete.mp3');
        $('.pink').on({
            mouseenter: function () {
                soundPinkPlanete.play();
            },
            mouseleave: function () {
                soundPinkPlanete.pause();
            }
        });
        $('.navette').on({
            mouseenter : function(){
                soundRocket.play();
            },
            mouseleave: function(){
                soundRocket.pause();
            }
        });
        $('.space-cat').on({
            mouseenter: function(){
                soundShip.play();
            },
            mouseleave: function(){
                soundShip.pause()
            }
        });
        $('.meteor').on({
            mouseenter: function(){
                soundComete.play();
            },
            mouseleave: function(){
                soundComete.pause();
            }
        });

        $('.yellow').on({
            mouseenter: function(){
                soundYellowPlanete.play();
            },
            mouseleave: function(){
                soundYellowPlanete.pause();
            }
        });


});// Fin du document.ready



