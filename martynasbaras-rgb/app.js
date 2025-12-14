console.log("Labas!");
// užduotis 
const square = document.getElementById("square");
const bgColor = document.getElementById("bgColor");
const textColor = document.getElementById("textColor");

bgColor.oninput = function () {
  square.style.backgroundColor = bgColor.value;
};

textColor.oninput = function () {
  square.style.color = textColor.value;
};

//  užduotis H
const input = document.getElementById("wordInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("list");

let words = [];

button.onclick = function () {
  if (input.value === "") return;

  words.push(input.value);
  words.sort();

  list.innerHTML = "";

  for (let i = 0; i < words.length; i++) {
    let li = document.createElement("li");
    li.textContent = words[i];
    list.appendChild(li);
  }

  input.value = "";
};
