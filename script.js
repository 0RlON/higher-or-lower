function generateRandom() {
    var resultParagraph = document.getElementById("result");
    var random = Math.floor(Math.random() * 100 + 1);
    console.log(random)
    resultParagraph.innerHTML = random;
}

sessionStorage.setItem("baseNumber", random)
var newRandom = Math.floor(Math.random() * 100 + 1);

function higher() {
    if (newRandom > sessionStorage.getItem("baseNumber")) {
        window.alert("You Win!")
    } else {
        window.alert("You Lose!")
    }
}

function lower() {
    if (newRandom < sessionStorage.getItem("baseNumber")) {
        window.alert("You Win!")
    } else {
        window.alert("You Lose!")
    }
}

function sameNumber() {
    if (newRandom == sessionStorage.getItem("baseNumber")) {
        window.alert("It was the same number, nothing happens!")
    }
}