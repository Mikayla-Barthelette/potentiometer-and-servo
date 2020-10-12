# Created by: Mikayla Barthelette
# Created on: Oct 2020
# 
# This program allows us to use a potentiometer to control a servo
angle = 0
potentiometer = 0
basic.show_icon(IconNames.YES)
basic.pause(500)

def on_forever():
    global potentiometer, angle
    robotbit.servo(robotbit.Servos.S1, 0)
    potentiometer = pins.analog_read_pin(AnalogPin.P1)
    angle = potentiometer * (360 / 1023)
    robotbit.servo(robotbit.Servos.S1, angle)
    basic.show_number(angle)
    basic.pause(3000)
basic.forever(on_forever)
