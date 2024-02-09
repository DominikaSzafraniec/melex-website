const btn = document.querySelector('.nav__btn')
const nav = document.querySelector('.nav__box')
const allNavItems = document.querySelectorAll('.nav__item')

const toggleNav = () => {
  nav.classList.toggle('active')
  document.body.classList.toggle('sticky-body')

  hideNav()
  
}

const hideNav = () => {
  allNavItems.forEach(item => {
    item.addEventListener('click', toggleNav)
  });
}



btn.addEventListener('click', toggleNav)