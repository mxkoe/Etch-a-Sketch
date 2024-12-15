const flexContainer = document.querySelector("#flexbox-container");
let gridProperty = createGrid(16);

function createGrid(size) {
  for (let index = 0; index <= size * size; index++) {
    const content = document.createElement("div");
    content.classList.add("content");
    content.addEventListener("mouseover", getRandomColor);
    flexContainer.appendChild(content);
  }
}

/* Helper functions */

//-> this code is taken from https://stackoverflow.com/a/1484514/623784 */
function getRandomColor(event) {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  event.target.style.backgroundColor = color;
}

function updateGrid() {
  gridProperty = window.prompt("Number of squares per side:");
  console.log(gridProperty);
  removeAllChildNodes(flexContainer);
  createGrid(gridProperty);
  return gridSize;
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
