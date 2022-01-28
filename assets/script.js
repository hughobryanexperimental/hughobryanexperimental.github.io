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
let whatsHovered = 0;
/* Start of GD SVG 1 */
function gdSvg1Hover() {
    whatsHovered = 1;
    document.getElementsByClassName("gd-example-svg-1").item(0).addEventListener('click', osbClick);
    gdUnBlur();
}
function gdSvg1UnHover() {
    whatsHovered = 0;
    if (isOsbGroupClicked === 0) {
        document.getElementsByClassName("gd-example-svg-1").item(0).removeEventListener('click', osbClick);
        gdBlur();
    }
}
/* End of GD SVG 1 */
/* Start of GD SVG 2 */
function gdSvg2Hover() {
    whatsHovered = 2;
    document.getElementsByClassName("gd-example-svg-2").item(0).addEventListener('click', osbClick);
    gdUnBlur();
}
function gdSvg2UnHover() {
    whatsHovered = 0;
    if (isOsbGroupClicked === 0) {
        document.getElementsByClassName("gd-example-svg-2").item(0).removeEventListener('click', osbClick);
        gdBlur();
    }
}
/* End of GD SVG 2 */
/* Start of GD SVG 3 */
function gdSvg3Hover() {
    whatsHovered = 3;
    document.getElementsByClassName("gd-example-svg-3").item(0).addEventListener('click', euhClick);
    gdUnBlur();
}
function gdSvg3UnHover() {
    whatsHovered = 0;
    if (isEuhGroupClicked === 0) {
        document.getElementsByClassName("gd-example-svg-3").item(0).removeEventListener('click', euhClick);
        gdBlur();
    }
}
/* End of GD SVG 3 */
/* Start of GD SVG 4 */
function gdSvg4Hover() {
    whatsHovered = 4;
    document.getElementsByClassName("gd-example-svg-4").item(0).addEventListener('click', euhClick);
    gdUnBlur();
}
function gdSvg4UnHover() {
    whatsHovered = 0;
    if (isEuhGroupClicked === 0) {
        document.getElementsByClassName("gd-example-svg-4").item(0).removeEventListener('click', euhClick);
        gdBlur();
    }
}
/* End of GD SVG 4 */
/* Start of GD SVG 5 */
function gdSvg5Hover() {
    whatsHovered = 5;
    document.getElementsByClassName("gd-example-svg-5").item(0).addEventListener('click', euhClick);
    gdUnBlur();
}
function gdSvg5UnHover() {
    whatsHovered = 0;
    if (isEuhGroupClicked === 0) {
        document.getElementsByClassName("gd-example-svg-5").item(0).removeEventListener('click', euhClick);
        gdBlur();
    }
}
/* End of GD SVG 5 */

function osbClick() {
    if (isOsbGroupClicked === 0) {
        osbFocus(1);
        euhFocus(0);
        isOsbGroupClicked = 1;
        isEuhGroupClicked = 0;
    } else {
        if (isOsbGroupClicked === 1) {
            osbFocus(0);
            isOsbGroupClicked = 0;
        }
    }
}
function euhClick() {
    if (isEuhGroupClicked === 0) {
        euhFocus(1);
        osbFocus(0)
        isEuhGroupClicked = 1;
        isOsbGroupClicked = 0;
    } else {
        if (isEuhGroupClicked === 1) {
            euhFocus(0);
            isEuhGroupClicked = 0;
        }
    }
}
function returnBlur() {
    switch (whatsHovered) {
        case 0:
            allBlur();
            isOsbGroupClicked = 0;
            isEuhGroupClicked = 0;
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
function gdMoreBlur() {
    document.getElementsByClassName("gd-example-div-1").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-2").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-3").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-4").item(0).classList.add("moreBlur");
    document.getElementsByClassName("gd-example-div-5").item(0).classList.add("moreBlur");
}
function osbFocus(inp){
    if (inp === 0) {
        document.getElementsByClassName("gd-example-div-3").item(0).classList.remove("moreBlur");
        document.getElementsByClassName("gd-example-div-4").item(0).classList.remove("moreBlur");
        document.getElementsByClassName("gd-example-div-5").item(0).classList.remove("moreBlur");
    } else if (inp === 1) {
        document.getElementsByClassName("gd-example-div-3").item(0).classList.add("moreBlur");
        document.getElementsByClassName("gd-example-div-4").item(0).classList.add("moreBlur");
        document.getElementsByClassName("gd-example-div-5").item(0).classList.add("moreBlur");
    }
}
function euhFocus(inp){
    if (inp === 0) {
        document.getElementsByClassName("gd-example-div-1").item(0).classList.remove("moreBlur");
        document.getElementsByClassName("gd-example-div-2").item(0).classList.remove("moreBlur");
    } else if (inp === 1) {
        document.getElementsByClassName("gd-example-div-1").item(0).classList.add("moreBlur");
        document.getElementsByClassName("gd-example-div-2").item(0).classList.add("moreBlur");
    }
}

