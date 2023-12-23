$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    var suku3 = $('.suku3').offset().top - 50; 
    var sejarah = $('.sejarah').offset().top - 50; 
    var keunikan = $('.keunikan').offset().top - 50; 
    var budaya = $('.budaya').offset().top - 50; 
    var video = $('.video').offset().top - 50;

    if(wScroll > suku3) {
        $('.s3-1').css({
            'transform' : 'translate(0px, ' + wScroll/10 + '%)'
        });

        $('.s3-2').css({
            'transform' : 'translate(0px, ' + wScroll/10 + '%)'
        });

        $('.s3-4').css({
            'transform' : 'translate(-' + wScroll/10 + '%, 0px)'
        });

    };

    if(wScroll > sejarah) {
        $('.sejarah .card').css({
            'transform' : 'translate(0px, ' + (wScroll - sejarah)/20 + '%)'
        });
    };

    if(wScroll > keunikan) {
        $('.keunikan .card').css({
            'transform' : 'translate(0px, ' + (wScroll - keunikan)/20 + '%)'
        });
    };

    if(wScroll > budaya) {
        $('.budaya .card').css({
            'transform' : 'translate(0px, ' + (wScroll - budaya)/20 + '%)'
        });
    };

    if(wScroll > video) {
        $('.video .card').css({
            'transform' : 'translate(0px, ' + (wScroll - video)/20 + '%)'
        });
    };

});

