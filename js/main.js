const win_height_padded = $(window).height() * 0.8;

$(document).ready(function () {
    $('.slider').slick({
        dots: true,
		autoplay: false,
        arrows: false,
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
    for (let i = 0; i < inputChekbox.length; i++){
        if($(inputChekbox[i]).attr("checked") == 'checked'){
            $(inputChekbox[i]).parent().css("background-color","#FFC439")
        }
    }
    
    $(".card-bottle-mobile").on("click", function(){
        let checkbox = $(this).find(".checkbox")[0]
        let $this = $(this);

        if(checkbox.checked){
            $this.css("background-color","white")
            $(this).find(".checkbox")[0].checked = false;
        }else{
            $this.css("background-color","#FFC439")
            $(this).find(".checkbox")[0].checked = true;
        }
    });

    

    $(".button-link").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".seventh-section").offset().top
        }, 2000);
    });  

    const widgetContainer = $('#bought-widget');
    const appearingDelaySec = 30;
    const animationFrequency = 5;

    const widgetTexts = [
        {name: 'Vlad', amount: 3, time: 'vor 1 Minute'},
        {name: 'Alex', amount: 5, time: 'vor 6 Minuten'},
        {name: 'Emma', amount: 8, time: 'vor 1 Stunde'},
        {name: 'Tanja', amount: 8, time: 'vor 17 Minuten'},
        {name: 'Benjamin', amount: 8, time: 'vor 23 Minuten'},
        {name: 'Erwin', amount: 8, time: 'vor 25 Minuten'},
        {name: 'Sandro', amount: 8, time: 'vor 27 Minuten'},
        {name: 'Andreas', amount: 8, time: 'vor 32 Minuten'},
        {name: 'Johannes', amount: 8, time: 'vor 1 Stunde'},
        {name: 'Anna', amount: 8, time: 'vor 20 Minuten'},
        ];

    const renderWidget = ({name, amount, time}) => {
        return `<a class="bought-widget-card fadeIn animated">
                    <div class="bought-widget-card__image">
                        <img src="img/bottle.png" />                    
                    </div>
                     <div class="bought-widget-card__text">
                        <div class="text__name">${name}</div>
                          <div class="text__message">kaufte gerade ${amount} SuperCoat </div>
                           <div class="text__time">${time}</div>
                     </div>
                </a>`;
    };

    const runWidgetAnimation = (index) => {
        if(widgetContainer) {
            const card = widgetContainer.find('.bought-widget-card');
            if(card) {
                card.removeClass('animated fadeIn');
                card.addClass('fadeOut animated');
                setTimeout(() => widgetContainer.html(renderWidget(widgetTexts[index])), 1000);
            }
        }
    };

    (function initWidget(){
        setTimeout(() => {
            widgetContainer.html(renderWidget(widgetTexts[0]));

            let index = 1;
            setInterval(() => {

                runWidgetAnimation(index)
                if (index + 1 > widgetTexts.length - 1) {
                    index = 0;
                } else {
                    index++;
                }
            }, animationFrequency * 1000 + 300);
        }, appearingDelaySec * 1000);
    })();

});