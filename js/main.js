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
    const appearingDelaySec = 5;
    const animationFrequency = 5;

    const widgetTexts = [
        {name: 'Vlad', amount: 3, time: '1 day ago'},
        {name: 'Alex', amount: 5, time: '2 day ago'},
        {name: 'Emma', amount: 8, time: '3 day ago'},
        {name: 'Tony', amount: 8, time: '3 day ago'},
        {name: 'Bill', amount: 8, time: '1 hour ago'},
        {name: 'Jack', amount: 8, time: '3 day ago'},
        {name: 'Sonya', amount: 8, time: '3 day ago'},
        {name: 'Bob', amount: 8, time: '5 day ago'},
        {name: 'Jose', amount: 8, time: '3 day ago'},
        {name: 'Anna', amount: 8, time: '3 day ago'},
        ];

    const renderWidget = ({name, amount, time}) => {
        return `<a class="bought-widget-card fadeIn animated">
                    <div class="bought-widget-card__image">
                        <img src="img/bottle.png" />                    
                    </div>
                     <div class="bought-widget-card__text">
                        <div class="text__name">${name}</div>
                          <div class="text__message">bought ${amount} superCOAT </div>
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