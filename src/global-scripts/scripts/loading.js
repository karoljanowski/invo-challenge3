export default function loading() {
    const button = document.querySelector('button')
    button.addEventListener('click', function () {
        let loader = document.querySelector('.load')
        let text = document.querySelector('#text')
        loader.style.display = 'block'
        text.textContent = 'Loading'


    })
}