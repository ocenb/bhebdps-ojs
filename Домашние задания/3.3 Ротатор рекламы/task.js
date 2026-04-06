const rotators = document.querySelectorAll(".rotator");

rotators.forEach((rotator) => {
	const cases = rotator.querySelectorAll(".rotator__case");
	let currentIndex = Array.from(cases).findIndex((c) =>
		c.classList.contains("rotator__case_active"),
	);

	if (currentIndex === -1) {
		currentIndex = 0;
		cases[currentIndex].classList.add("rotator__case_active");
	}

	const initialCase = cases[currentIndex];
	if (initialCase.dataset.color) {
		initialCase.style.color = initialCase.dataset.color;
	}

	const rotate = () => {
		cases[currentIndex].classList.remove("rotator__case_active");

		currentIndex = (currentIndex + 1) % cases.length;
		const nextCase = cases[currentIndex];

		if (nextCase.dataset.color) {
			nextCase.style.color = nextCase.dataset.color;
		}

		nextCase.classList.add("rotator__case_active");

		const speed = nextCase.dataset.speed
			? parseInt(nextCase.dataset.speed, 10)
			: 1000;
		setTimeout(rotate, speed);
	};

	const currentSpeed = initialCase.dataset.speed
		? parseInt(initialCase.dataset.speed, 10)
		: 1000;
	setTimeout(rotate, currentSpeed);
});
