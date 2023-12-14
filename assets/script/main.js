let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// Eerste knop

let frontend = document.querySelector(".frontend")
frontend.addEventListener("click", function () {
  frontend.classList.toggle("klikt")
})

//tweede knop

let design = document.querySelector(".design")
design.addEventListener("dblclick", function () {
  design.classList.toggle("effect")
  console.log('double click')
})

//derde knop

let en = document.querySelector(".en")
en.addEventListener("keydown", function () {
  en.classList.toggle("kleur")
})

//vierde knop etc
let dev = document.querySelector(".dev")
dev.addEventListener("keydown", function (event) {
  // Als ik m indrukte, toggle dan de kleur
  if (event.key == 'm') {
    dev.classList.toggle("kleur")
  }

})

let sprint = document.querySelector(".sprint")
sprint.addEventListener("blur", function () {
  sprint.classList.toggle("kleuren")
})

let fix = document.querySelector(".fix")
fix.addEventListener("wheel", function () {
  fix.classList.toggle("fixen")
})

let the = document.querySelector(".the")
the.addEventListener("keyup", function () {
  the.classList.toggle("test")

})

let flow = document.querySelector(".flow")
flow.addEventListener("mouseup", function () {
  flow.classList.toggle("flows")
})

let user = document.querySelector(".user")
user.addEventListener("auxclick", function () {
  user.classList.toggle("users")
})

let interface = document.querySelector(".interface")
interface.addEventListener("mousemove", function () {
  interface.classList.toggle("interfaces")
})