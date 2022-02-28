/* alert("Hi");
const treasuress = (location) => {
  return alert("hi");
};
console.log(treasure()); */

const bombOne = document.getElementById("bomb1");
const bombTwo = document.getElementById("bomb2");
const bombThree = document.getElementById("bomb3");
const bombFour = document.getElementById("bomb4");
const bombFive = document.getElementById("bomb5");
const bombSix = document.getElementById("bomb6");

const randomNum = Math.floor(Math.random() * 6);
const treasure = (id) => {
  if (id === "bomb1") {
    bombOne.innerHTML = "💥";
    console.log("Not Lucky, TRY again");
  } else if (id === "bomb2") {
    bombTwo.innerHTML = "📱 🎁";
    alert("Yay! You Won iPhone");
  } else if (id === "bomb3") {
    bombThree.innerHTML = "💥";
  } else if (id === "bomb4") {
    bombFour.innerHTML = "💥";
  } else if (id === "bomb5") {
    bombFive.innerHTML = "💥";
  } else {
    bombSix.innerHTML = "💥";
    console.log("Exploded");
  }
};
