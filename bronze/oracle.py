import random
from qiskit import QuantumCircuit, execute, Aer
def oracle():
    type = random.choice(["constant", "balanced"])
    result = QuantumCircuit(2)
    result.barrier()
    
    if type == "constant":
        # we ignore the input and randomly add a not gate
        if random.randrange(2) == 0:
            result.x(1)
    elif type == "balanced":
        # making sure the output is balanced
        result.cx(0, 1)
        # and randomly inverting it
        if random.randrange(2) == 0:
            result.x(1)
    
    result.barrier()
    return result

import random
from qiskit import QuantumCircuit, execute, Aer

def oraclej(n):
    result = QuantumCircuit(n+1)
    result.barrier()
    
    type = random.choice(["constant", "balanced"])
    if type == "constant":
        # we ignore the input and randomly add a not gate
        if random.randrange(2) == 0:
            result.x(n)
    else:
        # we can add a single cnot to the circuit to have a balanced function
        # but we decide on the control qubit randomly
        control = random.randrange(n)
        result.cx(control, n)
        # randomly invert the result
        if random.randrange(2) == 0:
            result.x(n)
    
    result.barrier()
    return result

def bv_oracle():
    s="11010"
    n = len(s)
    s = s[::-1] # we revert the string since s_0 is at the left according to python 
    # and in the right according to qiskit
    
    circuit = QuantumCircuit(n+1)
    circuit.barrier()
    
    for i in range(n):
        if s[i] == '1':
            circuit.cx(i, n)
    
    circuit.barrier()
    return circuit
