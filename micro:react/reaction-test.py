from microbit import *
import music

while True:
  if button_a.was_pressed():
    sleep(3000)
    start = running_time()
    music.play('C4:4', wait=False)
    display.show(Image.TARGET)
  if button_b.was_pressed():
    end = running_time()
    timediff = end - start
    display.scroll(str(timediff) + " ms")