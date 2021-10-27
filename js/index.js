let btnGalery = window.document.querySelector('button#galery')

// MAIN
let main = window.document.querySelector('main')

// VIEW
let view = window.document.querySelector('div.view')
let imgView = window.document.querySelector('img.view')
let btnClose = window.document.querySelector('button#close')
var scaled = false

// ARTS GLASS
let onehgl = window.document.querySelector('div#one')
let twohgl = window.document.querySelector('div#two')
let treehgl = window.document.querySelector('div#tree')
let fourhgl = window.document.querySelector('div#four')
let fivehgl = window.document.querySelector('div#five')

// HIGHTLIGHT DIV
let hightlight = window.document.querySelectorAll('.hglimage')
let lupa = window.document.querySelector('div.lupa')

// BUTTON GROUP
let btns = window.document.querySelectorAll('button.group')
let btnOptions = window.document.querySelectorAll('img.imgoption')
let optionsDiv = window.document.querySelector('div#options')

// IMAGES PATH
const SRC = 'resources/images/arts/'
const SRCPORT = 'resources/images/portraits/'
const SRCHEAD = 'resources/images/headers/'
let allArtPaths = [`${SRC}Astro_boy1.png`, `${SRC}BASIL.png`, `${SRC}PRIZE1.png`, `${SRC}commission-1.png`, `${SRC}eu_e_ele.png`, `${SRC}DTIYS1.png`, `${SRC}Existential_crisis.png`, `${SRC}oni.png`, `${SRC}UNTITLEED.png`, `${SRC}UNTITLEED.png`]
let allPortraitsPaths = [`${SRCPORT}astro-portrait.jpg`, `${SRCPORT}basil-portrait.jpg`, `${SRCPORT}duck-portrait.jpg`, `${SRCPORT}food-portrait.jpg`, `${SRCPORT}couple-portrait.jpg`, `${SRCPORT}drawinyourstyle-portrait.jpg`, `${SRCPORT}crisis-portrait.jpg`, `${SRCPORT}oni-portrait.jpg`, `${SRCPORT}gore-portrait.jpg`, `${SRCPORT}gore-portrait.jpg`]
let allHeadersPaths = [`${SRCHEAD}astro.jpg`, `${SRCHEAD}basil.jpg`, `${SRCHEAD}duck.jpg`, `${SRCHEAD}food.jpg`, `${SRCHEAD}couple.jpg`, `${SRCHEAD}dyst.jpg`, `${SRCHEAD}crisis.jpg`, `${SRCHEAD}oni.jpg`, `${SRCHEAD}gore.jpg`, `${SRCHEAD}gore.jpg`]
let curHeadersPaths = [`${SRCHEAD}astro.jpg`, `${SRCHEAD}basil.jpg`, `${SRCHEAD}duck.jpg`, `${SRCHEAD}food.jpg`, `${SRCHEAD}couple.jpg`]
let arts = [`${SRC}Astro_boy1.png`, `${SRC}BASIL.png`, `${SRC}PRIZE1.png`, `${SRC}commission-1.png`, `${SRC}eu_e_ele.png`]
let curSrc = arts[0]

function addOpacity(option) {
    onehgl.classList.remove('opacityfull')
    twohgl.classList.remove('opacityfull')
    treehgl.classList.remove('opacityfull')
    fourhgl.classList.remove('opacityfull')
    fivehgl.classList.remove('opacityfull')
    option.classList.add('opacityfull')
}

function setImgFullScreen() {
    let margin = 40
    let size = window.innerHeight - margin
    view.style.height = `${ window.innerHeight }px`
    view.style.width = `${ window.innerWidth }px`
    view.style.backgroundColor = '#000000D6'
    view.style.display = 'block'
    imgView.src = curSrc
    imgView.style.height = `${ size }px`
    imgView.style.top = `${ margin / 2 }px`
}

imgView.onload = function() {
    imgView.style.left = `${ window.innerWidth / 2 - imgView.clientWidth / 2}px`
}

window.onresize = function() {
    let margin = 40
    let size = window.innerHeight - margin
    view.style.height = `${ window.innerHeight }px`
    view.style.width = `${ window.innerWidth }px`
    imgView.style.height = `${ size }px`
    imgView.style.top = `${ margin / 2 }px`
    imgView.style.left = `${ window.innerWidth / 2 - imgView.clientWidth / 2}px`
}

// Aparecer a bendita da lupa
hightlight[1].addEventListener('mouseenter', function(){
    lupa.style.display = 'block'
    hightlight[1].style.transform = 'scale(1.8)'
    hightlight[1].style.opacity = '60%'
})

hightlight[1].addEventListener('mouseout', function(){
    if(window.innerWidth > 600) {
        lupa.style.display = 'none'
    }
    hightlight[1].style.transform = 'scale(1.0)'
    hightlight[1].style.opacity = '100%'
})

lupa.addEventListener('mouseenter', function(){
    lupa.style.display = 'block'
    hightlight[1].style.transform = 'scale(1.8)'
    hightlight[1].style.opacity = '60%'
})

lupa.addEventListener('mouseout', function(){
    if(window.innerWidth > 600) {
        lupa.style.display = 'none'
    }
    hightlight[1].style.transform = 'scale(1.0)'
    hightlight[1].style.opacity = '100%'
})

lupa.addEventListener('click', function(){
    setImgFullScreen()
})

// IR PARA GALERIA
btnGalery.onclick = function() {
    hightlight[1].scrollIntoView()
}

//Scaling image
hightlight[1].onclick = function() {
    setImgFullScreen()
}

hightlight[0].onclick = function() {
    setImgFullScreen()
}

imgView.onclick = function() {
    if(scaled) {
        imgView.style.transform = 'scale(1.0)'
    }else {
        imgView.style.transform = 'scale(1.8)'
    }
    scaled=!scaled
}

btnClose.onclick = function() {
    view.style.display = 'none'
    imgView.style.transform = 'scale(1.0)'
    imgView.src = ''
    scaled = false
}

// Changing image
onehgl.onclick = function() {
    hightlight[0].srcset = curHeadersPaths[0].replace('.jpg', '-p.jpg')
    hightlight[1].src = curHeadersPaths[0]
    curSrc = arts[0]
    addOpacity(onehgl)
}

twohgl.onclick = function() {
    hightlight[0].srcset = curHeadersPaths[1].replace('.jpg', '-p.jpg')
    hightlight[1].src = curHeadersPaths[1]
    curSrc = arts[1]
    addOpacity(twohgl)
}

treehgl.onclick = function() {
    hightlight[0].srcset = curHeadersPaths[2].replace('.jpg', '-p.jpg')
    hightlight[1].src = curHeadersPaths[2]
    curSrc = arts[2]
    addOpacity(treehgl)
}

fourhgl.onclick = function() {
    hightlight[0].srcset = curHeadersPaths[3].replace('.jpg', '-p.jpg')
    hightlight[1].src = curHeadersPaths[3]
    curSrc = arts[3]
    addOpacity(fourhgl)
}

fivehgl.onclick = function() {
    hightlight[0].srcset = curHeadersPaths[4].replace('.jpg', '-p.jpg')
    hightlight[1].src = curHeadersPaths[4]
    curSrc = arts[4]
    addOpacity(fivehgl)
}

// Changing the portraits and the selected section
// SOFT
btns[0].onclick = function() {
    main.style.backgroundColor = 'white'
    for(let i = 0; i < 5; i++) {
        arts[i] = allArtPaths[i]
        curHeadersPaths[i] = allHeadersPaths[i];
        btnOptions[i].src = allPortraitsPaths[i];
    }
	document.body.style.backgroundColor = '#FFE2A0'
    document.body.style.backgroundImage = 'url(resources/images/background.jpg)'
    main.style.backgroundColor = 'white'
    optionsDiv.style.backgroundColor = 'var(--lighter)'
}

// SPOOPY
btns[1].onclick = function() {
    //Changing the portraits
    for(let i = 5; i < 10; i++) {
        arts[i-5] = allArtPaths[i]
        curHeadersPaths[i-5] = allHeadersPaths[i];
        btnOptions[i-5].src = allPortraitsPaths[i];
    }
    //Setting dark theme
	document.body.style.backgroundColor = '#231C24'
    document.body.style.backgroundImage = 'url(resources/images/background-dark.jpg)'
    main.style.backgroundColor = 'white'
    optionsDiv.style.backgroundColor = 'var(--light)'
}