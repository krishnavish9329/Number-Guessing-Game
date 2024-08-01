
let guessNumber= "none";
function startGame()
{
    guessNumber =Math.floor(Math.random()*100)
    console.log(guessNumber)

    const span_tage = document.getElementById('span');
    document.getElementById("input_id").removeAttribute("readonly");
    span_tage.style.color="#00ff00";
    span_tage.innerHTML="you have started a game, enter the number between 0-100";
}

let guess;
let term=0;
let takeNumber = ()=>{
    guess = document.getElementById("input_id").value;
}

function checkGuesses(){
    const span_tage = document.getElementById('span');
    const conatin_number = document.getElementById('contain');
    conatin_number.innerHTML= conatin_number.innerHTML + guess + " ";

    if(guess == guessNumber)
    {
        span_tage.innerHTML = " you are win";
        return;
    }
    else
    if(guess < guessNumber)
    {
        span_tage.innerHTML =  guess + " is too low";
    }
    else
    if(guess > guessNumber)
    {
        span_tage.innerHTML =  guess + " is too high";
    }



    document.getElementById("input_id").value =0;
}