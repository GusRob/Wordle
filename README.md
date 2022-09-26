# Wordle

This is a very simple clone of the popular game "wordle"

The objective of the game is to guess the secret 5 letter word. Every guess that is made informs the user of information about the secret word, using the letters of their guess according to the following rules:
  - If a letter exists in the secret word, in the correct place, it turns green
  - If a letter exists in the secret word, in the wrong place, it turns yellow
  - If a letter is not in the secret word, it stays gray
  
The word list used is just a text file of 5 letter english words. It is by no means exhaustive and it may contain some words that would be unreasonable as answers. I will update this list when I find a better set of words. Using inspect element reveals that the actual nytimes wordle game uses two sets of words: a full set of words for the user to guess, and a smaller set of common words to use as answers.


