const resetBtn = document.querySelector("#reset");
const allLi = document.querySelectorAll("#board li");

const o = "o";
const x = "x";
let turn = 0;

console.log("allLi", allLi);

const checkWin = (player) => {
  const p1 = allLi[0].classList.contains(player);
  const p2 = allLi[1].classList.contains(player);
  const p3 = allLi[2].classList.contains(player);
  const p4 = allLi[3].classList.contains(player);
  const p5 = allLi[4].classList.contains(player);
  const p6 = allLi[5].classList.contains(player);
  const p7 = allLi[6].classList.contains(player);
  const p8 = allLi[7].classList.contains(player);
  const p9 = allLi[8].classList.contains(player);

  if (
    (p1 && p2 && p3) ||
    (p4 && p5 && p6) ||
    (p7 && p8 && p9) ||
    (p1 && p4 && p7) ||
    (p2 && p5 && p8) ||
    (p3 && p6 && p9) ||
    (p1 && p5 && p9) ||
    (p3 && p5 && p7)
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(checkWin(o));
console.log(checkWin(x));

const reset = () => {
  // add your code here
  for (i = 0; i < allLi.length; i++) {
    allLi[i].textContent = "+";
    allLi[i].classList = "";
  }
};
resetBtn.addEventListener("click", reset);

allLi.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(turn);
    if (item.classList.contains("disabled")) {
      alert("Already Filled");
    } else if (turn % 2 == 0) {
      item.textContent = "O";
      item.classList.add("o", "disabled");
      turn++;
      if (checkWin(o)) {
        alert("Winner : O ");
        reset();
      }
    } else if (turn % 2 == 1) {
      item.textContent = "X";
      item.classList.add("x", "disabled");
      turn++;
      if (checkWin(x)) {
        alert("Winner : X ");
        reset();
      }
    }
  });
});
