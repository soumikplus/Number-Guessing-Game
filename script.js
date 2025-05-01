let a = Math.floor(Math.random()*5+1)
let guess = 1

document.getElementById("submit-guess").onclick = function(){
    let x = document.getElementById("guessField").value;
    if(x==a){
        alert("🎉 CONGRATULATIONS! Number of attempts: " +guess)
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