document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".animated-title", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".subtitle", { opacity: 0, y: 20, duration: 1.2, delay: 0.5 });
    gsap.from(".project-card", { opacity: 0, stagger: 0.3, y: 30, duration: 1 });
});
