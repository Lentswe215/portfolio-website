window.sr = ScrollReveal();
sr.reveal('.anim')


$(document).ready(() => {
    $('#menu-bars').click(() => {
        $('ul').toggleClass('open');
    })
    $('body').on('click', 'nav a', () => {
        $('ul').toggleClass('open');
    })
})
