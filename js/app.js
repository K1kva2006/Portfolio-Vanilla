// Mouse 

const mouse = document.querySelector(".mouse");

document.addEventListener("mousemove", move)

function move(e) {
    let x = e.pageX
    let y = e.pageY

    mouse.style.opacity = "1"
    mouse.style.transform = `translate(${x - 31.1}px, ${y - 31.1}px)`
}

// Mouse End
