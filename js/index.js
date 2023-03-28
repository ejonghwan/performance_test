(function() {

    console.log(11)
    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
          delay: 100,
          disableOnInteraction: false,
        },
      });

      console.log(swiper)
      
      $('.mySwiper').hover(function(){
        swiper.autoplay.stop();
      }, function(){
        swiper.autoplay.start();
      });

      $('.swiper-slide').focus(function(){
        swiper.autoplay.stop();
      }, function(){
        swiper.autoplay.start();
      });

})()