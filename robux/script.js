var slider = document.getElementById("slider");
var output = document.getElementById("sliderOut");
output.innerHTML = slider.value * 500;

slider.oninput = function() {
    output.innerHTML = this.value * 500;
}

function proceed() {
    var username = document.getElementById("username").value;
    var submitOK = true
    if (username.length < 1) {
        alert("Please enter a username");
        submitOK = "false";
    } 
    
    if (submitOK == "false") {
        return false;
    }
    const parent = document.getElementById("body");
    const child = document.getElementById("page");
    const para = document.createElement("h1");
    const node = document.createTextNode("Successfully generated");
    para.appendChild(node);
    parent.replaceChild(para,child);
}