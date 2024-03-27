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
            const finalUserTipAmount =
              ((parseInt(billInput.value) / parseInt(numOfPeople.value)) *
                parseInt(percentToDivide)) /
              100;

            const finalTotalPrice =
              parseInt(billInput.value) / parseInt(numOfPeople.value) +
              parseInt(finalUserTipAmount);
            totalPrice.innerHTML = finalTotalPrice;
            if (!numOfPeople.value || parseInt(numOfPeople.value) === 0) {
              tipAmount = parseInt(billInput.value / 1);
            } else {
              tipAmount = parseInt(billInput.value / numOfPeople.value);
            }
            percentToDivide = parseInt(item.innerHTML.split("%")[0]);
            tipAmount = parseInt(tipAmount * percentToDivide) / 100;

            if (!numOfPeople.value || parseInt(numOfPeople.value) === 0) {
              totalTipAmount.innerHTML = "$0.00";
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
custom.addEventListener("click", () => {
  for (let i = 0; i < percentBox.length; i++) {
    if (percentBox[i].classList.contains("active-percent")) {
      percentBox[i].classList.remove("active-percent");
    }
  }
});

billInput.addEventListener("change", () => {
  const finalTipAmount =
    ((parseInt(billInput.value) / parseInt(numOfPeople.value)) *
      parseInt(percentToDivide)) /
    100;
  totalTipAmount.innerHTML = "$" + finalTipAmount.toFixed(2);
});

customInput.addEventListener("change", () => {
  const finalPercentToDivide = () => {
    if (parseInt(customInput.value) < 1) {
      return 1;
    } else if (parseInt(customInput.value) > 100) {
      return 100;
    } else {
      return parseInt(customInput.value);
    }
  };
  const returnedPercent = finalPercentToDivide();
  customInput.value = returnedPercent;
  console.log(returnedPercent);
  const finalTipAmount =
    ((parseInt(billInput.value) / parseInt(numOfPeople.value)) *
      parseInt(returnedPercent)) /
    100;

  totalTipAmount.innerHTML = "$" + finalTipAmount.toFixed(2);
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

numOfPeople.addEventListener("change", () => {
  const finalUserTipAmount =
    ((parseInt(billInput.value) / parseInt(numOfPeople.value)) *
      parseInt(percentToDivide)) /
    100;
  const finalTipAmount =
    ((parseInt(billInput.value) / parseInt(numOfPeople.value)) *
      parseInt(percentToDivide)) /
    100;
  totalTipAmount.innerHTML = "$" + finalTipAmount.toFixed(2);
  const finalTotalPrice =
    parseInt(billInput.value) / parseInt(numOfPeople.value) +
    parseInt(finalUserTipAmount);
  totalPrice.innerHTML = finalTotalPrice;
});
