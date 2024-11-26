function generateRandom() {
    var resultParagraph = document.getElementById("result");
    var random = Math.floor(Math.random() * 100 + 1);
    console.log(random)
    resultParagraph.innerHTML = random;
}

var score = 0;

function higher(random) {
    if (random > higher) {
        window.alert("You Win!")
    }
}

function lower(random) {
    if (random < lower) {
        window.alert("You Win!")
    }
}