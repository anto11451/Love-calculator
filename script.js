function calculateLove() {
    let name1 = document.getElementById("name1").value.trim();
    let name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        alert("Please enter both names!");
        return;
    }

    // Simple love calculation based on character values
    let sum = 0;
    for (let i = 0; i < name1.length; i++) {
        sum += name1.charCodeAt(i);
    }
    for (let i = 0; i < name2.length; i++) {
        sum += name2.charCodeAt(i);
    }
    
    let lovePercentage = (sum % 101); // Get a value between 0-100

    document.getElementById("result").innerText = `${name1} ❤️ ${name2} = ${lovePercentage}% Love Compatibility!`;
}
