// create an answer array
const  answers = [
   'It is certain',
   'Yes',
   'No', 
   'Most likely',
   'It is your destiny',
   'Cannot predict now', 
   'Don\'t count on it', 
   'Very doubtful',
   'Signs point to yes'
]
// get the button 
const button = document.querySelector('button');
// get crystal ball
const crystalBall = document.querySelector('.crystal-ball');
// add an event listener to listen for a click  then run a function
const glass = document.querySelector('.glass');
button.addEventListener('click', magicTime);
// function adds the animate style to the crystal ball
function magicTime() {
    crystalBall.classList.add('animate');
    glass.classList.add('brighter');
    crystalBall.addEventListener('animationend', () => {
        crystalBall.classList.remove('animate');
        var randomNumber = Math.floor(Math.random() * (answers.length));
        var innerText = document.querySelector('.answer').innerHTML = answers[randomNumber];
    
    });   
}


