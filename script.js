//your JS code here. If required.
// Select all squares
const squares = document.querySelectorAll(".square");

// Function to change colors when hovered
function handleMouseOver(event) {
    squares.forEach(square => {
        if (square !== event.target) {
            square.style.backgroundColor = "#6F4E37"; // Coffee color
        }
    });
}

// Function to reset colors when mouse leaves
function handleMouseOut() {
    squares.forEach(square => {
        square.style.backgroundColor = "#E6E6FA"; // Lavender color
    });
}

// Add event listeners to each square
squares.forEach(square => {
    square.addEventListener("mouseover", handleMouseOver);
    square.addEventListener("mouseout", handleMouseOut);
});
