const rating = document.querySelector("#rating");
const thanks = document.querySelector("#thanks");
const form = document.querySelector("form");
const rate = document.querySelector("#rate");
const label = document.querySelectorAll("#label");
const input = form.elements["rate"];

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("click", () => {
    if (input[i].checked) {
      clear();
      label[i].classList.add("active");
    }
  });
}

const clear = () => {
  for (let i = 0; i < label.length; i++) {
    label[i].classList.remove("active");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value == "") {
    return alert("please give a rating");
  }

  rate.innerHTML = input.value;

  rating.style.position = "absolute";
  rating.style.transform = "scale(0)";

  thanks.style.position = "static";
  thanks.style.transform = "scale(1)";
});
