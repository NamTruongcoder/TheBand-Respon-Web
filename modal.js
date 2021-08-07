const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal-close')
const modalContainer = document.querySelector('.js-modal-container')
const showBuyTickets = () => {
    modal.classList.add('open')
}
const closeBuyTickets = () => {
    modal.classList.remove('open')
}
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}
modalClose.addEventListener('click', closeBuyTickets)
modal.addEventListener('click', closeBuyTickets)
modalContainer.addEventListener('click', (event) => {
    event.stopPropagation()
})