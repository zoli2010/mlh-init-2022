import sys

starting_message = "Available operations: \n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n\nSelect the operation you would like to use: \n"
first_number_message = "Enter the first number: "
second_number_message = "Enter the second number: "

def add(a, b):
    result = a + b
    return result

def subtract(a, b):
    result = a - b
    return result

def multiply(a, b):
    result = a * b
    return result

def divide(a, b):
    result = a / b
    return result


try:
    operator = int(input(starting_message))
except:
    print("An error occurred. Please input a valid answer next time.")
    sys.exit()


try:
    if operator == 1:
        a = int(input(first_number_message))
        b = int(input(second_number_message))
        print(add(a, b))
    elif operator == 2:
        a = int(input(first_number_message))
        b = int(input(second_number_message))
        print(subtract(a, b))
    elif operator == 3:
        a = int(input(first_number_message))
        b = int(input(second_number_message))
        print(multiply(a, b))
    elif operator == 4:
        a = int(input(first_number_message))
        b = int(input(second_number_message))
        print(divide(a, b))
    else:
        print("An error occurred. Please input a valid answer next time.")
except:
    print("An error occurred.")
    sys.exit()

    