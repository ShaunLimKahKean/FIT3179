// Function declarations
function incrementCounter() {
	var spanElement = document.getElementById('counter');
	var count = spanElement.getAttribute('numberOfClicks');
    count++;    
    spanElement.innerText = count;
    alert("The number is: " + count)
    spanElement.setAttribute('numberOfClicks', count);
}

function toggleVisibility() {
    var chartImage = document.getElementById('chart1');
    if (chartImage.style.display === "none") {
        chartImage.style.display = "block";
        alert("Image will be shown")
    } else {
        chartImage.style.display = "none";
        alert("Image will be removed")
    }
}

// Script calls
document.getElementById('incrementButton').addEventListener('click', incrementCounter);
document.getElementById('chartToggle').addEventListener('click', toggleVisibility);