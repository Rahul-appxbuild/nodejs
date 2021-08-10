console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg = document.querySelector('#dash')
const ms = document.querySelector('#hash')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('http://localhost:3000/we?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                msg.textContent = data.forecast
                ms.textContent = data.location
                console.log(data.location)
            }
        })
    })
})