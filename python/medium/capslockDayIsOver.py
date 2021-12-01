# October 22nd is CAPS LOCK DAY.
#  Apart from that day, every sentence should be lowercase, so write a function to normalize a sentence.
# Create a function that takes a string. 
# If the string is all uppercase characters, convert it to lowercase and add an exclamation mark at the end.
# normalize("CAPS LOCK DAY IS OVER") ➞ "Caps lock day is over!"
# normalize("Today is not caps lock day.") ➞ "Today is not caps lock day."

def normalize(txt):
    if txt == txt.upper():
        return txt[0] + txt.lower()[1:] +"!"
    return txt