const sketchpad = document.querySelector(".sketchpad");
const colorInput = document.querySelector(".color-input");

let drawMode = false;

// sketch area and drawing functionality

const createSketchArea = (size = 16) => {
  let squares = sketchpad.querySelectorAll(".sketchpad div");
  squares.forEach((square) => square.remove());
  sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  sketchpad.style.border = "2px solid black";

  for (let i = 0; i < size ** 2; i++) {
    const square = document.createElement("div");
    square.style.backgroundColor = "#fff";
    square.style.border = "1px solid #fff";
    square.addEventListener("click", () => {
      drawMode = !drawMode;
      const drawModeStatus = document.querySelector("header span");
      if (drawMode) {
        drawModeStatus.textContent = "Drawing Mode: Activated";
        drawModeStatus.classList.remove("deactivated");
        drawModeStatus.classList.add("activated");
      } else {
        drawModeStatus.textContent = "Drawing Mode: Deactivated";
        drawModeStatus.classList.remove("activated");
        drawModeStatus.classList.add("deactivated");
      }
    });
    square.addEventListener("mouseover", (e) => {
      if (drawMode) {
        e.target.style.backgroundColor = colorInput.value;
      }
    });
    sketchpad.appendChild(square);
  }
};

createSketchArea();

const draw = (color) => {
  if (drawMode) {
    e.target.style.backgroundColor = color;
  }
};

// grid size input functionality

const gridSize = document.querySelector(".grid-size");
gridSize.addEventListener("change", () => {
  createSketchArea(gridSize.value);
});

// erase functionality
const eraseButton = document.querySelector(".erase");
eraseButton.addEventListener("click", () => {
  colorInput.value = "#808080";
});

// reset functionality
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
  const squares = document.querySelectorAll(".sketchpad div");
  squares.forEach((square) => (square.style.backgroundColor = "#808080"));
});
