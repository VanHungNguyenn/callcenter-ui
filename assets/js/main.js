const pagination = document.getElementById('pagination')
const totalItems = 85
const currentPage = 3
const itemsPerPage = 10
const totalPages = Math.ceil(totalItems / itemsPerPage)

function generatePagination(totalPages, currentPage) {
	pagination.innerHTML = ''

	let ul = document.createElement('ul')
	ul.classList.add('pagination__content')

	let liTag = ''
	let activeLi
	let beforePages = currentPage - 1
	let afterPages = currentPage + 1

	if (currentPage > 1) {
		liTag += `<li class="pagination__btn pagination__prev" onclick="generatePagination(totalPages, ${
			currentPage - 1
		})">
			<img
				class="svg svg_button"
				src="./assets/images/arrow-left.svg"
				alt=""
			/>
		</li>`
	}

	if (currentPage > 2) {
		liTag += `<li class="pagination__numb" onclick="generatePagination(totalPages, 1)">1</li>`

		if (currentPage > 3) {
			liTag += `<li class="pagination__dots">...</li>`
		}
	}

	for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
		if (currentPage === pageLength) {
			activeLi = 'pagination__active'
		} else {
			activeLi = ''
		}

		if (pageLength > 0 && pageLength <= totalPages) {
			liTag += `<li class="pagination__numb ${activeLi}" onclick="generatePagination(totalPages, ${pageLength})">${pageLength}</li>`
		}
	}

	if (currentPage < totalPages - 1) {
		if (currentPage < totalPages - 2) {
			liTag += `<li class="pagination__dots">...</li>`
		}
		liTag += `<li class="pagination__numb" onclick="generatePagination(totalPages, ${totalPages})">${totalPages}</li>`
	}

	if (currentPage < totalPages) {
		liTag += `<li class="pagination__btn pagination__next" onclick="generatePagination(totalPages, ${
			currentPage + 1
		})">
			<img
				class="svg svg_button"
				src="./assets/images/arrow-right.svg"
				alt=""
			/>
		</li>`
	}

	ul.innerHTML = liTag

	pagination.appendChild(ul)

	const statisticsElement = document.createElement('div')
	statisticsElement.classList.add('pagination__statistics')
	const startRange = (currentPage - 1) * itemsPerPage + 1
	const endRange = Math.min(startRange + itemsPerPage - 1, totalItems)
	statisticsElement.innerHTML = `<span>${startRange}</span> - <span>${endRange}</span> of <span>${totalItems}</span> totals`

	pagination.appendChild(statisticsElement)
}

generatePagination(totalPages, currentPage)

var imgList = document.querySelectorAll('img.svg')

imgList.forEach(function (img) {
	var imgID = img.getAttribute('id')
	var imgClass = img.getAttribute('class')
	var imgURL = img.getAttribute('src')

	var xhr = new XMLHttpRequest()
	xhr.open('GET', imgURL, true)
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var parser = new DOMParser()
			var svgDoc = parser.parseFromString(
				xhr.responseText,
				'image/svg+xml'
			)
			var svg = svgDoc.querySelector('svg')

			if (typeof imgID !== 'undefined') {
				svg.setAttribute('id', imgID)
			}

			if (typeof imgClass !== 'undefined') {
				svg.setAttribute('class', imgClass + ' replaced-svg')
			}

			svg.removeAttribute('xmlns:a')

			if (
				!svg.getAttribute('viewBox') &&
				svg.getAttribute('height') &&
				svg.getAttribute('width')
			) {
				svg.setAttribute(
					'viewBox',
					'0 0 ' +
						svg.getAttribute('width') +
						' ' +
						svg.getAttribute('height')
				)
			}

			img.parentNode.replaceChild(svg, img)
		}
	}
	xhr.send()
})

// var imgList = document.getElementsByTagName('img')

// Array.from(imgList).forEach(function (img) {
// 	if (img.classList.contains('svg')) {
// 		var imgID = img.getAttribute('id')
// 		var imgClass = img.getAttribute('class')
// 		var imgURL = img.getAttribute('src')

// 		var xhr = new XMLHttpRequest()
// 		xhr.open('GET', imgURL, true)
// 		xhr.onreadystatechange = function () {
// 			if (xhr.readyState === 4 && xhr.status === 200) {
// 				var parser = new DOMParser()
// 				var svgDoc = parser.parseFromString(
// 					xhr.responseText,
// 					'image/svg+xml'
// 				)
// 				var svg = svgDoc.querySelector('svg')

// 				if (svg && typeof imgID !== 'undefined') {
// 					svg.setAttribute('id', imgID)
// 				}

// 				if (svg && typeof imgClass !== 'undefined') {
// 					svg.setAttribute('class', imgClass + ' replaced-svg')
// 				}

// 				img.parentNode.replaceChild(svg, img)
// 			}
// 		}
// 		xhr.send()
// 	}
// })

const navbarItems = document.querySelectorAll('.navbar__item')

navbarItems.forEach((item) => {
	item.addEventListener('click', () => {
		navbarItems.forEach((item) => {
			item.classList.remove('active')
		})

		item.classList.add('active')
	})
})

var dropdowns = document.querySelectorAll('.dropdown')

document.addEventListener('click', function (event) {
	dropdowns.forEach(function (dropdown) {
		var select = dropdown.querySelector('.dropdown__select')
		var value = dropdown.querySelector('.dropdown__value')
		var list = dropdown.querySelector('.dropdown__list')

		if (
			!dropdown.contains(event.target) &&
			dropdown.classList.contains('open')
		) {
			dropdown.classList.remove('open')
		}
	})
})

dropdowns.forEach(function (dropdown) {
	var select = dropdown.querySelector('.dropdown__select')
	var value = dropdown.querySelector('.dropdown__value')
	var list = dropdown.querySelector('.dropdown__list')

	select.addEventListener('click', function () {
		dropdown.classList.toggle('open')
	})

	var items = dropdown.querySelectorAll('.dropdown__item')
	items.forEach(function (item) {
		item.addEventListener('click', function () {
			var text = item.textContent
			value.textContent = text
			dropdown.classList.remove('open')
		})
	})
})

const scriptCheckbox = document.getElementById('script-checkbox')
const scriptDropdown = document.getElementById('script-dropdown')

scriptCheckbox.addEventListener('change', () => {
	if (scriptCheckbox.checked) {
		scriptDropdown.classList.remove('disabled')
	} else {
		scriptDropdown.classList.add('disabled')
	}
})

document.addEventListener('DOMContentLoaded', function () {
	var rowCheckboxes = document.querySelectorAll('.row_checkbox')
	var selectedNumber = document.getElementById('selectedNumber')
	var dashboardSelected = document.querySelector('.dashboard__selected')
	var checkboxAll = document.getElementById('checkboxAll')

	function updateSelectedNumber() {
		var selectedCount = document.querySelectorAll(
			'.row_checkbox:checked'
		).length

		selectedNumber.textContent = selectedCount
	}

	function updateDashboardSelected() {
		var selectedCount = document.querySelectorAll(
			'.row_checkbox:checked'
		).length

		dashboardSelected.classList.toggle('active', selectedCount > 0)
	}

	rowCheckboxes.forEach(function (checkbox) {
		checkbox.addEventListener('click', function () {
			this.closest('tr').classList.toggle('active')
			updateSelectedNumber()
			updateDashboardSelected()
		})
	})

	checkboxAll.addEventListener('click', function () {
		var isChecked = this.checked
		var rowCheckboxes = document.querySelectorAll('.row_checkbox')
		var rows = document.querySelectorAll('tr')

		rowCheckboxes.forEach(function (checkbox) {
			checkbox.checked = isChecked
		})

		rows.forEach(function (row) {
			row.classList.toggle('active', isChecked)
		})

		updateSelectedNumber()
		updateDashboardSelected()
	})
})

window.addEventListener('DOMContentLoaded', function () {
	var detailButton = document.querySelector('.infor__detail__button')
	var inforTop = document.querySelector('.infor__top')
	var inforUpdate = document.querySelector('.infor__update')
	var cancelInforButton = document.getElementById('cancelInfor')
	var updateInforButton = document.getElementById('updateInfor')

	detailButton.addEventListener('click', function () {
		inforTop.style.display = 'none' // Ẩn infor__top
		inforUpdate.style.display = 'block' // Hiển thị infor__update
	})

	cancelInforButton.addEventListener('click', function () {
		inforUpdate.style.display = 'none' // Ẩn infor__update
		inforTop.style.display = 'block' // Hiển thị infor__top
	})

	updateInforButton.addEventListener('click', function () {
		inforUpdate.style.display = 'none' // Ẩn infor__update
		inforTop.style.display = 'block'
	})
})

window.addEventListener('DOMContentLoaded', function () {
	var inforTop = document.querySelector('.infor__top')
	var inforUpdate = document.querySelector('.infor__update')

	// Cập nhật chiều cao của infor__update khi trang được tải hoặc kích thước của cửa sổ thay đổi
	function updateInforUpdateHeight() {
		var inforTopHeight = inforTop.offsetHeight
		inforUpdate.style.height = inforTopHeight + 'px'
	}

	// Gọi hàm cập nhật chiều cao khi trang được tải
	updateInforUpdateHeight()

	// Gọi hàm cập nhật chiều cao khi kích thước của cửa sổ thay đổi
	window.addEventListener('resize', updateInforUpdateHeight)
})

$(document).ready(function () {
	$('.dashboard__tab--item').on('click', function () {
		var tabId = $(this).attr('id')
		$('.dashboard__tab--item').removeClass('active')
		$(this).addClass('active')
		$('.dashboard__list--item').removeClass('active')
		$('#' + tabId.replace('group', 'list')).addClass('active')
	})
})

/* chart 1 */
const ctx1 = document.getElementById('myChart1')

a = new Chart(ctx1, {
	type: 'doughnut',
	data: {
		labels: ['Đang chờ', 'Đã gọi', 'Bận'],
		datasets: [
			{
				label: 'Số lượng',
				data: [12, 5, 7],
				backgroundColor: ['#01CFC2', '#4B71F1', '#EF854B'],
			},
		],
	},
	options: {
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false, // <-- this option disables tooltips
			},
		},
		cutout: 25,
	},
})

/* chart 2 */
const ctx2 = document.getElementById('myChart2')

new Chart(ctx2, {
	type: 'doughnut',
	data: {
		labels: ['Đang chờ', 'Đã gọi', 'Bận'],
		datasets: [
			{
				label: 'Số lượng',
				data: [12, 5, 7],
				backgroundColor: ['#01CFC2', '#4B71F1', '#EF854B'],
			},
		],
	},
	options: {
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false, // <-- this option disables tooltips
			},
		},
		cutout: 25,
	},
})

/* chart 1 */
const ctx3 = document.getElementById('myChart3')

new Chart(ctx3, {
	type: 'doughnut',
	data: {
		labels: ['Đang chờ', 'Đã gọi', 'Bận', 'Khác'],
		datasets: [
			{
				label: 'Số lượng',
				data: [12, 5, 7, 7],
				backgroundColor: ['#01CFC2', '#4B71F1', '#EF854B', '#e24d28'],
			},
		],
	},
	options: {
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false, // <-- this option disables tooltips
			},
		},
		cutout: 25,
	},
})

/* license */
const buttonLicense = document.getElementById('buttonLicense')
const license = buttonLicense.querySelector('.license')

buttonLicense.addEventListener('click', function (event) {
	event.stopPropagation()

	license.classList.toggle('active')
})

document.addEventListener('click', function (event) {
	if (
		!buttonLicense.contains(event.target) &&
		!license.contains(event.target)
	) {
		license.classList.remove('active')
	}
})

// click tab show popup dashboard
const dashboardTabItems = document.querySelectorAll('.dashboard__tab--item')
const dashboardTabPopup = document.querySelector('.dashboard__tab--popup')

dashboardTabItems.forEach((item, index) => {
	const dashboardTabIcon = item.querySelector('.dashboard__tab--icon')
	const dashboardTab = item.closest('.dashboard__tab')

	dashboardTabIcon.addEventListener('click', function () {
		const parentPositionLeft = dashboardTab.getBoundingClientRect().left
		const itemLeft = dashboardTabIcon.getBoundingClientRect().left

		dashboardTabPopup.style.left = `${itemLeft - parentPositionLeft}px`

		dashboardTabPopup.classList.toggle('active')
	})
})

document.addEventListener('click', (event) => {
	const targetElement = event.target

	if (
		!dashboardTabPopup.contains(targetElement) &&
		!targetElement.classList.contains('svg_button')
	) {
		dashboardTabPopup.classList.remove('active')
	}
})

dashboardTabPopup.addEventListener('click', (event) => {
	const clickedItem = event.target

	if (clickedItem.classList.contains('dashboard__tab--popup--item')) {
		dashboardTabPopup.classList.remove('active')
	}
})
