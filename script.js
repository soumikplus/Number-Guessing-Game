let a = Math.floor(Math.random()*5+1)
let guess = 1

document.getElementById("submit-guess").onclick = function(){
    let x = parseInt(document.getElementById("guessField").value);
    if(x<1 || x>5){
        alert("Oops! Please enter valid number between 1 and 5")
        return;
    }
    if(x === a){
        alert("🎉 CONGRATULATIONS! Number of attempts: " +guess)
        guess = 1;
        a = Math.floor(Math.random() * 5 + 1);
    }
    else if(x>a){
        guess++;
        alert("❌ Try Something smaller")
    }
    else{
        guess++;
        alert("❌ Try something greater")
    }
}