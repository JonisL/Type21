const cont = document.querySelector(".cont")

let snake = [5, 4, 3,2,1]
let moveSide = "right"

for (let i = 0; i < 100; i++) {
    cont.innerHTML += `<div class='border' id="${i}"></div>`
}

function appendSnake() {
    const cells = document.querySelectorAll(".cont > div")
    cells.forEach((el, i) => {
        if (snake.includes(i)) {
            el.style.backgroundColor = "green"
        } else {
            el.style.backgroundColor = "white"
        }
    })
}

function updateSnake() {
    let first = snake[0]
    if (moveSide === "right") {
        // snake.unshift(snake[0]++)
        first++
    }
    if (moveSide === "left") {
        // snake.unshift(snake[0]--)
        first--
    }
    if (moveSide === "up") {
        // snake.unshift(snake[0] -= 10)
        first -= 10
    }
    if (moveSide === "down") {
        // snake.unshift(snake[0] += 10)
        first += 10
    }

    const newSnake = [first]

    for (let i = 1; i < snake.length; i++) {
        let item = snake[i-1]
        newSnake.push(item)
    }
    snake = newSnake
}

setInterval(() => {
    updateSnake()
    appendSnake()
}, 1000)

document.onkeydown = (event) => {
    if (event.key === "ArrowRight") moveSide = "right"
    if (event.key === "ArrowLeft") moveSide = "left"
    if (event.key === "ArrowDown") moveSide = "down"
    if (event.key === "ArrowUp") moveSide = "up"
}