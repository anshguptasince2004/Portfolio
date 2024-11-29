// Wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", () => {
    // Add animation classes to header and main sections
    const header = document.querySelector("header");
    const leftMain = document.querySelector(".left-main");
    const rightMain = document.querySelector(".right-main");

    // Trigger animations
    header.classList.add("header-animate");
    leftMain.classList.add("left-main-animate");
    rightMain.classList.add("right-main-animate");
});

// Wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", () => {
    const exploreButton = document.querySelector(".btn-explore");
    const leftMain = document.querySelector(".left-main");
    const rightMain = document.querySelector(".right-main");
    const newDisplay = document.querySelector(".new-display");

    // Add click event for explore button
    exploreButton.addEventListener("click", () => {
        // Fade out left and right main sections
        leftMain.classList.add("fade-out-left");
        rightMain.classList.add("fade-out-right");

        // Wait for the fade-out animation to finish before showing new-display
        setTimeout(() => {
            // Make new-display visible and apply fade-in effect
            newDisplay.style.display = "flex"; // Ensure it's visible
            newDisplay.classList.add("fade-in");
        }, 500); // Match this duration with the fade-out duration
    });
});
