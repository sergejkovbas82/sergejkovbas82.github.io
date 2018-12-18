var installPromptEvent;
var btnInstall = document.querySelector("#install");

var wait = document.querySelector("#wait");
var install = document.querySelector("#install");

setTimeout(tick, 100);

function tick() {
    if(installPromptEvent != null) {
        wait.setAttribute("style", "visibility: hidden;");
        install.setAttribute("style", "visibility: visible;");
    }
    else {
        wait.innerHTML = 'Подождите пожалуйста';
        setTimeout(tick, 100);
    }
}    

window.addEventListener("beforeinstallprompt", function(t) {
    t.preventDefault();
    installPromptEvent = t;
    installPromptEvent.prompt();
});

window.addEventListener('appinstalled', function (e) {
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