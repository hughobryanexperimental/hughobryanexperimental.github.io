if (window.screen.width)
function sectionSmallMenuOn(){
    document.getElementById("portrait-sections-menu").style.display = "flex";
}
function sectionSmallMenuOff(){
    document.getElementById("portrait-sections-menu").style.display = "none";
}
function unBlur(inp){
    let list = document.getElementsByClassName(inp)
    len = list.length;
    i = 0;
    for (i; i < len; i++){
        list[i].classList.add(unblur)
    }
}
document.getElementsByClassName("portrait-sections-button-1").item(0).onclick = sectionSmallMenuOn;
document.getElementsByClassName("portrait-sections-button-2").item(0).onclick = sectionSmallMenuOff;
