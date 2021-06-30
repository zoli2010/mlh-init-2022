import time
import webbrowser

print(chr(27) + "[2J")
print("Hello there!\n")
print("Welcome to this totally Innocent Guessing Game. No tricks nor gimmicks here, no siree, for this is a totally legitimate guessing game built by an innocent developer who is simply exploring the concept of RNGs without any malicious intent.\n")
print("Enough with the rambling, let's get onto it!\n")
print("You know the basics, I'm thinking of a random number from 1 to 10, yadda yadda yadda.\n")

first_guess = input("You get three guesses. Enter your first guess here (in numbers, please): ")
second_guess = input("Congratulations! That is wrong, 2 more guesses left for you: ")
third_guess = input("Wrong again! Final guess: ")

print("Welp, looks like you got all three wrong.\n")
time.sleep(3)
print("A real shame, isn't it?\n")
time.sleep(5)
print("Uhm...\n")
time.sleep(5)
print("Sorry, I think something's gone wrong, I'll be back in a moment, kay? Don't leave just yet!\n")
time.sleep(7)
print("Don't leave!\n")
time.sleep(13)
print("Good, you're still here. Problem's still being fixed, so hold on tight!\n")
time.sleep(20)
webbrowser.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", new=2)

