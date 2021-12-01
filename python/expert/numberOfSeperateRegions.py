# The function is given a rectangular matrix consisting of zeros and ones.
#  Count the number of different regions and return the result. 
# A separate region is a collection of ones interconnected horizontally and vertically. 
# A region can have holes in it.
# num_regions([
#   [1, 1, 1, 1, 0],
#   [1, 1, 0, 1, 0],
#   [1, 1, 0, 0, 0],
#   [0, 0, 0, 0, 0]
# ]) ➞ 1


def check_neighbor(i, j, matrix):
    neighbors = []
    if i+1 < len(matrix):
        if matrix[i+1][j] == 1: neighbors.append((i+1, j))
    if j+1 < len(matrix[0]): 
        if matrix[i][j+1] == 1: neighbors.append((i, j+1))
    if i-1 >= 0: 
        if matrix[i-1][j] == 1: neighbors.append((i-1, j))
    if j-1 >= 0:
        if matrix[i][j-1] == 1: neighbors.append((i,j-1))
    matrix[i][j] = 0
    for neighbor in neighbors:
        check_neighbor(neighbor[0], neighbor[1], matrix)
    return matrix    

def num_regions(matrix):
    result = 0
    for i, row in enumerate(matrix):
        for j, value in enumerate(row):
            if matrix[i][j] == 1:
                result+=1
                matrix = check_neighbor(i,j,matrix)
    return result