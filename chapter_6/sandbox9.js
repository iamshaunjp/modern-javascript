//Event Bubbling  (and delegation)

const ul = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "something new to do";
  ul.prepend(li);
});

// const items = document.querySelectorAll("li");

// items.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     console.log("event in LI");
//     event.stopPropagation();
//     event.target.remove();
//   });
// });

ul.addEventListener("click", (e) => {
  // console.log("event in UL");
  if (e.target.tagName == "LI") {
    e.target.remove();
  }
});
