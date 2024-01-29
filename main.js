document.addEventListener('DOMContentLoaded', function () {
    console.log("Javascript loaded.");

    var checkbox = document.getElementById('midtoggleSwitch');

    //"Output the middle element" is open to interpretation, so I included multiple approaches.

    // Method 1 retrieves the element specifically.
    console.log('Middle Element:', Method1());
    // Method 2 finds the middle element of the tri-column parent element
    console.log('Middle Element:', Method2());

    if (checkbox.checked) {
        showMiddleColumn();
    } else {
        hideMiddleColumn();
    }

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            showMiddleColumn();
        } else {
            hideMiddleColumn();
        }
    });


    var paletteToggleSwitch = document.getElementById("palettetoggleSwitch");
    paletteToggleSwitch.addEventListener("change", function () {
        // Check if the checkbox is checked
        if (paletteToggleSwitch.checked) {
            // Enable light mode
            document.body.classList.add("light-mode");
            less.refresh();
        } else {
            // Disable light mode
            document.body.classList.remove("light-mode");
            less.refresh();
        }
    });
});


function Method1() {
    const performances = document.querySelectorAll('.upcoming-performances');
    var middleElement = performances[0]
    return middleElement
};

function Method2() {
    var parentElement = document.getElementById("tri-column");
    var topLevelChildren = Array.from(parentElement.children);
    var length = topLevelChildren.length;
    var middleposition = Math.round(length / 2);
    var middleElement = topLevelChildren[(middleposition - 1)]
    return middleElement
};

function hideMiddleColumn() {
    var middleElement = Method2();
    //middleElement.style.display = 'none';
    middleElement.style.visibility = 'hidden';
}

function showMiddleColumn() {
    var middleElement = Method2();
    //middleElement.style.display = '';
    middleElement.style.visibility = 'visible';
}
