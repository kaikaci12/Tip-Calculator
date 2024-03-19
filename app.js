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
    console.log(activeIdx);
  });
});
const custom = document.querySelector(".custom");
