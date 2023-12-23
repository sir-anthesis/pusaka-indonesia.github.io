$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    var hero = $('.hero').offset().top - 50;
    var suku1 = $('.suku1').offset().top - 50;
    var suku2 = $('.suku2').offset().top - 50;
    var suku3 = $('.suku3').offset().top - 50;
    var suku4 = $('.suku4').offset().top - 50;
    
    if(wScroll > hero) {
        $('.bHero').css({
            'transform' : 'translate(0px, ' + wScroll/20 + '%)'
        });

        $('.h2').css({
            'transform' : 'translate(0px, ' + wScroll/15 + '%)'
        });

        $('.h3').css({
            'transform' : 'translate(0px, ' + wScroll/10 + '%)'
        });

        $('.h4').css({
            'transform' : 'translate(' + wScroll/20 + '%, 0px)'
        });

        $('.h5').css({
            'transform' : 'translate(-' + wScroll/20 + '%, 0px)'
        });

        $('.h6').css({
            'transform' : 'translate(0px, ' + wScroll/10 + '%)'
        });

    };

    if(wScroll > suku1) {
        $('.b1').css({
            'transform' : 'translate(0px, ' + (wScroll - suku1)/20 + '%)'
        });

        $('.s1-3').css({
            'transform' : 'translate(0px, ' + (wScroll - suku1)/15 + '%)'
        });

        $('.s1-4').css({
            'transform' : 'translate(-' + (wScroll - suku1)/10 + '%, 0px)'
        });

    };

    if(wScroll > suku2) {
        $('.s2-1').css({
            'transform' : 'translate(0px, ' + (wScroll - suku2)/20 + '%)'
        });

        $('.s2-2').css({
            'transform' : 'translate(0px, ' + (wScroll - suku2)/15 + '%)'
        });

    };

    if(wScroll > suku3) {
        $('.s3-1').css({
            'transform' : 'translate(0px, ' + (wScroll - suku3)/10 + '%)'
        });

        $('.s3-2').css({
            'transform' : 'translate(0px, ' + (wScroll - suku3)/10 + '%)'
        });

        $('.s3-4').css({
            'transform' : 'translate(-' + (wScroll - suku3)/10 + '%, 0px)'
        });
    };

    if(wScroll > suku4) {
        $('.b4').css({
            'transform' : 'translate(0px, ' + (wScroll - suku4)/20 + '%)'
        });

        $('.s4-3').css({
            'transform' : 'translate(0px, ' + (wScroll - suku4)/15 + '%)'
        }); 

    };
});