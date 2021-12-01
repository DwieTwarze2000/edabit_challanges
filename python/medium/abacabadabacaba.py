# Create a function that follows the "ABACABADABACABA" rule up to a certain letter.
# The abacabadabacaba pattern is where you start with the first letter (a), 
# and with each new letter, you add the letter in the middle and the others at the start and end.
# For instance:
# A ➞ **A**
# B ➞ A**B**A
# C ➞ ABA**C**ABA
# D ➞ ABACABA**D**ABACABA
# E ➞ ABACABADABACABA**E**ABACABADABACABA
# F ➞ ABACABADABACABAEABACABADABACABA**F**ABACABADABACABAEABACABADABACABA
# And so on ...
# ABA("A") ➞ "A"
# ABA("B") ➞ "ABA"
# ABA("E") ➞ "ABACABADABACABAEABACABADABACABA"

def ABA(s):
    if s == "A":
        return "A"
    prev = ABA(chr(ord(s)-1))
    return prev + s + prev
