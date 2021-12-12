# Write a function to create a Christmas tree based on height h.
# tree(1) ➞ [
#   "#"
# ]
# tree(2) ➞ [
#   " # ",
#   "###"
# ]
def tree(h):
    result=[]
    for i in range (1,2*h,2):
        result.append((h-1)*" "+i*"#"+(h-1)*" ")
        h=h-1
    return result