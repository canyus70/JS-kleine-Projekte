let counter= 0;

function calcUni(wert){
    counter += wert;
    document.getElementById("counter").textContent= counter;
    // counter = document.getElementById("counter").innerText;
}

function resetCounter(){
    counter =0;
    document.getElementById("counter").textContent =counter;
}

function calcmulti(){
    counter *=  2
    document.getElementById("counter").textContent =counter;

}