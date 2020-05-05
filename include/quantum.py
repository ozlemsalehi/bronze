import random, math

# randomly create a 2-dimensional quantum state
def random_quantum_state():
    # generate a random number between -1 and 1
    first_entry = random.uniform(1, -1)
    # calculate the second entry based on that value
    second_entry = random.choice([1, -1]) * math.sqrt(1 - (first_entry**2))

    return [first_entry, second_entry]

# randomly create a 2-dimensional quantum state
def random_quantum_state2():
    angle_radian = random.uniform(0, 2*math.pi)

    return [math.cos(angle_radian), math.sin(angle_radian)]

# finding the angle of a 2-dimensional quantum state
def angle_quantum_state(x, y):
    angle_radian = math.acos(x) # radian of the angle with state |0>
    angle_degree = 360*angle_radian/(2*math.pi) # degree of the angle with state |0>
    # if the second amplitude is negative,
    #     then angle is (-angle_degree)
    #     or equivalently 360 + (-angle_degree)
    if y<0: angle_degree = 360-angle_degree # degree of the angle
    # else degree of the angle is the same as degree of the angle with state |0>
    return angle_degree
