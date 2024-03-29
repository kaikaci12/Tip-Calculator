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
const totalPrice = document.querySelector(".final-total");
const reset = document.querySelector(".reset");
let tipAmount;
let percentToDivide = 0;
let activeIdx;
let array = [];

percentBox.forEach((item, idx) => {
  array.push(item);
  item.addEventListener("click", () => {
    activeIdx = idx;
    array.forEach((arrItem, index) => {
      if (activeIdx === index) {
        arrItem.classList.add("active-percent");
        customInput.value = "";
        spanPercent.forEach((item, index) => {
          if (index == activeIdx) {
            percentToDivide = parseInt(item.innerHTML.split("%")[0]);
            const finalUserTipAmount =
              ((parseInt(billInput.value) / parseInt(numOfPeople.value)) *
                percentToDivide) /
              100;

            const finalTotalPrice =
              parseInt(billInput.value) / parseInt(numOfPeople.value) +
              finalUserTipAmount;
            totalPrice.innerHTML = "$" + finalTotalPrice.toFixed(2);
            if (!numOfPeople.value || parseInt(numOfPeople.value) === 0) {
              tipAmount = parseInt(billInput.value / 1);
              totalTipAmount.innerHTML = "$0.00";
            } else {
              tipAmount = parseInt(billInput.value / numOfPeople.value);
            }
            tipAmount = (tipAmount * percentToDivide) / 100;

            if (!numOfPeople.value || parseInt(numOfPeople.value) === 0) {
              totalTipAmount.innerHTML = "$0.00";
              totalPrice.innerHTML = "$0.00";
            } else {
              totalTipAmount.innerHTML = "$" + tipAmount.toFixed(2);
            }
          }
        });
      } else {
        arrItem.classList.remove("active-percent");
      }
    });
  });
});
