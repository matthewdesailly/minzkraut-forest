const targetWorld = document.querySelector('#world');
const targetWorldLocation = targetWorld.getBoundingClientRect().top;
const targetCharacters = document.querySelector('#characters');
const targetCharactersLocation = targetCharacters.getBoundingClientRect().top;
const targetCreator = document.querySelector('#creator');
const targetCreatorLocation = targetCreator.getBoundingClientRect().top;

$(window).scroll(function () {
    const $heightScrolled = $(window).scrollTop();

    if ($heightScrolled <= targetWorldLocation) {
        $('.target-world').removeClass("on-article");
        $('.target-highlight').removeClass("highlight");
    } else if ($heightScrolled >= targetWorldLocation && $heightScrolled <= targetCharactersLocation) {
        $('.target-world').addClass("on-article");
        $('.target-characters').removeClass("on-article");
        $('.target-highlight').addClass("highlight");
    } else if ($heightScrolled >= targetCharactersLocation && $heightScrolled <= targetCreatorLocation) {
        $('.target-characters').addClass("on-article");
        $('.target-world').removeClass("on-article");
        $('.target-creator').removeClass("on-article");
    } else if ($heightScrolled >= targetCreatorLocation) {
        $('.target-creator').addClass("on-article");
        $('.target-world').removeClass("on-article");
        $('.target-characters').removeClass("on-article");
    }
});