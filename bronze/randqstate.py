from random import randrange

# randomly creating a 2-dimensional quantum state
def random_quantum_state():
    first_entry = randrange(100)
    second_entry = randrange(100)
    
    length=(first_entry**2 + second_entry**2)**0.5
    first_entry = (first_entry/length)
    second_entry = (second_entry/length)
    if randrange(2) == 0: # determine the sign
        first_entry = -1 * first_entry
    
    if randrange(2) == 0: # determine the sign
        second_entry = -1 * second_entry  
    return [first_entry,second_entry]
