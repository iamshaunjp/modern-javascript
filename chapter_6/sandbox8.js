//creating & removing Elements

const button = document.querySelector("button");

const ul = document.querySelector("ul");
// ul.remove();

button.addEventListener("click", () => {
  // ul.innerHTML += '<li>something new</li>'
  const li = document.createElement("li");
  li.textContent = "something new to do";
  // ul.append(li);
  ul.prepend(li);
});

const items = document.querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", (event) => {
    // console.log("item clicked");
    // console.log(event);
    // console.log(event.target);
    // console.log(item)

    // event.target.style.textDecoration = 'line-through';

    event.target.remove();
  });
});
