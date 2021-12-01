# Your function will get a list with a number sequence. 
# However, one item will be missing. 
# It's your job to find out which one is not in the list.
# To illustrate, given the list [1, 3, 4, 5], 2 is missing so the output must be 2.
# missing([1, 3, 4, 5]) ➞ 2
# missing([2, 4, 6, 8, 10, 14, 16]) ➞ 12
# missing([1.5, 2, 3]) ➞ 2.5

def missing(lst):
    res = [lst[i]-lst[i-1] for i in range(1, len(lst))]
    if len(res) == 2:
        r = min(res)
        index = res.index(max(res))
    else:
        for i in res:
            if res.count(i)!=1:
                r = i
            else:
                index = res.index(i)
    return lst[index]+r