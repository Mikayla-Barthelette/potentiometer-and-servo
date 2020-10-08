let potentiometer = robotbit.RgbUltrasonic(DigitalPin.P1)
robotbit.Servo(robotbit.Servos.S1, 0)
basic.showIcon(IconNames.Yes)
basic.pause(1000)
basic.forever(function () {
    basic.showNumber(potentiometer)
    robotbit.Servo(robotbit.Servos.S1, potentiometer)
    basic.pause(500)
})
