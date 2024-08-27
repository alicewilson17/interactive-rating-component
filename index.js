


const ratingContainer = document.querySelector('.container')
const thankyouContainer = document.querySelector('.thank-you')

const submitBtn = document.getElementById('submit')
const rateAgain = document.getElementById('rate-again')
const rating = document.getElementById("rating")
const rateButtons = document.querySelectorAll('.btn')

submitBtn.addEventListener('click', () => {
    thankyouContainer.classList.remove('hidden')
    ratingContainer.style.display="none"

})

rateAgain.addEventListener('click', () => {
    thankyouContainer.classList.add('hidden')
    ratingContainer.style.display="block"

})

rateButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
rating.innerText = btn.innerText
    })
})

