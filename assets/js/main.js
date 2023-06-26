jQuery('img.svg').each(function () {
	var $img = jQuery(this)
	var imgID = $img.attr('id')
	var imgClass = $img.attr('class')
	var imgURL = $img.attr('src')

	jQuery.get(
		imgURL,
		function (data) {
			var $svg = jQuery(data).find('svg')

			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID)
			}

			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg')
			}

			$svg = $svg.removeAttr('xmlns:a')

			if (
				!$svg.attr('viewBox') &&
				$svg.attr('height') &&
				$svg.attr('width')
			) {
				$svg.attr(
					'viewBox',
					'0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width')
				)
			}

			$img.replaceWith($svg)
		},
		'xml'
	)
})

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
		scriptDropdown.classList.add('disabled')
	} else {
		scriptDropdown.classList.remove('disabled')
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

new Chart(ctx1, {
	type: 'bar',
	data: {
		labels: ['', '', ''],
		datasets: [
			{
				label: '# of Votes',
				data: [12, 5, 7],
				borderWidth: 1,
				backgroundColor: ['#01CFC2', '#4B71F1', '#EF854B'],

				barThickness: 25,
			},
		],
	},
	options: {
		indexAxis: 'y',
		scales: {
			y: {
				beginAtZero: true,
			},
			x: {
				max: 20,
				ticks: {
					stepSize: 2,
				},
			},
		},
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false, // <-- this option disables tooltips
			},
		},
	},
})

/* chart 2 */
const ctx2 = document.getElementById('myChart2')

new Chart(ctx2, {
	type: 'bar',
	data: {
		labels: ['', '', ''],
		datasets: [
			{
				label: '# of Votes',
				data: [12, 5, 7],
				borderWidth: 1,
				backgroundColor: ['#01CFC2', '#4B71F1', '#EF854B'],
				barThickness: 25,
			},
		],
	},
	options: {
		indexAxis: 'y',
		scales: {
			y: {
				beginAtZero: true,
			},
			x: {
				max: 20,
				ticks: {
					stepSize: 2,
				},
			},
		},
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false, // <-- this option disables tooltips
			},
		},
	},
})

/* chart 1 */
const ctx3 = document.getElementById('myChart3')

new Chart(ctx3, {
	type: 'bar',
	data: {
		labels: ['', '', '', ''],
		datasets: [
			{
				label: '# of Votes',
				data: [12, 5, 7, 14],
				borderWidth: 1,
				backgroundColor: ['#01CFC2', '#4B71F1', '#EF854B', '#e24d28'],
				barThickness: 25,
			},
		],
	},
	options: {
		indexAxis: 'y',
		scales: {
			y: {
				beginAtZero: true,
			},
			x: {
				max: 20,
				ticks: {
					stepSize: 2,
				},
			},
		},
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false, // <-- this option disables tooltips
			},
		},
	},
})
