//total slide
(function ($) {
    $(window).on('load', function () {
        var total_slide = $('.slide').length;
        if (total_slide < 10) {
            $('[data-slide="total-slides"]').text('/' + '0' + total_slide);
        } else {
            $('[data-slide="total-slides"]').text('/' + total_slide);
        }

    });
})(jQuery);

//current slide
(function ($) {
    $(window).on('load', function () {
        var slide = 1;
        $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            slide = nextSlide + 1;
            console.log(slide);
            if (slide < 10) {
                $('[data-slide="current-slide"]').text('0' + slide);
            } else {
                $('[data-slide="current-slide"]').text(slide);
            }
        });
    });
})(jQuery);

//menu button
(function ($) {
    $(window).on('load', function () {
        $('[data-navbar="menu"]').on('click', function () {
            $('.menu').toggleClass('open');
        })
    });
})(jQuery);

//
(function ($) {
    $(window).on('load', function () {
        $('[data-btn="description"]').on('click', function () {
            $('.content-page').toggleClass('open');
        })
    });
})(jQuery);