const draggableContainer = document.querySelector('.ql-draggable-container');
let isDragging = false;
let offsetX, offsetY;

// Function to start dragging
function startDragging(e) {
  isDragging = true;
  const rect = draggableContainer.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;
  document.body.style.cursor = 'grabbing';
}

// Function to stop dragging
function stopDragging() {
  isDragging = false;
  document.body.style.cursor = 'auto';
}

// Function to move the draggable container
function moveContainer(e) {
  if (isDragging) {
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    draggableContainer.style.left = `${x}px`;
    draggableContainer.style.top = `${y}px`;
  }
}

// Add JavaScript functions for closeWindow() and minimizeWindow()
// You can customize the behavior of these functions as needed for your application
function closeWindow() {
  // Add close window functionality here
  draggableContainer.style.display = 'none';
}

function minimizeWindow() {
  // Add minimize window functionality here
  // You can minimize the window to the taskbar or the bottom of the screen
}


// Add event listeners
draggableContainer.addEventListener('mousedown', startDragging);
document.addEventListener('mouseup', stopDragging);
document.addEventListener('mousemove', moveContainer);
