window.addEventListener('load', function () {
    let list = document.querySelector('#catalog')
    let sort = document.querySelectorAll('.sort__item')
    let items = document.querySelectorAll('.catalog__item')



    sort.forEach(sortItem => {
        sortItem.addEventListener('click', function (e) {
            e.preventDefault()
            if (sortItem.classList.contains('_up')) {
                let sorted = [...items].sort(function (a, b) {
                    return a.dataset.price - b.dataset.price
                })
                list.innerHTML = ''
                for (let i of sorted) {
                    list.appendChild(i)
                }
            } else if (sortItem.classList.contains('_down')) {
                let sorted = [...items].sort(function (a, b) {
                    return b.dataset.price - a.dataset.price
                })
                list.innerHTML = ''
                for (let i of sorted) {
                    list.appendChild(i)
                }
            } else {
                let sorted = [...items].sort(function (a, b) {
                    return a.dataset.age - b.dataset.age
                })
                list.innerHTML = ''
                for (let i of sorted) {
                    list.appendChild(i)
                }
            }
        })
    })

    // sort.addEventListener('click', function (e) {
    //     e.preventDefault()
    //     let sorted = [...items].sort(function (a, b) {
    //         return a.dataset.price - b.dataset.price
    //     })
    //     list.innerHTML = ''
    //
    //     for (let i of sorted) {
    //         list.appendChild(i)
    //     }
    // })













})
