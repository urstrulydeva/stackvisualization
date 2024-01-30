// Define the stack array
let stack = [];

// Function to push an item to the stack
function pushToStack() {
    const newItem = prompt("Enter a value:");
    if (newItem !== null && stack.length < 10) {
        stack.push(newItem);
        updateStackVisualization();
    }
    else{
        alert("Stack Overflow");
    }
}

// Function to pop an item from the stack
function popFromStack() {
    if (stack.length > 0) {
        stack.pop();
        updateStackVisualization();
    } else {
        alert("Stack is empty!");
    }
}

// Function to reset the stack
function resetStack() {
    stack = [];
    updateStackVisualization();
}

// Function to update the stack visualization on the webpage
function updateStackVisualization() {
    const stackContainer = document.getElementById("stack-container");
    stackContainer.innerHTML = "";
    stack.forEach(item => {
        const stackItem = document.createElement("div");
        stackItem.textContent = item;
        stackContainer.appendChild(stackItem);
    });
}

// Initial update of the stack visualization
updateStackVisualization();
