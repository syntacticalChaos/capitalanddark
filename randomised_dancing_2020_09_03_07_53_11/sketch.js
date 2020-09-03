/*
 * @name Modifying the DOM
 * @frame 710,300
 * @description <p>Create DOM elements and modify their properties every time
 * draw() is called. You will need to include the
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
 * for this example to work in your own project.</p>
 */
//global variables
var adjectives, items, colors, animals, actions, poetry, end;
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
    //arrays of words ready to use
    adjectives = ['panic’s breath is a wind that sucks and roars', 'I wake in corpse raiments, skin to skin, coins in my money purse', 'take off your human suit and turn away from the machine', 'promethean angst ', 'it’s hard to believe that my eyes open at the touch of the sun', 'planetary'];
    items = ['INFINITY', 'VOID', 'COSMOS', 'ABYSSAL', 'THE LIMIT', 'FIRE KNOWS YOU', 'THE ROCK SPEAKS'];
    colors = ['shivering the flooded gum and booyong in the valley of the', 'on this point our relationship may become strained: be humiliated for me', 'and write to you from the moment of my own death', 'necromantic vision'];
    animals = ['a baby bird', 'immanence becomes imminence', 'ragged mistmonsters', 'the structural failure of aircraft', 'you don’t know fire', 'we are suspended in the flow like particulate matter in a stream', 'the great quaking pando'];
    actions = ['and promethean angst imagines', 'skinwalking death before disintegration', 'blood is breathless and lungblack', 'the creation of a body at the limit'];
    poetry = ['feed yourself to the void', 'the structural failure of aircraft', 'a sudden acc(id)ent falling on a seizure of verse', 'the expanse of a dead open mouth', 'you think you know fire'];
    end = ['sealed wth ash', 'now and now and now', 'there is only flow', 'falling asleep', 'this is the first time', 'this is the only time'];

    //set up background
    createCanvas(1000, 1000);
    // H, S & B integer values
    colorMode(HSB);
    background(155, 204, 100);

    //call on the function, way down below, that creates an array of spans of random words
    var texts = makeRandomSentence();
    //those random word spans then each added to dancing words
    for (let i = 0; i < texts.length; i++) {
        const paragraph = texts[i].html();
        const words = paragraph.split(' ');
        for (let j = 0; j < words.length; j++) {
            const spannedWord = createSpan(words[j]);
            const dw = new DanceSpan(spannedWord, random(1000), random(800));
            dancingWords.push(dw);
        }
    }

    //mouse press changes
    window.onclick = function () {

        //clear background
        clear();
        background(155, 204, 100);
        //remove last words from screen & data
        for (let d = 0; d < dancingWords.length; d++) {
            dancingWords[d].element.remove();
        }
        //reset dancingwords array to empty
        dancingWords = [];
        //call on the function, way down below, that creates an array of spans of random words
        var texts = makeRandomSentence();
        //those random word spans then each added to dancing words
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
}

//!!!***VEEBS down here this is a problem you have two draw functions. If I turn one off it doesn't work if I combine them there's way way more words. Didn't look much further. Not sure what you want with these, but eventually there should only be one draw function.

function draw() {


    for (let i = 0; i < dancingWords.length; i++) {
        dancingWords[i].brownian();
        frameRate(random(5, 70))
    }

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
        frameRate(random(5, 70))
    }


}

// function to find a random word from the arrays set up at the top, turn each into a span element
//all spans gathered into an array & sent back ready to become dancing words
function makeRandomSentence() {
    //make a span with one random word for each of these
    var adjectiveOne = createSpan(random(adjectives));
    var itemsOne = createSpan(random(items));
    var colorOne = createSpan(random(colors));
    var animalOne = createSpan(random(animals));
    var action = createSpan(random(actions));
    var poetryOne = createSpan(random(poetry));
    var adjectiveTwo = createSpan(random(adjectives));
    var animalTwo = createSpan(random(animals));
    var poetryTwo = createSpan(random(poetry));
    var endOne = createSpan(random(end));
    //group them toghetehr in an array ready to be sent back
    var sentence = [adjectiveOne, itemsOne, colorOne, animalOne, action, poetryOne, adjectiveTwo, animalTwo, poetryTwo, endOne];
    return sentence;

}
