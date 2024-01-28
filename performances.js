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

    performanceElement.innerHTML = `
    <h2 class="performance__venue">${performance.venue}</h2>
    <p class="performance__location">${performance.location}</p>
    <div class="performance__ticket-availability ${ticketAvailabilityClass}">
        <i class="fa-solid fa-ticket"></i>
        <p>
            ${(() => {
                if (performance.ticketsAvailable) {
                    return 'Tickets Available';
                } else {
                    return 'Tickets Unavailable';
                }
            })()}
        </p>
    </div>
    <p class="performance__date">${performance.date}</p>
    <button class="performance__buy-button ${buttonClass}">Buy Now</button>
    `;

    

    });
}