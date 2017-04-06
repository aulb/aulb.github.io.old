from PIL import Image

from os import listdir
from os.path import isfile, join

path = './food'
files = [f for f in listdir(path) if isfile(join(path, f)) and f[0] is not '.']


for file in files:
	print file
	im = Image.open(join(path, f))
	im.save(join(path, f), format='JPEG', quality=75)

