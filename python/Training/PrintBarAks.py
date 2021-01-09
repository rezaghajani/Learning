num = int(input())

list = []

while num != 0:
    list.append(num)
    num = None
    num = int(input())
    
for x in range(len(list)):
    print(list[-x - 1])