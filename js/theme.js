// BURGER MENU
const imgBurgerOpen = "img/icon-menu-open.svg";
const imgBurgerClose = "img/icon-menu-close.svg";

$("#nav-menu-btn").on("click", function () {
    const burgerCondition = $("#nav-menu-btn-img").attr("src") === imgBurgerOpen;
    (burgerCondition) ? $("#nav-menu-btn-img").attr("src", imgBurgerClose) : $("#nav-menu-btn-img").attr("src", imgBurgerOpen);
    (burgerCondition) ? $("#nav-menu").css("visibility", "visible") : $("#nav-menu").css("visibility", "hidden");
    (burgerCondition) ? $("#nav-menu").css("position", "static") : $("#nav-menu").css("position", "absolute");
    $("#nav-menu").animate({
        opacity: 1
    }, 1000);
    $("#nav-links").animate({
        opacity: 1
    }, 1000);

    (burgerCondition) ? $("#nav-links").addClass("nav-menu-opened") : $("#nav-links").removeClass("nav-menu-opened");
});

//modal functions
$(".theme-modal-btn").on("click", function () {
    const hiddenSections = $($(this).parent().parent()[0]).children("section");
    hiddenSections.css("visibility", "visible");
    hiddenSections.css("position", "relative");
    hiddenSections.animate({
        opacity: 1
    }, 500);

    $(this).hide();
});

//hologram buttons
$(".hologram-btn").each(function () {
    $(this).append("<svg class='layer_1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'viewBox='0 0 180.8 52.9' style='enable-background:new 0 0 180.8 52.9;' xml:space='preserve'><style type='text/css'>.st0{fill:#A1FFFF;}</style><g id='Pfad_2'><path class='st0' d='M162.5,0H0v34.1l25.8,18.8h154.9V19.7L162.5,0z M179.8,51.9H26.1L1,33.6V1h161l17.7,19.1v31.8H179.8z'/></g></svg>");
    $(this).append("<svg class='layer_2' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'viewBox='0 0 180.8 52.9' style='enable-background:new 0 0 180.8 52.9;' xml:space='preserve'><style type='text/css'>.st0{fill:#A1FFFF;}</style><g id='Pfad_2'><path class='st0' d='M162.5,0H0v34.1l25.8,18.8h154.9V19.7L162.5,0z M179.8,51.9H26.1L1,33.6V1h161l17.7,19.1v31.8H179.8z'/></g></svg>");
    $(this).append("<svg  class='layer_3'version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 180.8 52.9' style='enable-background:new 0 0 180.8 52.9;' xml:space='preserve'> <style type='text/css'> .st0{fill:#E2E2E2;enable-background:new    ;} </style> <polygon class='st0' points='162.5,0 0,0 0,34.1 25.8,52.9 180.7,52.9 180.7,19.7 '/> </svg>");
});

// hologram effect
$(".hologram-box, .hologram-focus, .hologram-focus-text").each(function () {
    $(this).append("<span class='hologram-box-decor-top' aria-hidden='true'></span><span class='hologram-box-decor-bottom' aria-hidden='true'></span> ");
});

// title linebreak effect
$(".add-linebreak-right").each(function () {
    $(this).wrap("<div class='linebreak-right'></div>");
    $(this).after("<span class='linebreak' aria-hidden='true'></span>");
});

$(".add-linebreak-left").each(function () {
    $(this).wrap("<div class='linebreak-left'></div>");
    $(this).before("<span class='linebreak' aria-hidden='true'></span>");
});

$(".add-linebreak-left-right").each(function () {
    $(this).wrap("<div class='linebreak-left-right'></div>");
    $(this).before("<span class='linebreak' aria-hidden='true'></span>");
    $(this).after("<span class='linebreak' aria-hidden='true'></span>");
});

$(".add-linebreak-right-accent").each(function () {
    $(this).wrap("<div class='linebreak-right'></div>");
    $(this).after("<span class='linebreak linebreak-accent' aria-hidden='true'></span>");
});

$(".add-linebreak-left-accent").each(function () {
    $(this).wrap("<div class='linebreak-left'></div>");
    $(this).before("<span class='linebreak linebreak-accent' aria-hidden='true'></span>");
});

// range input
$("#slider-ctr").after("<div id='slider-numbers'></div>");

for (let i = 0; i < $("#slider").attr("max"); i++) {
    $("#slider-numbers").append("<span>" + (i + 1) + "</span>");
}

$("#slider").on("input", function () {
    let getElementPosition = $("#slider-numbers").children().eq($("#slider").val() - 1).position();
    getElementPosition = getElementPosition.left - 16;
    $("#slider-trail").css("left", "calc(-100% + " + getElementPosition + "px)");
});