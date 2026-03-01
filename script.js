// Function to toggle color
function themeController() {
    let darkMode = false;
    return function() {
        darkMode = !darkMode;
        document.body.classList.toggle("darkMode");
    };
}

const toggleTheme = themeController();
document.getElementById("themeBtn").addEventListener("click", toggleTheme);