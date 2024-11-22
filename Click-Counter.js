let counterElement = document.getElementById("counterValue");
let clickCount = localStorage.getItem("clickCount");

if (clickCount === null) {
    counterElement.textContent = 0;
} else {
    counterElement.textContent = clickCount;
}

function onIncrementCount() {
    let previousValue = counterElement.textContent;
    let updateValue = parseInt(previousValue) + 1;

    localStorage.setItem("clickCount", updateValue);
    counterElement.textContent = updateValue;
}