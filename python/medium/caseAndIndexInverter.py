# Write a function that takes a string input and returns the string in a reversed case and order.
# invert("dLROW YM sI HsEt") ➞ "TeSh iS my worlD"
# invert("ytInIUgAsnOc") ➞ "CoNSaGuiNiTY"

def invert(s):
    return s.swapcase()[::-1]


print(invert("dLROW YM sI HsEt"))