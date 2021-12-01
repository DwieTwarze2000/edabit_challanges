# Create a function which takes in an encoded string and returns a dictionary according to the following example:
# parse_code("John000Doe000123") ➞ {
#   "first_name": "John",
#   "last_name": "Doe",
#   "id": "123"
# }
# parse_code("michael0smith004331") ➞ {
#   "first_name": "michael",
#   "last_name": "smith",
#   "id": "4331"
# }

def parse_code(txt):
    txt = txt.split("0")
    txt = [i for i in txt if i != ""]
    return {
        "first_name": txt[0],
        "last_name": txt[1],
        "id": txt[2]
    }

print(parse_code("michael0smith004331"))