/* INTRO AUTO REMOVE */
setTimeout(()=>{document.getElementById("intro").style.display="none"},12000)
function skipIntro(){document.getElementById("intro").style.display="none"}

/* HYPERSPACE CINEMATIC */
function enterGalaxy(){
let hyper=document.getElementById("hyperspace")
hyper.style.display="block"
hyper.innerHTML=""

for(let i=0;i<200;i++){
let star=document.createElement("div")
star.style.position="absolute"
star.style.width="2px"
star.style.height="100px"
star.style.background="white"
star.style.left=Math.random()*100+"%"
star.style.animation="warp 0.3s linear infinite"
hyper.appendChild(star)
}

document.body.style.animation="shake 0.5s"
setTimeout(()=>{
hyper.style.display="none"
document.body.style.animation=""
},2000)
}

/* SCREEN SHAKE */
const style=document.createElement('style')
style.innerHTML=`@keyframes warp{from{transform:translateY(-100px)}to{transform:translateY(100vh)}}@keyframes shake{0%{transform:translateX(0)}25%{transform:translateX(-5px)}50%{transform:translateX(5px)}75%{transform:translateX(-5px)}100%{transform:translateX(0)}}`
document.head.appendChild(style)

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
