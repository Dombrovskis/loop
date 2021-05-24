function loop(text) {
    for (let i = 1; i <= 30; i++) {
        document.getElementById("loop").innerHTML += text + i + '<br>'
    }
}
loop('Look how i can count till 30 ...>');