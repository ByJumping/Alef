window.addEventListener('load', function () {
    let list = document.querySelector('#catalog')
    let button = document.querySelector('.sort__item')
    let items = document.querySelectorAll('.catalog__item')

    button.addEventListener('click', function () {
        let sorted = [...items].sort(function (a, b) {
            return a.dataset.price - b.dataset.price
        })
        list.innerHTML = ''

        for (let i of sorted) {
            list.appendChild(i)
        }
    })













})