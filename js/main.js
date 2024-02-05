const btn = document.querySelector('.nav__btn')
const nav = document.querySelector('.nav__box')

const toggleNav = () => {
  nav.classList.toggle('active')
  document.body.classList.toggle('sticky-body')
}

btn.addEventListener('click', toggleNav)