
# randomly create a 2-dimensional quantum state
from math import cos, sin, pi
from random import randrange

def random_quantum_statea(angle_degree):
    angle_radian = 2*pi*angle_degree/360
    return [cos(angle_radian),sin(angle_radian)]
    
