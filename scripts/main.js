var installPromptEvent;
var btnInstall = document.querySelector("#install");

var wait = document.querySelector("#wait");
var install = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", function(t) {
    //t.preventDefault();
    console.log("beforeinstallprompt");
    installPromptEvent = t;
    installPromptEvent.prompt();
    console.log("beforeinstallprompt finished");
});

setTimeout(tick, 1000);

function tick() {
    if(installPromptEvent != null) {
        console.log("adding install button");
        wait.setAttribute("style", "visibility: hidden;");
        install.setAttribute("style", "visibility: visible;");
    }
    else {
        console.log("prompt null");
        wait.innerHTML = 'Подождите пожалуйста';
        setTimeout(tick, 100);
    }
}    

window.addEventListener('appinstalled', function (e) {
    console.log("appinstalled");
    location.href = "https://evgeshavasneczova.github.io/";
});

btnInstall.addEventListener("click", function() {
    installPromptEvent.prompt();
    installPromptEvent.userChoice.then(function(t) {
        if("accepted" === t.outcome) {
            console.log('install');
        }
        installPromptEvent = null;
    });
});