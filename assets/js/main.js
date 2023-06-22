const navbarItems = document.querySelectorAll('.navbar__item')

navbarItems.forEach((item) => {
	item.addEventListener('click', () => {
		navbarItems.forEach((item) => {
			item.classList.remove('active')
		})

		item.classList.add('active')
	})
})
