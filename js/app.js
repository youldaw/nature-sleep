try {
	var swiper = new Swiper(".mySwiper", {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 5,
		freeMode: true,
		watchSlidesProgress: true,
		breakpoints: {
			360: {
				spaceBetween: 6,
				slidesPerView: 4.5,
			},
			500: {
				spaceBetween: 10,
				slidesPerView: 5,
			},
		},
	});
	var swiper2 = new Swiper(".mySwiper2", {
		loop: true,
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: swiper,
		},
	});
	var swiper3 = new Swiper(".mySwiper3", {
		slidesPerView: 3,
		spaceBetween: 20,
		pagination: {
			el: ".swiper-pagination2",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 1.2,
				spaceBetween: 20,
				centeredSlides: true,
				centeredSlidesBounds: true,
				pagination: {
					el: ".swiper-pagination",
					dynamicBullets: true,
				},
			},
			500: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			980: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1280: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
	});
	const selects = document.querySelectorAll(".select-menu");

	selects.forEach((item) => {
		let select = item.querySelector(".select");
		let options = item.querySelectorAll(".option");
		let optionList = item.querySelector(".options-list");
		select.onclick = function () {
			this.classList.toggle("active");
			this.classList.toggle("select_active");
			optionList.classList.toggle("active");
		};

		options.forEach((option) => {
			option.onclick = function () {
				options.forEach((a) => {
					a.classList.remove("selected");
				});
				this.classList.add("selected");
				let parent = this.parentNode.parentNode;
				let select = parent.querySelector(".select");
				let options_list = parent.querySelector(".options-list");
				select.classList.remove("active");
				select.classList.remove("select_active");
				options_list.classList.remove("active");
				select.querySelector("span").innerHTML = this.innerHTML;
			};
		});
	});
} catch (error) {
	console.log(error);
}

try {
	const incr = document.querySelector(".incr"),
		decr = document.querySelector(".decr"),
		counterInfo = document.querySelector(".count-info"),
		counterPrice = document.querySelector(".counter-price");
	let price = parseInt(counterPrice.textContent.slice(0, -1));

	incr.onclick = function () {
		let counter = Number(counterInfo.innerText);
		counterInfo.innerText = counter + 1;
		counterPrice.innerText =
			((counter + 1) * Number(counterPrice.dataset.price))
				.toString()
				.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "p";
	};

	decr.onclick = function () {
		let counter = Number(counterInfo.innerText);
		if (counter > 1) {
			counterInfo.innerText = counter - 1;
			counterPrice.innerText =
				((counter - 1) * Number(counterPrice.dataset.price))
					.toString()
					.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "p";
		} else {
			counter = 1;
		}
	};
} catch (error) {
	console.log(error);
}
