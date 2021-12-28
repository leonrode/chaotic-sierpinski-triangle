// Implementation of http://www.blackwasp.co.uk/sierpinskitriangle.aspx
// Remember to link Math.js
const WIDTH = 700;
const HEIGHT = 700;

const SCALE = 700;

// unit equilateral triangle coordinates
const CORNER_POINTS = [
  [0.5, 0],
  [1, Math.sqrt(3) / 2],
  [0, Math.sqrt(3) / 2],
];

let currentPoint;

function setup() {
  canvas = createCanvas(WIDTH, HEIGHT);
  background(50);

  drawTriangle();

  currentPoint = chooseStartingPosition();
}

function drawTriangle() {
  const scaledCorners = CORNER_POINTS.map((coord) =>
    coord.map((c) => c * SCALE)
  );

  strokeWeight(5);
  stroke(255);
  noFill();

  triangle(...scaledCorners[0], ...scaledCorners[1], ...scaledCorners[2]);
}

function draw() {
  currentPoint = chooseNextPoint(currentPoint);
  point(...currentPoint);
}

// chooses a random point inside of the triangle (with pretty good accuracy)
// https://hbfs.wordpress.com/2010/10/05/random-points-in-a-triangle-generating-random-sequences-ii/
function chooseStartingPosition() {
  let xSquare = Math.random();
  let ySquare = Math.random();

  // Math.js, not the Math api
  let pointMatrix = math.multiply(
    [[xSquare, ySquare]],
    [
      [1, 0],
      [0, 1],
    ]
  );

  while (pointMatrix[0][0] + pointMatrix[0][1] > 1) {
    xSquare = Math.random();
    ySquare = Math.random();

    pointMatrix = math.multiply(
      [[xSquare, ySquare]],
      [
        [1, 0],
        [0, 1],
      ]
    );
  }

  return [pointMatrix[0][0] * SCALE, pointMatrix[0][1] * SCALE];
}

// returns the midpoint between the currentPoint and a random corner
function chooseNextPoint(currentPoint) {
  const corner = CORNER_POINTS[Math.floor(Math.random() * 3)];
  const x = (corner[0] * SCALE + currentPoint[0]) / 2;
  const y = (corner[1] * SCALE + currentPoint[1]) / 2;

  return [x, y];
}
