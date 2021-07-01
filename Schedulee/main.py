import schedule

def wake_up():
    print("Good morning! Have some breakfast!")

def study():
    print("Put that phone away, it's time to study!")

def lunch():
    print("Grab a bite!")

def dinner():
    print("Sit down and enjoy a delicious dinner!")

def bedtime():
    print("It's been a hard day, lights out!")

schedule.every().day.at("06:00").do(wake_up)
schedule.every().day.at("12:00").do(lunch)
schedule.every().day.at("18:30").do(dinner)
schedule.every().day.at("22:00").do(bedtime)
schedule.every().hour.do(study)
