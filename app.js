

document.getElementById("btn").addEventListener("click", start);
const needle = document.getElementsByClassName("needle")[0];
const bar = document.getElementsByClassName("bar")[0];

const needlepos = needle.style.transform;
const barpos = bar.style.transform;

function start() {
    const poids = document.getElementById("poids").value;
    const taille = document.getElementById("taille").value * document.getElementById("taille").value;
    const imc = poids/taille * 10000;
    console.log(imc);
    if (imc >= 25 && imc <= 30) {
        const angle = -90 + (imc * 4);
        needle.style.animation = "rotate 2s linear";
        bar.style.animation = "rotate 2s linear";
        needle.style.transform = "rotate(" + angle + "deg)";
        bar.style.transform = "rotate(" + (angle - 90) + "deg)";
        //needle.style.transform = "rotate(90deg)";
        //bar.style.transform = "rotate(0deg)";
        bar.style.backgroundColor = "yellow";
    }
    else if (imc > 30 && imc <= 40) {
        const angle = -90 + (imc * 4);
        needle.style.animation = "rotate 2s linear";
        bar.style.animation = "rotate 2s linear";
        needle.style.transform = "rotate(" + angle + "deg)";
        bar.style.transform = "rotate(" + (angle - 90) + "deg)";
        //needle.style.transform = "rotate(60deg)";
        //bar.style.transform = "rotate(-30deg)";
        bar.style.backgroundColor = "red";
    }
    else if (imc < 25) {
        const angle = -90 + (imc * 1.8);
        needle.style.animation = "rotate 2s linear";
        bar.style.animation = "rotate 2s linear";
        needle.style.transform = "rotate(" + angle + "deg)";
        bar.style.transform = "rotate(" + (angle - 90) + "deg)";
        //needle.style.transform = "rotate(60deg)";
        //bar.style.transform = "rotate(-30deg)";
        bar.style.backgroundColor = "green";
    }
    else if (imc > 40) {
        needle.style.animation = "rotate 2s linear";
        bar.style.animation = "rotate 2s linear";
        needle.style.transform = "rotate(90deg)";
        bar.style.transform = "rotate(0deg)";
        //needle.style.transform = "rotate(60deg)";
        //bar.style.transform = "rotate(-30deg)";
        bar.style.backgroundColor = "red";
    }
    document.getElementById("demo").innerHTML = imc.toFixed(2);
    //needle.style.transform = "rotate(180deg)";
    console.log("start");
}