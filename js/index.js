let btnGalery = window.document.querySelector('button#galery')
let down = 700

btnGalery.onclick = function() {
    document.body.scrollTop = down
    document.documentElement.scrollTop = down
}
