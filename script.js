console.log("Created by Stuart Hahn");

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const requestGridSizeButton = document.querySelector(".request");

    let gridSize = 16;

    // Helper function to generate random colors
    const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    // Function to handle hover effect
    const onHover = (e) => {
        e.target.classList.add("hovered");
        e.target.style.backgroundColor = getRandomColor();
    };

    // Function to create the grid
    const createGrid = (gridSize) => {
        container.innerHTML = ''; // Clear previous grid
        const squareSize = `calc(100% / ${gridSize})`;

        for (let i = 0; i < gridSize * gridSize; i++) {
            const square = document.createElement("div");
            square.style.width = squareSize;
            square.style.height = squareSize;
            square.addEventListener("mouseenter", onHover);
            container.appendChild(square);
        }
    };

    // Function to prompt the user for grid size
    const promptGridSize = () => {
        let newSize = prompt("How many squares per side? (e.g., '16' for a 16x16 grid)");
        newSize = parseInt(newSize);

        if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
            gridSize = newSize;
            createGrid(gridSize);
        } else {
            alert("Please enter a valid number between 1 and 100.");
        }
    };

    // Event listener for changing grid size
    requestGridSizeButton.addEventListener("click", promptGridSize);

    // Initial grid creation
    createGrid(gridSize);
});
