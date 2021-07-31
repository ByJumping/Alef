window.addEventListener('load', function () {
    let btnUp = document.querySelector('.btnUp');
    let btnBuy = document.querySelectorAll('.catalog__button');
    let hearts = document.querySelectorAll('.catalog__heart_mod');
    let emailInput = document.querySelector('.footer__subscribe_email');
    let submitInput = document.querySelector('.footer__subscribe_button');
    let patterns = {
        email: /^.+@.+\..+$/,
    }
    let favorite = document.querySelector('.favorite')

    btnUp.addEventListener('click', function(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    window.addEventListener('scroll', function() {
        let pos = window.pageYOffset;

        if (pos > window.innerHeight) {
            btnUp.classList.remove('btnUp-visible');
        } else {
            btnUp.classList.add('btnUp-visible');
        }
    })

    btnBuy.forEach( (btn) =>{
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            btn.classList.add('catalog__button_buy')
            btn.innerHTML = 'Продан'
        })
    })

    hearts.forEach(heart =>{
        heart.addEventListener('click', () =>{
            heart.classList.toggle('heart_opacity')
            if (heart.classList.contains('heart_opacity')) {
                favorite.innerHTML = "<h2>Добавлено в избранное!</h2>"
                    setTimeout(function () {
                        favorite.innerHTML = ''
                }, 1500)
            } else {
                favorite.innerHTML = "<h2>Удалено из избранного!</h2>"
                setTimeout(function () {
                    favorite.innerHTML = ''
                }, 1500)
            }
        })
    })

    emailInput.addEventListener('focusin', function () {
        emailInput.classList.remove('err')
    })

    submitInput.addEventListener('click', (e) => {
        let err = false
        emailInput.value = emailInput.value.trim()
        let pattern = patterns.email
        if (!pattern.test(emailInput.value)) {
            err = true
            emailInput.classList.add('err')
        }
        if (err) {
            e.preventDefault()
        }
    })
})
