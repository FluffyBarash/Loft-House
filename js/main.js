// Basic
const menuBtn = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu__list')
const body = document.querySelector('body')
const html = document.querySelector('html')

menuBtn.addEventListener('click', () => {
	body.classList.toggle('overflow-hidden')
	html.classList.toggle('overflow-hidden')
})

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu__list--active')
})

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('menu__btn--active')
})

// PhoneMask
mask('[data-tel-input]')

// Удаляем "+" если больше ничего не введено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll('[data-tel-input]')
phoneInputs.forEach(input => {
	input.addEventListener('input', () => {
		if (input.value == '+') input.value = ''
	})

	input.addEventListener('blur', () => {
		if (input.value == '+') input.value = ''
	})
})

// Анимации
function onEntry(entry) {
	entry.forEach(chang => {
		if (chang.isIntersecting) {
			chang.target.classList.add('appearance')
		}
	})
}

let options = {
	threshold: [0.5]
}
let observer = new IntersectionObserver(onEntry, options)
let elements = document.querySelectorAll(
	'.animation-up, .animation-down, .animation-right, .animation-left, .animation-zoom'
)

for (let elm of elements) {
	observer.observe(elm)
}
