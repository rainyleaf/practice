import os
for dirname, dirs, files in os.walk('./temp'):
    for filename in files:
        print(dirname + "/" + filename)