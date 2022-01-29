/* Beginning of Start Up */
let isLogoMoved = false;
if (isLogoMoved === false) {
    window.setTimeout(function () {
        document.getElementsByClassName("click").item(0).classList.add("unBlur");
    }, 5000);
}
function startUp(){
    if (isLogoMoved === false) {
        document.getElementsByClassName("logo-div").item(0).classList.add("logo-move");
        document.getElementsByClassName("logo-div").item(0).classList.add("unBlur");
        document.getElementsByClassName("click").item(0).classList.add("noOpacity");
        window.setTimeout(function () {
            document.getElementsByClassName("name invisible").item(0).classList.remove("invisible");
        }, 800);
        window.setTimeout(function(){
            document.getElementsByClassName("gd-example-div-5").item(0).classList.remove("invisible");
        }, 900)
        window.setTimeout(function(){
            document.getElementsByClassName("gd-example-div-2").item(0).classList.remove("invisible");
        }, 1000)
        window.setTimeout(function(){
            document.getElementsByClassName("gd-example-div-1").item(0).classList.remove("invisible");
        }, 1000)
        window.setTimeout(function(){
            document.getElementsByClassName("gd-example-div-3").item(0).classList.remove("invisible");
        }, 1100)
        window.setTimeout(function(){
            document.getElementsByClassName("gd-example-div-4").item(0).classList.remove("invisible");
        }, 1100)
        window.setTimeout(function(){
            document.getElementsByClassName("landscape-gd-title-div").item(0).classList.remove("invisible");
        }, 1200)
        window.setTimeout(function(){
            document.getElementsByClassName("landscape-ui-title-div").item(0).classList.remove("invisible");
        }, 1250)
        window.setTimeout(function(){
            document.getElementsByClassName("landscape-id-title-div").item(0).classList.remove("invisible");
        }, 1300)
        addAllHovers();
        addAllTitleHovers();
        document.getElementById("container").addEventListener('click', returnBlur)
        isLogoMoved = true;
    }
}
function logoBlur(){
    let logo = document.getElementsByClassName("logo-div").item(0);
    if (!logo.classList.contains("logo-move")) {
        document.getElementsByClassName("logo-div").item(0).classList.remove("unBlur")
    }
}
function logoUnBlur(){
    let logo = document.getElementsByClassName("logo-div").item(0);
    if (!logo.classList.contains("logo-move")) {
        document.getElementsByClassName("logo-div").item(0).classList.add("unBlur")
    }
}
document.getElementsByClassName("logo-svg").item(0).addEventListener('click',startUp);
document.getElementsByClassName("logo-svg").item(0).addEventListener('mouseenter',logoUnBlur);
document.getElementsByClassName("logo-svg").item(0).addEventListener('mouseleave',logoBlur);
/* End of Start Up */
let whatsHovered = 0;
let whatsClicked = 0;
/* Start of GD SVG 1 */
function gdSvg1Hover() {
    if (whatsClicked === 0 || whatsClicked === 11 || whatsClicked === 12) {
        whatsHovered = 11;
        document.getElementsByClassName("gd-example-svg-1").item(0).addEventListener('click', osbClick);
        gdUnBlur();
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
    //if (whatsClicked === 0 || whatsClicked === 11 || whatsClicked === 12) {
        whatsHovered = 12;
        document.getElementsByClassName("gd-example-svg-2").item(0).addEventListener('click', osbClick);
        gdUnBlur();
    //}
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
    //if (whatsClicked === 0 || whatsClicked === 12) {
        whatsHovered = 13;
        document.getElementsByClassName("gd-example-svg-3").item(0).addEventListener('click', euhClick);
        gdUnBlur();
    //}
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
    //if (whatsClicked === 0 || whatsClicked === 12) {
        whatsHovered = 14;
        document.getElementsByClassName("gd-example-svg-4").item(0).addEventListener('click', euhClick);
        gdUnBlur();
    //}
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
    //if (whatsClicked === 0 || whatsClicked === 12) {
        whatsHovered = 15;
        document.getElementsByClassName("gd-example-svg-5").item(0).addEventListener('click', euhClick);
        gdUnBlur();
    //}
}
function gdSvg5UnHover() {
    whatsHovered = 0; //00
    if (whatsClicked === 0) {
        document.getElementsByClassName("gd-example-svg-5").item(0).removeEventListener('click', euhClick);
        returnBlur();
    }
}
/* End of GD SVG 5 */
/* Start of GD Title 10 */
function gdTitleHover() {
    whatsHovered = 10;
    document.getElementsByClassName("landscape-gd-title-div").item(0).addEventListener('click', gdTitleClick);
    if (whatsClicked === 0) {
        uiMoreBlur();
        gdUnBlur();
        idMoreBlur();
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
        allBlur();
        uiUnBlur();
        gdMoreBlur();
        idMoreBlur();
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
        removeBlur();
        gdMoreBlur();
        uiMoreBlur();
        idUnBlur();
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
        osbFocus(0);
        whatsClicked = 0; //00
    } else {
        osbFocus(1);
        whatsClicked = 11;
    }

}
function euhClick() {
    if (whatsClicked === 12) {
        euhFocus(0)
        whatsClicked = 0; //00
    } else {
        euhFocus(1);
        whatsClicked = 12;
    }
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
function uiTitleClick() {
    if (whatsClicked === 20) {
        uiFocus(0);
        whatsClicked = 0; //00
    } else {
        uiFocus(1);
        whatsClicked = 20;
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
function returnBlur() {
    switch(whatsHovered) {
        case 0:
            allBlur();
            removeAllTitleHovers();
            removeAllHovers();
            addAllTitleHovers();
            addAllHovers();
            removeAllTitleClicks();
            whatsClicked = 0;
            console.log('return')
            break;
    }
}
function allBlur() {
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("landscape-ui-title-div").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("landscape-id-title-div").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("gd-example-div-1").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("gd-example-div-2").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("gd-example-div-3").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("gd-example-div-4").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("gd-example-div-5").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.remove("unBlur");
    document.getElementsByClassName("landscape-ui-title-div").item(0).classList.remove("unBlur");
    document.getElementsByClassName("landscape-id-title-div").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-1").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-2").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-3").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-4").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-5").item(0).classList.remove("unBlur");
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.remove("Blur");
    document.getElementsByClassName("landscape-ui-title-div").item(0).classList.remove("Blur");
    document.getElementsByClassName("landscape-id-title-div").item(0).classList.remove("Blur");
    document.getElementsByClassName("gd-example-div-1").item(0).classList.remove("Blur");
    document.getElementsByClassName("gd-example-div-2").item(0).classList.remove("Blur");
    document.getElementsByClassName("gd-example-div-3").item(0).classList.remove("Blur");
    document.getElementsByClassName("gd-example-div-4").item(0).classList.remove("Blur");
    document.getElementsByClassName("gd-example-div-5").item(0).classList.remove("Blur");
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.add("Blur");
    document.getElementsByClassName("landscape-ui-title-div").item(0).classList.add("Blur");
    document.getElementsByClassName("landscape-id-title-div").item(0).classList.add("Blur");
    document.getElementsByClassName("gd-example-div-1").item(0).classList.add("Blur");
    document.getElementsByClassName("gd-example-div-2").item(0).classList.add("Blur");
    document.getElementsByClassName("gd-example-div-3").item(0).classList.add("Blur");
    document.getElementsByClassName("gd-example-div-4").item(0).classList.add("Blur");
    document.getElementsByClassName("gd-example-div-5").item(0).classList.add("Blur");
}
function removeBlur() {
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("landscape-ui-title-div").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("landscape-id-title-div").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("gd-example-div-1").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("gd-example-div-2").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("gd-example-div-3").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("gd-example-div-4").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("gd-example-div-5").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.remove("unBlur");
    document.getElementsByClassName("landscape-ui-title-div").item(0).classList.remove("unBlur");
    document.getElementsByClassName("landscape-id-title-div").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-1").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-2").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-3").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-4").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-5").item(0).classList.remove("unBlur");
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.remove("Blur");
    document.getElementsByClassName("landscape-ui-title-div").item(0).classList.remove("Blur");
    document.getElementsByClassName("landscape-id-title-div").item(0).classList.remove("Blur");
    document.getElementsByClassName("gd-example-div-1").item(0).classList.remove("Blur");
    document.getElementsByClassName("gd-example-div-2").item(0).classList.remove("Blur");
    document.getElementsByClassName("gd-example-div-3").item(0).classList.remove("Blur");
    document.getElementsByClassName("gd-example-div-4").item(0).classList.remove("Blur");
    document.getElementsByClassName("gd-example-div-5").item(0).classList.remove("Blur");
}
function gdUnBlur() {
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-1").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-2").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-3").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-4").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-5").item(0).classList.add("unBlur");
}
function uiUnBlur() {
    document.getElementsByClassName("landscape-ui-title-div").item(0).classList.add("unBlur");
}
function idUnBlur(){
    document.getElementsByClassName("landscape-id-title-div").item(0).classList.add("unBlur");
}
function gdMoreBlur(){
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-1").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-2").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-3").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-4").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-5").item(0).classList.add("moreBlur");
}
function uiMoreBlur(){
    document.getElementsByClassName("landscape-ui-title-div").item(0).classList.add("moreBlur");
}
function idMoreBlur(){
    document.getElementsByClassName("landscape-id-title-div").item(0).classList.add("moreBlur");
}
function osbFocus(inp){
    if (inp === 1) {
        removeAllTitleHovers();
        document.getElementsByClassName("landscape-gd-title-div").item(0).addEventListener('mouseenter', gdTitleHover);
        document.getElementsByClassName("landscape-gd-title-div").item(0).addEventListener('mouseleave', gdTitleUnHover);
        document.getElementsByClassName("gd-example-div-1").item(0).classList.remove("moreBlur");
        document.getElementsByClassName("gd-example-div-2").item(0).classList.remove("moreBlur");
        document.getElementsByClassName("gd-example-div-3").item(0).classList.add("moreBlur");
        document.getElementsByClassName("gd-example-div-4").item(0).classList.add("moreBlur");
        document.getElementsByClassName("gd-example-div-5").item(0).classList.add("moreBlur");
    } else if (inp === 0) {
        returnBlur();
    }
}
function euhFocus(inp){
    if (inp === 1) {
        removeAllTitleHovers();
        document.getElementsByClassName("landscape-gd-title-div").item(0).addEventListener('mouseenter', gdTitleHover);
        document.getElementsByClassName("landscape-gd-title-div").item(0).addEventListener('mouseleave', gdTitleUnHover);
        document.getElementsByClassName("gd-example-div-1").item(0).classList.add("moreBlur");
        document.getElementsByClassName("gd-example-div-2").item(0).classList.add("moreBlur");
        document.getElementsByClassName("gd-example-div-3").item(0).classList.remove("moreBlur");
        document.getElementsByClassName("gd-example-div-4").item(0).classList.remove("moreBlur");
        document.getElementsByClassName("gd-example-div-5").item(0).classList.remove("moreBlur");

    } else if (inp === 0) {
        returnBlur();
    }
}
function gdFocus(inp) {
    if (inp === 1) {
        removeAllHovers();
        addAllGdHovers();
        document.getElementsByClassName("landscape-ui-title-div").item(0).addEventListener('click', uiTitleClick)
        document.getElementsByClassName("landscape-id-title-div").item(0).addEventListener('click', idTitleClick)
        removeBlur();
        gdUnBlur();
        uiMoreBlur();
        idMoreBlur();
    } else if (inp === 0) {
        returnBlur();
    }
}
function uiFocus(inp) {
    if (inp === 1) {
        removeAllHovers();
        addAllUiHovers();
        document.getElementsByClassName("landscape-gd-title-div").item(0).addEventListener('click', gdTitleClick)
        document.getElementsByClassName("landscape-id-title-div").item(0).addEventListener('click', idTitleClick)
        removeBlur();
        gdMoreBlur();
        uiUnBlur();
        idMoreBlur();
    } else if (inp === 0) {
        returnBlur();
    }
}
function idFocus(inp){
    if (inp === 1) {
        removeAllHovers();
        addAllIdHovers();
        document.getElementsByClassName("landscape-gd-title-div").item(0).addEventListener('click', gdTitleClick)
        document.getElementsByClassName("landscape-ui-title-div").item(0).addEventListener('click', uiTitleClick)
        removeBlur();
        gdMoreBlur();
        uiMoreBlur();
        idUnBlur();
    } else if (inp === 0) {
        returnBlur();
    }
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
    document.getElementsByClassName("gd-example-svg-2").item(0).removeEventListener('mouseenter', gdSvg2Hover);
    document.getElementsByClassName("gd-example-svg-3").item(0).removeEventListener('mouseenter', gdSvg3Hover);
    document.getElementsByClassName("gd-example-svg-4").item(0).removeEventListener('mouseenter', gdSvg4Hover);
    document.getElementsByClassName("gd-example-svg-5").item(0).removeEventListener('mouseenter', gdSvg5Hover);
    document.getElementsByClassName("gd-example-svg-1").item(0).removeEventListener('mouseleave', gdSvg1UnHover);
    document.getElementsByClassName("gd-example-svg-2").item(0).removeEventListener('mouseleave', gdSvg2UnHover);
    document.getElementsByClassName("gd-example-svg-3").item(0).removeEventListener('mouseleave', gdSvg3UnHover);
    document.getElementsByClassName("gd-example-svg-4").item(0).removeEventListener('mouseleave', gdSvg4UnHover);
    document.getElementsByClassName("gd-example-svg-5").item(0).removeEventListener('mouseleave', gdSvg5UnHover);
}
function addAllHovers() {
    document.getElementsByClassName("gd-example-svg-1").item(0).addEventListener('mouseenter', gdSvg1Hover);
    document.getElementsByClassName("gd-example-svg-2").item(0).addEventListener('mouseenter', gdSvg2Hover);
    document.getElementsByClassName("gd-example-svg-3").item(0).addEventListener('mouseenter', gdSvg3Hover);
    document.getElementsByClassName("gd-example-svg-4").item(0).addEventListener('mouseenter', gdSvg4Hover);
    document.getElementsByClassName("gd-example-svg-5").item(0).addEventListener('mouseenter', gdSvg5Hover);
    document.getElementsByClassName("gd-example-svg-1").item(0).addEventListener('mouseleave', gdSvg1UnHover);
    document.getElementsByClassName("gd-example-svg-2").item(0).addEventListener('mouseleave', gdSvg2UnHover);
    document.getElementsByClassName("gd-example-svg-3").item(0).addEventListener('mouseleave', gdSvg3UnHover);
    document.getElementsByClassName("gd-example-svg-4").item(0).addEventListener('mouseleave', gdSvg4UnHover);
    document.getElementsByClassName("gd-example-svg-5").item(0).addEventListener('mouseleave', gdSvg5UnHover);
}
function addAllGdHovers() {
    document.getElementsByClassName("gd-example-svg-1").item(0).addEventListener('mouseenter', gdSvg1Hover);
    document.getElementsByClassName("gd-example-svg-2").item(0).addEventListener('mouseenter', gdSvg2Hover);
    document.getElementsByClassName("gd-example-svg-3").item(0).addEventListener('mouseenter', gdSvg3Hover);
    document.getElementsByClassName("gd-example-svg-4").item(0).addEventListener('mouseenter', gdSvg4Hover);
    document.getElementsByClassName("gd-example-svg-5").item(0).addEventListener('mouseenter', gdSvg5Hover);
    document.getElementsByClassName("gd-example-svg-1").item(0).addEventListener('mouseleave', gdSvg1UnHover);
    document.getElementsByClassName("gd-example-svg-2").item(0).addEventListener('mouseleave', gdSvg2UnHover);
    document.getElementsByClassName("gd-example-svg-3").item(0).addEventListener('mouseleave', gdSvg3UnHover);
    document.getElementsByClassName("gd-example-svg-4").item(0).addEventListener('mouseleave', gdSvg4UnHover);
    document.getElementsByClassName("gd-example-svg-5").item(0).addEventListener('mouseleave', gdSvg5UnHover);
}
function addAllUiHovers(){
}
function addAllIdHovers(){
}
function removeAllTitleClicks(){
    document.getElementsByClassName("landscape-gd-title-div").item(0).removeEventListener('click', gdTitleClick)
    document.getElementsByClassName("landscape-ui-title-div").item(0).removeEventListener('click', uiTitleClick)
    document.getElementsByClassName("landscape-id-title-div").item(0).removeEventListener('click', idTitleClick)
}
