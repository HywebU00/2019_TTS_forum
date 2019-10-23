// 自行加入的JS請寫在這裡
$(function() {
    // lazyload
    //可以指定你想要的元素做lazyload
    $("img").lazyload({ effect: "fadeIn" });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        useHistoryApi: 'true',
        lazy: true
    });
});
$(function() {
    $('.mp').append('<div class="mp_menu"><ul></ul></div>')
    $('.mp .sec').each(function() {
        var SecHTML = $(this).find('.container').children('h2').html();
        $('.mp .mp_menu ul').append('<li><a href="#"></a><div class="sec_topic">' + SecHTML + '</div></li>');
    });
    $('.mp .mp_menu ul li').each(function() {
        $(this).hover(function() {
            $(this).find('.sec_topic').fadeIn();
        }, function() {
            $(this).find('.sec_topic').hide();
        });
        $(this).click(function(event) {
            var NowIndex = $(this).index();
            $("html, body").stop(true, true).animate({
                scrollTop: $(".mp .sec").eq(NowIndex).offset().top - 68
            }, 1000, 'easeOutExpo');
            return false;
        });
    });
});
$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
    }
    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        $this.parent().parent().toggleClass('open');
        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }
    var accordion = new Accordion($('.accordion'), false);
});