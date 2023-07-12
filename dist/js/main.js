//! Navbar

window.onscroll = () => {
  const header = document.getElementById('header')
  let backtotop = document.getElementById('down')
      if (window.scrollY > 100) {
        header.classList.add('navbar-fixed')
        backtotop.classList.remove('hidden')

      } else {
        header.classList.remove('navbar-fixed')
        backtotop.classList.add('hidden')
      }
}
//! Hamburger 

const hamburger = document.getElementById('hamburger')
const navMenu = document.getElementById('menu')
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active')
  navMenu.classList.toggle('hidden')
})

//! Skills

//! Back to top