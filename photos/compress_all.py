from PIL import Image

from os import listdir, stat
from os.path import isfile, join

path = './food/'
files = [f for f in listdir(path) if isfile(join(path, f)) and f[0] is not '.']

size_limit = 100000 # 100kb
max_iter = 10

def compress(filename, dest_filename=None, quality=50):
	counter = 0
	while stat(filename).st_size > size_limit and counter < max_iter:
		with Image.open(filename) as im:
			im.save(current_file, format='JPEG', quality=quality)
		counter += 1


for f in files:
	current_file = join(path, f)
	counter = 0
	while stat(current_file).st_size > size_limit and counter < max_iter :
		print current_file, counter, stat(current_file).st_size	
		with Image.open(current_file) as im:
			im.save(current_file, format='JPEG')

		counter += 1


		print stat(current_file).st_size

