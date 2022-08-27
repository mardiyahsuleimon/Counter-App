let saveEl = document.getElementById("save-el")
let counterEl = document.getElementById("counter-el")
console.log(saveEl)
let count = 0

function increment() {
    count += 1
    counterEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)
    counterEl.textContent = 0
    count = 0
}

//let counterEl = document.getElementById("counter-el" * 0)







