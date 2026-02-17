/* INTRO AUTO REMOVE */
window.addEventListener("load", function(){
    setTimeout(function(){
        const intro = document.getElementById("intro");
        if(intro){
            intro.style.display = "none";
        }
    }, 6000); // shorter for testing
});
function skipIntro(){document.getElementById("intro").style.display="none"}

/* HYPERSPACE CINEMATIC */
function enterGalaxy(){

const hyper = document.getElementById("hyperspace");
hyper.style.display = "block";
hyper.innerHTML = "";

for(let i=0;i<300;i++){
    let star = document.createElement("div");

    const size = Math.random()*3 + 1;
    const duration = Math.random()*0.8 + 0.3;

    star.style.position = "absolute";
    star.style.width = size + "px";
    star.style.height = size * 40 + "px";
    star.style.background = "white";
    star.style.left = Math.random()*100 + "%";
    star.style.top = "-200px";
    star.style.opacity = Math.random();
    star.style.animation = `warp ${duration}s linear forwards`;

    hyper.appendChild(star);
}

document.body.style.animation = "shake 0.4s";

setTimeout(()=>{
    hyper.style.display = "none";
    document.body.style.animation = "";
},1500);
}


/* SCREEN SHAKE */
const style = document.createElement("style");
style.innerHTML = `
@keyframes warp {
    0% { transform: translateY(-200px) scaleY(0.5); opacity: 1; }
    100% { transform: translateY(120vh) scaleY(1.5); opacity: 0; }
}

@keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-6px); }
    50% { transform: translateX(6px); }
    75% { transform: translateX(-6px); }
    100% { transform: translateX(0); }
}
`;
document.head.appendChild(style);


/* THEME SWITCH */
let side="jedi"
function toggleTheme(){
document.body.classList.remove("jedi","sith")
side=side==="jedi"?"sith":"jedi"
document.body.classList.add(side)
}

/* LIGHTSABER CURSOR */
document.addEventListener("mousemove",e=>{
let blade=document.createElement("div")
blade.style.position="fixed"
blade.style.width="4px"
blade.style.height="30px"
blade.style.left=e.pageX+"px"
blade.style.top=e.pageY+"px"
blade.style.pointerEvents="none"
blade.style.background=side==="jedi"?"cyan":"red"
blade.style.boxShadow="0 0 15px "+(side==="jedi"?"cyan":"red")
blade.style.borderRadius="2px"
document.body.appendChild(blade)
setTimeout(()=>blade.remove(),120)
})

/* TRAILER MODAL */
function openTrailer(){
document.getElementById("trailerModal").style.display="flex"
}
function closeTrailer(){
document.getElementById("trailerModal").style.display="none"
}



