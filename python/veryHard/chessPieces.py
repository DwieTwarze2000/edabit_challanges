# Create a function that takes the name of a chess piece, its position and a target position. 
# The function should return True if the piece can move to the target and False if it can't.
# The possible inputs are "Pawn", "Knight", "Bishop", "Rook", "Queen" and "King".
# can_move("Rook", "A8", "H8") ➞ True
# can_move("Bishop", "A7", "G1") ➞ True
# can_move("Queen", "C4", "D6") ➞ False

def can_move(piece, current, target):
    position = {"A":1, "B":2, "C":3, "D":4, "E":5, "F":6, "G":7, "H":8}
 
    current = [position.get(current[0]), int(current[1])] 
    target = [position.get(target[0]), int(target[1])]

    
    if piece.lower() == "pawn":
        possible_moves = [
            [current[0], current[1]+1]
        ]
        if current[1] == 2:
            possible_moves.append([current[0], current[1]+2])
        
        return target in possible_moves

    elif piece.lower() == "knight":
        possible_moves = [
            [current[0]+2, current[1]-1],
            [current[0]+2, current[1]+1],
            [current[0]-2, current[1]-1],
            [current[0]-2, current[1]+1],
            [current[0]+1, current[1]+2],
            [current[0]+1, current[1]-2],
            [current[0]-1, current[1]+2],
            [current[0]-1, current[1]-2],
        ]
        return target in possible_moves

    elif piece.lower() == "bishop":
        possible_moves = []
        for i in range(1,9):
            possible_moves.append([current[0]+i,current[1]+i])
            possible_moves.append([current[0]+i,current[1]-i])
            possible_moves.append([current[0]-i,current[1]+i])
            possible_moves.append([current[0]-i,current[1]-i])
        return target in possible_moves

    elif piece.lower() == "rook":
        possible_moves = []
        for i in range(1,9):
            possible_moves.append([current[0],current[1]+i])
            possible_moves.append([current[0],current[1]-i])
            possible_moves.append([current[0]+i,current[1]])
            possible_moves.append([current[0]-i,current[1]])
        return target in possible_moves

    elif piece.lower() == "queen":
        possible_moves = []
        for i in range(1,9):
            possible_moves.append([current[0]+i,current[1]+i])
            possible_moves.append([current[0]+i,current[1]-i])
            possible_moves.append([current[0]-i,current[1]+i])
            possible_moves.append([current[0]-i,current[1]-i])
            possible_moves.append([current[0],current[1]+i])
            possible_moves.append([current[0],current[1]-i])
            possible_moves.append([current[0]+i,current[1]])
            possible_moves.append([current[0]-i,current[1]])
        return target in possible_moves
    elif piece.lower() == "king":
        possible_moves = [
            [current[0]-1,current[1]+1],
            [current[0]-1,current[1]],
            [current[0]-1,current[1]-1],
            [current[0],current[1]+1],
            [current[0],current[1]-1],
            [current[0]+1,current[1]+1],
            [current[0]+1,current[1]],
            [current[0]+1,current[1]-1]
        ]
        return target in possible_moves

