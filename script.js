const grandPrizeBtn = document.querySelector("#grand-prize-btn");
const FirstPrizeBtn = document.querySelector("#first-prize-btn");
const grandResult = document.querySelector("#grand-result");
const firstPrizeResult = document.querySelector("#first-prize-result");
const grandWinner = document.querySelector("#grand-prize-winner");
const firstPrizeWinners = document.querySelector("#first-prize-winners");

//create an array fill from 1 to 10000
let totalMembers = new Array(10000).fill(null).map((_, i) => i + 1);

const getGrandResult = () => {
  //find a random index number from 10000 members
  const winnerIndex = Math.floor(Math.random() * totalMembers.length);
  //according the index number, find the winner number
  const winnerNumber = totalMembers[winnerIndex];
  grandResult.classList.remove("hide");
  grandWinner.textContent = `#${winnerNumber}`;
  //cut the grand prize winner number from 10000 members(now is 9999 members)
  totalMembers.splice(winnerIndex, 1);
};

const getFirstPrizeResult = () => {
  let winnerList = [];
  while (winnerList.length < 3) {
    //push the winner number into winnerlist and cut the member from the member list, loop for 3 times
    const winnerIndex = Math.floor(Math.random() * totalMembers.length);
    const winnerNumber = totalMembers[winnerIndex];
    winnerList.push(winnerNumber);
    totalMembers.splice(winnerIndex, 1);
  }
};

grandPrizeBtn.addEventListener("click", getGrandResult);
FirstPrizeBtn.addEventListener("click", getFirstPrizeResult);
