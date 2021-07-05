import schedule

def runOnce(event):
    print(event)
    return schedule.CancelJob

def remind(event, time):
    schedule.every().day.at(time).do(runOnce(event))

print("Hello, welcome to Remindo!\n\nYou can either (1) check your reminders, (2) schedule a new reminder, or (3) cancel all jobs.\n")

option = int(input("Please input your choice. "))

if option == 1:
    all_jobs = schedule.get_jobs()

    print(all_jobs)
elif option == 2:
    event = input("What event would you like me to remind you about? ")
    time = input("What time should I remind you? (24-hour HH:MM format, e.g. 14:00) ")

    remind(event, time)
elif option == 3:
    schedule.clear()

    print("Schedule cleared!")
else:
    print("Invalid choice.")


event = input("What event would you like me to remind you about? ")
time = input("What time should I remind you? (24-hour HH:MM format, e.g. 14:00)")



