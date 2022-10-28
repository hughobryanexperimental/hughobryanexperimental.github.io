let touches = navigator.maxTouchPoints;
let isLogoMoved = false;
let whatsClicked = 0;
let isSomethingHovered = 0;
window.scrollTo(0, 0);

if (matchMedia('(pointer:coarse)').matches) {
    document.getElementsByClassName("name").item(0).classList.remove("invisible");
    document.getElementsByClassName("copyright").item(0).classList.remove("invisible");
}

/*Beginning of Desktop UI*/
if (matchMedia('(pointer:fine)').matches) {
    document.getElementsByClassName("logo-svg").item(0).addEventListener('click', startUp);
    document.getElementsByClassName("logo-svg").item(0).addEventListener('mouseenter', logoUnBlur);
    document.getElementsByClassName("logo-svg").item(0).addEventListener('mouseleave', logoBlur);
    document.getElementsByClassName("tap").item(0).classList.add('invisible');

    if (isLogoMoved === false) {
        window.setTimeout(function () {
            document.getElementsByClassName("hoverandclick").item(0).classList.add("unBlur");
        }, 1000);
    }
    function logoBlur() {
        let logo = document.getElementsByClassName("logo-div").item(0);
        if (!logo.classList.contains("logo-move")) {
            document.getElementsByClassName("logo-div").item(0).classList.remove("unBlur")
        }
    }
    function logoUnBlur() {
        let logo = document.getElementsByClassName("logo-div").item(0);
        if (!logo.classList.contains("logo-move")) {
            document.getElementsByClassName("logo-div").item(0).classList.add("unBlur")
        }
    }
    function startUp() {
        x = 1000
        if (isLogoMoved === false) {
            document.getElementsByClassName("logo-div").item(0).classList.add("logo-move");
            document.getElementsByClassName("logo-div").item(0).classList.add("unBlur");
            document.getElementsByClassName("logo-svg").item(0).addEventListener('click', function ers() {
                window.open("https://www.14ers.com/route.php?route=bros6", '_blank')
            })
            document.getElementsByClassName("copyright").item(0).classList.remove("invisible");
            window.setTimeout(function () {
                document.getElementsByClassName("name").item(0).classList.remove("invisible");
            }, 1.1 * x);
            window.setTimeout(function () {
                document.getElementsByClassName("gd-example-div-5").item(0).classList.remove("invisible");
            }, 1.2 * x)
            window.setTimeout(function () {
                document.getElementsByClassName("gd-example-div-9").item(0).classList.remove("invisible");
            }, 1.2 * x)
            window.setTimeout(function () {
                document.getElementsByClassName("gd-example-div-3").item(0).classList.remove("invisible");
            }, 1.3 * x)
            window.setTimeout(function () {
                document.getElementsByClassName("gd-example-div-4").item(0).classList.remove("invisible");
            }, 1.35 * x)
            window.setTimeout(function () {
                document.getElementsByClassName("gd-example-div-2").item(0).classList.remove("invisible");
            }, 1.4 * x)
            window.setTimeout(function () {
                document.getElementsByClassName("gd-example-div-6").item(0).classList.remove("invisible");
            }, 1.45 * x)
            window.setTimeout(function () {
                document.getElementsByClassName("gd-example-div-7").item(0).classList.remove("invisible");
            }, 1.5 * x)
            window.setTimeout(function () {
                document.getElementsByClassName("gd-example-div-8").item(0).classList.remove("invisible");
            }, 1.55 * x)
            window.setTimeout(function () {
                document.getElementsByClassName("gd-example-div-1").item(0).classList.remove("invisible");
            }, 1.52 * x)
            window.setTimeout(function () {
                document.getElementsByClassName("gd-example-div-11").item(0).classList.remove("invisible");
            }, 1.6 * x)
            window.setTimeout(function () {
                document.getElementsByClassName("gd-example-div-10").item(0).classList.remove("invisible");
            }, 1.65 * x)
            window.setTimeout(function () {
                document.getElementsByClassName("gd-example-div-12").item(0).classList.remove("invisible");
            }, 1.7 * x)
            window.setTimeout(function () {
                document.getElementsByClassName("landscape-gd-title-div").item(0).classList.remove("invisible");
            }, 1.47 * x)
            window.setTimeout(function () {
                document.getElementsByClassName("landscape-ui-title-div").item(0).classList.remove("invisible");
            }, 1.5 * x)
            window.setTimeout(function () {
                document.getElementsByClassName("landscape-id-title-div").item(0).classList.remove("invisible");
            }, 1.54 * x)
            window.setTimeout(function () {
                document.getElementsByClassName("about-div").item(0).classList.remove("invisible");
                document.getElementsByClassName("about-div").item(0).classList.add("unBlur");

            }, 1.75 * x)
            document.body.style.overflow = "visible";
            addAllHovers();
            addAllClicks();
            document.getElementById("container").addEventListener('click', reset)
            document.body.style.overflow = "visible";
            isLogoMoved = true;
            document.getElementsByClassName("hoverandclick").item(0).classList.remove("unBlur");
            document.getElementsByClassName("hoverandclick").item(0).classList.add("invisible");
        }
    }
}
/* End of Desktop UI */

/* Start of Hover Functions */
function gd1Hover() {
    isSomethingHovered = 1;
    if (whatsClicked === 0) {
        returnAll();
        gdOsbFocus();
        gdEuhUnfocus();
        gdMiscUnfocus();
        uiAllUnfocus();
        idAllUnfocus();
        aboutUnfocus();
    }
}
function gd1Unhover() {
    isSomethingHovered = 0;
    if (whatsClicked === 0) {
        reset();
    }
}
function gd2Hover() {
    isSomethingHovered = 1;
    if (whatsClicked === 0) {
        returnAll();
        gdOsbFocus();
        gdEuhUnfocus();
        gdMiscUnfocus();
        uiAllUnfocus();
        idAllUnfocus();
        aboutUnfocus();
    }
}
function gd2Unhover() {
    isSomethingHovered = 0;
    if (whatsClicked === 0) {
        reset();
    }
}
function gd3Hover() {
    isSomethingHovered = 1;
    if (whatsClicked === 0) {
        returnAll();
        gdEuhFocus();
        gdOsbUnfocus();
        gdMiscUnfocus();
        uiAllUnfocus();
        idAllUnfocus();
        aboutUnfocus();
    }
}
function gd3Unhover() {
    isSomethingHovered = 0;
    if (whatsClicked === 0) {
        reset();
    }
}
function gd4Hover() {
    isSomethingHovered = 1;
    if (whatsClicked === 0) {
        returnAll();
        gdEuhFocus();
        gdOsbUnfocus();
        gdMiscUnfocus();
        uiAllUnfocus();
        idAllUnfocus();
        aboutUnfocus();
    }
}
function gd4Unhover() {
    isSomethingHovered = 0;
    if (whatsClicked === 0) {
        reset();
    }
}
function gd5Hover() {
    isSomethingHovered = 1;
    if (whatsClicked === 0) {
        returnAll();
        gdEuhFocus();
        gdOsbUnfocus();
        gdMiscUnfocus();
        uiAllUnfocus();
        idAllUnfocus();
        aboutUnfocus();
    }
}
function gd5Unhover() {
    isSomethingHovered = 0;
    if (whatsClicked === 0) {
        reset();
    }
}
function gd6Hover() {
    isSomethingHovered = 1;
    if (whatsClicked === 0) {
        returnAll();
        gdOsbFocus();
        gdEuhUnfocus();
        gdMiscUnfocus();
        uiAllUnfocus();
        idAllUnfocus();
        aboutUnfocus();
    }
}
function gd6Unhover() {
    isSomethingHovered = 0;
    if (whatsClicked === 0) {
        reset();
    }
}
function gd7Hover() {
    isSomethingHovered = 1;
    if (whatsClicked === 0) {
        returnAll();
        gdOsbFocus();
        gdEuhUnfocus();
        gdMiscUnfocus();
        uiAllUnfocus();
        idAllUnfocus();
        aboutUnfocus();
    }
}
function gd7Unhover() {
    isSomethingHovered = 0;
    if (whatsClicked === 0) {
        reset();
    }
}
function gd8Hover() {
    isSomethingHovered = 1;
    if (whatsClicked === 0) {
        returnAll();
        gdOsbFocus();
        gdEuhUnfocus();
        gdMiscUnfocus();
        uiAllUnfocus();
        idAllUnfocus();
        aboutUnfocus();
    }
}
function gd8Unhover() {
    isSomethingHovered = 0;
    if (whatsClicked === 0) {
        reset();
    }
}
function gd9Hover() {
    isSomethingHovered = 1;
    if (whatsClicked === 0) {
        returnAll();
        gdEuhFocus();
        gdOsbUnfocus();
        gdMiscUnfocus();
        uiAllUnfocus();
        idAllUnfocus();
        aboutUnfocus();
    }
}
function gd9Unhover() {
    isSomethingHovered = 0;
    if (whatsClicked === 0) {
        reset();
    }
}
function gd10Hover() {
    isSomethingHovered = 1;
    if (whatsClicked === 0) {
        returnAll();
        gdOsbUnfocus();
        gdOsbUnfocus();
        gdMiscFocus();
        uiAllUnfocus();
        idAllUnfocus();
        aboutUnfocus();
    }
}
function gd10Unhover() {
    isSomethingHovered = 0;
    if (whatsClicked === 0) {
        reset();
    }
}
function gd11Hover() {
    isSomethingHovered = 1;
    if (whatsClicked === 0) {
        returnAll();
        gdOsbUnfocus();
        gdOsbUnfocus();
        gdMiscFocus();
        uiAllUnfocus();
        idAllUnfocus();
        aboutUnfocus();
    }
}
function gd11Unhover() {
    isSomethingHovered = 0;
    if (whatsClicked === 0) {
        reset();
    }
}
function gd12Hover() {
    isSomethingHovered = 1;
    if (whatsClicked === 0) {
        returnAll();
        gdOsbUnfocus();
        gdOsbUnfocus();
        gdMiscFocus();
        uiAllUnfocus();
        idAllUnfocus();
        aboutUnfocus();
    }
}
function gd12Unhover() {
    isSomethingHovered = 0;
    if (whatsClicked === 0) {
        reset();
    }
}
function gdTitHover() {
    isSomethingHovered = 1;
    if (whatsClicked === 0) {
        returnAll();
        gdAllFocus();
        uiAllUnfocus();
        idAllUnfocus();
        aboutUnfocus();
    }
}
function gdTitUnhover() {
    isSomethingHovered = 0;
    if (whatsClicked === 0) {
        reset();
    }
}
function uiTitHover() {
    isSomethingHovered = 1;
    if (whatsClicked === 0) {
        returnAll();
        gdAllUnfocus();
        uiAllFocus();
        idAllUnfocus();
        aboutUnfocus();
    }
}
function uiTitUnhover() {
    isSomethingHovered = 0;
    if (whatsClicked === 0) {
        reset();
    }
}
function idTitHover() {
    isSomethingHovered = 1;
    if (whatsClicked === 0) {
        returnAll();
        gdAllUnfocus();
        uiAllUnfocus();
        idAllFocus();
        aboutUnfocus();
    }
}
function idTitUnhover() {
    isSomethingHovered = 0;
    if (whatsClicked === 0) {
        reset();
    }
}
/* End of Hover Functions */

/* Start of Click Functions */
function gdOsbClick() {
    if (whatsClicked !== 101) {
        returnAll();
        gdOsbFocus();
        gdEuhUnfocus();
        gdMiscUnfocus();
        uiAllUnfocus();
        idAllUnfocus();
        aboutUnfocus();
        whatsClicked = 101;
    } else {
        if (whatsClicked === 101) {
            whatsClicked = 0;
        }
    }
}
function gdEuhClick() {
    if (whatsClicked !== 102) {
        returnAll();
        gdEuhFocus();
        gdOsbUnfocus();
        gdMiscUnfocus();
        uiAllUnfocus();
        idAllUnfocus();
        aboutUnfocus();
        whatsClicked = 102;
    } else {
        if (whatsClicked === 102) {
            whatsClicked = 0;
        }
    }
}
function gdMiscClick() {
    if (whatsClicked !== 103) {
        returnAll();
        gdMiscFocus();
        gdOsbUnfocus();
        gdEuhUnfocus();
        uiAllUnfocus();
        idAllUnfocus();
        aboutUnfocus();
        whatsClicked = 103;
    } else {
        if (whatsClicked === 103) {
            whatsClicked = 0;
        }
    }
}
function gdTitClick() {
    if (whatsClicked !== 100) {
        returnAll();
        gdAllFocus();
        uiAllUnfocus();
        idAllUnfocus();
        aboutUnfocus();
        whatsClicked = 100;
    } else {
        if (whatsClicked === 100) {
            whatsClicked = 0;
        }
    }
}
function uiTitClick() {
    if (whatsClicked !== 200) {
        returnAll();
        gdAllUnfocus();
        uiAllFocus();
        idAllUnfocus();
        aboutUnfocus();
        whatsClicked = 200;
    } else {
        if (whatsClicked === 200) {
            whatsClicked = 0;
        }
    }
}
function idTitClick() {
    if (whatsClicked !== 300) {
        returnAll();
        gdAllUnfocus();
        uiAllUnfocus();
        idAllFocus();
        aboutUnfocus();
        whatsClicked = 300;
    } else {
        if (whatsClicked === 300) {
            whatsClicked = 0;
        }
    }
}
/* End of Click Functions */

/* Start of Helper Functions */
function addAllClicks() {
    document.getElementsByClassName("gd-example-svg-1").item(0).addEventListener('click', gdOsbClick);
    document.getElementsByClassName("gd-example-svg-2").item(0).addEventListener('click', gdOsbClick);
    document.getElementsByClassName("gd-example-svg-3").item(0).addEventListener('click', gdEuhClick);
    document.getElementsByClassName("gd-example-svg-4").item(0).addEventListener('click', gdEuhClick);
    document.getElementsByClassName("gd-example-svg-5").item(0).addEventListener('click', gdEuhClick);
    document.getElementsByClassName("gd-example-svg-6").item(0).addEventListener('click', gdOsbClick);
    document.getElementsByClassName("gd-example-svg-7").item(0).addEventListener('click', gdOsbClick);
    document.getElementsByClassName("gd-example-svg-8").item(0).addEventListener('click', gdOsbClick);
    document.getElementsByClassName("gd-example-svg-9").item(0).addEventListener('click', gdEuhClick);
    document.getElementsByClassName("gd-example-svg-10").item(0).addEventListener('click', gdMiscClick);
    document.getElementsByClassName("gd-example-svg-11").item(0).addEventListener('click', gdMiscClick);
    document.getElementsByClassName("gd-example-svg-12").item(0).addEventListener('click', gdMiscClick);
    document.getElementsByClassName("landscape-gd-title").item(0).addEventListener('click', gdTitClick);
    document.getElementsByClassName("landscape-ui-title").item(0).addEventListener('click', uiTitClick);
    document.getElementsByClassName("landscape-id-title").item(0).addEventListener('click', idTitClick);

}
function addAllHovers() {
    document.getElementsByClassName("gd-example-svg-1").item(0).addEventListener('mouseenter', gd1Hover);
    document.getElementsByClassName("gd-example-svg-1").item(0).addEventListener('mouseleave', gd1Unhover);
    document.getElementsByClassName("gd-example-svg-2").item(0).addEventListener('mouseenter', gd2Hover);
    document.getElementsByClassName("gd-example-svg-2").item(0).addEventListener('mouseleave', gd2Unhover);
    document.getElementsByClassName("gd-example-svg-3").item(0).addEventListener('mouseenter', gd3Hover);
    document.getElementsByClassName("gd-example-svg-3").item(0).addEventListener('mouseleave', gd3Unhover);
    document.getElementsByClassName("gd-example-svg-4").item(0).addEventListener('mouseenter', gd4Hover);
    document.getElementsByClassName("gd-example-svg-4").item(0).addEventListener('mouseleave', gd4Unhover);
    document.getElementsByClassName("gd-example-svg-5").item(0).addEventListener('mouseenter', gd5Hover);
    document.getElementsByClassName("gd-example-svg-5").item(0).addEventListener('mouseleave', gd5Unhover);
    document.getElementsByClassName("gd-example-svg-6").item(0).addEventListener('mouseenter', gd6Hover);
    document.getElementsByClassName("gd-example-svg-6").item(0).addEventListener('mouseleave', gd6Unhover);
    document.getElementsByClassName("gd-example-svg-7").item(0).addEventListener('mouseenter', gd7Hover);
    document.getElementsByClassName("gd-example-svg-7").item(0).addEventListener('mouseleave', gd7Unhover);
    document.getElementsByClassName("gd-example-svg-8").item(0).addEventListener('mouseenter', gd8Hover);
    document.getElementsByClassName("gd-example-svg-8").item(0).addEventListener('mouseleave', gd8Unhover);
    document.getElementsByClassName("gd-example-svg-9").item(0).addEventListener('mouseenter', gd9Hover);
    document.getElementsByClassName("gd-example-svg-9").item(0).addEventListener('mouseleave', gd9Unhover);
    document.getElementsByClassName("gd-example-svg-10").item(0).addEventListener('mouseenter', gd10Hover);
    document.getElementsByClassName("gd-example-svg-10").item(0).addEventListener('mouseleave', gd10Unhover);
    document.getElementsByClassName("gd-example-svg-11").item(0).addEventListener('mouseenter', gd11Hover);
    document.getElementsByClassName("gd-example-svg-11").item(0).addEventListener('mouseleave', gd11Unhover);
    document.getElementsByClassName("gd-example-svg-12").item(0).addEventListener('mouseenter', gd12Hover);
    document.getElementsByClassName("gd-example-svg-12").item(0).addEventListener('mouseleave', gd12Unhover);
    document.getElementsByClassName("landscape-gd-title").item(0).addEventListener('mouseenter', gdTitHover);
    document.getElementsByClassName("landscape-gd-title").item(0).addEventListener('mouseleave', gdTitUnhover);
    document.getElementsByClassName("landscape-ui-title").item(0).addEventListener('mouseenter', uiTitHover);
    document.getElementsByClassName("landscape-ui-title").item(0).addEventListener('mouseleave', uiTitUnhover);
    document.getElementsByClassName("landscape-id-title").item(0).addEventListener('mouseenter', idTitHover);
    document.getElementsByClassName("landscape-id-title").item(0).addEventListener('mouseleave', idTitUnhover);

}

function gdOsbFocus(){
    document.getElementsByClassName("gd-example-div-1").item(0).classList.add('unBlur');
    document.getElementsByClassName("gd-example-div-2").item(0).classList.add('unBlur');
    document.getElementsByClassName("gd-example-div-6").item(0).classList.add('unBlur');
    document.getElementsByClassName("gd-example-div-7").item(0).classList.add('unBlur');
    document.getElementsByClassName("gd-example-div-8").item(0).classList.add('unBlur');
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.add('unBlur')
    document.getElementsByClassName("gd-osb-description").item(0).classList.remove('invisible')
}
function gdOsbUnfocus(){
    document.getElementsByClassName("gd-example-div-1").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-div-2").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-div-6").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-div-7").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-div-8").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-svg-1").item(0).classList.add('lessOpacity');
    document.getElementsByClassName("gd-example-svg-2").item(0).classList.add('lessOpacity');
    document.getElementsByClassName("gd-example-svg-6").item(0).classList.add('lessOpacity');
    document.getElementsByClassName("gd-example-svg-7").item(0).classList.add('lessOpacity');
    document.getElementsByClassName("gd-example-svg-8").item(0).classList.add('lessOpacity');
}
function gdEuhFocus(){
    document.getElementsByClassName("gd-example-div-3").item(0).classList.add('unBlur');
    document.getElementsByClassName("gd-example-div-4").item(0).classList.add('unBlur');
    document.getElementsByClassName("gd-example-div-5").item(0).classList.add('unBlur');
    document.getElementsByClassName("gd-example-div-9").item(0).classList.add('unBlur');
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.add('unBlur')
    document.getElementsByClassName("gd-euh-description").item(0).classList.remove('invisible')
}
function gdEuhUnfocus(){
    document.getElementsByClassName("gd-example-div-3").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-div-4").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-div-5").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-div-9").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-svg-3").item(0).classList.add('lessOpacity');
    document.getElementsByClassName("gd-example-svg-4").item(0).classList.add('lessOpacity');
    document.getElementsByClassName("gd-example-svg-5").item(0).classList.add('lessOpacity');
    document.getElementsByClassName("gd-example-svg-9").item(0).classList.add('lessOpacity');
}
function gdMiscFocus() {
    document.getElementsByClassName("gd-example-div-10").item(0).classList.add('unBlur');
    document.getElementsByClassName("gd-example-div-11").item(0).classList.add('unBlur');
    document.getElementsByClassName("gd-example-div-12").item(0).classList.add('unBlur');
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.add('unBlur')
    document.getElementsByClassName("gd-misc-description").item(0).classList.remove('invisible')
}
function gdMiscUnfocus(){
    document.getElementsByClassName("gd-example-div-10").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-svg-10").item(0).classList.add('lessOpacity');
    document.getElementsByClassName("gd-example-div-11").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-svg-11").item(0).classList.add('lessOpacity');
    document.getElementsByClassName("gd-example-div-12").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-svg-12").item(0).classList.add('lessOpacity');
}
function gdAllFocus(){
    document.getElementsByClassName("gd-example-div-1").item(0).classList.add('unBlur');
    document.getElementsByClassName("gd-example-div-2").item(0).classList.add('unBlur');
    document.getElementsByClassName("gd-example-div-3").item(0).classList.add('unBlur');
    document.getElementsByClassName("gd-example-div-4").item(0).classList.add('unBlur');
    document.getElementsByClassName("gd-example-div-5").item(0).classList.add('unBlur');
    document.getElementsByClassName("gd-example-div-6").item(0).classList.add('unBlur');
    document.getElementsByClassName("gd-example-div-7").item(0).classList.add('unBlur');
    document.getElementsByClassName("gd-example-div-8").item(0).classList.add('unBlur');
    document.getElementsByClassName("gd-example-div-9").item(0).classList.add('unBlur');
    document.getElementsByClassName("gd-example-div-10").item(0).classList.add('unBlur');
    document.getElementsByClassName("gd-example-div-11").item(0).classList.add('unBlur');
    document.getElementsByClassName("gd-example-div-12").item(0).classList.add('unBlur');
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.add('unBlur')
}
function gdAllUnfocus(){
    document.getElementsByClassName("gd-example-div-1").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-div-2").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-div-3").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-div-4").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-div-5").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-div-6").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-div-7").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-div-8").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-div-9").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-div-10").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-div-11").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-div-12").item(0).classList.add('moreBlur');
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.add('moreBlur');
    document.getElementsByClassName("gd-example-svg-1").item(0).classList.add('lessOpacity');
    document.getElementsByClassName("gd-example-svg-2").item(0).classList.add('lessOpacity');
    document.getElementsByClassName("gd-example-svg-3").item(0).classList.add('lessOpacity');
    document.getElementsByClassName("gd-example-svg-4").item(0).classList.add('lessOpacity');
    document.getElementsByClassName("gd-example-svg-5").item(0).classList.add('lessOpacity');
    document.getElementsByClassName("gd-example-svg-6").item(0).classList.add('lessOpacity');
    document.getElementsByClassName("gd-example-svg-7").item(0).classList.add('lessOpacity');
    document.getElementsByClassName("gd-example-svg-8").item(0).classList.add('lessOpacity');
    document.getElementsByClassName("gd-example-svg-9").item(0).classList.add('lessOpacity');
    document.getElementsByClassName("gd-example-svg-10").item(0).classList.add('lessOpacity');
    document.getElementsByClassName("gd-example-svg-11").item(0).classList.add('lessOpacity');
    document.getElementsByClassName("gd-example-svg-12").item(0).classList.add('lessOpacity');
    document.getElementsByClassName("landscape-gd-title").item(0).classList.add('lessOpacity');
}

function uiAllFocus(){
    document.getElementsByClassName("landscape-ui-title-div").item(0).classList.add('unBlur');
    document.getElementsByClassName("coming-soon").item(0).classList.add("unBlur");
    document.getElementsByClassName("coming-soon").item(0).classList.remove("invisible");

}
function uiAllUnfocus(){
    document.getElementsByClassName("landscape-ui-title-div").item(0).classList.add('moreBlur');
    document.getElementsByClassName("landscape-ui-title").item(0).classList.add('lessOpacity')
}

function idAllFocus(){
    document.getElementsByClassName("landscape-id-title-div").item(0).classList.add('unBlur');
    document.getElementsByClassName("coming-soon").item(0).classList.add("unBlur");
    document.getElementsByClassName("coming-soon").item(0).classList.remove("invisible");

}
function idAllUnfocus(){
    document.getElementsByClassName("landscape-id-title-div").item(0).classList.add('moreBlur');
    document.getElementsByClassName("landscape-id-title").item(0).classList.add('lessOpacity')
}

function returnAll(){
    removeAllLessOpacity();
    removeAllMoreBlur();
    removeAllUnBlur();
    hideAllDescriptors();
}
function reset(){
    if (isSomethingHovered === 0) {
        returnAll();
        whatsClicked = 0;
    }
}
function removeAllMoreBlur() {
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("landscape-ui-title-div").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("landscape-id-title-div").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("gd-example-div-1").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("gd-example-div-2").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("gd-example-div-3").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("gd-example-div-4").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("gd-example-div-5").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("gd-example-div-6").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("gd-example-div-7").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("gd-example-div-8").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("gd-example-div-9").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("gd-example-div-10").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("gd-example-div-11").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("gd-example-div-12").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("about-div").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("about-div").item(0).classList.remove("moreBlur");
}
function removeAllLessOpacity() {
    document.getElementsByClassName("landscape-gd-title").item(0).classList.remove("lessOpacity");
    document.getElementsByClassName("landscape-ui-title").item(0).classList.remove("lessOpacity");
    document.getElementsByClassName("landscape-id-title").item(0).classList.remove("lessOpacity");
    document.getElementsByClassName("gd-example-svg-1").item(0).classList.remove("lessOpacity");
    document.getElementsByClassName("gd-example-svg-2").item(0).classList.remove("lessOpacity");
    document.getElementsByClassName("gd-example-svg-3").item(0).classList.remove("lessOpacity");
    document.getElementsByClassName("gd-example-svg-4").item(0).classList.remove("lessOpacity");
    document.getElementsByClassName("gd-example-svg-5").item(0).classList.remove("lessOpacity");
    document.getElementsByClassName("gd-example-svg-6").item(0).classList.remove("lessOpacity");
    document.getElementsByClassName("gd-example-svg-7").item(0).classList.remove("lessOpacity");
    document.getElementsByClassName("gd-example-svg-8").item(0).classList.remove("lessOpacity");
    document.getElementsByClassName("gd-example-svg-9").item(0).classList.remove("lessOpacity");
    document.getElementsByClassName("gd-example-svg-10").item(0).classList.remove("lessOpacity");
    document.getElementsByClassName("gd-example-svg-11").item(0).classList.remove("lessOpacity");
    document.getElementsByClassName("gd-example-svg-12").item(0).classList.remove("lessOpacity");
    document.getElementsByClassName("about").item(0).classList.remove("lessOpacity");
    document.getElementsByClassName("about").item(0).classList.remove("lessOpacity")
}
function removeAllUnBlur() {
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.remove("unBlur");
    document.getElementsByClassName("landscape-ui-title-div").item(0).classList.remove("unBlur");
    document.getElementsByClassName("landscape-id-title-div").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-1").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-2").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-3").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-4").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-5").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-6").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-7").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-8").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-9").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-10").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-11").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-12").item(0).classList.remove("unBlur");
}
function hideAllDescriptors() {
    document.getElementsByClassName("gd-osb-description").item(0).classList.add('invisible');
    document.getElementsByClassName("gd-euh-description").item(0).classList.add('invisible');
    document.getElementsByClassName("gd-misc-description").item(0).classList.add('invisible');
    document.getElementsByClassName("coming-soon").item(0).classList.add("invisible");
}
function aboutUnfocus() {
    document.getElementsByClassName("about-div").item(0).classList.add("moreBlur");
    document.getElementsByClassName("about").item(0).classList.add("lessOpacity")
}
/* End of Helper Function */
