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

// const contentDataGroups = document.querySelectorAll('.content__data__group')

// contentDataGroups.forEach((group) => {
// 	group.addEventListener('click', () => {
// 		contentDataGroups.forEach((group) => {
// 			group.classList.remove('active')
// 		})

// 		group.classList.add('active')
// 	})
// })
