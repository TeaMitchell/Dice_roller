const rollButton = document.querySelector('#roll-button')
const total = document.querySelector("#total")
const input = document.querySelector("#input")
const showAll = document.querySelector("#show-all")
const list = document.querySelector("#All-rolls")

let dieRolls = []
let i = 0
let totalNum = 0
rollButton.addEventListener('click', function () {
    console.log("button pressed");
    let userInput = document.getElementById("input").value;

    while (userInput > i) {
        console.log("value");
        let rand = Math.floor(Math.random() * 6 + 1);
        // console.log("rand");
        totalNum += rand


        dieRolls.push(rand)
        i++
    }
    total.innerHTML = totalNum
})

showAll.addEventListener('click', function() {

    while (i < dieRolls.length) {
        console.log(dieRolls[i]);
        const newDiceString = '<li class="">' + totalNum + "</li>";
        total.innerHTML += newDiceString;

        i++

    }


})