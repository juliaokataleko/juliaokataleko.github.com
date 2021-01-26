const toggle = document.getElementById("toggle")

const img_container = document.getElementById("img-container")

const img = document.querySelector("img")

toggle.addEventListener('change', (e) => {
    document.body.classList.toggle('dark', 
        e.target.checked)
})

img_container.addEventListener('mousemove', (e)=> {

    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2)"
    img.style.borderRadius = "10%"
})

img_container.addEventListener('mouseleave', (e)=> {
    img.style.transformOrigin = `center center`;
    img.style.transform = "scale(1)"
})


const text = "FullStack Web Developer"
let index = 0

function writeText(){
    const message = document.getElementById("message")
    message.innerText = text.slice(0, index)

    index++;

    if (index > text.length) {
        setTimeout(()=>{
        }, 3000);
        index = 0;
    }
}

setInterval(writeText, 500);

function createHeart(){
    const heart = document.createElement('div');

    heart.classList.add('heart');

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = Math.random() * 2 + 6 + "s";

    skills = ['PHP', 'Javascript', 
    'Laravel', 'Django', 'Bootstrap']

    const random = Math.floor(Math.random() * skills.length);

    let skill_selected = skills[random]

    heart.innerHTML = '<button class="skill">'+ skill_selected +'</button>'
    // heart.innerText = '💜'

    document.body.appendChild(heart)

    setTimeout(() => {
        heart.remove()
    }, 5000)
}

setInterval(createHeart, 1000);

// popup

const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.getElementById('container')

open.addEventListener("click", () => {
    container.classList.add("active")
})

close.addEventListener("click", () => {
    container.classList.remove("active")
})

const btn = document.getElementById('btn')
const sidebar = document.getElementById('sidebar')
const content = document.getElementById('content')

let menu_active = false

btn.addEventListener('click', ()=> {

    if(menu_active) {
        
        sidebar.style.width = "0%"
        sidebar.style.display = "none"
        content.style.width = "100%"
        content.style.display = "inline-block"

    } else {
        sidebar.style.width = "100%"
        sidebar.style.display = "inline-block"
        content.style.width = "0%"
        content.style.display = "none"
    }

    menu_active = !menu_active
})
