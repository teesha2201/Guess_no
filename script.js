let randomnumber = random(100); //call function random
let nochance = 100;
function random(n)
{
    return (Math.floor(Math.random()*n)+1)
}
console.log(randomnumber);

 function check()
{
    var guessnumber = document.getElementById("guessing_no").value;
     
    if(nochance !== 0 )//&& nochance>=1 && nochance<=100
    {
        if(guessnumber > randomnumber)
        {
            document.getElementById("message").innerText = " your Guess is High";
            document.getElementById("chances").textContent = `💯chances:${--nochance}`;
        }
        else if(guessnumber < randomnumber)
        {
        document.getElementById("message").innerText = "Your Guess no. is low ";
         --nochance
        document.getElementById("chances").textContent = `💯chances:${nochance}`;
        }
        
        else
        {
            document.getElementById("message").innerText = "😍😍Hurray you won..!!😍😍"
            document.getElementById("chances").textContent = `💯chances:${--nochance}`;
           // console.log(nochance);
            document.getElementById("highscore").textContent = `🥇Highscore:${nochance}`;
            document.body.style.backgroundColor = "green";
            document.getElementById("checkbtn").style.visibility = "hidden";
            document.getElementById("result").textContent = `${guessnumber}`;
            document.getElementById("playagain").innerText = "Play Again";
            /*extra */
            let change =document.getElementById("playagain");
            change.style.boxShadow ="14px 12px 4px rgb(124,158,100)"
            change.style.border="5px solid rgb(137, 123, 123)"; 
        } 
    }
    /*Game over and lost */
    else
    {
    
        document.getElementById("chances").textContent = "💯chances:0";
        document.getElementById("message").textContent = "Game Over 😥😪 you lost";
        document.querySelector(".rightdiv>#highscore").textContent = "🥇Highscore:0"
        document.getElementById("checkbtn").style.visibility = "hidden";
        document.getElementById("playagain").innerText = "Play Again"
        document.body.style.backgroundColor = "gray";

    }
}

function reset() //play again
{
    nochance=100;
    document.body.style.backgroundColor = "Cadetblue";
    randomnumber = random(100);
    console.log(randomnumber);

    document.getElementById("chances").textContent = `💯chances:${nochance}`;
    document.getElementById("message").textContent = "Start guessing...";
    document.querySelector(".rightdiv>#highscore").textContent = "🥇Highscore:0"
    document.getElementById("checkbtn").style.visibility = "visible";
    document.getElementById("result").textContent = "?";
    document.getElementById("guessing_no").value=""; //on check call
    // document.getElementById("playagain").innerText = "Play Game"
   
    /*again */

    
  
}