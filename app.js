const percentBox = document.querySelectorAll(".percent-box");
const numOfPeople = document.querySelector(".num-people");
const cantZero = document.querySelector(".numcheck");
const peopleDiv = document.querySelector(".numOfPeople");
const color = "#9FE8DF";
const spanPercent = document.querySelectorAll(".percentage");
const billInput = document.getElementById("bill-money");
const custom = document.querySelector(".custom");
const customInput = document.querySelector(".custom-input");
const totalTipAmount = document.querySelector(".total-tip-amount");
const totalPrice = document.querySelector(".total");

let tipAmount;
let percentToDivide;
let activeIdx;
let array = [];
percentBox.forEach((item, idx) => {
  array.push(item);
  item.addEventListener("click", () => {
    activeIdx = idx;
    array.forEach((arrItem, index) => {
      if (activeIdx === index) {
        arrItem.classList.add("active-percent");
        spanPercent.forEach((item, index) => {
          if (index == activeIdx) {
            tipAmount = parseInt(billInput.value / numOfPeople.value);
            percentToDivide = parseInt(item.innerHTML.split("%")[0]);
            tipAmount = parseInt(tipAmount * percentToDivide) / 100;

            totalTipAmount.innerHTML = "$" + tipAmount.toFixed(2);
            console.log(totalTipAmount);
          }
        });
      } else {
        arrItem.classList.remove("active-percent");
      }
    });
  });
});
custom.addEventListener("click", () => {
  for (let i = 0; i < percentBox.length; i++) {
    if (percentBox[i].classList.contains("active-percent")) {
      percentBox[i].classList.remove("active-percent");
    }
  }
});

customInput.addEventListener("change", () => {
  if (parseInt(customInput.value) > 100) {
    customInput.value = 100;
    console.log(customInput.value);
  } else if (parseInt(customInput.value) < 0) {
    customInput.value = 0;
  }
});
numOfPeople.addEventListener("change", () => {
  if (
    numOfPeople.value === "0" ||
    numOfPeople.value === "" ||
    isNaN(numOfPeople.value)
  ) {
    cantZero.classList.add("cant-zero");
    cantZero.style.display = "block";
    peopleDiv.classList.add("people-border");
  } else {
    cantZero.classList.remove("cant-zero");
    cantZero.style.display = "none";
    peopleDiv.classList.remove("people-border");
  }
});
