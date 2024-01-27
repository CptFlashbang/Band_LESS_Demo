document.addEventListener('DOMContentLoaded', function () {
    console.log("Javascript loaded.");

    //"Output the middle element" is open to interpretation, so I included multiple approaches.

    //Method 1 retrieves the element specifically.
    Method1();
    //Method 2 finds the middle element of the tri-column parent element
    Method2();
});

function Method1() {
    const performances = document.querySelectorAll('.upcoming-performances');
    console.log('Middle Element:', performances[0]);
  };

function Method2() {
    var parentElement = document.getElementById("tri-column");
    var topLevelChildren = Array.from(parentElement.children);
    var length = topLevelChildren.length;
    var middleposition = Math.round(length / 2);    
    console.log('Middle Element:', topLevelChildren[middleposition]);
 };