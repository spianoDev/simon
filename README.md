# simon
## (My take on the classic game.)

I decided to tackle this in phases:

## phase 1:
Functionality... 
Create a game board, make the buttons work, add sound and a visual response when buttons are clicked.
## comments: 
This part of the project went so much faster than I anticipated. My process before beginning was to think about what
 I wanted to do for a couple of days, and I'm convinced that time in my head made the output much faster. I used
  photos and video of the original game as reference so I could honor the feel of the game. The fun part of this
   phase was recording the tones on my xylophone. The original game tones were pitched in B-flat, but my xyolophone
    is pitched in the key of C. I modified my tones to match the relative diatonic tones of tonic, mediant, dominant
    , and the octave above tonic. 
 
## phase 2: 
Programming the computer to create a random pattern with the buttons.
## comments:
This part was a bit more tricky and I had some duplicate code, so refactoring as I went deeper into the project
 became very important. My initial idea did work, but because of the nature of JavaScript, all my tones/flashes were
  happening at the same time. This was when I started to use timeout to extend the time between actions. This built
   in function became a critical piece of the project as I continued.

## phase 3:
Allowing for turn taking so the computer generates patterns and the user (player) copies them.
This phase will also have a set number of patterns that will determine a "win" case, as well as a "lose" case for
 users unable to recreate the computer pattern.
 ## comments:
 This is where I spent a large chunk of time. I found as I added more elements, I needed to pull apart the initial
  functions and create new functions to run repeat items of code. This was also a place for extensive testing to be
   sure all aspects of game play were running as expected. The hardest part was the comparison between the computer
    and the user because it required a reset of the user array at the end of the turn. Once I figured out how to do that (and
     where to place the code within the function), the game was fully functional within minutes. 
 
 ## phase 4: 
Style the game so it looks awesome!
## comments:
I was surprised how much time I spent working on this. I spent a fair amount of time trying to make the semicircle
 shape out of a trapezoid, before settling on an oval. However, upon reflection and assisting a peer with his css, I
  realized I could create a 1/4 pie shape and layer the simon button on top. I left my notes embedded inside the code
   and all commits have details of the changes I was pushing.

## extensions:
Add scoring and levels 
## comments: 
This final stage took several steps to achieve exactly what I wanted. The 'final' version for quick game play was to
 ensure a win case in a demo. For this case, I created five independent levels that after four tones will level up
 . The level up has less time between computer selections. 
 
 The longer play version is much more true to the original spirit of the game and will be purposefully difficult to
  beat. The computer selections will not only get faster, but the number of tones in the sequence required to level
   up will increase exponentially.
  
  ## future additions:
  I may return to this project to add a way for users to enter their high scores. I think it would be fun to see who
   is playing this game (and where in the world they are playing it). Also, if too many are winning that level 5
   , maybe I will make it even more challenging!


