
window.onscroll = () => {
    navlinks.classList.remove('active');
}

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.mid_navbar');
    navbar.classList.toggle("sticky", window.scrollY > 0);
});

