// Hamburger Button
$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
});


//  Image Lazy loading
document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;
  
    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    } else {
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");
  
      function lazyload () {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }
  
        lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) {
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }
  
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  })
  
  
// Background image lazy load
  document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;
  
    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    } else {
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");
  
      function lazyload () {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }
  
        lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) {
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }
  
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  })


// Lightgallery
lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
});


// Filterable gallery 
$('#portfolio-filter span').click(function(){
    
  // Remove class 'active' from any <span> that is currently active 
  $('#portfolio-filter .active').removeClass('active');
    
  // give this <span> that was clicked on a class of 'active' 
  $(this).addClass('active');

  // get the name of the category from this <span>, remove up to two spaces from the text and replace them with dashes, and make it lowercase 
  var filterVal = $(this).text().replace(' ','-').replace(' ','-').toLowerCase();
  
  //console log
  console.log ('filterVal has been set ' + filterVal);

  // This is something new, it's an 'each' function which basically iterates through each element that matches the selector and applies the function one by one.
  $('#filterable-gallery .gallery-item').each(function() {
    
    // If the filter value that they have clicked on is 'all' then remove the class of hidden from each gallery-item. 
    if (filterVal == 'all') {
      $(this).removeClass('hidden');
      //console log
      console.log ('removed class of hidden because set to view all');
    }
    
    // If it's not all, then 
    else {
      if($(this).hasClass(filterVal)) {
        $(this).removeClass('hidden'); // show those that have the filter class
        //console log
        console.log ('shows element with the filter');
      }
      else {
        $(this).addClass('hidden'); // hide those that do not have the filter
      }
    }
  });
});



// Slick Carousel
$('.slider-container').slick({
	autoplay: true, // Do we want it to autoplay? true or false
	autoplaySpeed: 3000, // How long between each slide when auto-playing
	speed: 1000, // How fast is the transition in milliseconds
	arrows: true, // Do you want to show arrows to trigger each slide
	accessibility: true, // Enables keyboard tabbing and arrow key navigation
	dots: true, // Enables the dots below to show how many slides
	fade: false, // Changes the animate from slide to fade if true
	infinite: true, // When true, means that it will scroll in a circle
	pauseOnHover: false, // When true means the autoplay pauses when hovering
	pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
  slidesToShow: 1,
  slidesToScroll: 1,
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

