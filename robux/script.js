var slider = document.getElementById("slider");
var output = document.getElementById("sliderOut");
output.innerHTML = slider.value * 500;

slider.oninput = function() {
    output.innerHTML = this.value * 500;
}

function proceed() {
    var username = document.getElementById("username").value;
    if (username.length < 1) {
        alert("Please enter a username");
        return false;
    }
    location.href = "assets/rickroll.mp4"
}