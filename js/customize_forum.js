// 自行加入的JS請寫在這裡
$(function() {
    if($('.schedule_select').length>0){
        var dayLenght = $('.schedule_select').find('.radio_grp label').length;
        $('.schedule_select').find('.radio_grp').addClass('has_'+dayLenght);
    }


    if($('.modal').length>0){
        $('.modal').insertAfter('footer');
        $('.modal_overlay').insertAfter('footer');
    }
    $('.hero_image').find('img').addClass('cover');
    // lazyload
    //可以指定你想要的元素做lazyload
    // var lazyLoadInstance = new LazyLoad({
    //     elements_selector: "img.lazy",
    //     placeholder: '/images/basic/placeholder.gif',
    //     effect: "fadeIn",
    //     fadeTime: 600,
    //     threshold: 0
    // });
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
    var Speaker_Length = $('.mp .speaker_intro ul').find('li').length;
    var i;
    for (i = 0; i < Speaker_Length; i++) {
        $('.mp .speaker_intro ul li').eq(i).addClass('wow').addClass('fadeIn');
        $('.mp .speaker_intro ul li').eq(i).attr('data-wow-duration', '1s');
        $('.mp .speaker_intro ul li').eq(i).attr('data-wow-delay', i / 5 + 's');
    }
    $('.dropdown_content').hide();
    $('.dropdown_item a').parent('h4').addClass('close');
    $('.apply_wrap').each(function(index, el) {
        $(this).find('.dropdown_item a').off().click(function(e) {
           $(this).parent('.dropdown_item').siblings('.dropdown_content').stop().slideToggle();
           $(this).parent('h4').toggleClass('close');
           e.preventDefault();
        });
    });
});
$(function() {
    $('.mp').append('<div class="mp_menu"><ul></ul></div>')
    $('.mp .sec').each(function() {
        var SecHTML = $(this).find('.container h2').html();
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
