const win_height_padded = $(window).height() * 0.8;

$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $(window).scroll(function () {
        const scrolled = $(window).scrollTop();
        $(".revealOnScroll:not(.animated)").each(function () {
            $(this).css('visibility','hidden');
            const $this = $(this);
            const offsetTop = $this.offset().top;

            if (scrolled + win_height_padded >= offsetTop) {

                if ($this.data('timeout')) {
                    window.setTimeout(function () {
                        $this.css('visibility','visible');
                        $this.addClass('animated ' + $this.data('animation'));
                    }, parseInt($this.data('timeout'), 10));
                } else {
                    $this.css('visibility','visible');
                    $this.addClass('animated ' + $this.data('animation'));
                }
            }
        });
    });

    let inputChekbox = $(".checkbox");
    for (let i = 0; i <= inputChekbox.length; i++){
        if($(inputChekbox[i]).attr("checked") == 'checked'){
            console.log($(inputChekbox[i]).parent())
            $(inputChekbox[i]).parent().css("background-color","#FFC439")
        }
    }
    
});