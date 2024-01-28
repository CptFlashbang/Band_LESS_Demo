document.addEventListener("DOMContentLoaded", function() {
    fetch('performances.json')
    .then(response => response.json())
    .then(data => createPerformanceElements(data))    
});

function createPerformanceElements() {

}