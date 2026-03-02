//   ———   Run Function on Scroll    ———

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  window.location.hash = hash;

}

// Make the home page fade when scroll
$(document).ready(function () {

  // Remove the # on page load
  window.location.replace("#");
  if (typeof window.history.replaceState == 'function') {
    history.replaceState({}, '', window.location.href.slice(0, -1));
  }

  // Whenever the page is scrolled, this function is triggered
  $(window).scroll(function () {
    $(".cover").css("opacity", 1 - $(window).scrollTop() / ($('.cover').height() * 1.2));
    if (window.location.pathname != '/about') {
      $(".description").css("opacity", 1 - $(window).scrollTop() / ($('.description').height()));
    }
    $(".cover").css("scale", 1 - $(window).scrollTop() / 100);
    //$(".cover").css("max-height", 430 - $(window).scrollTop());

    // Shrinks nav-bar if page is lower than 100 pixels
    if ($(this).scrollTop() > 100) {
      document.getElementsByClassName('nav-bar')[0].style.paddingTop = "20px";
    } else if ($(this).scrollTop() < 100) {
      document.getElementsByClassName('nav-bar')[0].style.paddingTop = "40px";
    }

    if (window.location.pathname != '/index.html' && window.location.pathname != '/about.html') {
      if ($(this).scrollTop() < 100) {
        document.body.style.background = "white";
        document.getElementsByClassName('scroll-line')[0].style.background = "#1aa6bc";
        document.getElementsByClassName('nav-bar')[0].style.top = "0px";
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
    ($(this).scrollTop() > offset) ? $back_to_top.addClass('elevator-is-visible') : $back_to_top.removeClass('elevator-is-visible');
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
  var num;
  switch (workPiece) {
    case 0:
      bg = "white";
      break;
    case "ollieboard":
      bg = "#444";
      num = 0;
      break;
    case "hourwork":
      bg = "#C7E5FB";
      num = 1;
      break;
    case "inspecticare":
      bg = "#DACCD5";
      num = 2;
      break;
    case "stoneShowcase":
      bg = "#AFBFE0";
      num = 3;
      break;
    default:
      bg = "white";
      break;
  }




  // Set the background color and nav-bar color to value passed through function
  document.body.style.background = bg;
  if (bg == "white") {
    document.getElementsByClassName('nav-bar')[0].style.top = "0px";

    // For loop to shrink all other thumbnails
    var c = document.getElementsByClassName('showWork');
    var i;
    for (i = 0; i < c.length; i++) {
      c[i].style.transform = "none";
    }
  } else {
    document.getElementsByClassName('nav-bar')[0].style.top = "-100px";
    if ($('body').is('.homePage')) {

      var c = document.getElementsByClassName('showWork');
      var i;
      for (i = 0; i < c.length; i++) {
        if (i != num) {
          c[i].style.transform = "scale(0.8)";
        }
      }
    }
  }
}









//   ———   Times Redirect Page ———

function pageRedirect(pageURL) {
  var delay = 600; // time in milliseconds

  // Display message
  document.getElementsByClassName('colorTransition')[0].style.display = "block";

  var i;
  for (i = 0; i < 101; i++) {
    $(".colorTransition").css("height", i + "vh");
  };
  setTimeout(function () {
    window.location = pageURL;
  }, delay);

}

function pageRedirectEnd() {
  var delay = 600;
  var delay2 = 0;
  if ($('body').is('.homePage')) {
    delay = 1900;
    delay2 = 600;
    document.getElementsByClassName('colorTransitionEnd')[0].style.transitionDuration = "1.2s";
  }

  var i;
  setTimeout(function () {
    for (i = 100; i > 0; i--) {
      $(".colorTransitionEnd").css("height", i + "vh");
    };
  }, delay2);

  setTimeout(function () {
    document.getElementsByClassName('colorTransitionEnd')[0].style.display = "none";
    document.getElementById("loader").style.display = "none";
  }, delay);

  AOS.init({
    duration: 1200,
  })

}


//  ———  Replaces 'Includes' to inject reusable HTML on pages  ———

async function loadIncludes() {
  const nodes = document.querySelectorAll("[data-include]");

  await Promise.all([...nodes].map(async (el) => {
    const url = el.getAttribute("data-include");
    try {
      const res = await fetch(url, { cache: "no-cache" });
      if (!res.ok) throw new Error(`Failed to load ${url} (${res.status})`);
      el.innerHTML = await res.text();
    } catch (err) {
      console.error(err);
      // Optional: show nothing or a fallback
      el.innerHTML = "";
    }
  }));
}

// Run after DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadIncludes);
} else {
  loadIncludes();
}



//  ———  When the page loads, stop the blue animation  ———
window.addEventListener("load", () => {
  if (typeof pageRedirectEnd === "function") pageRedirectEnd();
});




// ── UNIVERSAL CHAPTER TRACKER ──
// Call initToc() once per page after DOM is ready

function initToc() {
  const toc = document.querySelector('.ptoc');

  // hide toc initially, show if
  window.addEventListener('scroll', () => {
    if (!toc) return;
    toc.classList.toggle('visible', window.scrollY > 660);
  });

  const links = document.querySelectorAll('.ptoc-link');
  const sectionIds = Array.from(links).map(l => l.dataset.target);
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  if (!sections.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(l => l.classList.toggle('active', l.dataset.target === id));
      }
    });
  }, { rootMargin: '-20% 0px -60% 0px', threshold: 0 });

  sections.forEach(s => obs.observe(s));

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById(link.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

document.addEventListener('DOMContentLoaded', initToc);