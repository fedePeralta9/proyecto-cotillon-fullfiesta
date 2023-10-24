addEventListener('DOMContentLoaded', () => {
    const imagenes = ['img/BANNER1.png', 'img/BANNER2.png']

    let i = 1
    const img1 = document.querySelector('#img1')
    const img2 = document.querySelector('#img2')
    const divindicadores = document.querySelector('#indicadores')

    for (let index = 0; index < imagenes.length; index++) {
        const div = document.createElement('div')
        div.classList.add('circles')
        div.id = index
        divindicadores.appendChild(div)
    }

    img1.src = imagenes[0]
    const circulos = document.querySelectorAll('.circles')
    circulos[0].classList.add('resaltado')

    const slideshow = () => {
        img2.src = imagenes[i]
        const circulo_actual = Array.from(circulos).find(el => el.id == i)
        Array.from(circulos).forEach(cir => cir.classList.remove('resaltado'))
        circulo_actual.classList.add('resaltado')

        img2.classList.add('active')
        i++

        if (i == imagenes.length) {
            i = 0

        }

        setTimeout(() => {
            img1.src = img2.src
            img2.classList.remove('active')
        }, 1000)

    }

    setInterval(slideshow, 4000)

})