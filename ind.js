//card
const cart = function () {
    const cartBtn = document.querySelector('.button-cart')
    const cart = document.getElementById('modal-cart')
    const closeBtn = cart.querySelector('.modal-close')

    cartBtn.addEventListener('click', function () {
        cart.style.display = 'flex'
    })

    closeBtn.addEventListener('click', function () {
        cart.style.display = ""
    })
}

cart()

//search
const search = function (){
   const input = document.querySelector('.search-block > input')
   const searchBtn = document.querySelector('.search-block > button')

    searchBtn.addEventListener('click', () => {

    })
    input.addEventListener('input', (e) => {

    })
}

search()

