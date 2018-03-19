/* SKILLS SWITCHER */

window.onload= first();

function first () {

    setTimeout(showSecond, 2000);
    setTimeout(switchImage, 3000);
    setTimeout(showArrow, 4000);
}

var string = "";
var knowledge = ["Psd to HTML","CSS","Bootstrap","Javascript","jQuery"];
let pSwith = document.querySelector("#switcher");
let arrowDiv = document.querySelector("#arrowcontainer");
arrowDiv.style.display = "none";
pSwith.style.display = "none";
function switchImage () {

    pSwith.style.display = "";
    var incrementer = 0;
    pSwith.textContent = knowledge[incrementer];
    setTimeout(function increment(){
        if (pSwith.textContent ==="jQuery") {
            incrementer = 0;
            pSwith.textContent = "Psd to HTML";
            setTimeout(increment, 1500);
        }
        else {
            incrementer++;
        pSwith.textContent = knowledge[incrementer];
        setTimeout(increment, 1500);
        }

       }, 1500);

};


//Animation Front page

function showSecond () {
    let secondPara = document.querySelector('#secondp');
    secondPara.style.visibility = "visible";
    secondPara.classList.add("fadeanimation");
}

//Show arrow

function showArrow () {
    arrowDiv.style.display = "";
    arrowDiv.classList.add("fadeanimation");
}


// Trigger Event on scrolling

$(window).scroll(function() {
    addUiActivePoint();
   var hT = $('#artimage').offset().top,
       hH = $('#artimage').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       document.querySelector("#artimage").classList.add('artanimation');
       document.querySelector("#aboutp").classList.add('panimation');
   }
});


function addUiActivePoint () {
    var beenScrolled = window.scrollY;
    console.log(beenScrolled);
    if (beenScrolled < 658) {
        document.querySelector(".onscreen").classList.remove("onscreen");
    document.querySelector(".dots-ptn").children[0].classList.add("onscreen");

    }
    if (beenScrolled > 658) {
    document.querySelector(".onscreen").classList.remove("onscreen");
    document.querySelector(".dots-ptn").children[1].classList.add("onscreen");

    }

    if (beenScrolled > 1435) {
    document.querySelector(".onscreen").classList.remove("onscreen");
    document.querySelector(".dots-ptn").children[2].classList.add("onscreen");

    }

        if (beenScrolled > 2062) {
    document.querySelector(".onscreen").classList.remove("onscreen");
    document.querySelector(".dots-ptn").children[3].classList.add("onscreen");

    }

        if (beenScrolled > 2615) {
    document.querySelector(".onscreen").classList.remove("onscreen");
    document.querySelector(".dots-ptn").children[4].classList.add("onscreen");

    }



}

/*Animation menu */



$('.home').click(function(){
    console.log("clicked");
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

$(".about, #arrow").click(function() {
    $('html,body').animate({
        scrollTop: (document.body.scrollTop + $(".aboutme").offset().top)},
        'slow');
});

$(".skillz ").click(function() {
    $('html,body').animate({
        scrollTop: (document.body.scrollTop + $(".skills").offset().top)},
        'slow');
});

$(".projects ").click(function() {
    $('html,body').animate({
        scrollTop: (document.body.scrollTop + $("#portfolio").offset().top)},
        'slow');
});
$(".contact ").click(function() {
    $('html,body').animate({
        scrollTop: (document.body.scrollTop + $("#contactpage").offset().top)},
        'slow');
});

