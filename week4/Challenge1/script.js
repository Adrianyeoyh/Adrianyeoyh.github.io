function calculate() {

    // YOUR CODE GOES HERE

    let num1 = parseInt(document.getElementById("number1").value);
    let num2 = parseInt(document.getElementById("number2").value);

    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    document.getElementById("result").innerText = sum;
    console.log(sum);
    
}