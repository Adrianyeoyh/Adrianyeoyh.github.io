// Task 1
// Add an event listner to the button (the user drags his mouse over the button)

function func1() {
    let box = document.getElementById("result");
    box.innerText = "Welcome to my heart";
    box.style.color = "blue";
    box.style.backgroundColor = "pink"

}

// Task 2
// Add an event listner to the button (the user drags his mouse out of the button)

function func2() {
    let box = document.getElementById("result");
    box.innerText = "Dont leave me please";
    box.style.color = "red";
    box.style.backgroundColor = "black"
}