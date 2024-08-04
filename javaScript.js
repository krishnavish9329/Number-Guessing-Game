
let guessNumber= "none";
let term=0;
function startGame()
{
    guessNumber =Math.floor(Math.random()*98)
    console.log(guessNumber)    

    const span_tage = document.getElementById('span');
    document.getElementById("input_id").removeAttribute("readonly");
    document.body.classList.remove("bdchange");
    span_tage.style.color="#00ff00";
    span_tage.innerHTML="you have started a game, enter the number between 0-100";

    document.getElementById("str-but").innerHTML = `Start Game`;
    document.getElementById("contain").innerHTML = `numbers `;
    document.body.style.backgroundColor="rgb(0, 57, 86)";
    term=0;
}

let guess;

let takeNumber = ()=>{
    guess = document.getElementById("input_id").value;
}

function checkGuesses(){
    const span_tage = document.getElementById('span');
    const conatin_number = document.getElementById('contain');
    ++term;

    if(term>=10)
    {
        span_tage.innerHTML = `loss the game please try agein `;
        document.getElementById("input_id").setAttribute = "readonly";
        document.body.style.background="red";
        document.getElementById("str-but").innerHTML = "Try Again"
        return;
    }

    if(guess >= 100 || guess <=0)
    {
        span_tage.innerHTML = "Node:- Enter wrong number";
        span_tage.style.color="red";
        return;
    }

    if(guess == guessNumber)
    {
        span_tage.innerHTML = `Congratulations you have won this game in ${term} move 😍`;
        conatin_number.innerHTML= conatin_number.innerHTML + guess + " ";
        document.body.classList.add("bdchange")
        document.getElementById("input_id").setAttribute = "readonly";
        span_tage.style.color="#00ff00";
        return;
    }
    else
    if(guess < guessNumber)
    {
        span_tage.innerHTML =  guess + " is too low";
        conatin_number.innerHTML= conatin_number.innerHTML + guess + " ";
        span_tage.style.color="white";
    }
    else
    if(guess > guessNumber)
    {
        span_tage.innerHTML =  guess + " is too high";
        conatin_number.innerHTML= conatin_number.innerHTML + guess + " ";
        span_tage.style.color="white";
    }



    document.getElementById("input_id").value ='';
}