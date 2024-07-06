# Tic Tac Toe Game

## Overview :
The Tic Tac Toe game is a classic two-player board game where each player takes turns marking a 3x3 grid with their symbol (either “X” or “O”). The goal is to form a line of three of your symbols (horizontally, vertically, or diagonally) before your opponent does.

## Features :
<ol>
<li><b>Interactive Board:</b> The game provides a visual grid where players can click on cells to make their moves.</li>
<li><b>Turn-Based:</b> Players take turns, alternating between “X” and “O.”</li>
<li><b>Winning Condition:</b> The game detects when a player has won by forming a line of three symbols.</li>
<li><b>Draw Condition:</b> If all cells are filled and no winner is determined, the game ends in a draw.</li>
<li><b>Reset Button:</b> Players can start a new game by clicking a “Reset” button.</li>
</ol>

## Implementation :
<ul>
<li><b>HTML:</b> The game board is created using an HTML table with clickable cells.</li>
<li><b>CSS:</b> Styling is applied to the board, cells, and buttons to make the game visually appealing.</li>
<li><b>JavaScript:</b>
  <ul>
  <li>Event listeners handle cell clicks and update the board state.</li>
  <li>The game logic checks for winning conditions and draws.</li>
  <li>A function resets the board for a new game.</li>
  </ul>
  </li>
</ul>

## How to Play :
<ul>
<li>Open the game in a web browser.</li>
<li>Click on an empty cell to place your symbol (“X” or “O”).</li>
<li>The game will automatically switch turns.</li>
<li>The first player to form a line of three symbols wins!</li>
<li>If no winner is determined, the game ends in a draw.</li>
</ul>
