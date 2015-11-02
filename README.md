# DeltaPwn
A js bot that can solve the multiple choice questions on the website http://www.deltamath.com

[Here](https://www.youtube.com/watch?v=_EyMsPLFkGs) is a video of DeltaPwn in action.
# Usage
To use DeltaPwn, abreviated Dpwn:

1. Navigate to http://www.deltamath.com and login
2. Navigate to a multiple choice quiz
3. Open developer console or right click>inspect element
4. Paste the contents of dpwn.js into the console and hit enter to run it

# Notes
Dpwn intentioanally adds a delay for each question to avoid suspicion. If Dpwn were run without a delay, it would complete most any test well under a second. It also incorporates a random time element so that each quiz is completed in a different amount of time, again to avoid suspicion.

If you would like to change the time it takes for Dpwn to complete a test, on the first line of dpwn.js there is a variable called `speed` which controls the amount of time Dpwn will solve a question in milliseconds.
