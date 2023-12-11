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