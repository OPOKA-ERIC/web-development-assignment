document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial-slide");
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((slide, i) => {
            slide.style.opacity = "0";
			slide.style.position="absolute";
		});
		testimonials[index].style.opacity= "1";
		testimonials[index].style.position="relative";
	}
	function autoScrollingTestimonials() {
		currentIndex = (currentIndex + 1) % testimonials.length;
		showTestimonial(currentIndex);
	}
	showTestimonial(currentIndex);
	
	setInterval(autoScrollingTestimonials, 5000);
	
});
