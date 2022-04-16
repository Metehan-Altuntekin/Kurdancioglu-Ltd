
const heroObserver = new IntersectionObserver((entries, observer) => {

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      header.classList.remove("scrolled")
    } else {
      header.classList.add("scrolled")
    }
  })

}, {
  rootMargin: "50% 0% 0% 49%"
})

heroObserver.observe(hero)

//Mobile hamburger menu nav
const mobileNavOpen = document.getElementById("mobile-nav-toggle")
const mobileNavClose = document.getElementById("close-mobile-nav")
const mobileNav = document.querySelector("header nav")

mobileNavOpen.addEventListener("click", function () {
  mobileNav.classList.add("open")
})

mobileNavClose.addEventListener("click", function () {
  mobileNav.classList.remove("open")
})

//Dark - Light theme toggle
const themeToggle = document.getElementById("theme-toggle")

themeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark-theme")) {
    /* body.classList.remove("dark-theme")
    themeToggle.classList.remove("dark-theme") */
    everything.forEach(item => {
      item.classList.remove("dark-theme")
    })
  } else {
    /* body.classList.add("dark-theme")
    themeToggle.classList.add("dark-theme") */
    everything.forEach(item => {
      item.classList.add("dark-theme")
    })
  }
})