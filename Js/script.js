// OPEN TRIGGER
const openTrigger = document.querySelector('.menu-trigger')
const openTriggerTop = document.querySelector('.menu-trigger-bar.top')
const openTriggerMiddle = document.querySelector('menu-trigger-bar.middle')
const openTriggerBottom = document.querySelector('menu-trigger-bar.bottom')

// CLOSE TRIGGER
const closeTrigger = document.querySelector('.close-trigger')
const closeTriggerRight = document.querySelector('.close-trigger-bar.right')
const closeTriggerLeft = document.querySelector('.close-trigger-bar.left')

// LOGO
const logo = document.querySelector('.logo')

// MENU
const menuContainer = document.querySelector('.menu-container')
const menu = document.querySelector('.menu')
const menuButtom = document.querySelector('.menu-bg.buttom')
const menuMiddle = document.querySelector('.menu-bg.middle')

// TL
const tlOpen = new DocumentTimelineMax({ paused: true })
const tlClose = new DocumentTimelineMax({ paused: true })

tlOpen.addEventListener("preOpen")
  .to(logo, 0.4, {
    scale: 0.8,
    opacity: 0,
    ease: Power2.easeOut
  }, "preOpen")
  .to(openTriggerTop, 0.4, {
    x: "+80px", y: "-80px", delay: 0.1, ease: Power4.easeIn, onComplete: function() {
      closeTrigger.classList('z-index', '25')
    }
  })




