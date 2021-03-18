// onclick of butt
document.getElementById("butt").onclick = function () {

    // Generating random number and letters and slice them to get 6 for hex
    hex = "#" + Math.random().toString(16).slice(2,8);

    // Putting the hex value in the <p> with id of hexCode
    document.getElementById("hexCode").innerHTML = hex;

    document.body.style.backgroundColor = hex;
    
}