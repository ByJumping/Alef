window.addEventListener('load', function () {
    let list = document.querySelector('#catalog')
    let sort = document.querySelector('.sort__item')
    let items = document.querySelectorAll('.catalog__item')

    sort.addEventListener('click', function (e) {
        e.preventDefault()
        let sorted = [...items].sort(function (a, b) {
            return a.dataset.price - b.dataset.price
        })
        list.innerHTML = ''

        for (let i of sorted) {
            list.appendChild(i)
        }
    })













})
