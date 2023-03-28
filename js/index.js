(function() {

    console.log(11)
    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
          delay: 900,
          disableOnInteraction: false,
        },
        on: {
          init: function() {
            this.slides.map(item => {
              item.setAttribute('aria-hidden', true)
              item.setAttribute('tabindex', '-1')
              if(item.classList.contains('swiper-slide-active')) {
                item.setAttribute('aria-hidden', false)
                item.setAttribute('tabindex', '0')
              }
              // return false;
            })
          },
          slideChangeTransitionStart: function() {
            let target = null;
            this.slides.map(item => {
              item.setAttribute('aria-hidden', true)
              item.setAttribute('tabindex', '-1')
              if(item.classList.contains('swiper-slide-active')) {
                item.setAttribute('aria-hidden', false)
                item.setAttribute('tabindex', '0')
              }
              // return false;
            })

          }
        }
      });

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

      document.querySelector('.stop11').addEventListener('click', e => {
        swiper.autoplay.stop()
      })
      document.querySelector('.play11').addEventListener('click', e => {
        swiper.autoplay.start()
      })

})()