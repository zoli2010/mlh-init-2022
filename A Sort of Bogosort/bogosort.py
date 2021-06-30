import random

thelist = []

try:
    n = int(input("How many numbers are in your list?\nPlease enter: "))
    for i in range(n):
        num = int(input("Input: "))
        thelist.append(num)
except:
    print("An error occurred. Please provide a valid input next time.")
    exit()

print("Original list: " + str(thelist) + "\nPlease wait...")

flag = 0

if (all(thelist[i] <= thelist[i + 1] for i in range(len(thelist) - 1))):
    flag = 1

while flag == 0:
    random.shuffle(thelist)

    if (all(thelist[i] <= thelist[i + 1] for i in range(len(thelist) - 1))):
        flag = 1
        
print("Bogosort-ed list: " + str(thelist))
