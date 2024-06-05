const add = (x, y) => {
    return x + y;
};

const multiply = (x, y) => {
    return x * y;
};

const square = (x) => {
    return multiply(x, x);
};

const addSquares = (x, y) => {
    return add(square(x), square(y));
};

const getInputValues = () => {
    const x = parseFloat(document.getElementById("input1").value);
    const y = parseFloat(document.getElementById("input2").value);
    return { x, y };
};

const displayResult = (result) => {
    alert("Result: " + result);
};

document.getElementById("addButton").addEventListener("click", () => {
    const { x, y } = getInputValues();
    displayResult(add(x, y));
});

document.getElementById("multiplyButton").addEventListener("click", () => {
    const { x, y } = getInputValues();
    displayResult(multiply(x, y));
});

document.getElementById("squareButton").addEventListener("click", () => {
    const x = parseFloat(document.getElementById("input1").value);
    displayResult(square(x));
});

document.getElementById("addSquaresButton").addEventListener("click", () => {
    const { x, y } = getInputValues();
    displayResult(addSquares(x, y));
});
