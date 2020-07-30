function Balles (z: number) {
    yB = z
    led.plot(xB, yB)
    basic.pause(500)
    led.unplot(xB, yB)
    if (yB == y && xB == x) {
        xB = randint(0, 4)
        yB = z
        led.plot(x, y)
        Score += 1
    } else if (yB == 4) {
        basic.showString("SCORE :")
        basic.showString("" + (Score))
    }
    basic.clearScreen()
    basic.showString("Play again")
    basic.pause(5000)
}
input.onButtonPressed(Button.A, function () {
    if (x > 0) {
        led.unplot(x, y)
        x += -1
        led.plot(x, y)
    }
})
input.onButtonPressed(Button.B, function () {
    if (x < 4) {
        led.unplot(x, y)
        x += 1
        led.plot(x, y)
    }
})
let Score = 0
let xB = 0
let yB = 0
let y = 0
let x = 0
x = 2
y = 4
led.plot(x, y)
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        Balles(index)
    }
})
