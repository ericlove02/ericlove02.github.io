$(function() {
    var isMobile;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      isMobile = true;
  
      // Mobile height fix
      $('.height-fix').each(function() {
        var h = $(this).height();
        $(this).height(h);
      });
    }
  
    // RESIZE RESETS
    $(window).resize(function() {
      posFilterBar($('.filter').first());
    });
  
    // Sticky Nav on Mobile
    if (isMobile) {
      $('nav').addClass('fixed');
    } else {
      $('nav').addClass('desk');
    }
  
    // NAV POSITION
    var navPos = $('nav').position().top;
    var lastPos = 0;
    var lockTimer;
  
    $(window).on('scroll', function() {
      var pos = $(window).scrollTop();
      var pos2 = pos + 50;
      var scrollBottom = pos + $(window).height();
  
      if (!isMobile) {
        if (pos >= navPos + $('nav').height() && lastPos < pos) {
          $('nav').addClass('fixed');
        }
        if (pos < navPos && lastPos > pos) {
          $('nav').removeClass('fixed');
        }
        lastPos = pos;
      }
  
      // Link Highlighting
      if (pos2 > $('#home').offset().top) {
        highlightLink('home');
      }
      if (pos2 > $('#about').offset().top) {
        highlightLink('about');
      }
      if (pos2 > $('#portfolio').offset().top) {
        highlightLink('portfolio');
      }
      if (pos2 > $('#blog').offset().top) {
        highlightLink('blog');
      }
      if (
        pos2 > $('#contact').offset().top ||
        pos + $(window).height() === $(document).height()
      ) {
        highlightLink('contact');
      }
  
      // Prevent Hover on Scroll
      clearTimeout(lockTimer);
      if (!$('body').hasClass('disable-hover')) {
        $('body').addClass('disable-hover');
      }
  
      lockTimer = setTimeout(function() {
        $('body').removeClass('disable-hover');
      }, 500);
    });
  
    function highlightLink(anchor) {
      $('nav .active').removeClass('active');
      $('nav')
        .find('[dest="' + anchor + '"]')
        .addClass('active');
    }
  
    // EVENT HANDLERS
    $('.page-link').click(function() {
      var anchor = $(this).attr('dest');
      $('.link-wrap').removeClass('visible');
  
      $('nav span').removeClass('active');
      $('nav')
        .find('[dest="' + anchor + '"]')
        .addClass('active');
  
      $('html, body').animate(
        {
          scrollTop: $('#' + anchor).offset().top
        },
        400
      );
    });
  
    $('.mdi-menu').click(function() {
      $('.link-wrap').toggleClass('visible');
    });
  
    $('.blog-wrap').hover(
      function() {
        $('.blog-wrap')
          .not(this)
          .addClass('fade');
        $(this).addClass('hover');
      },
      function() {
        $(this).removeClass('hover');
        $('.blog-wrap').removeClass('fade');
      }
    );
  
    posFilterBar($('.filter').first());
  
    $('.filter').click(function() {
      posFilterBar(this);
    });
  
    function posFilterBar(elem) {
      var origin = $(elem)
        .parent()
        .offset().left;
      var pos = $(elem).offset().left;
      $('.float-bar').css({
        left: pos - origin,
        width: $(elem).innerWidth()
      });
      $('.float-bar .row').css('left', (pos - origin) * -1);
    }
  
    // GALLERY
    $('#gallery').mixItUp({});
  
    function mixClear() {
      setTimeout(function() {
        $('#gallery').removeClass('waypoint');
      }, 2000);
    }
  
    // SCROLL ANIMATIONS
    function onScrollInit(items, elemTrigger) {
      var offset = $(window).height() / 1.6;
      items.each(function() {
        var elem = $(this),
          animationClass = elem.attr('data-animation'),
          animationDelay = elem.attr('data-delay');
  
        elem.css({
          '-webkit-animation-delay': animationDelay,
          '-moz-animation-delay': animationDelay,
          'animation-delay': animationDelay
        });
  
        var trigger = elemTrigger ? trigger : elem;
  
        trigger.waypoint(
          function() {
            elem.addClass('animated').addClass(animationClass);
            if (elem.get(0).id === 'gallery') mixClear(); //OPTIONAL
          },
          {
            triggerOnce: true,
            offset: offset
          }
        );
      });
    }
  
    setTimeout(function() {
      onScrollInit($('.waypoint'));
    }, 10);

  $('#close').click(function() {
    $('#success').removeClass('expand');
  });
});


//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function openArticle(articleNum){
  var articleWin = window.open("", "_blank"); 
  // let articles = localStorage.getItem('articles').split(',');
  console.log(articles);
  articleWin.document.write(`
  
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
      />
  
      <!-- Primary Meta Tags -->
    <title>Ben Website</title>
    <meta name="title" content="">
    <meta name="description" content="">
  
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="">
    <meta property="og:title" content="">
    <meta property="og:description" content="">
    <meta property="og:image" content="">
  
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="">
    <meta property="twitter:title" content="">
    <meta property="twitter:description" content="">
    <meta property="twitter:image" content="">
  
      <!-- LOCAL -->
      <link rel="stylesheet" href="../css/style.css" />
      <link rel="stylesheet" href="../css/bootstrap.css" />
      <link rel='shortcut icon' href='../images/favicon.ico' type='image/x-icon'/ >
  
      <!-- HOSTED -->
      <script src="./cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
      <script src="./ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
      <script src="./cdnjs.cloudflare.com/ajax/libs/mixitup/2.1.11/jquery.mixitup.min.js"></script>
      <script src="./cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.0/jquery.waypoints.min.js"></script>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
  
      <!-- LOCAL -->
      <script src="scripts/pt.min.js"></script>
      <script src="scripts/index.js"></script>
      <script src="scripts/modal.js"></script>
    </head>
  
    <body>
      <script src="../js/scripts.js"></script>
  
      
      <!-- Navigation-->
      <nav class="navbar navbar-expand-lg navbar-light " id="mainNav">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="../index.html"><img src="../images/archive-logo.png" style="width:180px;"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto py-4 py-lg-0">
                    <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="../index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="../articles.html">Articles</a></li>
                    <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="../about-us.html">About</a></li>
                    <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="mailto:">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
  
    <!-- Page Header-->
    <header class="masthead" style="background-size:cover;background-image: linear-gradient(to bottom, rgba(255,255,255,0.7) 0%,rgba(0,0,0,0.2) 100%),url('../images/${articles[articleNum][4]}')">
      <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
              <div class="col-md-10 col-lg-8 col-xl-7">
                  <div class="site-heading">
                      <div style="padding: 15%;">
  
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </header>
  
    <div class="px-4 px-lg-5 " style="background: #004f99b2; color:white">
        <div class="row gx-4 gx-lg-5 justify-content-center slide-in-right-1">
            <div class="col-md-9 col-lg-8 col-xl-7" style="padding:15px;">
                <h2>Interview</h2>
            </div>
        </div>
    </div>
  
    <div class="container-fluid">    
      <div class="row content">
        <div class="col-sm-2 sidenav">
          
        </div>
        <div class="col-sm-8" style="align-content: left;"> 
          <!--<hr style="width:100px">-->
          <br>
          <h1 id="title" class="slide-in-right">${articles[articleNum][0]}</h1>
          <div id="date" class="slide-in-right">${articles[articleNum][3]}</div>
          <div id="credits" class="slide-in-right">Interviewed by ${articles[articleNum][1]}, edited by ${articles[articleNum][2]}</div>
          <br>
          <div id="content" class="slide-in-right" style="text-indent:30px">${articles[articleNum][5]}</div>
        </div>
        <div class="col-sm-2 sidenav">
          
        </div>
      </div>
    </div>

    <!-- Footer-->
    <footer class="border-top" style="background-color: #004f99b2;">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <!-- <div class="col-md-5 col-lg-4">
                    <img src="images/archive-logo.png" width="250px" />
                 </div>
                 <div class="col-md-5 col-lg-4">
                    <a href="mailto:" class="link-unstyled" style="font-size:20px; color: white;margin-top: 20px;">Contact</a>
                 </div> -->
                 <div class="small text-center fst-italic" style="color:white;padding:30px;">Copyright &copy; The Archives at American University</div>
               
            </div>
        </div>
    </footer>
  
    <button
      type="button"
      class="btn btn-floating btn-lg slide-up-button"
      id="btn-back-to-top"
      >
  <i class="fas fa-arrow-up"></i>
  </button>
  
      <!-- Bootstrap core JS-->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      <!-- Core theme JS-->
      <script src="js/scripts.js"></script>
  
    </body>
  </html>
  

  `);
}