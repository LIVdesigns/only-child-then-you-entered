// Store the initially hidden boxes
// let hiddenBoxes = [];

// // Function to hide the box when clicked
// function hideBox(element) {
//     element.style.opacity = '0';
//     setTimeout(function() {
//         element.style.display = 'none';
//         hiddenBoxes.push(element); // Store the hidden box
//     }, 300); // Wait for the transition to complete before hiding
// }

// // Function to show all previously hidden boxes
// function reappearBoxes() {
//     hiddenBoxes.forEach(function(box) {
//         box.style.display = 'block';
//         setTimeout(function() {
//             box.style.opacity = '1';
//         }, 10); // Small delay to trigger the transition
//     });
//     hiddenBoxes = []; // Clear the list after making them visible
// }

// let hiddenBoxes = [];

// // Generate random positions for the boxes when the page loads
// window.onload = function() {
//     const boxes = document.querySelectorAll('.text-box');
//     boxes.forEach(function(box) {
//         setRandomPosition(box);
//     });

//     // Start the bouncing animation for images
//     const images = document.querySelectorAll('.bouncing-image');
//     images.forEach(function(img) {
//         bounceImage(img);
//     });
// };

// // Adjust positions on window resize to keep them within the viewport
// window.onresize = function() {
//     const boxes = document.querySelectorAll('.text-box');
//     boxes.forEach(function(box) {
//         setRandomPosition(box);
//     });
// };

// // Function to set a random position for an element
// function setRandomPosition(element) {
//     const boxWidth = element.offsetWidth;
//     const boxHeight = element.offsetHeight;

//     const maxX = window.innerWidth - boxWidth;
//     const maxY = window.innerHeight - boxHeight;

//     const x = Math.random() * maxX;
//     const y = Math.random() * maxY;

//     element.style.left = `${x}px`;
//     element.style.top = `${y}px`;
// }

// // Function to hide the box when clicked
// function hideBox(element) {
//     element.style.opacity = '0';
//     setTimeout(function() {
//         element.style.display = 'none';
//         hiddenBoxes.push(element);
//     }, 300);
// }

// // Function to show all previously hidden boxes
// function reappearBoxes() {
//     hiddenBoxes.forEach(function(box) {
//         box.style.display = 'block';
//         setRandomPosition(box);
//         setTimeout(function() {
//             box.style.opacity = '1';
//         }, 10);
//     });
//     hiddenBoxes = [];
// }

// // Function to make images bounce
// function bounceImage(img) {
//     let x = Math.random() * (window.innerWidth - img.width);
//     let y = Math.random() * (window.innerHeight - img.height);
//     let dx = (Math.random() - 0.5) * 4; // Random horizontal velocity
//     let dy = (Math.random() - 0.5) * 4; // Random vertical velocity

//     function move() {
//         // Update the position
//         x += dx;
//         y += dy;

//         // Check for collision with the edges of the viewport
//         if (x <= 0 || x >= window.innerWidth - img.width) {
//             dx = -dx; // Reverse direction on X-axis
//         }
//         if (y <= 0 || y >= window.innerHeight - img.height) {
//             dy = -dy; // Reverse direction on Y-axis
//         }

//         // Apply the updated position
//         img.style.left = `${x}px`;
//         img.style.top = `${y}px`;

//         // Continue moving
//         requestAnimationFrame(move);
//     }

//     // Start the movement
//     move();
// }

// Function to get a random position within the screen dimensions
function getRandomPosition(element) {
    const bodyWidth = window.innerWidth;
    const bodyHeight = window.innerHeight;

    const randomX = Math.floor(Math.random() * (bodyWidth - element.offsetWidth));
    const randomY = Math.floor(Math.random() * (bodyHeight - element.offsetHeight));

    return {x: randomX, y: randomY};
}

// Position text boxes randomly when the page loads
window.onload = function() {
    const textBoxes = document.querySelectorAll('.text-box');
    
    textBoxes.forEach(box => {
        const position = getRandomPosition(box);
        box.style.left = `${position.x}px`;
        box.style.top = `${position.y}px`;

        // Add event listener to hide box on click
        box.addEventListener('click', function() {
            this.classList.add('hide');
        });
    });
};


