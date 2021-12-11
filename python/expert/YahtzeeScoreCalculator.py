# In a Yahtzee game, the player has to score points rolling five dice trying to obtain a specific combination in 
# every of the thirteen turns of the game.

# Turn	Name	Points
# 1	Aces	Sum of all dice showing 1
# 2	Twos	Sum of all dice showing 2
# 3	Threes	Sum of all dice showing 3
# 4	Fours	Sum of all dice showing 4
# 5	Fives	Sum of all dice showing 5
# 6	Sixes	Sum of all dice showing 6
# 7	Three of a Kind	Sum of all dice if there are at least three dice the same
# 8	Four of a Kind	Sum of all dice if there are at least four dice the same
# 9	Full House	25 points if there are two dice of a number and three dice of another number
# 10	Lower Straight	30 points if there is a sequence of at least four dice (1,2,3,4 or 2,3,4,5 or 3,4,5,6)
# 11	Higher Straight	40 points if there is a sequence of five dice (1,2,3,4,5 or 2,3,4,5,6)
# 12	Yahtzee	50 points if there are five dice the same
# 13	Chance	Sum of all dice
# If during a turn the rolled dice don't give a valid combination, the score for that turn will be equal to 0.
# If the total points scored during the first six turns are equal or greater than 63, an additional 35 points are added to the final score.
# You are given a list lst that contains 13 lists;
#  each list is representing a set of five dice to check for the turn combination, 
#  accordingly to the order and to the description given in the above table. 
#  You have to implement a function that returns an integer being the final score made by the player.

def yahtzee_score_calc(lst):
    points = 0
    #First 6 rounds
    for i in range(6):
        for num in lst[i]:
            if num == i+1:
                points+=i+1
    if points>=63:
        points+=35
    #round 7 and 8
    for i in range(6,8):
        condition = False
        for num in lst[i]:
            if lst[i].count(num) >= i-3:
                condition = True
                break
        if condition:
            for num in lst[i]:
                points+=num
    # round 9
    three = False 
    two = False
    for num in lst[8]:
        if lst[8].count(num) == 3:
            three = True 
        elif lst[8].count(num) == 2:
            two = True
        else:
            break
    if three and two:
        points += 25
    #round 10
    for i in range(1, 4):
        if i in lst[9] and i+1 in lst[9] and i+2 in lst[9] and i+3 in lst[9]:
            points+=30
            break
    #round 11
    for i in range(1,3):
        if i in lst[10] and i+1 in lst[10] and i+2 in lst[10] and i+3 in lst[10] and i+4 in lst[10]:
            points+=40
            break
    #round 12
    if lst[11][0] == lst[11][1] == lst[11][2] == lst[11][3] == lst[11][4]:
        points+=50
    #round 13
    for num in lst[12]:
        points+=num
    return points
