if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toDarkMode()
} else {
    toLightMode()
}

function gdshow(){
    document.getElementsByClassName("gd-text").item(0).classList.add('showText');
    document.getElementsByClassName("gd-text").item(0).classList.remove('hideText');
    document.getElementsByClassName("gd-example-1").item(0).classList.add('gde1-unBlur');
    document.getElementsByClassName("gd-example-1").item(0).classList.remove('gde1-blur');
    document.getElementsByClassName("gd-example-2").item(0).classList.add('gde2-unBlur');
    document.getElementsByClassName("gd-example-2").item(0).classList.remove('gde2-blur');
    document.getElementsByClassName("gd-example-3").item(0).classList.add('gde3-unBlur');
    document.getElementsByClassName("gd-example-3").item(0).classList.remove('gde3-blur');
    document.getElementsByClassName("gd-example-4").item(0).classList.add('gde4-unBlur');
    document.getElementsByClassName("gd-example-4").item(0).classList.remove('gde4-blur');
    document.getElementsByClassName("gd-example-5").item(0).classList.add('gde5-unBlur');
    document.getElementsByClassName("gd-example-5").item(0).classList.remove('gde5-blur');
    document.getElementsByClassName("gd-example-6").item(0).classList.add('gde6-unBlur');
    document.getElementsByClassName("gd-example-6").item(0).classList.remove('gde6-blur');
}
function gdhide(){
    document.getElementsByClassName("gd-text").item(0).classList.add('hideText');
    document.getElementsByClassName("gd-text").item(0).classList.remove('showText');
    document.getElementsByClassName("gd-example-1").item(0).classList.add('gde1-blur');
    document.getElementsByClassName("gd-example-1").item(0).classList.remove('gde1-unBlur');
    document.getElementsByClassName("gd-example-2").item(0).classList.add('gde2-blur');
    document.getElementsByClassName("gd-example-2").item(0).classList.remove('gde2-unBlur');
    document.getElementsByClassName("gd-example-3").item(0).classList.add('gde3-blur');
    document.getElementsByClassName("gd-example-3").item(0).classList.remove('gde3-unBlur');
    document.getElementsByClassName("gd-example-4").item(0).classList.add('gde4-blur');
    document.getElementsByClassName("gd-example-4").item(0).classList.remove('gde4-unBlur');
    document.getElementsByClassName("gd-example-5").item(0).classList.add('gde5-blur');
    document.getElementsByClassName("gd-example-5").item(0).classList.remove('gde5-unBlur');
    document.getElementsByClassName("gd-example-6").item(0).classList.add('gde6-blur');
    document.getElementsByClassName("gd-example-6").item(0).classList.remove('gde6-unBlur');
}

function toLightMode(){
    document.querySelector("body").classList.add("bg-light-mode");
    document.getElementsByClassName("title").item(0).classList.add("text-light-mode");
    document.getElementsByClassName("light-mode-toggle").item(0).classList.add("text-light-mode");
    document.getElementsByClassName("gd-text").item(0).classList.add("text-light-mode");
    document.getElementsByClassName("logo").item(0).classList.add("logo-light-mode");
    document.getElementsByClassName("light-mode-toggle").item(0).classList.add("light-mode-toggle-to-light-mode");
    document.getElementsByClassName("dark-mode-toggle").item(0).classList.add("dark-mode-toggle-to-light-mode");
    document.getElementsByClassName("gd-example-5").item(0).classList.add("gde5-light-mode");
    document.getElementsByClassName("gd-example-6").item(0).classList.add("gde6-light-mode");
    document.getElementsByClassName("about-text").item(0).classList.add("about-light-mode");
    document.getElementsByClassName("services-offered").item(0).classList.add("about-light-mode");
    document.getElementsByClassName("contact-info").item(0).classList.add("about-light-mode");


    document.querySelector("body").classList.remove("bg-dark-mode");
    document.getElementsByClassName("title").item(0).classList.remove("text-dark-mode");
    document.getElementsByClassName("light-mode-toggle").item(0).classList.remove("text-dark-mode");
    document.getElementsByClassName("gd-text").item(0).classList.remove("text-dark-mode");
    document.getElementsByClassName("logo").item(0).classList.remove("logo-dark-mode");
    document.getElementsByClassName("light-mode-toggle").item(0).classList.remove("light-mode-toggle-to-dark-mode");
    document.getElementsByClassName("dark-mode-toggle").item(0).classList.remove("dark-mode-toggle-to-dark-mode");
    document.getElementsByClassName("gd-example-5").item(0).classList.remove("gde5-dark-mode");
    document.getElementsByClassName("gd-example-6").item(0).classList.remove("gde6-dark-mode");
    document.getElementsByClassName("about-text").item(0).classList.remove("about-dark-mode");
    document.getElementsByClassName("services-offered").item(0).classList.remove("about-dark-mode");
    document.getElementsByClassName("contact-info").item(0).classList.remove("about-dark-mode");
}

function toDarkMode(){
    document.querySelector("body").classList.add("bg-dark-mode");
    document.getElementsByClassName("title").item(0).classList.add("text-dark-mode");
    document.getElementsByClassName("light-mode-toggle").item(0).classList.add("text-dark-mode");
    document.getElementsByClassName("gd-text").item(0).classList.add("text-dark-mode");
    document.getElementsByClassName("logo").item(0).classList.add("logo-dark-mode");
    document.getElementsByClassName("light-mode-toggle").item(0).classList.add("light-mode-toggle-to-dark-mode");
    document.getElementsByClassName("dark-mode-toggle").item(0).classList.add("dark-mode-toggle-to-dark-mode");
    document.getElementsByClassName("gd-example-5").item(0).classList.add("gde5-dark-mode");
    document.getElementsByClassName("gd-example-6").item(0).classList.add("gde6-dark-mode");
    document.getElementsByClassName("about-text").item(0).classList.add("about-dark-mode");
    document.getElementsByClassName("services-offered").item(0).classList.add("about-dark-mode");
    document.getElementsByClassName("contact-info").item(0).classList.add("about-dark-mode");


    document.querySelector("body").classList.remove("bg-light-mode");
    document.getElementsByClassName("title").item(0).classList.remove("text-light-mode");
    document.getElementsByClassName("light-mode-toggle").item(0).classList.remove("text-light-mode");
    document.getElementsByClassName("gd-text").item(0).classList.remove("text-light-mode");
    document.getElementsByClassName("logo").item(0).classList.remove("logo-light-mode");
    document.getElementsByClassName("light-mode-toggle").item(0).classList.remove("light-mode-toggle-to-light-mode");
    document.getElementsByClassName("dark-mode-toggle").item(0).classList.remove("dark-mode-toggle-to-light-mode");
    document.getElementsByClassName("gd-example-5").item(0).classList.remove("gde5-light-mode");
    document.getElementsByClassName("gd-example-6").item(0).classList.remove("gde6-light-mode");
    document.getElementsByClassName("about-text").item(0).classList.remove("about-light-mode");
    document.getElementsByClassName("services-offered").item(0).classList.remove("about-light-mode");
    document.getElementsByClassName("contact-info").item(0).classList.remove("about-light-mode");
}


let gde1 = document.querySelector(".gd-example-1 svg");
gde1.addEventListener('mouseenter', gdshow);
gde1.addEventListener('mouseleave', gdhide);
let gde2 = document.getElementsByClassName("gd-example-2").item(0);
gde2.addEventListener('mouseenter', gdshow);
gde2.addEventListener('mouseleave', gdhide);
let gde3 = document.getElementsByClassName("gd-example-3").item(0);
gde3.addEventListener('mouseenter', gdshow);
gde3.addEventListener('mouseleave', gdhide);
let gde4 = document.getElementsByClassName("gd-example-4").item(0);
gde4.addEventListener('mouseenter', gdshow);
gde4.addEventListener('mouseleave', gdhide);
let gde5 = document.getElementsByClassName("gd-example-5").item(0);
gde5.addEventListener('mouseenter', gdshow);
gde5.addEventListener('mouseleave', gdhide);
let gde6 = document.getElementsByClassName("gd-example-6").item(0);
gde6.addEventListener('mouseenter', gdshow);
gde6.addEventListener('mouseleave', gdhide);
let lmt = document.querySelector(".light-mode-toggle");
lmt.onclick =  toLightMode;
let dmt = document.querySelector(".dark-mode-toggle");
dmt.onclick =  toDarkMode;
