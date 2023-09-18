function ageCheckOntario() {
    var age = document.getElementById("age").value;
    if (age < 16) {
    document.getElementById("result").innerHTML = "You can not drive, visit a Casino and buy alcohol in Ontario!";
    } else if (age >= 16 && age <=18) {
    document.getElementById("result").innerHTML = "You can drive, but can not visit a Casino and buy alcohol in Ontario!";
    } else if (age >= 19) {
    document.getElementById("result").innerHTML = "You can drive, visit a Casino and buy alcohol in Ontario!";
    }    
}

var btn = document.getElementById("submitBtn");
btn.onclick = ageCheckOntario;
//adicionar codigo para evitar que a pessoa submita characteres e numeros quebrados


// check if the input is a number

// if (!isNAaN(age) { age = parseInt(age);})