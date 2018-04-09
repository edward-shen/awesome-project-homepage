let showDay = false;

function toggleStyle() {
    if (showDay) {
        document.body.style.setProperty("--primary-color", "white");
        document.body.style.setProperty("--secondary-color", "black");
    } else {
        document.body.style.setProperty("--primary-color", "black");
        document.body.style.setProperty("--secondary-color", "white");
    }

    showDay = !showDay;
}