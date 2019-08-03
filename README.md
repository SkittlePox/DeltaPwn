# PATCHED

# DeltaPwn
A PROOF OF CONCEPT js bot that can solve the multiple choice questions on the website http://www.deltamath.com

[Here](https://www.youtube.com/watch?v=_EyMsPLFkGs) is a video of DeltaPwn in action.
# Usage
To use DeltaPwn, abbreviated Dpwn:

1. Navigate to http://www.deltamath.com and login
2. Navigate to a multiple choice quiz
3. Open developer console or right click>inspect element
4. Paste the contents of dpwn.js into the console and hit enter to run it

# Notes
Dpwn intentioanally adds a random delay for each question. If Dpwn were run without a delay, it would complete most any test well under a second.

Dpwn is entirely a proof of concept application and is not intended for personal use.

If you would like to change the time it takes for Dpwn to complete a test for experimental purposes only, on the first line of dpwn.js there is a variable called `speed` which controls the amount of time Dpwn will solve a question in milliseconds.

# Disclaimer
I am not responsible if you try to use this for dishonest purposes, it is only a proof of concept.

Also I heard the bug exploited (inspect element LOL) is being PATCHED.
