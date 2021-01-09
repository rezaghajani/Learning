chars = input("")
values = []
red = 0
yellow = 0
green = 0

for char in chars:
    values.append(char)
    
    
for i in range(len(values)):
    if values[i] == "G":
        green = green +1
    elif values[i] == "R":
        red = red + 1
    elif values[i] == "Y":
        yellow = yellow + 1

if red >= 3:
    print("nakhor lite")
elif red >= 2 and yellow >= 2:
    print("nakhor lite")
elif red == 5 or yellow == 5:
    print("nakhor lite")
else:
    print("rahat baash")