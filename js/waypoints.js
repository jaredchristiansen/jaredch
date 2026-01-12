//   ———   Run Function on Scroll    ———


// Make the home page fade when scroll
$(document).ready(function () {

  // Whenever the page is scrolled, this function is triggered
  $(window).scroll(function () {
    $(".cover").css("opacity", 1 - $(window).scrollTop() / ($('.cover').height() * 2.5));
    $(".description").css("opacity", 1 - $(window).scrollTop() / ($('.description').height()));
    $(".cover").css("scale", 1 - $(window).scrollTop() / 100);
    $(".cover").css("max-height", 430 - $(window).scrollTop());

    Waypoint.refreshAll()

    // Shrinks Navbar if page is lower than 100 pixels
    if ($(this).scrollTop() > 100) {
      document.getElementsByClassName('navBar')[0].style.paddingTop = "20px";
    } else if ($(this).scrollTop() < 100) {
      document.getElementsByClassName('navBar')[0].style.paddingTop = "40px";
    }

  });
});



//   ———   Waypoints   ——— 

// Determines what color the page will change to (Based on the page)
var bgColor = "white";
var body = $('body');

if (body.hasClass('mosquitoHawks')) {
  bgColor = "#E6E6E6";
} else if (body.hasClass('sayYes')) {
  bgColor = "#5ab3dd";
} else if (body.hasClass('simplyMusic')) {
  bgColor = "#ee7269";
} else if (body.hasClass('ogCrewniverse')) {
  bgColor = "#1a1823";
} else if (body.hasClass('homeBook')) {
  bgColor = "#8fa3c4";
} else if (body.hasClass('packageDesign')) {
  bgColor = "#a089a5";
} else if (body.hasClass('stoneShowcase')) {
  bgColor = "#596174";
} else if (body.hasClass('logos')) {
  bgColor = "#131419";
} else if (body.hasClass('hourwork')) {
  bgColor = "#B2C3EA";
} else if (body.hasClass('syrg')) {
  bgColor = "#333C47";
} else if (body.hasClass('inspecticare')) {
  bgColor = "#6D4C65";
}



var waypoint = new Waypoint({
  element: document.getElementById('color-start'),
  handler: function (direction) {


    if (direction == "down") {
      document.body.style.background = bgColor;
      document.getElementsByClassName('scroll-line')[0].style.background = "white";
      document.getElementsByClassName('navBar')[0].style.top = "-100px";
    } else if (direction == "up") {
      document.body.style.background = "white";
      document.getElementsByClassName('scroll-line')[0].style.background = "#1aa6bc";
      document.getElementsByClassName('navBar')[0].style.top = "0px";
    }
  }
});



var waypoint = new Waypoint({
  element: document.getElementById('color-end'),
  handler: function (direction) {



    if (direction == "up") {
      document.body.style.background = bgColor;
      document.getElementsByClassName('scroll-line')[0].style.background = "white";
      document.getElementsByClassName('navBar')[0].style.top = "-100px";
      setTimeout(function () {
        document.body.style.background = bgColor;
        document.getElementsByClassName('scroll-line')[0].style.background = "white";
        document.getElementsByClassName('navBar')[0].style.top = "-100px";
      }, 200);
    } else if (direction == "down") {
      document.body.style.background = "white";
      document.getElementsByClassName('scroll-line')[0].style.background = "#1aa6bc";
      document.getElementsByClassName('navBar')[0].style.top = "0px";
    }
  },
  offset: '90%'
});

var waypoint = new Waypoint({
  element: document.getElementById('color-end-2'),
  handler: function (direction) {



    if (direction == "up") {
      document.body.style.background = bgColor;
      document.getElementsByClassName('scroll-line')[0].style.background = "white";
      document.getElementsByClassName('navBar')[0].style.top = "-100px";
    }
  },
});