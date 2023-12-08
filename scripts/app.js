let emailInput = document.getElementById('email-input')
const emailButton = document.getElementById('email-button')

document.getElementById('card-form').addEventListener('submit', function(event) {
  // Prevent the default form submission
  event.preventDefault()
})

emailButton.addEventListener('click', ()=> {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(emailInput.value)) {
 console.log('invalid')
 emailInput.style.borderColor = 'red'
 emailInput.style.setProperty('--plholder', 'red')
 emailInput.style.backgroundColor = '#ff00001c'
return
}

})