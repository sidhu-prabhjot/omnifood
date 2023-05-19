/*this is a javascript file that is used to work with JQuery*/

/*this is generic boilerplate for the JQuery file that states that the code can only be executed when the file has been loaded*/
$(document).ready(function() {
    
    /*the waypoint will allow us to determine a direction, and point that will cause something to be triggered there. In this case the sticky navigation will get triggered when the features section is reached*/
    $('.js--section-features').waypoint(function(direction) {
        if (direction === "down") {
            /*if the user scrolls down, then the sticky class will be added*/
            $('nav').addClass('sticky');
        } else {
            /*if the user scrolls any way other than down, then the sticky class will be removed*/
            $('nav').removeClass('sticky');
        }
    }, {
        /*offset makes the function occur at an offset length. So in this case, the sticky navigation will appear 60px before the previously set waypoint(.js--section-features)*/
        offset: '60px;'
    });
    
     /*smooth navigation scroll*****************************************************************/
    
    /*scroll on button click*/
    $('.js--scroll-to-plans').click(function() {
        /*when adding the scroll functionality, put html and body in the first brackets, and the class that you want to scroll to in the second brackets*/
        /*the 1000 represents the speed of the animated scroll in milliseconds*/
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1500) 
    });
    
    /*scroll on button click*/
    $('.js--scroll-to-start').click(function() {
        /*when adding the scroll functionality, put html and body in the first brackets, and the class that you want to scroll to in the second brackets*/
        /*the 1000 represents the speed of the animated scroll in milliseconds*/
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1500) 
    });
     /******************************************************************************************/
    
    
    /*smooth navigation scroll***************************ALTERNATIVE****************************/
    
    // Add smooth scrolling to all links
      $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    /*******************************************************************************************/
    
    /*Animations on scroll**********************************************************************/

        /*when adding an animation add the class of the element that is to be animated. Then in the the second bracket type animate_animated plus the animate_animation style. (The animation styles can be found on the website animate.css)*/
        /*to make the animation work, the element has to be hidden beforehand so it can fade it*/
         $('.js--wp-1').waypoint(
            (direction) => {
              $('.js--wp-1').addClass('animate__animated animate__fadeIn');
            },
            {
              offset: '50%',
            }
          );
    
        $('.js--wp-2').waypoint(
            (direction) => {
              $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
            },
            {
              offset: '50%',
            }
          );
    
        $('.js--wp-3').waypoint(
            (direction) => {
              $('.js--wp-3').addClass('animate__animated animate__fadeIn');
            },
            {
              offset: '50%',
            }
          );
    
        $('.js--wp-4').waypoint(
            (direction) => {
              $('.js--wp-4').addClass('animate__animated animate__pulse');
            },
            {
              offset: '50%',
            }
          );
    /*******************************************************************************************/
    
     /*MOBILE NAVIGATION************************************************************************/
    
    $('.js--nav-icon, .js--main-nav a, .logo-black').click(function(element) {
      var nav = $('.js--main-nav');
      var icon = $('.js--nav-icon i');

      //Gets the class name of the element that triggered the event
      var clicked = element.target.className;

      //Exists the function if the menu is closed AND the logo-black element (logo image) was clicked
      if (icon.hasClass('ion-navicon-round') && clicked == 'logo-black')
        return;

      //Opens and closes the menu
      if ($(window).width() < 768) {
        nav.slideToggle(200);
      }

      //Changes icon states of the menu button
      if (icon.hasClass('ion-navicon-round')) {
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
      } else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
      }
    });


    $(window).resize(function() {
      var nav = $('.js--main-nav');
      var icon = $('.js--nav-icon i');

      if ($(window).width() > 767) {
        nav.css("display", "block");
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
      } else {
        nav.css("display", "none");
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
      }

    });
    /*******************************************************************************************/
});






/*this line is for selecting the element that you want to work on*/
    /*by using the click method, we are stating that when the element is clicked, the following should happen*/
   /*$('h1').click(function() {*/
       /*the code containing what you want to happen is placed here, and the "this" keyword states that you want to affect the element stated before (in this case it is the h1 element)*/
       /*by using the .css(), you can now change the css properties of the element by placing them inside the brackets*/
       /*$(this).css('background-color', "#ff0000");*/
   /*})*/