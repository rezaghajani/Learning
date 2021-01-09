time1,time2,count = [int(x) for x in input().split()]

arcount = 0
timecount = 0
while arcount < count:
    if timecount == 0:
        timecount = timecount + time1
        arcount = arcount + 1
    elif arcount % 2 == 0:
        timecount = timecount + time1
        arcount = arcount + 1
    elif arcount % 2 != 0:
        timecount = timecount + time2
        arcount = arcount + 1
        
print(timecount)
        
    
