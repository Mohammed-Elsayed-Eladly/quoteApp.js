var previousRandom = null ;


function randomText() {
    var quote = [" “Some people never go crazy. What truly horrible lives they must lead.” " ,
                " “The difference between genius and stupidity is: genius has its limits.” " ,
                " “Do one thing every day that scares you.” " ,
                " “Those who don't believe in magic will never find it.” " ,
                " “An eye for an eye will only make the whole world blind.” ",
                " “I would rather walk with a friend in the dark, than alone in the light.” "];

    var author = [" ― Charles Bukowski " , 
                " ― Alexandre Dumas-fils " , 
                " ― Eleanor Roosevelt " ,
                " ― Roald Dahl " ,
                " ― Mahatma Gandhi " ,
                " ― Helen Keller "];

    // var random = Math.floor(Math.random()*quote.length);

    // var random ;
    do {
        var random = Math.floor(Math.random()*quote.length);
    }
    while (random == previousRandom) {
        previousRandom = random;
    }

    document.getElementById('text').innerHTML=(quote[random]);
    document.getElementById('author').innerHTML=(author[random]);

    
// console.log(quote[random]);
// console.log(author[random]);
}
// randomText();
