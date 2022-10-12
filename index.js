document.getElementById("main").remove();

const newHeader = document.createElement("h1");
newHeader.id ="victory";
newHeader.innerHTML = " Who is the champion";

const element = document.createElement("div");

const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1).toString();
    ul.append(li);
  }

  element.append(ul);
