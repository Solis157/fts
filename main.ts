function Tiret () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        Point()
    }
    basic.pause(500)
    for (let index = 0; index < 3; index++) {
        Tiret()
    }
    basic.pause(500)
    Point()
    basic.pause(50)
    Tiret()
    basic.pause(50)
    Point()
    basic.pause(500)
    Point()
    basic.pause(50)
    Tiret()
    for (let index = 0; index < 2; index++) {
        Point()
    }
    basic.pause(500)
    for (let index = 0; index < 3; index++) {
        Tiret()
    }
    basic.pause(500)
    for (let index = 0; index < 2; index++) {
        Tiret()
    }
    basic.pause(50)
    Point()
    basic.pause(500)
    Point()
    basic.pause(1000)
})
function Point () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
