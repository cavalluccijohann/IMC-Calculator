document.getElementById("btn").addEventListener("click", start);
const bar = document.getElementsByClassName("bar_inside")[0];
const result_red = document.getElementsByClassName("result_imc_red")[0];
const title_result = document.getElementsByClassName("title_result")[0];
const imc_number = document.getElementsByClassName("imc_number")[0];
const rect_result = document.getElementsByClassName("rect_result")[0];
const result_imc_red = document.getElementsByClassName("result_imc_red")[0];
const result_imc_yellow = document.getElementsByClassName("result_imc_yellow")[0];
const result_imc_green = document.getElementsByClassName("result_imc_green")[0];
const result_imc_low = document.getElementsByClassName("result_imc_low")[0];


function start() {
    const poids = document.getElementById("poids").value;
    const taille = document.getElementById("taille").value * document.getElementById("taille").value;
    const imc = poids/taille * 10000;
    result_imc_yellow.style.display = "none";
    result_imc_green.style.display = "none";
    result_imc_red.style.display = "none";
    result_imc_low.style.display = "none";
    if (imc >= 25 && imc <= 30) {
        const barWidth = 100 - (imc * (40/25));
        bar.style.height = barWidth + "%";
        imc_number.style.color = "#ff9900";
        rect_result.style.border = "2px solid #ff9900";
        result_imc_yellow.style.display = "block";
    }
    else if (imc > 30 && imc <= 40) {
        const barWidth = 100- (imc * (60/30));
        bar.style.height = barWidth + "%";
        imc_number.style.color = "#b63333";
        rect_result.style.border = "2px solid #b63333";
        result_imc_red.style.display = "block";
    }
    else if (imc < 25) {
        const barWidth = 100 -(imc * (50/27.5));
        bar.style.height = barWidth + "%";
        imc_number.style.color = "#1bc100";
        rect_result.style.border = "2px solid #1bc100";
        result_imc_green.style.display = "block";
    }
    else if (imc > 40) {
        bar.style.height = "0%";
        imc_number.style.color = "#b63333";
        rect_result.style.border = "2px solid #b63333";
        result_imc_low.style.display = "block";
    }
    if (imc >=0) {
        title_result.style.display = "block";
        rect_result.style.display = "block";
    }


    document.getElementById("demo").innerHTML = imc.toFixed(2);
}


/*

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
}*/