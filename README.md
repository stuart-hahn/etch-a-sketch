# Etch-A-Sketch Project

This project is a browser-based Etch-A-Sketch toy that allows users to draw by hovering their mouse over a grid. The project is built with HTML, CSS, and JavaScript, showcasing DOM manipulation, Flexbox layout, and event handling.

## Features

- **Dynamic Grid Size**: Users can set the number of squares per side (up to 100) for a customizable drawing experience.
- **Hover Effect**: Squares change color when hovered over, with each square generating a random color.
- **Responsive Design**: The grid layout automatically adjusts to fit the container using Flexbox.
- **User Input Validation**: The project ensures the grid size is valid and within the specified range.

## Getting Started

### Prerequisites

To run this project locally, you'll need a basic web browser and a text editor (e.g., VS Code) for any modifications.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/etch-a-sketch.git
```

2. Navigate to the project directory:

```bash
cd etch-a-sketch
```

3. Open the `index.html` file in your web browser to view the project.

### Usage

1. On page load, a default 16x16 grid is displayed.
2. Click the **Change Grid Size** button to specify a new grid size (e.g., 32 for a 32x32 grid).
3. Hover over the squares to "draw" with random colors.
4. The grid adjusts automatically to the new size, maintaining a consistent square layout.

## Project Structure

```
.
├── index.html
├── style.css
└── script.js
```

- **index.html**: The main HTML file that defines the page structure.
- **style.css**: Contains the styles for the layout, grid, and hover effects.
- **script.js**: Implements the grid creation, user input handling, and hover effects.

## Contributing

Contributions are welcome! If you'd like to improve this project, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Commit your changes using [conventional commits](https://www.conventionalcommits.org/).
4. Push your branch and submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

This project is part of the curriculum from [The Odin Project](https://www.theodinproject.com/), designed to practice DOM manipulation and Flexbox skills.