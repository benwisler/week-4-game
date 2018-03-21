// $( document ).ready(function() {
var score = 0;
var wins = 0;
var losses = 0;
var but1 = Math.floor(Math.random() * 12 + 1);
var but2 = Math.floor(Math.random() * 12 + 1);
var but3 = Math.floor(Math.random() * 12 + 1);
var but4 = Math.floor(Math.random() * 12 + 1)
var randNum = Math.floor(Math.random() * 120) + 1;

// function start() {
//     var randNum = Math.floor(Math.random() * 120) + 1;
//     console.log(randNum);
//     console.log(but1);
//     $("#button1").on("click", function () {
//         // var but1 = Math.floor(Math.random()*24 + 1);

//         alert(this.id);
//         score += but1;
//         console.log(score);

//     })
//     var but2 = $("button2").value = Math.floor(Math.random() * 24 + 1);
//     var but3 = $("button3").value = Math.floor(Math.random() * 24 + 1);
//     var but4 = $("button4").value = Math.floor(Math.random() * 24 + 1);

// }
function update() {
    $("#totalScore").empty();
    $("#totalScore").append(score);
    $("#wins").empty();
    $("#wins").append("Wins: " + wins);
    $("#losses").empty();
    $("#losses").append("Losses: " + losses);
}
function game() {
    if (score == randNum) {
        wins++;
        console.log('you win');
        update();
        reset();
    }
    else if (score > randNum) {
        losses++;
        update();
        reset();
    }
    else {
        update();
    }
}
function reset() {
    score = 0;
    $("#totalScore").empty();
    $("#totalScore").prepend(score);
    randNum = Math.floor(Math.random() * 120) + 1;
    $("#randomDiv").empty();
    $("#randomDiv").append(randNum);
    but1 = Math.floor(Math.random() * 12 + 1);
    but2 = Math.floor(Math.random() * 12 + 1);
    but3 = Math.floor(Math.random() * 12 + 1);
    but4 = Math.floor(Math.random() * 12 + 1);
    console.log(score);
}
// reset();
$(document).ready(function () {
    $("#randomDiv").append(randNum);
    $("#button1").append("<img height='50' src='assets/images/crystal.png' width='50' />")
    $("#button2").append("<img height='50' src='assets/images/crystalred.png' width='50' />")
    $("#button3").append("<img height='50' src='assets/images/crystalpurple.png' width='50' />")
    $("#button4").append("<img height='50' src='assets/images/crystalgreen.png' width='50' />")

    

    $("#button1").on("click", function () {
        score = score + but1;
        console.log(score);
        game();

    })
    $("#button2").on("click", function () {
        score = score + but2;
        console.log(score);
        game();
    })
    $("#button3").on("click", function () {
        score = score + but3;
        console.log(score);
        game();
    })
    $("#button4").on("click", function () {
        score = score + but4;
        console.log(score);
        game();
    })
})

game();
// while (score < randNum)
// {
//     $("#button1").on("click", function()
//     {
//         score = $("#button1").value + score;
//         console.log(score);
//     })
// }
// start();