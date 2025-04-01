document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;
    const nextBtn = document.querySelector(".nextBtn");
    const prevBtn = document.querySelector(".prevBtn");

    // Activity Texts Array
    const activities = [
        "Science Fair - Exploring Innovations",
        "Sports Day - Champions in Action",
        "Drama Club - Bringing Stories to Life"
    ];

    // Function to show the slide and update the activity text
    function showSlide(index) {
        items.forEach((item, i) => {
            item.style.display = i === index ? "block" : "none";
        });

        // Update the text for the current slide
        const carouselText = document.querySelector(".carousel-text");
        carouselText.textContent = activities[index];
    }

    // Event listeners for next and previous buttons
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalItems;
        showSlide(currentIndex);
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showSlide(currentIndex);
    });

    // Initialize the first slide
    showSlide(currentIndex);
});



