const animatedElements = document.querySelectorAll(
    '.text-image, .text-box'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '-30% 0px -30% 0px'
});

animatedElements.forEach(element => observer.observe(element));