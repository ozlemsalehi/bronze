# Install

There are a few ways to use this repository. You can use the Binder link provided in the README to quickly acces it over the internet, or you can make a local installation so that use can use it offline and save your progress.

## Local Installation

To use this repository locally, you need a python 3 environment and a few other dependencies.

- jupyter
- numpy
- matplotlib
- qiskit
- qiskit-terra[visualization]

Since we use Anaconda distribution to manage python envirionments and packages, we will make such an installation. First install python 3 version of either [Anaconda](https://www.anaconda.com/distribution/) or [Miniconda](https://docs.conda.io/en/latest/miniconda.html). Then clone (or simply download) this repository.

```
git clone https://gitlab.com/ozlemsalehi/bronze_istanbul.git
```

At the root of the repository, use the following command to setup the environment. Depending on your internet connection this may take some time.

```
conda env create -f setup/environment.yml
```

Now that everything is installed, you can activate the conda environment and start jupyter server using the following commands at the root of this repository. A new browser windows should launch automatically. 

```
conda activate bronze-workshop
jupyter lab index_bronze.ipynb
```
