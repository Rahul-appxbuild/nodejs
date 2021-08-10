console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg = document.querySelector('#dash')
const ms = document.querySelector('#hash')
const s = document.querySelector('#tag')
const w = document.querySelector('#bag')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('/we?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msg.textContent = 'enter vaild input'
            } else {
                msg.textContent = data.forecast.sen
                s.textContent = 'wind-speed: '+ data.forecast.winds
                w.textContent = 'wind-direction: '+ data.forecast.windr
                ms.textContent = data.location
                console.log(data.location)
            }
        })
    })
})