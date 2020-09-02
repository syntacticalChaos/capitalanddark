// /*
//  * @name Modifying the DOM
//  * @frame 710,300
//  * @description <p>Create DOM elements and modify their properties every time
//  * draw() is called.
let dancingWords = [];

class DanceSpan {
  constructor(element, x, y) {
    element.position(x, y);
    this.element = element;
    this.x = x;
    this.y = y;
  }

  brownian() {
    this.x += random(-6, 6);
    this.y += random(-6, 6);
    this.element.position(this.x, this.y);
  }
}

function setup() {
  colorMode(HSB, 100)
  frameRate(100)

  createP(
    'immanence becomes imminence, the ash of annihilation lands softly on lungs of those watching' +
    'the sun darkens in its brightness, I am already word without end'
  ).addClass('text').hide();

  const texts = selectAll('.text');
  for (let i = 0; i < texts.length; i++) {
    const paragraph = texts[i].html();
    const words = paragraph.split(' ');
    for (let j = 0; j < words.length; j++) {
      const spannedWord = createSpan(words[j]);
      const dw = new DanceSpan(spannedWord, random(1000), random(800));
      dancingWords.push(dw);

    }
  }
}


function draw() {
  for (let i = 0; i < dancingWords.length; i++) {
    dancingWords[i].brownian();
  }

  function mousePressed() {
    clear();
    background(128);
  }
}
