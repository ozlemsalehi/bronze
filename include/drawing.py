import matplotlib.pyplot

def draw_axes():
	points = [ [1.2,0], [0,1.2], [-1.2,0], [0,-1.2] ] # dummy points for zooming out
	arrows = [ [1.1,0], [0,1.1], [-1.1,0], [0,-1.1] ] # coordinates for the axes
	for p in points: 
		matplotlib.pyplot.plot(p[0],p[1]+0.1) # drawing dummy points
	for a in arrows: 
		matplotlib.pyplot.arrow(0,0,a[0],a[1],head_width=0.04, head_length=0.08) # drawing the axes


def draw_unit_circle():
	unit_circle= matplotlib.pyplot.Circle((0,0),1,color='black',fill=False)
	matplotlib.pyplot.gca().add_patch(unit_circle) 

	
def draw_quantum_state(x,y,name):
	# shorten the line length to 0.92
	# line_length + head_length should be 1
	x1 = 0.92 * x
	y1 = 0.92 * y
	matplotlib.pyplot.arrow(0,0,x1,y1,head_width=0.04,head_length=0.08,color="blue")
	x2 = 1.15 * x
	y2 = 1.15 * y
	matplotlib.pyplot.text(x2,y2,name)
	
def draw_qubit():
	# draw a figure
	matplotlib.pyplot.figure(figsize=(6,6), dpi=60)
	# draw the origin
	matplotlib.pyplot.plot(0,0,'ro') # a point in red color
	# drawing the axes by using one of our predefined function
	draw_axes()
	# drawing the unit circle by using one of our predefined function
	draw_unit_circle()
	# drawing |0>
	matplotlib.pyplot.plot(1,0,"o")
	matplotlib.pyplot.text(1.05,0.05,"|0>")
	# drawing |1>
	matplotlib.pyplot.plot(0,1,"o")
	matplotlib.pyplot.text(0.05,1.05,"|1>")
	# drawing -|0>
	matplotlib.pyplot.plot(-1,0,"o")
	matplotlib.pyplot.text(-1.2,-0.1,"-|0>")
	# drawing -|1>
	matplotlib.pyplot.plot(0,-1,"o")
	matplotlib.pyplot.text(-0.2,-1.1,"-|1>")