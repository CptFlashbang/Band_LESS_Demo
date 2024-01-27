document.addEventListener('DOMContentLoaded', function () {
    console.log("Javascript loaded.");
    // Assuming you have a set of elements in the 'upcoming-performances' column
    const performances = document.querySelectorAll('.upcoming-performances');
    // Calculate the middle index
    const middleIndex = Math.floor(performances.length / 2);
    console.log('performances length:', performances.length);
    // Choose the middle element
    const middleElement = performances[middleIndex];
    // Log it to the console
    console.log('Middle Element:', middleElement);
});
