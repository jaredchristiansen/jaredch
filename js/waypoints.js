//   ———   Run Function on Scroll    ———


// Make the home page fade when scroll
$(document).ready(function () {

  // Whenever the page is scrolled, this function is triggered
  $(window).scroll(function () {
    $(".cover").css("opacity", 1 - $(window).scrollTop() / ($('.cover').height() * 2.5));
    $(".description").css("opacity", 1 - $(window).scrollTop() / ($('.description').height()));
    $(".cover").css("scale", 1 - $(window).scrollTop() / 100);
    $(".cover").css("max-height", 430 - $(window).scrollTop());

    // Shrinks nav-bar if page is lower than 100 pixels
    if ($(this).scrollTop() > 100) {
      document.getElementsByClassName('nav-bar')[0].style.paddingTop = "20px";
    } else if ($(this).scrollTop() < 100) {
      document.getElementsByClassName('nav-bar')[0].style.paddingTop = "40px";
    }

  });
});



//   ———   Waypoints   ——— 

// Determines what color the page will change to (Based on the page)
var bgColor = getComputedStyle(document.body).getPropertyValue('--bg').trim();
var scrollLineColor = getComputedStyle(document.body).getPropertyValue('--scroll-line').trim();

// Triggers when color-start is scrolled past
var waypointStart = new Waypoint({
  element: document.getElementById('color-start'),
  handler: function (direction) {
    if (direction == "down") {
      document.body.style.background = bgColor;
      document.getElementsByClassName('scroll-line')[0].style.background = scrollLineColor;
      document.getElementsByClassName('nav-bar')[0].style.top = "-100px";
    } else if (direction == "up") {
      document.body.style.background = "white";
      document.getElementsByClassName('scroll-line')[0].style.background = "";
      document.getElementsByClassName('nav-bar')[0].style.top = "0px";
    }
  }
});


// Triggers when color-end is scrolled past
var waypointEnd = new Waypoint({
  element: document.getElementById('color-end'),
  handler: function (direction) {
    if (direction == "up") {
      document.body.style.background = bgColor;
      document.getElementsByClassName('scroll-line')[0].style.background = scrollLineColor;
      document.getElementsByClassName('nav-bar')[0].style.top = "-100px";
      document.querySelector('.ptoc')?.classList.remove('page-end');
    } else if (direction == "down") {
      document.body.style.background = "white";
      document.getElementsByClassName('scroll-line')[0].style.background = "";
      document.getElementsByClassName('nav-bar')[0].style.top = "0px";
      document.querySelector('.ptoc')?.classList.add('page-end');
    }
  },
  offset: '90%'
});