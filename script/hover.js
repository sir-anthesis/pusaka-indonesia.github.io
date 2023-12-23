const hovers = document.querySelectorAll('.hover');

hovers.forEach(hover => {
    hover.addEventListener('mouseenter', function () {
        const parent = hover.parentElement;
        const grandParent = parent.parentElement;
        grandParent.classList.add('show');
    });
});

hovers.forEach(hover => {
    hover.addEventListener('mouseleave', function () {
        const parent = hover.parentElement;
        const grandParent = parent.parentElement;
        grandParent.classList.remove('show');
    });
});
