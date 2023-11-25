const olhos = [...document.getElementsByClassName("olho")]

let posx_Mouse = 0
let posy_Mouse = 0

window.addEventListener("mousemove", (evt) => {
    posx_Mouse= evt.clientX
    posy_Mouse= evt.clientY

    const rot=Math.atan2(posy_Mouse, posx_Mouse) * 180/Math.PI

    olhos.forEach((o) => {
        o.style.transform="rotate("+rot+"deg)"
    })
})

