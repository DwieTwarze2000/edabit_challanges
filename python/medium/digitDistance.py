# The digit distance between two numbers is the total value of the difference between each pair of digits.
# To illustrate:
# digit_distance(234, 489) ➞ 12
# Since |2 - 4| + |3 - 8| + |4 - 9| = 2 + 5 + 5
# Create a function that returns the digit distance between two integers.
# digit_distance(121, 599) ➞ 19
# digit_distance(12, 12) ➞ 0
# digit_distance(10, 20) ➞ 1

def digit_distance(num1, num2):
    return sum([abs(int(str(num1)[i])-int(str(num2)[i])) for i in range(len(str(num1)))])

print(digit_distance(121, 599))