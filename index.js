const addListEntry = document.querySelector(".add-list-entry");
const entriesList = document.querySelector(".list > ul");
const toggleTheme = document.querySelector("#toggle-theme");

const createNewEntry = () => {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "New entry";
  input.style.width = "9ch";
  input.addEventListener("keydown", (event) => {
    input.style.width = `${input.value.length}ch`;
    if (event.key === "Enter") {
      createNewEntry()
    }
  });

  const removeEntry = document.createElement("span");
  removeEntry.classList.add("remove-list-entry");
  removeEntry.textContent = "x";
  removeEntry.addEventListener("click", () => {entriesList.removeChild(removeEntry.parentNode)});

  const newEntry = document.createElement("li");
  newEntry.classList.add("list-entry");
  newEntry.appendChild(input);
  newEntry.appendChild(removeEntry);

  entriesList.appendChild(newEntry);
  input.focus();
}

addListEntry.addEventListener("click", () => {createNewEntry()})

toggleTheme.addEventListener("click", () => {
  const body = document.querySelector("body");
  if (body.classList.contains("dark-theme"))
  {
    body.classList.remove("dark-theme");
  } else {
    body.classList.add("dark-theme");
  }
})

