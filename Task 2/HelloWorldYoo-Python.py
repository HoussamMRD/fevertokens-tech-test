for i in range(1, 101):
    output = ""

    if i % 3 == 0:
        output += "Hello"

    if i % 5 == 0:
        output += "World"

    if i % 7 == 0:
        output += "Yoo"

    if not output:
        output = i

    print(output, end=", ")
