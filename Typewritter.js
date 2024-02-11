var messageArray = ["NOT ALL THOSE WHO WANDER ARE LOST."];
var textPosition=0;
var speed= 100;

typewriter = () => {
    document.querySelector("#message").
    innerHTML=messageArray[0].substring(0,textPosition) + "<span>\u25ae</span>";

    if(textPosition++ !=messageArray[0].length)
    setTimeout(typewriter,speed);
}
window.addEventListener("load",typewriter)
