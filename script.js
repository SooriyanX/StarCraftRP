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
function enterGalaxy() {
  const hyper = document.getElementById("hyperspace");
  hyper.style.display = "block";
  hyper.innerHTML = "";

  const numStars = 300;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.className = "star";

    // Random angle in radians
    const angle = Math.random() * Math.PI * 2;

    // Random distance to travel
    const distance = Math.random() * 3000 + 1000;

    // Set CSS variable for animation
    star.style.setProperty("--x", Math.cos(angle) * distance + "px");
    star.style.setProperty("--y", Math.sin(angle) * distance + "px");

    // Random animation duration
    star.style.animationDuration = (Math.random() * 1 + 0.5) + "s";

    hyper.appendChild(star);
  }

  // Optional screen shake
  document.body.style.animation = "shake 0.3s";

  setTimeout(() => {
    hyper.style.display = "none";
    document.body.style.animation = "";
  }, 1500);

  // Optional warp sound
  let sound = new Audio("assets/warp.mp3");
  sound.volume = 0.6;
  sound.play();
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





