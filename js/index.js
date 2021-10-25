let btnGalery = window.document.querySelector('button#galery')
let down = 700
// VIEW
let view = window.document.querySelector('div.view')
let imgView = window.document.querySelector('img.view')
var scaled = false

// ARTS GLASS
let onehgl = window.document.querySelector('div#one')
let twohgl = window.document.querySelector('div#two')
let treehgl = window.document.querySelector('div#tree')
let fourhgl = window.document.querySelector('div#four')
let fivehgl = window.document.querySelector('div#five')

// HIGHTLIGHT DIV
let hightlight = window.document.querySelector('img#hglimage')

// IMAGES PATH
const SRC = 'resources/images/arts/'
const ONISRC = `${SRC}oni.png`
const ASTROBOYSRC = `${SRC}Astro_boy1.png`
const BASILSRC = `${SRC}BASIL.png`
const PRIZE1SRC = `${SRC}PRIZE1.png`
const UNTITLEEDSRC = `${SRC}UNTITLEED.png`
var curSrc = `${SRC}Astro_boy1.png`

btnGalery.onclick = function() {
    document.body.scrollTop = down
    document.documentElement.scrollTop = down
}

//Scaling image
hightlight.onclick = function() {
    let margin = 40
    let size = window.innerHeight - margin
    view.style.height = `${ window.innerHeight }px`
    view.style.width = `${ window.innerWidth }px`
    view.style.backgroundColor = '#000000D6'
    view.style.display = 'block'
    imgView.src = curSrc
    imgView.style.height = `${ size }px`
    imgView.style.top = `${ margin / 2 }px`
    imgView.style.left = `${ window.innerWidth / 2 - imgView.clientWidth / 2}px`
}

imgView.onclick = function() {
    if(scaled) {
        imgView.style.transform = 'scale(1.0)'
    }else {
        imgView.style.transform = 'scale(1.8)'
    }
    scaled=!scaled
}

// Changing image
onehgl.onclick = function() {
    hightlight.src = ASTROBOYSRC
    curSrc = hightlight.src
}

twohgl.onclick = function() {
    hightlight.src = BASILSRC
    curSrc = hightlight.src
}

treehgl.onclick = function() {
    hightlight.src = ONISRC
    curSrc = hightlight.src
}

fourhgl.onclick = function() {
    hightlight.src = PRIZE1SRC
    curSrc = hightlight.src
}

fivehgl.onclick = function() {
    hightlight.src = UNTITLEEDSRC
    curSrc = hightlight.src
}