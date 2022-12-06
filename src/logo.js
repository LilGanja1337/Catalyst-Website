function setTextAnimation(delay, duration, strokeWidth, strokeColor, strokeColor2) {
    let paths = document.querySelectorAll(".title-text path.cata-text")
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i]
        const length = path.getTotalLength()
        path.style["stroke-dashoffset"] = `${length}px`
        path.style["stroke-dasharray"] = `${length}px`
        path.style["stroke-width"] = `${strokeWidth}px`
        path.style["stroke"] = `${strokeColor}`
        path.style["animation"] = `${duration}s svg-text-anim forwards linear`
        path.style["animation-delay"] = `${i * delay}s`
    }
    let paths2 = document.querySelectorAll(".title-text path.cata-bracket")
    for (let i = 0; i < paths2.length; i++) {
        const path = paths2[i]
        const length = path.getTotalLength()
        path.style["stroke-dashoffset"] = `${length}px`
        path.style["stroke-dasharray"] = `${length}px`
        path.style["stroke-width"] = `${strokeWidth}px`
        path.style["stroke"] = `${strokeColor2}`
        path.style["animation"] = `${duration}s svg-bracket-anim forwards linear`
        path.style["animation-delay"] = `${i * delay}s`
    }
}

setTextAnimation(0.1, 3, 2, '#ffffff', '#00B3B3')
