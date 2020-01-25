# 25daysofciconia
Simple fun project I made to play with Google Cloud Storage and one of my favorite VNs :)

To see this project in action, go to: 25daysofciconia.com

Hey everyone! This is definitely a work in progress, here's a bit about what it is, and what it's meant to be!

Goal: Create a countdown calendar using the 24 main Gauntlet Knight characters (and Meow) from Ciconia: When They Cry
* Each day displays a new character- name, picture, some info, and a small blurb of flavor text
* No character is repeated
* After Christmas (and the following year, before December), a new page is shown asking the user to come back during the next holiday

Current State:
* Checks on numbered date only (todaysknight.js) to determine chosen Gauntlet Knight
* Gauntlet Knight info is hard-coded into a JSON object (todaysknight.js)
* If the date is past 25 (any month), the post-Christmas page is given (postchristmas.html)
* All files are hosted on Google Cloud Storage

Future Improvements:
* Check for month as well as date- only run Gauntlet Knights in December
* Move assets into assets folder in Google Cloud Storage to match this organization setup
* Resize pictures for consistency
* Improve layout design to be more visually appealing and more responsive to screen size and type
* Add Apocalypsis Ciconia song as BGM for post-Christmas page (possibly also Beach for Christmas page)
* Allow option for listing and viewing past Gauntlet Knights from that year
* Improve code to use database for organizing and retrieving Gauntlet Knight info

If you are interested in working on this project, please send me an email at superaarthi@gmail.com!