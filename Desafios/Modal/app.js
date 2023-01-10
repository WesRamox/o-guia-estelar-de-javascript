var button = document.querySelector('#openModal')
var modal = document.querySelector('.modal-wrapper')
var body = document.querySelector('body')

button.addEventListener('click', openModal)

function openModal() {
    if(modal.classList.contains = 'invisible') {
        modal.classList.remove('invisible')
    } 
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'
    if(isEscKey) {
        modal.classList.add('invisible')
    }
})
