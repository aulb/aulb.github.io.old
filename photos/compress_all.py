from PIL import Image

from os import listdir
from os.path import isfile, join

path = './food/'
files = [f for f in listdir(path) if isfile(join(path, f)) and f[0] is not '.']


for file in files:
	print file	
	with Image.open(join(path, file)) as im:
		im.save(join(path, file), format='JPEG', quality=75)
