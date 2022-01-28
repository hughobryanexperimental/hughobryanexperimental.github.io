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
        document.getElementsByClassName("landscape-gd-title").item(0).addEventListener('mouseenter', gdTitleHover);
        document.getElementsByClassName("landscape-gd-title").item(0).addEventListener('mouseleave', gdTitleUnHover);
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

let isOsbGroupClicked = 0;
let isEuhGroupClicked = 0;
let isGdGroupClicked = 0;
let whatsHovered = 0;
let whatsClicked = 0;
/* Start of GD SVG 1 */
function gdSvg1Hover() {
    whatsHovered = 11;
    document.getElementsByClassName("gd-example-svg-1").item(0).addEventListener('click', osbClick);
    gdUnBlur();
}
function gdSvg1UnHover() {
    whatsHovered = 0; //00
    if (whatsClicked === 0) {
        document.getElementsByClassName("gd-example-svg-1").item(0).removeEventListener('click', osbClick);
        gdBlur();
    }
}
/* End of GD SVG 1 */
/* Start of GD SVG 2 */
function gdSvg2Hover() {
    whatsHovered = 12;
    document.getElementsByClassName("gd-example-svg-2").item(0).addEventListener('click', osbClick);
    gdUnBlur();
}
function gdSvg2UnHover() {
    whatsHovered = 0; //00
    if (whatsClicked === 0) {
        document.getElementsByClassName("gd-example-svg-2").item(0).removeEventListener('click', osbClick);
        gdBlur();
    }
}
/* End of GD SVG 2 */
/* Start of GD SVG 3 */
function gdSvg3Hover() {
    whatsHovered = 13;
    document.getElementsByClassName("gd-example-svg-3").item(0).addEventListener('click', euhClick);
    gdUnBlur();
}
function gdSvg3UnHover() {
    whatsHovered = 0; //00
    if (whatsClicked === 0) {
        document.getElementsByClassName("gd-example-svg-3").item(0).removeEventListener('click', euhClick);
        gdBlur();
    }
}
/* End of GD SVG 3 */
/* Start of GD SVG 4 */
function gdSvg4Hover() {
    whatsHovered = 14;
    document.getElementsByClassName("gd-example-svg-4").item(0).addEventListener('click', euhClick);
    gdUnBlur();
}
function gdSvg4UnHover() {
    whatsHovered = 0; //00
    if (whatsClicked === 0) {
        document.getElementsByClassName("gd-example-svg-4").item(0).removeEventListener('click', euhClick);
        gdBlur();
    }
}
/* End of GD SVG 4 */
/* Start of GD SVG 5 */
function gdSvg5Hover() {
    whatsHovered = 15;
    document.getElementsByClassName("gd-example-svg-5").item(0).addEventListener('click', euhClick);
    gdUnBlur();
}
function gdSvg5UnHover() {
    whatsHovered = 0; //00
    if (whatsClicked === 0) {
        document.getElementsByClassName("gd-example-svg-5").item(0).removeEventListener('click', euhClick);
        gdBlur();
    }
}
/* End of GD SVG 5 */

/* Start of GD Title (0) */
function gdTitleHover() {
    whatsHovered = 10;
    document.getElementsByClassName("landscape-gd-title-div").item(0).addEventListener('click', gdTitleClick);
    gdUnBlur();
}
function gdTitleUnHover() {
    whatsHovered = 0; //00
    if (whatsClicked === 0) {
        document.getElementsByClassName("landscape-gd-title-div").item(0).removeEventListener('click', gdTitleClick);
        gdBlur();
    }
}
/* End of GD SVG 5 */

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
        euhFocus(0);
        whatsClicked = 0; //00
    } else {
        euhFocus(1);
        whatsClicked = 12;
    }
}
function gdTitleClick() {
    if (whatsClicked === 10) {
        whatsClicked = 0; //00
    } else {
        gdFocus(1);
        whatsClicked = 10;
    }
}
function returnBlur() {
    switch (whatsHovered) {
        case 0:
            allBlur();
            whatsClicked = 0;
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
function gdUnBlur() {
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.add("unBlur");
    document.getElementsByClassName("landscape-ui-title-div").item(0).classList.add("moreBlur");
    document.getElementsByClassName("landscape-id-title-div").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-1").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-2").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-3").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-4").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-5").item(0).classList.add("unBlur");
}
function gdBlur() {
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.remove("unBlur");
    document.getElementsByClassName("landscape-ui-title-div").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("landscape-id-title-div").item(0).classList.remove("moreBlur");
    document.getElementsByClassName("gd-example-div-1").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-2").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-3").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-4").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-5").item(0).classList.remove("unBlur");
}
function osbFocus(inp){
    if (inp === 1) {
        document.getElementsByClassName("gd-example-div-1").item(0).classList.remove("moreBlur");
        document.getElementsByClassName("gd-example-div-2").item(0).classList.remove("moreBlur");
        document.getElementsByClassName("gd-example-div-3").item(0).classList.add("moreBlur");
        document.getElementsByClassName("gd-example-div-4").item(0).classList.add("moreBlur");
        document.getElementsByClassName("gd-example-div-5").item(0).classList.add("moreBlur");
    } else if (inp === 0) {
        document.getElementsByClassName("gd-example-div-3").item(0).classList.remove("moreBlur");
        document.getElementsByClassName("gd-example-div-4").item(0).classList.remove("moreBlur");
        document.getElementsByClassName("gd-example-div-5").item(0).classList.remove("moreBlur");
    }
}
function euhFocus(inp){
    if (inp === 1) {
        document.getElementsByClassName("gd-example-div-1").item(0).classList.add("moreBlur");
        document.getElementsByClassName("gd-example-div-2").item(0).classList.add("moreBlur");
        document.getElementsByClassName("gd-example-div-3").item(0).classList.remove("moreBlur");
        document.getElementsByClassName("gd-example-div-4").item(0).classList.remove("moreBlur");
        document.getElementsByClassName("gd-example-div-5").item(0).classList.remove("moreBlur");
    } else if (inp === 0) {
        document.getElementsByClassName("gd-example-div-1").item(0).classList.remove("moreBlur");
        document.getElementsByClassName("gd-example-div-2").item(0).classList.remove("moreBlur");
    }
}
function gdFocus(inp) {
    if (inp === 1) {
        document.getElementsByClassName("gd-example-div-1").item(0).classList.remove("moreBlur");
        document.getElementsByClassName("gd-example-div-2").item(0).classList.remove("moreBlur");
        document.getElementsByClassName("gd-example-div-3").item(0).classList.remove("moreBlur");
        document.getElementsByClassName("gd-example-div-4").item(0).classList.remove("moreBlur");
        document.getElementsByClassName("gd-example-div-5").item(0).classList.remove("moreBlur");
    }
}

