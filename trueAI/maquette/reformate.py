#coding: utf-8

import re
from string import maketrans

with open('./questions.csv','r') as inp:
	with open('./question2.csv','w') as out:
		for line in inp.readlines():
			out.write(line.translate(maketrans(";", " ")))