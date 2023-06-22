const navbarItems = document.querySelectorAll('.navbar__item')

navbarItems.forEach((item) => {
	item.addEventListener('click', () => {
		navbarItems.forEach((item) => {
			item.classList.remove('active')
		})

		item.classList.add('active')
	})
})

const contentDataGroups = document.querySelectorAll('.content__data__group')

contentDataGroups.forEach((group) => {
	group.addEventListener('click', () => {
		contentDataGroups.forEach((group) => {
			group.classList.remove('active')
		})

		group.classList.add('active')
	})
})
