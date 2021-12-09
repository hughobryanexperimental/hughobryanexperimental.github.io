function sectionSmallMenuOn(){
    document.getElementById("sections-small-menu").classList.add("sections-small-menu-visible")
    document.getElementById("sections-small-menu").classList.remove("sections-small-menu-invisible")
    console.log("True")
}
function sectionSmallMenuOff(){
    document.getElementById("sections-small-menu").classList.remove("sections-small-menu-visible")
    document.getElementById("sections-small-menu").classList.add("sections-small-menu-invisible")
}
function unBlur(inp){
    let list = document.getElementsByClassName(inp)
    len = list.length;
    i = 0;
    for (i; i < len; i++){
        list[i].classList.add(unblur)
    }
}
document.getElementsByClassName("sections-small-button-1").item(0).onclick = sectionSmallMenuOn;
document.getElementsByClassName("sections-small-button-2").item(0).onclick = sectionSmallMenuOff;
