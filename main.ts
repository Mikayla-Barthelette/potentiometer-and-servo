// Created by: Mikayla Barthelette
// Created on: Oct 2020
// 
// This program allows us to use a potentiometer to control a servo
let angle = 0
let potentiometer = 0
basic.showIcon(IconNames.Yes)
basic.pause(500)
basic.forever(function () {
    robotbit.Servo(robotbit.Servos.S1, 0)
    potentiometer = pins.analogReadPin(AnalogPin.P1)
    angle = potentiometer * (360 / 1023)
    robotbit.Servo(robotbit.Servos.S1, angle)
    basic.showNumber(angle)
    basic.pause(3000)
})
