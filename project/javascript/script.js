window.sr = ScrollReveal();
sr.reveal('.anim')


$(document).ready(() => {
    $('#menu-icon').click(() => {
        $('ul').toggleClass('show');
    })
    $('body').on('click', 'nav a', () => {
        $('ul').toggleClass('show');
    })
})
