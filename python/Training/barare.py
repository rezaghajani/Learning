num = int(input())

count = 0

for i in range(num + 1):
    print(str(i) * i )
    count = count + len(str(i) * i)
    
print(count)

if count % 2 == 0:
    print("Payin Barare")
elif count % 2 == 1:
    print("Bala Barare")