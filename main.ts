let valaszt2 = 0
let valaszt1 = 0
input.onButtonPressed(Button.A, function () {
    valaszt2 = randint(1, 3)
    if (valaszt2 == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        radio.sendString("k")
        radio.sendNumber(0)
        if (valaszt1 == 1) {
            basic.showString("dontetlen")
        }
        if (valaszt1 == 2) {
            basic.showString("dontetlen")
        }
        if (valaszt1 == 3) {
            basic.showString("dontetlen")
        }
    }
    if (valaszt2 == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        radio.sendString("p")
        radio.sendNumber(0)
        if (valaszt1 == 1) {
            basic.showString("nyertél")
        }
        if (valaszt1 == 2) {
            basic.showString("dontetlen")
        }
        if (valaszt1 == 3) {
            basic.showString("vesztettél")
        }
    }
    if (valaszt2 == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        radio.sendString("o")
        radio.sendNumber(0)
        if (valaszt1 == 1) {
            basic.showString("vesztettél")
        }
        if (valaszt1 == 2) {
            basic.showString("nyertél")
        }
        if (valaszt1 == 3) {
            basic.showString("döntetlen")
        }
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "k") {
        valaszt1 = 1
    }
    if (receivedString == "o") {
        valaszt1 = 2
    }
    if (receivedString == "p") {
        valaszt1 = 3
    }
})
