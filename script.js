const switchButton = document.getElementById("switchButton");
const body = document.body;
const bulbPic = document.getElementById("bulbPic");
//turn on
let isOn = false;
switchButton.addEventListener("click", function(){
    if(isOn){
        bulbPic.src = "white-bulb.png";
        body.style.backgroundColor = "black";
        switchButton.style.color = "black";
        switchButton.style.backgroundColor = "white";
        switchButton.textContent = "OFF"
        isOn = false;
    }else{
        bulbPic.src ="yellow-bulb.png";
        body.style.backgroundColor = "white";
        switchButton.style.color = "grey";
        switchButton.style.backgroundColor = "yellow";
        switchButton.textContent = "ON"
        isOn = true;
    }
 }
  
);