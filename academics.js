function toggleSection() {
    var content = document.getElementById("expandableContent");
    var button = document.querySelector(".toggle-btn");

    if (content.style.maxHeight) {
        content.style.maxHeight = null;  // Collapse
        content.style.padding = "0 20px";
        button.innerText = "Show courses";
    } else {
        content.style.maxHeight = content.scrollHeight + "px";  // Expand
        content.style.padding = "10px 20px";
        button.innerText = "Hide Courses";
    }
}