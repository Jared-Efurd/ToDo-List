const addListEntry = document.querySelector(".add-list-entry");
const entriesList = document.querySelector(".list > ul");
const toggleTheme = document.querySelector("#toggle-theme");
const listTitle = document.querySelector("#list-title");


// const resizeInputWidthToContents = (input) => {
//   input.style.width = `${input.value.length}ch`;
// }

const createNewEntry = () => {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "New entry";
  input.addEventListener("keydown", (event) => {
    // resizeInputWidthToContents(input);
    if (event.key === "Enter") {
      createNewEntry()
    } else if (input.value.length === 0 && event.key === "Backspace") {
      entriesList.removeChild(newEntry);
    }
  });

  const completeTask = document.createElement("span");
  completeTask.classList.add("complete-task");
  completeTask.textContent = "✓";
  completeTask.addEventListener("click", () => {completeTask.parentNode.classList.toggle("task-completed")});

  const removeEntry = document.createElement("span");
  removeEntry.classList.add("remove-list-entry");
  removeEntry.textContent = "🗙";
  removeEntry.addEventListener("click", () => {entriesList.removeChild(newEntry)});

  const newEntry = document.createElement("li");
  newEntry.classList.add("list-entry");

  newEntry.appendChild(input);
  newEntry.appendChild(completeTask);
  newEntry.appendChild(removeEntry);
  entriesList.appendChild(newEntry);

  input.focus();
}

addListEntry.addEventListener("click", () => {createNewEntry()})

toggleTheme.addEventListener("click", () => {const body = document.querySelector("body").classList.toggle("dark-theme")})

// listTitle.addEventListener("input", () => {resizeInputWidthToContents(listTitle)});