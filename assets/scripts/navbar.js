$(window).scroll(function () {
    let $heightScrolled = $(window).scrollTop();
    let targetWorld = document.querySelector('#world');
    let targetCharacters = document.querySelector('#characters');

    if ($heightScrolled <= targetWorld.getBoundingClientRect().top) {
        $('.target-world').removeClass("on-article")
    } else if ($heightScrolled >= targetWorld.getBoundingClientRect().top && $heightScrolled <= targetCharacters.getBoundingClientRect().top) {
        $('.target-world').addClass("on-article")
        $('.target-characters').removeClass("on-article")
    } else if ($heightScrolled >= targetCharacters.getBoundingClientRect().top) {
        $('.target-characters').addClass("on-article")
        $('.target-world').removeClass("on-article")
    }
});