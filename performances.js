document.addEventListener("DOMContentLoaded", function() {
    fetch('performances.json')
    .then(response => response.json())
    .then(data => createPerformanceElements(data))    
    .catch(error => console.error('Error fetching JSON:', error));
});

function createPerformanceElements() {

}