# Many British visitors to edabit will be familiar with Countdown, a quiz program that ran for many years on UK television. 
# One of its challenges required contestants to come up with an expression (using some randomly generated numbers) 
# to meet or get as close as possible to a chosen target number.

# This challenge is a simplified version of that. 
# Write a function that takes in a tuple of unique positive integers and a target positive integer
#  and returns a string containing an expression that combines the numbers in the tuple so that they meet the target, 
#  subject to certain rules explained in the notes below.
# countdown((1, 2), 3) ➞ "1+2"
# countdown((2, 3, 5, 75), 158) ➞ "3+5+2*75"

from itertools import permutations, product

def countdown(operands, target):
    for i in permutations(operands, len(operands)):
        for j in product(('+', '-', '*', '//'), repeat=len(operands)):
            eq = ''.join(str(num)+sign for num, sign in zip(i, j))[:-1]
            if eval(eq.rstrip('/')) == target:
                return eq