


function Increase(){
    
    document.querySelector("div").classList.add("increase");
    document.querySelector("div").classList.remove("decrease");

}

function Decrease(){

    document.querySelector("div").classList.add("decrease");
    document.querySelector("div").classList.remove("increase");

}


document.querySelector(".increaseBtn").onclick = Increase;
document.querySelector(".decreaseBtn").onclick = Decrease;
