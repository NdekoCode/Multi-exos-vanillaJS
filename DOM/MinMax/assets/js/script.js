const aleatNumber = parseInt(Math.random() * 10 + 1);
let userNumber = document.getElementById("userNumber");
let btn = document.getElementById("btn-form");
let output = document.getElementById("output");
output.style.textAlign = "center";
let tentative = 4;

btn.addEventListener("click", function () {
  output.style.color = "#ff3c41";
  let userValue = parseInt(userNumber.value);

  if (aleatNumber === userValue) {
    output.style.color = "#50d19d";
    output.innerText = `🥳🥳🥳 Bravo vous avez trouvez le nombre`;
    tentative = 4;
    aleatNumber = parseInt(Math.random() * 10 + 1);
  } else if (aleatNumber < userValue) {
    tentative--;
    output.innerText = `Votre nombre ${userValue} est plus grand, Veuillez recommencez, il vous reste ${tentative} tentative, ${aleatNumber}`;
  } else if (aleatNumber > userValue) {
    output.innerText = `Votre nombre ${userValue} est plus petit,Veuillez recommencez,il vous reste ${tentative} tentative, ${aleatNumber}`;
    tentative--;
  }

  if ((tentative === 4 || tentative < 1) && aleatNumber !== userValue) {
    output.innerText = `💀Game Over ${aleatNumber}, Recommencez`;
    tentative = 4;
    aleatNumber = parseInt(Math.random() * 10 + 1);
  }
});
