const input = document.querySelector("input");
const btn = document.getElementById("submit");

btn.addEventListener("click", addList);

function addList(e) {
  const taskList = document.querySelector(".task__list");
  const doneList = document.querySelector(".done__list");

  const newLi = document.createElement("li");
  const checkBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  checkBtn.innerHTML = `<img src="./img/Check.svg" alt="icon">`;
  deleteBtn.innerHTML = `<img src="./img/TrashSimple.svg" alt="icon">`;

  if (input.value !== "") {
    newLi.textContent = input.value;
    input.value = "";

    taskList.appendChild(newLi);
    newLi.appendChild(checkBtn);
    newLi.appendChild(deleteBtn);
  }

  checkBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
    doneList.appendChild(parent);
    checkBtn.style.display = "none";
    deleteBtn.style.display = "none";
  });

  deleteBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
  });
}
