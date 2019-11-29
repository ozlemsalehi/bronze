def f(circuit,qreg):
	circuit.x(qreg[1])
	circuit.ccx(qreg[0],qreg[1],qreg[2])
	circuit.x(qreg[1])

def f_8(circuit,quantum_reg):
	circuit.x(quantum_reg[2])
	circuit.ccx(quantum_reg[2],quantum_reg[1],quantum_reg[4])
	circuit.ccx(quantum_reg[4],quantum_reg[0],quantum_reg[3])
	circuit.ccx(quantum_reg[2],quantum_reg[1],quantum_reg[4])
	circuit.x(quantum_reg[2])
	