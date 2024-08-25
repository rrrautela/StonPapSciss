let function_Called = false;
let arr=["stone","paper","scissors"];
let x = -1;
resultDivCreated = false;
// Get all buttons with the class "image-button"


const image_buttons = document.getElementsByClassName("image-button");

    audio = document.createElement("audio")
    audio.setAttribute("id", "myAudio")
    audio.setAttribute("src","sound.mp3" )
    audio.setAttribute("type","audio/mpeg")
    document.body.appendChild(audio);

function generate_computer_image(computer_int){
    const img1 = document.getElementById("image1");
    img1.setAttribute("src", arr[computer_int] + '.png');
}

function image_animation(){
    const intervalId = setInterval(() => {
        if (!function_Called) {
            x++;
            if (x > 2) x = 0;
            generate_computer_image(x);
        } else {
            console.log("stopped")
            clearInterval(intervalId); // Stop the interval when functionCalled is true
        }
    }, 50);    
}

image_animation()

function userChoice(user_int)
{
    audio.play().catch(error => {
        console.log('Autoplay might be blocked by the browser:', error);
    });
    function_Called = true;
    user_int--;
    let arr=["stone","paper","scissors"];
    let computer_int = Math.floor(Math.random()*arr.length); //0,1,2
    
    

    generate_computer_image(computer_int);
    const img2 = document.getElementById("image2");
    img2.setAttribute("src", arr[user_int] + '.png');


    checkWinner(user_int,computer_int);
}

function playAgain(){
    // Select the div with id 'winningDiv'
    result = document.getElementById("resultDiv");
    if (result) {
        document.body.removeChild(result)
        // result.remove();
        // result.innerHTML = "";
    }
    // Loop through each button and enable it
    for (let i = 0; i < image_buttons.length; i++) {
        image_buttons[i].disabled = false;
    }

    document.getElementById("image2").setAttribute("src", "question_mark.png");

    // temp_image_var = document.getElementById("image2")
    // temp_image_var.setAttribute("src","question_mark.png")

    function_Called = false;
    resultDivCreated = false;
    image_animation();
}

function checkWinner(user, computer){
     // Loop through each button and disable it
     for (let i = 0; i < image_buttons.length; i++) {
        image_buttons[i].disabled = true;
    }

    //check winner
    if(user==computer)
        answer = "It's a draw!"
    else if(user==0)
        (computer==2)?answer = "You win":answer = "You lose";
    else if(user==1)
        (computer==0)?answer = "You win":answer = "You lose";
    else if(user==2)
        (computer==0)?answer = "You lose":answer = "You win";


    //make div for result showing
    finalDiv = document.createElement("div");
    finalDiv.setAttribute("id", "resultDiv");

    //result text
    text = document.createElement("h1");
    text.textContent = answer;
    

    text2 = document.createElement("h1");
    text2.textContent = "Press enter key or click this button to play again";
    

    //button to play again
    btn = document.createElement("button");
    btn.setAttribute("onclick", "playAgain()")
    btn.setAttribute("id", "button1")
    btn.textContent = "Play Again?"


    
    function final_append(){
        finalDiv.append(text, text2 ,btn);
        document.body.append(finalDiv);
        resultDivCreated = true;


    }
    //adding buttona and text to div and div to body
    setTimeout(final_append, 1000);   
    
}

document.addEventListener('keydown', (event) => {

    if (event.key === 'Enter' && resultDivCreated === true) { // Check if the pressed key is 'Enter'
        document.getElementById('button1').click();   // Simulate button click
    }
});


