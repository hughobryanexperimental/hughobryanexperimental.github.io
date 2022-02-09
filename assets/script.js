/* Beginning of Start Up */
document.getElementsByClassName("logo-svg").item(0).addEventListener('click', startUp);
document.getElementsByClassName("logo-svg").item(0).addEventListener('mouseenter', logoUnBlur);
document.getElementsByClassName("logo-svg").item(0).addEventListener('mouseleave', logoBlur);

if (navigator.maxTouchPoints > 0) {
    document.getElementsByClassName("name").item(0).classList.remove("invisible");
    x = true;
}

// if (aspect_ratio < (10 / 12)) {
//     document.getElementsByClassName("name invisible").item(0).classList.remove("invisible");
//     document.getElementsByClassName("logo-svg").item(0).removeEventListener('click', startUp);
//     document.getElementsByClassName("logo-svg").item(0).removeEventListener('mouseenter', logoUnBlur);
//     document.getElementsByClassName("logo-svg").item(0).removeEventListener('mouseleave', logoBlur);
//
// }
let isLogoMoved = false;
if (isLogoMoved === false) {
    window.setTimeout(function () {
        document.getElementsByClassName("click").item(0).classList.add("unBlur");
    }, 5000);
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
    if (isLogoMoved === false) {
        document.getElementsByClassName("logo-div").item(0).classList.add("logo-move");
        document.getElementsByClassName("logo-div").item(0).classList.add("unBlur");
        document.getElementsByClassName("click").item(0).classList.add("noOpacity");
        window.setTimeout(function () {
            document.getElementsByClassName("name invisible").item(0).classList.remove("invisible");
        }, 800);
        window.setTimeout(function () {
            document.getElementsByClassName("gd-example-div-5").item(0).classList.remove("invisible");
        }, 900)
        window.setTimeout(function () {
            document.getElementsByClassName("gd-example-div-2").item(0).classList.remove("invisible");
        }, 1000)
        window.setTimeout(function () {
            document.getElementsByClassName("gd-example-div-1").item(0).classList.remove("invisible");
        }, 1000)
        window.setTimeout(function () {
            document.getElementsByClassName("gd-example-div-3").item(0).classList.remove("invisible");
        }, 1100)
        window.setTimeout(function () {
            document.getElementsByClassName("gd-example-div-4").item(0).classList.remove("invisible");
        }, 1100)
        window.setTimeout(function () {
            document.getElementsByClassName("gd-example-div-6").item(0).classList.remove("invisible");
        }, 1200)
        window.setTimeout(function () {
            document.getElementsByClassName("gd-example-div-7").item(0).classList.remove("invisible");
        }, 1275)
        window.setTimeout(function () {
            document.getElementsByClassName("gd-example-div-8").item(0).classList.remove("invisible");
        }, 1350)
        window.setTimeout(function () {
            document.getElementsByClassName("gd-example-div-9").item(0).classList.remove("invisible");
        }, 1400)
        window.setTimeout(function () {
            document.getElementsByClassName("landscape-gd-title-div").item(0).classList.remove("invisible");
        }, 1200)
        window.setTimeout(function () {
            document.getElementsByClassName("landscape-ui-title-div").item(0).classList.remove("invisible");
        }, 1250)
        window.setTimeout(function () {
            document.getElementsByClassName("landscape-id-title-div").item(0).classList.remove("invisible");
        }, 1300)
        addAllHovers();
        addAllTitleHovers();
        document.getElementById("container").addEventListener('click', returnBlur)
        document.getElementsByClassName("about-div").item(0).classList.remove("invisible")
        document.getElementsByClassName("about-div").item(0).classList.add("unBlur")
        document.body.style.overflow = "visible";
        isLogoMoved = true;
    }
}

/* End of Start Up */
let whatsHovered = 0;
let whatsClicked = 0;

/* Start of GD SVG 1 */
function gdSvg1Hover() {
    whatsHovered = 11;
    document.getElementsByClassName("gd-example-svg-1").item(0).addEventListener('click', osbClick);
    if (whatsClicked === 0) {
        osbFocus(1);
        uiMoreBlur();
        idMoreBlur();
        aboutMoreBlur();
    }
}

function gdSvg1UnHover() {
    whatsHovered = 0; //00
    if (whatsClicked === 0) {
        document.getElementsByClassName("gd-example-svg-1").item(0).removeEventListener('click', osbClick);
        returnBlur();
    }
}

/* End of GD SVG 1 */

/* Start of GD SVG 2 */
function gdSvg2Hover() {
    whatsHovered = 12;
    document.getElementsByClassName("gd-example-svg-2").item(0).addEventListener('click', osbClick);
    if (whatsClicked === 0) {
        osbFocus(1);
        uiMoreBlur();
        idMoreBlur();
        aboutMoreBlur();
    }
}

function gdSvg2UnHover() {
    whatsHovered = 0; //00
    if (whatsClicked === 0) {
        document.getElementsByClassName("gd-example-svg-2").item(0).removeEventListener('click', osbClick);
        returnBlur();
    }
}
/* End of GD SVG 2 */

/* Start of GD SVG 3 */
function gdSvg3Hover() {
    whatsHovered = 13;
    document.getElementsByClassName("gd-example-svg-3").item(0).addEventListener('click', euhClick);
    if (whatsClicked === 0) {
        euhFocus(1);
        uiMoreBlur();
        idMoreBlur();
        aboutMoreBlur();
    }
}

function gdSvg3UnHover() {
    whatsHovered = 0; //00
    if (whatsClicked === 0) {
        document.getElementsByClassName("gd-example-svg-3").item(0).removeEventListener('click', euhClick);
        returnBlur();
    }
}

/* End of GD SVG 3 */

/* Start of GD SVG 4 */
function gdSvg4Hover() {
    whatsHovered = 14;
    document.getElementsByClassName("gd-example-svg-4").item(0).addEventListener('click', euhClick);
    if (whatsClicked === 0) {
        euhFocus(1);
        uiMoreBlur();
        idMoreBlur();
        aboutMoreBlur();
    }
}

function gdSvg4UnHover() {
    whatsHovered = 0; //00
    if (whatsClicked === 0) {
        document.getElementsByClassName("gd-example-svg-4").item(0).removeEventListener('click', euhClick);
        returnBlur();
    }
}

/* End of GD SVG 4 */

/* Start of GD SVG 5 */
function gdSvg5Hover() {
    whatsHovered = 15;
    document.getElementsByClassName("gd-example-svg-5").item(0).addEventListener('click', euhClick);
    if (whatsClicked === 0) {
        euhFocus(1);
        uiMoreBlur();
        idMoreBlur();
        aboutMoreBlur();
    }
}

function gdSvg5UnHover() {
    whatsHovered = 0; //00
    if (whatsClicked === 0) {
        document.getElementsByClassName("gd-example-svg-5").item(0).removeEventListener('click', euhClick);
        returnBlur();
    }
}
/* End of GD SVG 5 */

/* Start of GD SVG 6 */
function gdSvg6Hover() {
    whatsHovered = 16;
    document.getElementsByClassName("gd-example-svg-6").item(0).addEventListener('click', osbClick);
    if (whatsClicked === 0) {
        osbFocus(1);
        uiMoreBlur();
        idMoreBlur();
        aboutMoreBlur();
    }
}

function gdSvg6UnHover() {
    whatsHovered = 0; //00
    if (whatsClicked === 0) {
        document.getElementsByClassName("gd-example-svg-6").item(0).removeEventListener('click', osbClick);
        returnBlur();
    }
}
/* End of GD SVG 6 */

/* Start of GD SVG 7 */
function gdSvg7Hover() {
    whatsHovered = 17;
    document.getElementsByClassName("gd-example-svg-7").item(0).addEventListener('click', osbClick);
    if (whatsClicked === 0) {
        osbFocus(1);
        uiMoreBlur();
        idMoreBlur();
        aboutMoreBlur();
    }
}

function gdSvg7UnHover() {
    whatsHovered = 0; //00
    if (whatsClicked === 0) {
        document.getElementsByClassName("gd-example-svg-7").item(0).removeEventListener('click', osbClick);
        returnBlur();
    }
}
/* End of GD SVG 7 */

/* Start of GD SVG 8 */
function gdSvg8Hover() {
    whatsHovered = 18;
    document.getElementsByClassName("gd-example-svg-8").item(0).addEventListener('click', osbClick);
    if (whatsClicked === 0) {
        osbFocus(1);
        uiMoreBlur();
        idMoreBlur();
        aboutMoreBlur();
    }
}

function gdSvg8UnHover() {
    whatsHovered = 0; //00
    if (whatsClicked === 0) {
        document.getElementsByClassName("gd-example-svg-8").item(0).removeEventListener('click', osbClick);
        returnBlur();
    }
}
/* End of GD SVG 8 */

/* Start of GD SVG 9 */
function gdSvg9Hover() {
    whatsHovered = 19;
    document.getElementsByClassName("gd-example-svg-9").item(0).addEventListener('click', euhClick);
    if (whatsClicked === 0) {
        euhFocus(1);
        uiMoreBlur();
        idMoreBlur();
        aboutMoreBlur();
    }
}

function gdSvg9UnHover() {
    whatsHovered = 0; //00
    if (whatsClicked === 0) {
        document.getElementsByClassName("gd-example-svg-9").item(0).removeEventListener('click', euhClick);
        returnBlur();
    }
}
/* End of GD SVG 5 */

/* Start of GD Title 10 */
function gdTitleHover() {
    whatsHovered = 10;
    document.getElementsByClassName("landscape-gd-title-div").item(0).addEventListener('click', gdTitleClick);
    if (whatsClicked === 0) {
        gdUnBlur();
        uiMoreBlur();
        idMoreBlur();
        aboutMoreBlur();
    }
}

function gdTitleUnHover() {
    whatsHovered = 0; //00
    if (whatsClicked === 0) {
        document.getElementsByClassName("landscape-gd-title-div").item(0).removeEventListener('click', gdTitleClick);
        allBlur();
    }
}

/* End of GD Title 10 */

/* Start of UI Title 20 */
function uiTitleHover() {
    whatsHovered = 20;
    document.getElementsByClassName("landscape-ui-title-div").item(0).addEventListener('click', uiTitleClick);
    if (whatsClicked === 0) {
        uiUnBlur();
        gdMoreBlur();
        idMoreBlur();
        aboutMoreBlur();
    }
}

function uiTitleUnHover() {
    whatsHovered = 0; //00
    if (whatsClicked === 0) {
        document.getElementsByClassName("landscape-ui-title-div").item(0).removeEventListener('click', uiTitleClick);
        returnBlur();
    }
}

/* End of GD Title 20 */

/* Start of UI Title 30 */
function idTitleHover() {
    whatsHovered = 30;
    document.getElementsByClassName("landscape-id-title-div").item(0).addEventListener('click', idTitleClick);
    if (whatsClicked === 0) {
        gdMoreBlur();
        uiMoreBlur();
        idUnBlur();
        aboutMoreBlur();
    }
}

function idTitleUnHover() {
    whatsHovered = 0; //00
    if (whatsClicked === 0) {
        document.getElementsByClassName("landscape-id-title-div").item(0).removeEventListener('click', idTitleClick);
        returnBlur();
    }
}

/* End of GD Title 20 */
function osbClick() {
    if (whatsClicked === 11) {
        osbFocus();
        whatsClicked = 0; //00
    } else {
        osbFocus();
        document.getElementsByClassName("gd-osb-description").item(0).classList.remove("invisible");
        whatsClicked = 11;
    }

}

function osbFocus() {
    allBlur();
    uiMoreBlur();
    idMoreBlur();
    aboutMoreBlur();
    document.getElementsByClassName("landscape-gd-title-div").item(0).addEventListener('mouseenter', gdTitleHover);
    document.getElementsByClassName("landscape-gd-title-div").item(0).addEventListener('mouseleave', gdTitleUnHover);
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-1").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-2").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-6").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-7").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-8").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-3").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-4").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-5").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-9").item(0).classList.add("moreBlur");
}

function euhClick() {
    if (whatsClicked === 12) {
        euhFocus();
        whatsClicked = 0; //00
    } else {
        euhFocus();
        document.getElementsByClassName("gd-euh-description").item(0).classList.remove("invisible");
        whatsClicked = 12;
    }
}

function euhFocus() {
    allBlur();
    uiMoreBlur();
    idMoreBlur();
    aboutMoreBlur();
    document.getElementsByClassName("landscape-gd-title-div").item(0).addEventListener('mouseenter', gdTitleHover);
    document.getElementsByClassName("landscape-gd-title-div").item(0).addEventListener('mouseleave', gdTitleUnHover);
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-1").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-2").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-6").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-7").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-8").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-3").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-4").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-5").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-9").item(0).classList.add("unBlur");
}

function gdTitleClick() {
    if (whatsClicked === 10) {
        gdFocus(0);
        whatsClicked = 0; //00
    } else {
        gdFocus(1);
        whatsClicked = 10;
    }
}

function gdFocus(inp) {
    if (inp === 1) {
        allBlur();
        aboutMoreBlur();
        document.getElementsByClassName("landscape-ui-title-div").item(0).addEventListener('click', uiTitleClick)
        document.getElementsByClassName("landscape-id-title-div").item(0).addEventListener('click', idTitleClick)
        document.getElementsByClassName("gd-description").item(0).classList.remove("invisible")
        addAllGdHovers();
        gdUnBlur();
        uiMoreBlur();
        idMoreBlur();
    } else if (inp === 0) {
        document.getElementsByClassName("gd-description").item(0).classList.add("invisible");
        allBlur();
        gdUnBlur();
        whatsClicked = 0;
    }
}

function uiTitleClick() {
    if (whatsClicked === 20) {
        uiFocus(0);
        whatsClicked = 0; //00
    } else {
        uiFocus(1);
        whatsClicked = 20;
    }
}

function uiFocus(inp) {
    if (inp === 1) {
        document.getElementsByClassName("landscape-gd-title-div").item(0).addEventListener('click', gdTitleClick)
        document.getElementsByClassName("landscape-id-title-div").item(0).addEventListener('click', idTitleClick)
        allBlur();
        addAllUiHovers();
        gdMoreBlur();
        uiUnBlur();
        idMoreBlur();
        aboutMoreBlur();
    } else if (inp === 0) {
        allBlur();
        returnBlur();
    }
}

function idTitleClick() {
    if (whatsClicked === 30) {
        idFocus(0);
        whatsClicked = 0; //00
    } else {
        idFocus(1);
        whatsClicked = 30;
    }
}

function idFocus(inp) {
    if (inp === 1) {
        document.getElementsByClassName("landscape-gd-title-div").item(0).addEventListener('click', gdTitleClick)
        document.getElementsByClassName("landscape-ui-title-div").item(0).addEventListener('click', uiTitleClick)
        allBlur();
        addAllIdHovers();
        gdMoreBlur();
        uiMoreBlur();
        idUnBlur();
        aboutMoreBlur();
    } else if (inp === 0) {
        returnBlur();
    }
}

function returnBlur() {
    switch (whatsHovered) {
        case 0:
            allBlur();
            removeAllTitleHovers();
            removeAllHovers();
            addAllTitleHovers();
            addAllHovers();
            removeAllTitleClicks();
            whatsClicked = 0;
            break;
    }
}

function allBlur() {
    removeMoreBlur();
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
    document.getElementsByClassName("coming-soon").item(0).classList.add("invisible");
    document.getElementsByClassName("gd-osb-description").item(0).classList.add("invisible");
    document.getElementsByClassName("gd-euh-description").item(0).classList.add("invisible");
    document.getElementsByClassName("gd-description").item(0).classList.add("invisible");
}

function removeMoreBlur() {
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
    document.getElementsByClassName("about-div").item(0).classList.remove("moreBlur");
}

function gdUnBlur() {
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-1").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-2").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-3").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-4").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-5").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-6").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-7").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-8").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-9").item(0).classList.add("unBlur");
}

function uiUnBlur() {
    document.getElementsByClassName("landscape-ui-title-div").item(0).classList.add("unBlur");
    document.getElementsByClassName("coming-soon").item(0).classList.add("unBlur");
    document.getElementsByClassName("coming-soon").item(0).classList.remove("invisible");
}

function idUnBlur() {
    document.getElementsByClassName("landscape-id-title-div").item(0).classList.add("unBlur");
    document.getElementsByClassName("coming-soon").item(0).classList.add("unBlur");
    document.getElementsByClassName("coming-soon").item(0).classList.remove("invisible");
}

function gdMoreBlur() {
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-1").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-2").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-3").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-4").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-5").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-6").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-7").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-8").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-9").item(0).classList.add("moreBlur");
}

function uiMoreBlur() {
    document.getElementsByClassName("landscape-ui-title-div").item(0).classList.add("moreBlur");
}

function idMoreBlur() {
    document.getElementsByClassName("landscape-id-title-div").item(0).classList.add("moreBlur");
}

function removeAllTitleHovers() {
    document.getElementsByClassName("landscape-gd-title-div").item(0).removeEventListener('mouseenter', gdTitleHover);
    document.getElementsByClassName("landscape-gd-title-div").item(0).removeEventListener('mouseleave', gdTitleUnHover);
    document.getElementsByClassName("landscape-ui-title-div").item(0).removeEventListener('mouseenter', uiTitleHover);
    document.getElementsByClassName("landscape-ui-title-div").item(0).removeEventListener('mouseleave', uiTitleUnHover);
    document.getElementsByClassName("landscape-id-title-div").item(0).removeEventListener('mouseenter', idTitleHover);
    document.getElementsByClassName("landscape-id-title-div").item(0).removeEventListener('mouseleave', idTitleUnHover);
}

function addAllTitleHovers() {
    document.getElementsByClassName("landscape-gd-title-div").item(0).addEventListener('mouseenter', gdTitleHover);
    document.getElementsByClassName("landscape-gd-title-div").item(0).addEventListener('mouseleave', gdTitleUnHover);
    document.getElementsByClassName("landscape-ui-title-div").item(0).addEventListener('mouseenter', uiTitleHover);
    document.getElementsByClassName("landscape-ui-title-div").item(0).addEventListener('mouseleave', uiTitleUnHover);
    document.getElementsByClassName("landscape-id-title-div").item(0).addEventListener('mouseenter', idTitleHover);
    document.getElementsByClassName("landscape-id-title-div").item(0).addEventListener('mouseleave', idTitleUnHover);
}

function removeAllHovers() {
    document.getElementsByClassName("gd-example-svg-1").item(0).removeEventListener('mouseenter', gdSvg1Hover);
    document.getElementsByClassName("gd-example-svg-1").item(0).removeEventListener('mouseleave', gdSvg1UnHover);
    document.getElementsByClassName("gd-example-svg-2").item(0).removeEventListener('mouseleave', gdSvg2UnHover);
    document.getElementsByClassName("gd-example-svg-2").item(0).removeEventListener('mouseenter', gdSvg2Hover);
    document.getElementsByClassName("gd-example-svg-3").item(0).removeEventListener('mouseleave', gdSvg3UnHover);
    document.getElementsByClassName("gd-example-svg-3").item(0).removeEventListener('mouseenter', gdSvg3Hover);
    document.getElementsByClassName("gd-example-svg-4").item(0).removeEventListener('mouseenter', gdSvg4Hover);
    document.getElementsByClassName("gd-example-svg-4").item(0).removeEventListener('mouseleave', gdSvg4UnHover);
    document.getElementsByClassName("gd-example-svg-5").item(0).removeEventListener('mouseenter', gdSvg5Hover);
    document.getElementsByClassName("gd-example-svg-5").item(0).removeEventListener('mouseleave', gdSvg5UnHover);
    document.getElementsByClassName("gd-example-svg-6").item(0).removeEventListener('mouseenter', gdSvg6Hover);
    document.getElementsByClassName("gd-example-svg-6").item(0).removeEventListener('mouseleave', gdSvg6UnHover);
    document.getElementsByClassName("gd-example-svg-7").item(0).removeEventListener('mouseenter', gdSvg7Hover);
    document.getElementsByClassName("gd-example-svg-7").item(0).removeEventListener('mouseleave', gdSvg7UnHover);
    document.getElementsByClassName("gd-example-svg-8").item(0).removeEventListener('mouseenter', gdSvg8Hover);
    document.getElementsByClassName("gd-example-svg-8").item(0).removeEventListener('mouseleave', gdSvg8UnHover);
    document.getElementsByClassName("gd-example-svg-9").item(0).removeEventListener('mouseenter', gdSvg9Hover);
    document.getElementsByClassName("gd-example-svg-9").item(0).removeEventListener('mouseleave', gdSvg9UnHover);

}

function addAllHovers() {
    document.getElementsByClassName("gd-example-svg-1").item(0).addEventListener('mouseenter', gdSvg1Hover);
    document.getElementsByClassName("gd-example-svg-1").item(0).addEventListener('mouseleave', gdSvg1UnHover);
    document.getElementsByClassName("gd-example-svg-2").item(0).addEventListener('mouseenter', gdSvg2Hover);
    document.getElementsByClassName("gd-example-svg-2").item(0).addEventListener('mouseleave', gdSvg2UnHover);
    document.getElementsByClassName("gd-example-svg-3").item(0).addEventListener('mouseenter', gdSvg3Hover);
    document.getElementsByClassName("gd-example-svg-3").item(0).addEventListener('mouseleave', gdSvg3UnHover);
    document.getElementsByClassName("gd-example-svg-4").item(0).addEventListener('mouseenter', gdSvg4Hover);
    document.getElementsByClassName("gd-example-svg-4").item(0).addEventListener('mouseleave', gdSvg4UnHover);
    document.getElementsByClassName("gd-example-svg-5").item(0).addEventListener('mouseenter', gdSvg5Hover);
    document.getElementsByClassName("gd-example-svg-5").item(0).addEventListener('mouseleave', gdSvg5UnHover);
    document.getElementsByClassName("gd-example-svg-6").item(0).addEventListener('mouseenter', gdSvg6Hover);
    document.getElementsByClassName("gd-example-svg-6").item(0).addEventListener('mouseleave', gdSvg6UnHover);
    document.getElementsByClassName("gd-example-svg-7").item(0).addEventListener('mouseenter', gdSvg7Hover);
    document.getElementsByClassName("gd-example-svg-7").item(0).addEventListener('mouseleave', gdSvg7UnHover);
    document.getElementsByClassName("gd-example-svg-8").item(0).addEventListener('mouseenter', gdSvg8Hover);
    document.getElementsByClassName("gd-example-svg-8").item(0).addEventListener('mouseleave', gdSvg8UnHover);
    document.getElementsByClassName("gd-example-svg-9").item(0).addEventListener('mouseenter', gdSvg9Hover);
    document.getElementsByClassName("gd-example-svg-9").item(0).addEventListener('mouseleave', gdSvg9UnHover);

}

function addAllGdHovers() {
    document.getElementsByClassName("gd-example-svg-1").item(0).addEventListener('mouseenter', gdSvg1Hover);
    document.getElementsByClassName("gd-example-svg-1").item(0).addEventListener('mouseleave', gdSvg1UnHover);
    document.getElementsByClassName("gd-example-svg-2").item(0).addEventListener('mouseenter', gdSvg2Hover);
    document.getElementsByClassName("gd-example-svg-2").item(0).addEventListener('mouseleave', gdSvg2UnHover);
    document.getElementsByClassName("gd-example-svg-3").item(0).addEventListener('mouseenter', gdSvg3Hover);
    document.getElementsByClassName("gd-example-svg-3").item(0).addEventListener('mouseleave', gdSvg3UnHover);
    document.getElementsByClassName("gd-example-svg-4").item(0).addEventListener('mouseenter', gdSvg4Hover);
    document.getElementsByClassName("gd-example-svg-5").item(0).addEventListener('mouseleave', gdSvg4UnHover);
    document.getElementsByClassName("gd-example-svg-5").item(0).addEventListener('mouseenter', gdSvg5Hover);
    document.getElementsByClassName("gd-example-svg-5").item(0).addEventListener('mouseleave', gdSvg5UnHover);
    document.getElementsByClassName("gd-example-svg-6").item(0).addEventListener('mouseenter', gdSvg6Hover);
    document.getElementsByClassName("gd-example-svg-6").item(0).addEventListener('mouseleave', gdSvg6UnHover);
    document.getElementsByClassName("gd-example-svg-7").item(0).addEventListener('mouseenter', gdSvg7Hover);
    document.getElementsByClassName("gd-example-svg-7").item(0).addEventListener('mouseleave', gdSvg7UnHover);
    document.getElementsByClassName("gd-example-svg-8").item(0).addEventListener('mouseenter', gdSvg8Hover);
    document.getElementsByClassName("gd-example-svg-8").item(0).addEventListener('mouseleave', gdSvg8UnHover);
    document.getElementsByClassName("gd-example-svg-9").item(0).addEventListener('mouseenter', gdSvg9Hover);
    document.getElementsByClassName("gd-example-svg-9").item(0).addEventListener('mouseleave', gdSvg9UnHover);

}

function addAllUiHovers() {
}

function addAllIdHovers() {
}

function removeAllTitleClicks() {
    document.getElementsByClassName("landscape-gd-title-div").item(0).removeEventListener('click', gdTitleClick)
    document.getElementsByClassName("landscape-ui-title-div").item(0).removeEventListener('click', uiTitleClick)
    document.getElementsByClassName("landscape-id-title-div").item(0).removeEventListener('click', idTitleClick)
}

function aboutMoreBlur() {
    document.getElementsByClassName("about-div").item(0).classList.add("moreBlur")
}
