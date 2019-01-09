$(document).ready(function(){
    $(".navigation").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr("href"),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    var Shuffle = window.Shuffle;
    var element = document.querySelector(".works");
    var sizer = element.querySelector(".my-sizer-element");
    var shuffleInstance = new Shuffle(element, {
        itemSelector: ".works__item",
        sizer: sizer
    });

    $('.portfolio__button-container').on("click", "button", function() {
       var filter = $(this).attr("data-filter");
       shuffleInstance.filter(filter);
    });
});