# Created by: Mikayla Barthelette
# Created on: Oct. 2020
# 
# This program allows us to make a servo turn 180 degrees


from microbit import *

def set_servo_pulse(pin, ms_on):
    pin.write_analog(1023 * ms_on / 20)
    
def init_servo_pin(pin):
    pin.set_analog_period(20)
    set_servo_pulse(pin, 1.5)

display.show(Image.YES)
sleep(500)

while True:
    potentiometer = pin1.read_analog()
    ratio = potentiometer / 1023
    degrees = ratio * 180
    angle = ratio + 1
    init_servo_pin(pin8)
    set_servo_pulse(pin8, angle)
    display.show(degrees)
    sleep(3000)