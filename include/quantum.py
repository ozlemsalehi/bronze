import random, math

# randomly create a 2-dimensional quantum state
def random_quantum_state():
	first_entry = random.randrange(101)
	first_entry = first_entry/100
	first_entry = first_entry**0.5 
	if random.randrange(2) == 0: 
		first_entry = -1 * first_entry
	second_entry = 1 - (first_entry**2)
	second_entry = second_entry**0.5
	if random.randrange(2) == 0: 
		second_entry = -1 * second_entry
	return [first_entry,second_entry]
	
# randomly create a 2-dimensional quantum state	
def random_quantum_state2():
	angle_degree = random.randrange(360)
	angle_radian = math.pi * angle_degree / 180
	return [math.cos(angle_radian),math.sin(angle_radian)]	
	
# finding the angle of a 2-dimensional quantum state
def angle_quantum_state(x,y):
	angle_radian = math.acos(x) # radian of the angle with state |0>
	angle_degree = 360*angle_radian/(2*math.pi) # degree of the angle with state |0>
	# if the second amplitude is negative, 
	#     then angle is (-angle_degree)
	#     or equivalently 360 + (-angle_degree)
	if y<0: angle_degree = 360-angle_degree # degree of the angle
	# else degree of the angle is the same as degree of the angle with state |0>
	return angle_degree	
	
