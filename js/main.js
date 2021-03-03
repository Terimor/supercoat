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

    const widgetContainer = $('#bought-widget');
    const appearingDelaySec = 5;
    const widgetTexts = [
        {name: 'Vladyslav', amount: 3, time: '1 day ago'},
        {name: 'Ricardo', amount: 5, time: '2 day ago'}
        ];

    const renderWidget = ({name, amount}) => {
        return `<a class="bought-widget-card">
                    <div class="bought-widget-card__image">
                        <img src="img/bottle.png" />                    
                    </div>
                     <div class="bought-widget-card__text">
                        <div class="text__name">${name}</div>
                          <span>Bought</span>
                          <span class="text__amount">${amount}</span>
                          <span>superCoat</span>
                     </div>
                </a>`;
    }

    setTimeout(() => {
        console.log(widgetContainer)
        widgetContainer.html(renderWidget(widgetTexts[0]));
    }, appearingDelaySec * 1);

});