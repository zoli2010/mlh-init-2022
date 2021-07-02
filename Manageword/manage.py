import os.path

def newPass():
    file = open("info.txt", 'a')

    print("\n\n")

    username = input("Please enter the username: ")
    password = input("Please enter the password here: ")
    website = input("Please enter the website address here: ")

    print("\n\n")

    writeUsername = "Username: " + username + "\n"
    writePassword = "Password: " + password + "\n"
    writeWebsite = "Website: " + website + "\n"

    file.write("-----------------------\n")
    file.write(writeUsername)
    file.write(writePassword)
    file.write(writeWebsite)
    file.write("-----------------------\n\n")
    file.close()

def readPass():
    file = open('info.txt', 'r')
    content = file.read()
    file.close()
    print(content)

print("Welcome to Manageword, the password manager right in your terminal.\n")
print("1. Print passwords\n2. Add new password")
choice = input("Input your choice (enter the number): ")

if choice == "1":
    readPass()
elif choice == "2":
    newPass()
else:
    print("Invalid input!")





