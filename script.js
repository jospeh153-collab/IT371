function toggleInfo(id) {
    var infoBox = document.getElementById(id);

    if (infoBox.style.display === "none") {
        infoBox.style.display = "block";
    } else {
        infoBox.style.display = "none";
    }
}
