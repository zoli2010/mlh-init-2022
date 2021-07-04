import schedule
import webbrowser

sleep_time = 480 # 8 hours in seconds

def wake_up():
    print("Wake up!")
    webbrowser.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', new=2)


schedule.every(sleep_time).minutes.do(wake_up)
schedule.every(sleep_time + 1).minutes.do(wake_up)
schedule.every(sleep_time + 2).minutes.do(wake_up)
schedule.every(sleep_time + 3).minutes.do(wake_up)
schedule.every(sleep_time + 4).minutes.do(wake_up)
schedule.every(sleep_time + 5).minutes.do(wake_up)

