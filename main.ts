let potentiometer = robotbit.RgbUltrasonic(DigitalPin.P1)
robotbit.Servo(robotbit.Servos.S1, 0)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    let servo = 0
    basic.showNumber(servo)
    robotbit.Servo(robotbit.Servos.S1, potentiometer)
})
