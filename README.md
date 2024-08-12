# rock-paper-scissors

## Intention

In this project I will create a version of the game "Rock, Paper, Scissors" (referred in this document to as RPS) in Javascript, wherein the user 'plays' the computer. The rules of RPS can be found [here](https://en.wikipedia.org/wiki/Rock_paper_scissors).

This project is part of the Odin Project's Foundations course.

## Pseudocode

For each round of RPS, the following steps are taken:

1. The computer's choice is similated
1. The user makes their choice
1. The result of the round is found 

To simulate the computer's move:

1. A random number $a$ is generated between 0 and 1
1. If $0 \le a < \frac{1}{3}$, the computer plays rock
1. If $\frac{1}{3} \le a < \frac{2}{3}$, the computer plays paper
1. If $\frac{2}{3} \le a < 1$, the computer plays scissors

To find the result of a round:

1. If the choices are equal, the round is a draw
1. Else if the string `"rockscissorspaperrock"` contains `userChoice + computerChoice`, then the user wins
1. Else, the computer wins