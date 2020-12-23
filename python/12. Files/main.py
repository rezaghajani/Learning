file = open('line.txt') # Opening Files

print(file)

filecontent = file.read()
print(filecontent)

# filename = input("Enter your file name: ")

#try:
    #fhand = open(filename)
#except:
    #print("There is no file with that name" + filename)
    #exit()

#fread = fhand.read()
#print(fread)

file2 = open("line.txt" , "w")
print(file2)