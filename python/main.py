print("How many carts do you have")
numCats = input()
try:
    if int(numCats) >= 4:
        print("That is a lot of cats")
    else:
        print("That is not that many cats")
        
except ValueError: 
    print("You did not enter number!")
