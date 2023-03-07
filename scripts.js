const openButton = document.querySelector('.offer-link')
const closeButton = document.querySelector('.popup-close-button')
const popup = document.querySelector('.overlay')

openButton.addEventListener('click', (evt) => {
  evt.preventDefault()
  popup.classList.add('show')
})

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault()
  evt.stopPropagation()
  popup.classList.remove('show')
})
