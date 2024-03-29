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
      percentToDivide) /
    100;
  totalTipAmount.innerHTML = "$" + finalTipAmount.toFixed(2);
  if (billInput.value === "" || billInput.value === "0")
    totalTipAmount.innerHTML = "$0.00";
  if (
    isNaN(totalTipAmount) ||
    isNaN(finalTipAmount) ||
    numOfPeople.value === "0" ||
    numOfPeople.value === "" ||
    isNaN(numOfPeople.value) ||
    billInput.value === "0" ||
    billInput.value === "" ||
    customInput.value === "0" ||
    customInput.value === ""
  ) {
    totalTipAmount.innerHTML = "$0.00";
    totalPrice.innerHTML = "$0.00";
  }
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
  percentToDivide = finalPercentToDivide();
  customInput.value = percentToDivide;
  console.log(percentToDivide);
  const finalTipAmount =
    ((parseInt(billInput.value) / parseInt(numOfPeople.value)) *
      percentToDivide) /
    100;
  if (isNaN(finalTipAmount)) return;
  totalTipAmount.innerHTML = "$" + finalTipAmount.toFixed(2);
  const finalTotalPrice =
    parseInt(billInput.value) / parseInt(numOfPeople.value) + finalTipAmount;
  totalPrice.innerHTML = "$" + finalTotalPrice.toFixed(2);
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
    totalTipAmount.innerHTML = "$0.00";
  } else {
    cantZero.classList.remove("cant-zero");
    cantZero.style.display = "none";
    peopleDiv.classList.remove("people-border");
  }
});

numOfPeople.addEventListener("change", () => {
  const finalUserTipAmount =
    ((parseInt(billInput.value) / parseInt(numOfPeople.value)) *
      percentToDivide) /
    100;

  const finalTipAmount =
    ((parseInt(billInput.value) / parseInt(numOfPeople.value)) *
      percentToDivide) /
    100;
  100;
  totalTipAmount.innerHTML = "$" + finalTipAmount.toFixed(2);
  const finalTotalPrice =
    parseInt(billInput.value) / parseInt(numOfPeople.value) +
    finalUserTipAmount;
  totalPrice.innerHTML = "$" + finalTotalPrice.toFixed(2);
  if (isNaN(finalTotalPrice) || isNaN(finalTotalPrice)) {
    totalTipAmount.innerHTML = "$0.00";
    totalPrice.innerHTML = "$0.00";
  }
});
reset.addEventListener("click", () => {
  totalTipAmount.innerHTML = "$0.00";
  totalPrice.innerHTML = "$0.00";
  customInput.value = "";
  billInput.value = "";
  numOfPeople.value = "";
  cantZero.classList.add("cant-zero");
  cantZero.style.display = "block";
  peopleDiv.classList.add("people-border");
  percentToDivide = 0;
  percentBox.forEach((item) => {
    item.classList.remove("active-percent");
  });
});
