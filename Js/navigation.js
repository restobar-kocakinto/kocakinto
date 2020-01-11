$(document).ready(()=>{
    console.info('Jquery is ready');

    $('#nav').hide();
    $('.template').hide();
    // $('.template-products').show();

    function openNav(estado){
        if(estado){
            $('#nav').show('slow');
        }else{
            $('#nav').hide('slow');
        }
    }

    $('#openNavFromIcon').click(()=>{
        openNav(true);
    });
    $('#openNavFromText').click(()=>{
        openNav(true);
    });
    $('#closeNav').click(()=>{
        openNav(false);
    });
    $(document).ready(function() {
        TweenMax.set(".project-preview", { width: 0 });
        var tl = new TimelineLite();
        $(document)
          .on("mouseover", ".navigation-item", function(evt) {
            tl = new TimelineLite();
            tl.to($(".project-preview"), 1, {
              width: "600px",
              ease: Expo.easeInOut
            });
          })
          .on("mouseout", ".navigation-item", function(evt) {
            tl = new TimelineLite();
            tl.to($(".project-preview"), 0.5, {
              width: 0,
              ease: Expo.easeInOut
            });
          });
      });
      $(".navigation-link-1").hover(function() {
        $(".project-preview").css("background-image","url(./Images/logo01.jpg)");
        $(".project-preview").css("background-size","cover");
      });
      $(".navigation-link-2").hover(function() {
        $(".project-preview").css("background-image","url(./Images/drink02.jpg)");
      });
      $(".navigation-link-3").hover(function() {
        $(".project-preview").css("background-image","url(./Images/contact02.jpg)");
      });

      $(window).scroll(function() {
        var scroll = $(window).scrollTop(),
          dh = $(document).height(),
          wh = $(window).height();
        scrollPercent = (scroll / (dh - wh)) * 100;
        $(".progressbar").css("height", scrollPercent + "%");
      });

      $('#about').click(()=>{
        $('.template-about').show('slow');
      });
      $('#closeAbout').click(()=>{
        $('.template-about').hide('fast');
      });
      $('#product').click(()=>{
        $('.template-products').show('slow');
      });
      $('#closeProduct').click(()=>{
        $('.template-products').hide('fast');
      });
});
