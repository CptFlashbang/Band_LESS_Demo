document.addEventListener("DOMContentLoaded", function() {
        fetch('performances.json')
        .then(response => response.json())
        .then(data => createPerformanceElements(data))
        .catch(error => console.error('Error fetching JSON:', error));
});

function createPerformanceElements(performances) {
    const performancesContainer = document.getElementById('performances');

    performances.forEach(performance => {

    let ticketAvailabilityClass;
    if (performance.ticketsAvailable) {
        ticketAvailabilityClass = 'performance__ticket-availability--active';
    } else {
        ticketAvailabilityClass = 'performance__ticket-availability--inactive';
    }

    let buttonClass;
    if (performance.ticketsAvailable) {
        buttonClass = 'performance__buy-button--active';
    } else {
        buttonClass = 'performance__buy-button--inactive';
    }

    });
}