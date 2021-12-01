# Given a 2D array of some suspended blocks (represented as hastags), 
# return another 2D array which shows the end result once gravity is switched on.
# switch_gravity_on([
#   ["-", "#", "#", "-"],
#   ["-", "-", "-", "-"],
#   ["-", "-", "-", "-"],
#   ["-", "-", "-", "-"]
# ]) ➞ [
#   ["-", "-", "-", "-"],
#   ["-", "-", "-", "-"],
#   ["-", "-", "-", "-"],
#   ["-", "#", "#", "-"]
# ]
def switch_gravity_on(lst):
    a = [0]*len(lst[0])
    for i, row in enumerate(lst):
        for j, value in enumerate(row):
            if value=="#":
                a[j]+=1
    result = []
    for i in range(len(lst)):
        row = []
        for j in range(len(lst[0])):
            if a[j]!=0:
                row.append("#")
                a[j]-=1
            else:
                row.append("-")
        result.append(row)
    return result[::-1]

