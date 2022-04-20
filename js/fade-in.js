
const fadeInObserver = new IntersectionObserver((entries, observer) => {

  entries.forEach(entry => {
    if (entry.isIntersecting) {

      setTimeout(() => {
        entry.target.classList.add("appear")
        observer.unobserve(entry.target)

      }, window.innerWidth > 800 ? entry.target.dataset.fadeInDelay : 0)    //No delay in mobile devices
    }
  })
}, {
  threshold: 0,
  rootMargin: "0% 5000px -5% 5000px"
})

const faders = [...document.querySelectorAll("[data-fade-in]")]

faders.forEach(fader => {
  fadeInObserver.observe(fader)
})

