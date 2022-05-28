window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButton()

  activateMenuAtSection(home)
  activateMenuAtSection(services)
  activateMenuAtSection(about)
  activateMenuAtSection(contact)
}

function activateMenuAtSection(section){
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop

  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine =  sectionEndsAt <= targetLine

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if(sectionBoundaries){
    menuElement.classList.add('active')
  }
}

function showNavOnScroll(){
  if (scrollY > 0) {
    navigation.classList.add("scroll")
  } else {
    navigation.classList.remove("scroll")
  }
}

function showBackToTopButton(){
  if (scrollY > 500) {
    backToTop.classList.add("show")
  } else {
    backToTop.classList.remove("show")
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'bottom',
  distance: '30px',
  duration: 1000
}).reveal(`
#home, 
#home img, 
#home .infos, 
#services, 
#services header, 
#services .card,
#about,
#about header,
#about content,
#contact,
#contact header,
#contact content`)
