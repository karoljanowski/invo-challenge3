export default function loading() {
    const button = document.querySelector('.order__card__button')
    button.addEventListener('click', function () {
        let loader = document.querySelector('.order__card__button__img')
        let text = document.getElementById('text')
        text.textContent = ''
        loader.style.display = 'block'


    })
}