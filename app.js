const percentBox = document.querySelectorAll(".percent-box");
const color = "#9FE8DF";
let activeIdx;
let array = [];
percentBox.forEach((item, idx) => {
  array.push(item);
  item.addEventListener("click", () => {
    activeIdx = idx;
    array.forEach((arrItem, index) => {
      if (activeIdx === index) {
        arrItem.classList.add("active-percent");

        console.log(index);
      } else {
        arrItem.classList.remove("active-percent");
      }
    });
  });
});
const custom = document.querySelector(".custom");
custom.addEventListener("click", () => {
  for (let i = 0; i < percentBox.length; i++) {
    if (percentBox[i].classList.contains("active-percent")) {
      percentBox[i].classList.remove("active-percent");
    }
  }
});

const numOfPeople = document.querySelector(".num-people");
const cantZero = document.querySelector(".numcheck");
const peopleDiv = document.querySelector(".numOfPeople");
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
