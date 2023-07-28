document.getElementById("count-el").innerText = 0
"Previous Entries: "
let count = 0
let countEl = document.getElementById("count-el")
let incrementString = ""
let savePrevious = document.getElementById("save-el")
let saveCount = document.getElementById("saveNum")

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    incrementString = count + "  "
    savePrevious.textContent += incrementString
    count = 0
    countEl.textContent = count
}
