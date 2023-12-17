let emailInput = document.getElementById('email-input')
const emailButton = document.getElementById('email-button')
const errorMessage = document.getElementById('error-message')
const signupCard = document.getElementById('signup-card')
const thanksCard = document.getElementById('thanks-card-container')
const dismissButton = document.getElementById('dismiss')

document.getElementById('card-form').addEventListener('submit', function (event) {
  // Prevent the default form submission
  event.preventDefault()
})

emailButton.addEventListener('click', () => {
  let emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  if (!emailRegex.test(emailInput.value)) {
    console.log('invalid')
    emailInput.style.borderColor = 'red'
    emailInput.style.setProperty('--plholder', 'red')
    emailInput.style.backgroundColor = '#ff00001c'
    errorMessage.style.visibility = 'visible'
    return
  }
  else {
    signupCard.style.display = 'none'
    thanksCard.style.display = 'flex'
  }
})

dismissButton.addEventListener('click', () => {
  resetError()
  signupCard.style.display = 'flex'
  thanksCard.style.display = 'none'
  emailInput.value = ''
})

function resetError (){
  emailInput.style.borderColor = 'lightgrey'
  emailInput.style.setProperty('--plholder', 'rgb(128, 127, 127)')
  emailInput.style.backgroundColor = 'white'
  errorMessage.style.visibility = 'hidden'
}

resetError()