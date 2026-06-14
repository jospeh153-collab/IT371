function toggleInfo(id) {
    var infoBox = document.getElementById(id);

    if (infoBox.style.display === "none" || infoBox.style.display === "") {
        infoBox.style.display = "block";
    } else {
        infoBox.style.display = "none";
    }
}

function submitSurvey(event) {
    event.preventDefault();
    document.getElementById("message").innerHTML =
        "Thank you! Your survey has been successfully submitted.";

}
