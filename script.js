let count = 0
let counter = document.getElementById("counterNum")

function increment() {
    count += 1
    counter.textContent = count
}

function decrement() {
    count -= 1
    counter.textContent= count
}

let message = document.getElementById("userMSG")

function save() {
    let temp = count + " - "
    message.textContent += temp
    counter.textContent = 0
    count = 0
}