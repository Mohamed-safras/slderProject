// const calcTip = (bill) => {
//   return bill >= 1100 && bill <= 2100 ? bill * 0.3 : bill * 0.1;
// };

// const bill = [20, 30, 50, 100, 5000, 10000, 100];
// const tip = [];
// const total = [];

// for (let i = 0; i < bill.length; i++) {
//   const tips = calcTip(bill[i]);
//   tip.push(tips);
//   total.push(tips + bill[i]);
// }
// let totals = 0;
// let avg = 0;
// for (let i = 0; i < total.length; i++) {
//   totals += total[i];
// }
// console.log(total);

// avg = totals / total.length;
// console.log(totals, avg);

// const reverse = document.querySelector(".reverse");

// reverse.addEventListener("click", function () {
//   revers();
// });

// let word = prompt("Enter your letter");
// function revers() {
//   let reverse = "";
//   let array = [word.length];
//   let letter = 0;
//   for (let i = word.length - 1; i >= 0; i--) {
//     array[letter] = word[i];
//     letter++;
//   }

//   for (let i = 0; i < word.length; i++) {
//     reverse += array[i];
//   }
//   console.log(`This user entered sentence : ${word}`);
//   console.log(`This reverse sentence : ${reverse}`);

//   if (word === reverse) {
//     console.log("This is same in reverse");
//   } else {
//     console.log("This is not same in reverse");
//   }
// }

// let result = word.slice(0, 10);
// let result = word.substr(1, 4);
// console.log(result);

// let value = word.replace("a", "w");
// console.log(value);

// const string = new String("   hello world ");
// console.log(string.trim());

import people from "./data.js";

const container = document.querySelector(".slide-container");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

container.innerHTML = people
  .map((person, slideIndex) => {
    const { img, name, job, text } = person;
    let posstion = "next";
    if (slideIndex === 0) {
      posstion = "active";
    }
    if (slideIndex === people.length - 1) {
      posstion = "last";
    }
    return `<article class="slide ${posstion}">
  <img
    src="${img}"
    alt="${name}"
    class="img"
  />
  <div class="title">${name}</div>
  <h4 class="">${job}</h4>
  <div class="text">
    ${text}
  </div>
  
</article>`;
  })
  .join("");

const slider = (type) => {
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next = container.firstElementChild;
  }
  active.classList.remove(["active"]);
  last.classList.remove(["last"]);
  next.classList.remove(["next"]);

  if (type === "prve") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove(["next"]);
    next.classList.add("last");
    return;
  }
  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};

nextBtn.addEventListener("click", () => {
  slider();
  console.log(slider);
});

prevBtn.addEventListener("click", () => {
  slider("prve");
  console.log(slider);
});
