if (window.screen.width)
function sectionSmallMenuOn(){
    document.getElementById("portrait-sections-menu").style.display = "flex";
}
function sectionSmallMenuOff(){
    document.getElementById("portrait-sections-menu").style.display = "none";
}

document.getElementsByClassName("portrait-sections-button-1").item(0).onclick = sectionSmallMenuOn;
document.getElementsByClassName("portrait-sections-button-2").item(0).onclick = sectionSmallMenuOff;

function gdUnBlur() {
    document.getElementsByClassName("gd-example-div-1").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-2").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-3").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-4").item(0).classList.add("unBlur");
    document.getElementsByClassName("gd-example-div-5").item(0).classList.add("unBlur");
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.add("unBlur")
    document.getElementsByClassName("landscape-ui-title-div").item(0).classList.add("moreBlur")
    document.getElementsByClassName("landscape-id-title-div").item(0).classList.add("moreBlur")
}
function gdBlur() {
    document.getElementsByClassName("gd-example-div-1").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-2").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-3").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-4").item(0).classList.remove("unBlur");
    document.getElementsByClassName("gd-example-div-5").item(0).classList.remove("unBlur");
    document.getElementsByClassName("landscape-gd-title-div").item(0).classList.remove("unBlur")
    document.getElementsByClassName("landscape-ui-title-div").item(0).classList.remove("moreBlur")
    document.getElementsByClassName("landscape-id-title-div").item(0).classList.remove("moreBlur")
}
document.getElementsByClassName("gd-example-svg-1").item(0).addEventListener('mouseenter', gdUnBlur);
document.getElementsByClassName("gd-example-svg-1").item(0).addEventListener('mouseleave', gdBlur);
document.getElementsByClassName("gd-example-svg-2").item(0).addEventListener('mouseenter', gdUnBlur);
document.getElementsByClassName("gd-example-svg-2").item(0).addEventListener('mouseleave', gdBlur);
document.getElementsByClassName("gd-example-svg-3").item(0).addEventListener('mouseenter', gdUnBlur);
document.getElementsByClassName("gd-example-svg-3").item(0).addEventListener('mouseleave', gdBlur);
document.getElementsByClassName("gd-example-svg-4").item(0).addEventListener('mouseenter', gdUnBlur);
document.getElementsByClassName("gd-example-svg-4").item(0).addEventListener('mouseleave', gdBlur);
document.getElementsByClassName("gd-example-svg-5").item(0).addEventListener('mouseenter', gdUnBlur);
document.getElementsByClassName("gd-example-svg-5").item(0).addEventListener('mouseleave', gdBlur);
document.getElementsByClassName("landscape-gd-title").item(0).addEventListener('mouseenter', gdUnBlur);
document.getElementsByClassName("landscape-gd-title").item(0).addEventListener('mouseleave', gdBlur);

function gdButtonClick() {
    let item1 = document.getElementsByClassName("gd-example-div-1").item(0)
    if (item1.classList.contains("unBlur")) {
        gdBlur();
    } else {
        gdUnBlur()
    }
}

let isLogoMoved = false;
function startUp(){
    if (isLogoMoved === false) {
        document.getElementsByClassName("logo-div").item(0).classList.add("logo-move");
        document.getElementsByClassName("logo-div").item(0).classList.add("unBlur");
        document.getElementsByClassName("gd-example-div-1").item(0).classList.remove("invisible");
        document.getElementsByClassName("gd-example-div-2").item(0).classList.remove("invisible");
        document.getElementsByClassName("gd-example-div-3").item(0).classList.remove("invisible");
        document.getElementsByClassName("gd-example-div-4").item(0).classList.remove("invisible");
        document.getElementsByClassName("gd-example-div-5").item(0).classList.remove("invisible");
        document.getElementsByClassName("name").item(0).classList.remove("invisible");
        document.getElementsByClassName("landscape-gd-title-div").item(0).classList.remove("invisible");
        document.getElementsByClassName("landscape-ui-title-div").item(0).classList.remove("invisible");
        document.getElementsByClassName("landscape-id-title-div").item(0).classList.remove("invisible");
        isLogoMoved = true;
    }
    else {}
}
function logoBlur(){
    let logo = document.getElementsByClassName("logo-div").item(0)
    if (logo.classList.contains("unBlur") && !logo.classList.contains("logo-move")) {
        logo.classList.remove("unBlur")
    } else {
        logo.classList.add("unBlur")
    }
}
document.getElementsByClassName("logo-div").item(0).addEventListener("click",startUp)
document.getElementsByClassName("logo-div").item(0).addEventListener("mouseenter",logoBlur)
document.getElementsByClassName("logo-div").item(0).addEventListener("mouseleave",logoBlur)

