let getData = document.getElementById("get-text")
let showText = document.getElementById("show-text")
let showTextLength = document.getElementById("show-length")

function checkTextLength(text){
    let textWithoutSpaces = text.replace(/\s/g, '');
    let check = textWithoutSpaces.length
    showTextLength.textContent = check
}

document.getElementById("submit").addEventListener("click", () => {
    let val = getData.value
    if(val === "") {
        showText.textContent = "Please enter a text"
    } else {
        checkTextLength(val)
        showText.textContent = val
        showText.classList.add("box2")
    }
})

document.getElementById("refresh-input").addEventListener("click", () => {
    getData.value = ""
})

document.getElementById("refresh-text").addEventListener("click", () => {
    showText.textContent = ""
    showText.classList.remove("box2")
    showTextLength.textContent = "0"
})