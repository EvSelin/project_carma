//total slide
(function ($) {
    $(window).on('load', function () {
        var total_slide = $('.slide').length;
        if (total_slide < 10 && total_slide != 1) {
            $('[data-slide="total-slides"]').text('/' + '0' + total_slide);
        } else if (total_slide != 1) {
            $('[data-slide="total-slides"]').text('/' + total_slide);
        }
    });
})(jQuery);

//current slide
(function ($) {
    $(window).on('load', function () {
        total = $('.slide').length;
        if (total != 1) {
            $('[data-slide="current-slide"]').text('0' + (total - (total -1)));
        }
        $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $slide = nextSlide + 1;
            if ($slide < 10) {
                $('[data-slide="current-slide"]').text('0' + $slide);
            } else {
                $('[data-slide="current-slide"]').text($slide);
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

//description button
(function ($) {
    $(window).on('load', function () {
        $('[data-btn="description"]').on('click', function () {
            $('.content-page').toggleClass('open');
        })
    });
})(jQuery);
