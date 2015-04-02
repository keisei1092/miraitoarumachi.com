float x = -100;
float y = 50 + 10 * sin (x / 2);
float prevX = -100;
float prevY = 50;
float a = 0;

void draw () {
  
  x = -100;
  y = 50 + 25 * sin (x / 2);
  prevX = -100;
  prevY = 50;
  
  background (236, 240, 241);
  
  for (x = -100; x < width; x = x + 0.5) {

    line (prevX + a, prevY, x + a, y);
    prevX = x;
    prevY = y;
    y = 50 + 25 * sin (x / 2);

  }
  
  if (a >= 100) {
    a = 0;
  } else {
    a = a + 0.5;
  }
  
}
