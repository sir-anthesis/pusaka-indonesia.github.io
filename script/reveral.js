const sections = document.querySelectorAll('section');
const firstSection = document.querySelector('.animate1');

window.onload = () => {
    firstSection.parentElement.classList.add('show-animate');
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offSet = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offSet && top < offSet + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });
}