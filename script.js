let left = document.getElementById("left");
let right = document.getElementById("right");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

// let pageNo = 1;
let pageLeft = 1;
let pageRight = 4;
left.style.top = `-${(pageLeft - 1) * 100}vh`;
right.style.top = `-${(pageRight - 1) * 100}vh`;

next.addEventListener("click", () => {
//   pageNo++;
  pageLeft++;
  pageRight--;
  if (pageLeft > 4) {
    pageLeft = 1;
  }
  if(pageRight<1){
    pageRight=4;
  }
  left.style.top = `-${(pageLeft - 1) * 100}vh`;
  right.style.top = `-${(pageRight - 1) * 100}vh`;
});

prev.addEventListener("click", () => {
//   pageNo--;
pageLeft--;
pageRight++;
  if (pageRight > 4) {
    pageRight = 1;
  }
  if(pageLeft<1){
    pageLeft=4;
  }
  left.style.top = `-${(pageLeft- 1) * 100}vh`;
  right.style.top = `-${(pageRight - 1) * 100}vh`;
});
