//   ———   Run Function on Scroll    ———


// Make the home page fade when scroll
$(document).ready(function () {

  // Determines what color the page will change to (Based on the page)
  var bgColor = "white";
  switch (window.location.pathname) {
    case '/say-yes.html':
      bgColor = "#5ab3dd";
      break;
    case '/og-crewniverse.html':
      bgColor = "#1a1823";
      break;
    case '/home-book.html':
      bgColor = "#8ea2c7";
      break;
  }

  // Whenever the page is scrolled, this function is triggered
  $(window).scroll(function () {
    $(".cover").css("opacity", 1 - $(window).scrollTop() / ($('.cover').height() * 2.5));
    $(".description").css("opacity", 1 - $(window).scrollTop() / ($('.description').height()));
    $(".cover").css("scale", 1 - $(window).scrollTop() / 100);
    $(".cover").css("max-height", 430 - $(window).scrollTop());



    // Shrinks Navbar if page is lower than 100 pixels
    if ($(this).scrollTop() > 100) {
      document.getElementsByClassName('navBar')[0].style.paddingTop = "20px";
    } else if ($(this).scrollTop() < 100) {
      document.getElementsByClassName('navBar')[0].style.paddingTop = "40px";
    }


    // When on the work pages, this changes the background color and hides the navbar 
    if (window.location.pathname != '/index.html' && window.location.pathname != '/about.html') {

      if ($(this).scrollTop() > 300 && $(this).scrollTop() < 2400) {
        document.body.style.background = bgColor;
        document.getElementsByClassName('scroll-line')[0].style.background = "white";
        document.getElementsByClassName('navBar')[0].style.top = "-100px";
      } else if ($(this).scrollTop() < 300 || $(this).scrollTop() > 2400) {
        document.body.style.background = "white";
        document.getElementsByClassName('scroll-line')[0].style.background = "#1aa6bc";
        document.getElementsByClassName('navBar')[0].style.top = "0px";
      }
    }
  });
});



//   ———   Click Arrow to Move Page    ———


$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

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
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



//   ———   Scroll animation   ———

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');











//   ———   Scroll Bar   ———


//capture scroll any percentage
$(window).scroll(function () {
  var wintop = $(window).scrollTop(),
    docheight =

    $(document).height(),
    winheight = $(window).height();
  var scrolled = (wintop / (docheight - winheight)) * 100;

  $('.scroll-line').css('width', (scrolled + '%'));
});






//  ———  Scroll to Top  ——— 


(function ($) {
  'use strict';

  // Elevator - Scroll back to top utility JS
  // ========================================

  // append necessary class
  // should have already contain wrapper on a page.
  // <div class="elevator-wrapper"></div>
  $('.elevator-wrapper').append('<div class="elevator"><i class="fa fa-chevron-up" aria-hidden="true"></i></div>');

  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    // duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    // grab the "back to top" link
    $back_to_top = $('.elevator');

  // hide or show the "back to top" link
  $(window).scroll(function () {
    ($(this).scrollTop() > offset) ? $back_to_top.addClass('elevator-is-visible'): $back_to_top.removeClass('elevator-is-visible');
  });

  // smooth scroll to top
  $back_to_top.on('click', function (event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, scroll_top_duration);
  });

})(jQuery);





//  ———  Change Backgroun on Hover  ———

function bgChange(workPiece) {
  var bg = "white";
  switch (workPiece) {
    case 0:
      bg = "white";
      break;
    case "wavyTech":
      bg = "#e6e6e6";
      break;
    case "ogCrewniverse":
      bg = "#eae6fb";
      break;
    case "sayYes":
      bg = "#d2f2ff";
      break;
    case "homeBook":
      bg = "#e1ecff"
      break;
    default:
      bg = "white";
      break;


  }


  //document.getElementsByClassName('showWork')[1].style.opacity = "0";

  //Set the background color and navbar color to value passed through function
  document.body.style.background = bg;
  if (bg == "white") {
    document.getElementsByClassName('navBar')[0].style.top = "0px";
  } else {
    document.getElementsByClassName('navBar')[0].style.top = "-100px";
  }




}





//   ———   Remove Crown on Load   ———
var triggerShowPage;

function checkIfLoad() {
  triggerShowPage = setTimeout(showPage, 3000);

}

function showPage() {
  document.getElementById("loader").style.display = "none";
  //document.body.style.display = "block";
  document.getElementById("pageContent").style.display = "block";
  $('html, body').scrollTop(0);

  AOS.init({
    duration: 1200,
  })
}







//   ———   Background Gradient Animate   ———




var colors = new Array(
  [62, 35, 255],
  [60, 255, 60],
  [255, 35, 98],
  [45, 175, 230],
  [255, 0, 255],
  [255, 128, 0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0, 1, 2, 3];

//transition speed
var gradientSpeed = 0.004;

function updateGradient() {

  if ($ === undefined) return;

  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];

  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

  $('#gradient').css({
    background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
  }).css({
    background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
  });

  step += gradientSpeed;
  if (step >= 1) {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

  }
}

setInterval(updateGradient, 10);

Resources





//   ———   Times Redirect Page ———



function pageRedirect(pageURL) {
  var delay = 1000; // time in milliseconds

  // Display message
  document.getElementById("message").innerHTML = "Please wait, you are redirecting to the new page.";

  setTimeout(function () {
    window.location = pageURL;
  }, delay);

}