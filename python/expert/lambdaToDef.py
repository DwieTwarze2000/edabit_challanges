# Given a piece of code with a function assigned by lambda, rewrite it into a function assigned by def. The code given would be in string.
# This is a quick example of a lambda expression:
# func = lambda a, b: a * (b - 2)
# ... is the same as ...
# def func(a, b):
#   return a * (b - 2)
# print(lambda_to_def("func = lambda w: w + 'lambda'"))
# def func(w):
    # return w + 'lambda'

def lambda_to_def(code):
    eq_index = code.index("=")
    sem_index = code.index(":")
    lambda_index = code.index("lambda")
    try:
        secound_sem = code.index(":",sem_index+1)
    except ValueError:
        secound_sem = None
    if secound_sem != None: 
        if code[secound_sem+1] != "'": sem_index = secound_sem
    return "def "+code[:eq_index-1]+"("+code[lambda_index+7:sem_index]+"):\n\treturn"+code[sem_index+1:]