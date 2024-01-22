window.addEventListener('scroll', function () {
    let interface = document.querySelector('#interface')
    interface.classList.toggle('rolagem',window.scrollY > 0 )
})
