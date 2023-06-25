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
	// Lặp qua từng dropdown và kiểm tra xem target của sự kiện có nằm trong dropdown hay không
	dropdowns.forEach(function (dropdown) {
		var select = dropdown.querySelector('.dropdown__select')
		var value = dropdown.querySelector('.dropdown__value')
		var list = dropdown.querySelector('.dropdown__list')

		// Nếu target không thuộc dropdown và dropdown đang mở, đóng dropdown
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

$(document).ready(function () {
	$('.row_checkbox').on('click', function () {
		$(this).closest('tr').toggleClass('active')
	})
})

$(document).ready(function () {
	$('#checkboxAll').on('click', function () {
		$('.row_checkbox').prop('checked', $(this).prop('checked'))
		$('tr').toggleClass('active', $(this).prop('checked'))
	})

	$('.row_checkbox').on('click', function () {
		var allChecked =
			$('.row_checkbox:checked').length === $('.row_checkbox').length
		$('#checkboxAll').prop('checked', allChecked)
		$(this).closest('tr').toggleClass('active', $(this).prop('checked'))
	})
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
