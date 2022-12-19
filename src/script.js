const rate = document.querySelectorAll(".rate");
const submit = document.querySelector("button");
const rating = document.querySelector("#rating");
const modal = document.querySelector("#modal");
const selectedRating = document.querySelector("#selectedRating");

let valueRate = [];

for (let i = 0; i < rate.length; i++) {
  rate[i].addEventListener("click", (e) => {
    e.preventDefault();

    clear();

    rate[i].classList.add("bg-lightGrey");
    rate[i].classList.add("text-white");

    valueRate.pop();
    valueRate.push(rate[i].innerHTML);
  });
}

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (valueRate.length < 1) {
    return alert("please give rating");
  }

  rating.classList.add("scale-0");
  rating.classList.add("absolute");

  modal.classList.add("scale-100");
  modal.classList.add("card");
  modal.classList.remove("absolute");

  selectedRating.innerHTML = valueRate;
});

function clear() {
  for (let i = 0; i < rate.length; i++) {
    rate[i].classList.remove("bg-lightGrey");
    rate[i].classList.remove("text-white");
  }
}
