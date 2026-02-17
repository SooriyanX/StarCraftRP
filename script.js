// Opening crawl
setTimeout(()=>{document.getElementById("crawl").style.display="none"},12000)

// Lightsaber ignition
function ignite(){
let audio=new Audio("assets/lightsaber.mp3")
audio.play()
document.body.style.boxShadow="0 0 100px cyan inset"
}

// Faction selector
function setFaction(side){
document.body.classList.remove("jedi","sith")
document.body.classList.add(side)
}

// Download counter
let downloads=12543
let players=237
setInterval(()=>{
downloads+=Math.floor(Math.random()*5)
players=200+Math.floor(Math.random()*50)
document.getElementById("downloads").innerText=downloads
document.getElementById("players").innerText=players
},2000)

// Download button
function download(){
downloads+=1
alert("Downloading StarCraft RP...")
}

// THREE.js 3D Block
const scene=new THREE.Scene()
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/400,0.1,1000)
const renderer=new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth,400)
document.getElementById("viewer").appendChild(renderer.domElement)

const texture=new THREE.TextureLoader().load('assets/block.png')
const geometry=new THREE.BoxGeometry()
const material=new THREE.MeshBasicMaterial({map:texture})
const cube=new THREE.Mesh(geometry,material)
scene.add(cube)

camera.position.z=3

function animate(){
requestAnimationFrame(animate)
cube.rotation.x+=0.01
cube.rotation.y+=0.01
renderer.render(scene,camera)
}
animate()

/* ================= HYPERSPACE ================= */
function enterGalaxy(){
let hyper=document.getElementById("hyperspace")
hyper.style.display="block"
hyper.innerHTML=""

for(let i=0;i<120;i++){
let star=document.createElement("div")
star.className="star"
star.style.left=Math.random()*100+"%"
star.style.animationDuration=(Math.random()*0.4+0.2)+"s"
hyper.appendChild(star)
}

setTimeout(()=>{
hyper.style.display="none"
document.querySelector(".hero").scrollIntoView({behavior:"smooth"})
},1500)
}

/* ================= LIGHT/DARK MODE ================= */
let currentSide="jedi"

function toggleTheme(){
document.body.classList.remove("jedi","sith")

if(currentSide==="jedi"){
document.body.classList.add("sith")
currentSide="sith"
}else{
document.body.classList.add("jedi")
currentSide="jedi"
}
}

/* ================= LIGHTSABER CURSOR TRAIL ================= */
document.addEventListener("mousemove",function(e){
let trail=document.createElement("div")
trail.style.position="fixed"
trail.style.width="4px"
trail.style.height="25px"
trail.style.background=currentSide==="jedi"?"cyan":"red"
trail.style.left=e.pageX+"px"
trail.style.top=e.pageY+"px"
trail.style.pointerEvents="none"
trail.style.boxShadow="0 0 10px "+(currentSide==="jedi"?"cyan":"red")
trail.style.borderRadius="2px"
trail.style.zIndex="10000"

document.body.appendChild(trail)

setTimeout(()=>{
trail.remove()
},150)
})
