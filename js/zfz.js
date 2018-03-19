window.onload= first();

function first () {
    setTimeout(showSecond, 3000);
    setTimeout(switchImage, 5000);
}

var string = "";
let pSwith = document.querySelector("#switcher");
function switchImage () {


    if(string == "") {
        string = "Psd to HTML";
        pSwith.innerHTML = string ;
    }
    else if (string == "Psd to HTML") {
        string ="CSS";
        pSwith.innerHTML = string ;
    }
    else if (string == "CSS") {
        string = "Bootstrap";
        pSwith.innerHTML = string ;
    }
    else if (string == "Bootstrap") {
        string = "Logo design";
        pSwith.innerHTML = string ;
    }
    else if (string == "Logo design") {
        string = "jQuery";
        pSwith.innerHTML = string ;
    }
    else if (string == "jQuery") {
        string = "UserInterface";
        pSwith.innerHTML = string ;
    }
    else if (string =="UserInterface") {
        string = "";
    }
    setTimeout(switchImage, 200);
};
