 var adjectives = ['panic’s breath is a wind that sucks and roars', 'I wake in corpse raiments, skin to skin, coins in my money purse', 'take off your human suit and turn away from the machine', 'promethean angst ', 'it’s hard to believe that my eyes open at the touch of the sun', 'planetary'];
var items = ['INFINITY', 'VOID', 'COSMOS', 'ABYSSAL', 'THE LIMIT', 'FIRE KNOWS YOU', 'THE ROCK SPEAKS'];
var colors = ['shivering the flooded gum and booyong in the valley of the', 'on this point our relationship may become strained: be humiliated for me', 'and write to you from the moment of my own death', 'necromantic vision'];
var animals = ['a baby bird', 'immanence becomes imminence', 'ragged mistmonsters', 'the structural failure of aircraft', 'you don’t know fire', 'we are suspended in the flow like particulate matter in a stream', 'the great quaking pando'];
var actions = ['and promethean angst imagines', 'skinwalking death before disintegration', 'blood is breathless and lungblack', 'the creation of a body at the limit'];
var poetry = ['feed yourself to the void', 'the structural failure of aircraft', 'a sudden acc(id)ent falling on a seizure of verse', 'the expanse of a dead open mouth', 'you think you know fire'];
var end = ['sealed wth ash', 'now and now and now', 'there is only flow', 'falling asleep', 'this is the first time', 'this is the only time'];

function setup() {
  createCanvas(windowHeight, windowWidth);
  textSize(24);
  textAlign(CENTER);
  frameRate(.20);
}

function draw(){
  background(255, 125, 200);
  
  var adjectiveOne = random(adjectives);
  var itemsOne = random(items);
  var colorOne = random(colors);
  var animalOne = random(animals);
  var action = random(actions);
  var poetryOne = random(poetry);
  var adjectiveTwo = random(adjectives);
  var animalTwo = random(animals);
  var poetryTwo = random(poetry);
  var endOne = random(end);

  var sentence = adjectiveOne + ' ' + itemsOne + ' ' + colorOne + ' ' + animalOne +
      ' ' + action + ' ' + poetryOne + ' ' + adjectiveTwo + ' ' + animalTwo + ' ' + poetryTwo + ' ' + endOne; 
  
  text(sentence, 10, 40, width-40, height-40);
}
