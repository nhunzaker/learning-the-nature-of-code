float t = 3;

void setup() {
  background(255);
  size(640,360);
}

void draw() {
  float n = noise(t);
  float x = map(n, 0, 1, 0, width);
  float y = map(n, 0, 1, 0, height);

  ellipse(x, y, 16, 16);
  
  t += 0.01;
}
