
function GifStop(event) {
    var gif = document.querySelector('#gif');
    if (gif.classList.contains('gifplay')) {
        gif.classList.add('gifpause');
        gif.classList.remove('gifplay');

        event.target.classList.remove('pause');
        event.target.classList.add('playsmall');
    }
    else {
        gif.classList.add('gifplay');
        gif.classList.remove('gifpause');
        event.target.classList.remove('playsmall');
        event.target.classList.add('pause');
    }


}

function changeworm(event) {

    document.querySelector('.wormp').style.display = "block";
    document.querySelector('.xworm').style.display = "block";
}


function changewormx(event) {

    document.querySelector('.wormp').style.display = "none";
    document.querySelector('.xworm').style.display = "none";
}


function changcold(event) {

    document.querySelector('.coldp').style.display = "block";
    document.querySelector('.xcold').style.display = "block";
}


function changecoldx(event) {

    document.querySelector('.coldp').style.display = "none";
    document.querySelector('.xcold').style.display = "none";
}



function changenetrali(event) {

    document.querySelector('.netralip').style.display = "block";
    document.querySelector('.xnetrali').style.display = "block";
}


function changenetralix(event) {
    
    document.querySelector('.netralip').style.display = "none";
    document.querySelector('.xnetrali').style.display = "none";
}


function changetext1(event) {

    document.querySelector('#startp').style.display = "none";
    document.querySelector('.multyp').style.display = "block";
    document.querySelector('#decisionp').style.display = "none";
    document.querySelector('#teammp').style.display = "none";
    document.querySelector('#teamwp').style.display = "none";
    document.querySelector('#talentp').style.display = "none";
    document.querySelector('#passionp').style.display = "none";

    document.querySelector('.multy').style.backgroundColor = "white";
    document.querySelector('.multy').style.color = "black";

    document.querySelector('#decision').style.backgroundColor = "red";
    document.querySelector('#decision').style.color = "white";
    document.querySelector('#teamm').style.backgroundColor = "red";
    document.querySelector('#teamm').style.color = "white";
    document.querySelector('#teamw').style.backgroundColor = "red";
    document.querySelector('#teamw').style.color = "white";
    document.querySelector('#talent').style.backgroundColor = "red";
    document.querySelector('#talent').style.color = "white";
    document.querySelector('#passion').style.backgroundColor = "red";
    document.querySelector('#passion').style.color = "white";
 

}

function changetext2(event) {

    document.querySelector('#startp').style.display = "none";
    document.querySelector('.multyp').style.display = "none";
    document.querySelector('#decisionp').style.display = "block";
    document.querySelector('#teammp').style.display = "none";
    document.querySelector('#teamwp').style.display = "none";
    document.querySelector('#talentp').style.display = "none";
    document.querySelector('#passionp').style.display = "none";

    document.querySelector('#decision').style.backgroundColor = "white";
    document.querySelector('#decision').style.color = "black";

    document.querySelector('.multy').style.backgroundColor = "red";
    document.querySelector('.multy').style.color = "white";
    document.querySelector('#teamm').style.backgroundColor = "red";
    document.querySelector('#teamm').style.color = "white";
    document.querySelector('#teamw').style.backgroundColor = "red";
    document.querySelector('#teamw').style.color = "white";
    document.querySelector('#talent').style.backgroundColor = "red";
    document.querySelector('#talent').style.color = "white";
    document.querySelector('#passion').style.backgroundColor = "red";
    document.querySelector('#passion').style.color = "white";
  
}

function changetext3(event) {

    document.querySelector('#startp').style.display = "none";
    document.querySelector('.multyp').style.display = "none";
    document.querySelector('#decisionp').style.display = "none";
    document.querySelector('#teammp').style.display = "block";
    document.querySelector('#teamwp').style.display = "none";
    document.querySelector('#talentp').style.display = "none";
    document.querySelector('#passionp').style.display = "none";

    document.querySelector('#teamm').style.backgroundColor = "white";
    document.querySelector('#teamm').style.color = "black";

    document.querySelector('.multy').style.backgroundColor = "red";
    document.querySelector('.multy').style.color = "white";
    document.querySelector('#decision').style.backgroundColor = "red";
    document.querySelector('#decision').style.color = "white";
    document.querySelector('#teamw').style.backgroundColor = "red";
    document.querySelector('#teamw').style.color = "white";
    document.querySelector('#talent').style.backgroundColor = "red";
    document.querySelector('#talent').style.color = "white";
    document.querySelector('#passion').style.backgroundColor = "red";
    document.querySelector('#passion').style.color = "white";
 
}

function changetext4(event) {

    document.querySelector('#startp').style.display = "none";
    document.querySelector('.multyp').style.display = "none";
    document.querySelector('#decisionp').style.display = "none";
    document.querySelector('#teammp').style.display = "none";
    document.querySelector('#teamwp').style.display = "block";
    document.querySelector('#talentp').style.display = "none";
    document.querySelector('#passionp').style.display = "none";

    document.querySelector('#teamw').style.backgroundColor = "white";
    document.querySelector('#teamw').style.color = "black";

    document.querySelector('.multy').style.backgroundColor = "red";
    document.querySelector('.multy').style.color = "white";
    document.querySelector('#decision').style.backgroundColor = "red";
    document.querySelector('#decision').style.color = "white";
    document.querySelector('#teamm').style.backgroundColor = "red";
    document.querySelector('#teamm').style.color = "white";
    document.querySelector('#talent').style.backgroundColor = "red";
    document.querySelector('#talent').style.color = "white";
    document.querySelector('#passion').style.backgroundColor = "red";
    document.querySelector('#passion').style.color = "white";

}

function changetext5(event) {

    document.querySelector('#startp').style.display = "none";
    document.querySelector('.multyp').style.display = "none";
    document.querySelector('#decisionp').style.display = "none";
    document.querySelector('#teammp').style.display = "none";
    document.querySelector('#teamwp').style.display = "none";
    document.querySelector('#talentp').style.display = "block";
    document.querySelector('#passionp').style.display = "none";

    document.querySelector('#talent').style.backgroundColor = "white";
    document.querySelector('#talent').style.color = "black";

    document.querySelector('.multy').style.backgroundColor = "red";
    document.querySelector('.multy').style.color = "white";
    document.querySelector('#decision').style.backgroundColor = "red";
    document.querySelector('#decision').style.color = "white";
    document.querySelector('#teamm').style.backgroundColor = "red";
    document.querySelector('#teamm').style.color = "white";
    document.querySelector('#teamw').style.backgroundColor = "red";
    document.querySelector('#teamw').style.color = "white";
    document.querySelector('#passion').style.backgroundColor = "red";
    document.querySelector('#passion').style.color = "white";
   
}

function changetext6(event) {

    document.querySelector('#startp').style.display = "none";
    document.querySelector('.multyp').style.display = "none";
    document.querySelector('#decisionp').style.display = "none";
    document.querySelector('#teammp').style.display = "none";
    document.querySelector('#teamwp').style.display = "none";
    document.querySelector('#talentp').style.display = "none";
    document.querySelector('#passionp').style.display = "block";

    document.querySelector('#passion').style.backgroundColor = "white";
    document.querySelector('#passion').style.color = "black";

    document.querySelector('.multy').style.backgroundColor = "red";
    document.querySelector('.multy').style.color = "white";
    document.querySelector('#decision').style.backgroundColor = "red";
    document.querySelector('#decision').style.color = "white";
    document.querySelector('#teamm').style.backgroundColor = "red";
    document.querySelector('#teamm').style.color = "white";
    document.querySelector('#teamw').style.backgroundColor = "red";
    document.querySelector('#teamw').style.color = "white";
    document.querySelector('#talent').style.backgroundColor = "red";
    document.querySelector('#talent').style.color = "white";
   
}



function tab_nav() {
    var navA = document.querySelectorAll("ul li>a");
    var navInner = document.querySelectorAll("li ul li>a");

    for (var i = 0, len = navA.length; i < len; i++) {
        navA[i].addEventListener("focus", function (event) {
            var innerUl = event.target.parentElement.querySelector("ul")
            if (innerUl) innerUl.style.display = "block";
        }, true);
    }

    for (var i = 0, len = navInner.length; i < len; i++) {
        if (navInner[i].parentElement.nextElementSibling === null) {
            navInner[i].addEventListener("blur", function (event) {
                event.target.parentElement.parentElement.style.display = "none"
            }, true);
        }
    }
}