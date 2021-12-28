# Chaos Game: Sierpinski Triangle
![enter image description here](https://i.imgur.com/cMl3EVm.png)
## Introduction
The [Sierpinski Triangle](https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle) is a fractal subdivided into equilateral triangles, where each sub-triangle has the same form as the original. There are many ways of generating such triangles, some of which include continuously removing smaller triangles, and shrinking and duplicating to produce the triangle.

A more interesting method of generating Sierpinski Triangles is known as the Chaos game. The algorithm to draw a Sierpinski Triangle is as follows:

1. Choose three points in a plane to form a triangle
2. Randomly [choose any point inside the triangle](https://hbfs.wordpress.com/2010/10/05/random-points-in-a-triangle-generating-random-sequences-ii/) and consider it point `p`.
3. Randomly select one of the three corner points
4. Set `p` to be the midpoint on the line connecting `p` and the corner point chosen
5. Draw `p`
6. Repeat from step 3

This repository contains code that implementing the above algorithm using [p5.js](https://p5js.org/) and [math.js](https://mathjs.org/). A live example can be found [here](https://editor.p5js.org/leonrode/sketches/Em7nY-9eW).

## Results of the algorithm

After running the script for ~15 seconds, the following triangle is produced:

![Result of running the algorithm](https://i.imgur.com/emZr4HU.png)

The output looks very promising.

## References
* http://www.blackwasp.co.uk/sierpinskitriangle.aspx
* https://hbfs.wordpress.com/2010/10/05/random-points-in-a-triangle-generating-random-sequences-ii/
* https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle


## License

The code in this repository is released under the MIT License. A detailed description can be found in the LICENSE file.
