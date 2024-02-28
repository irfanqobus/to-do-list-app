const listArray = ["learn js", "mastering js"];

todoListRepeat();

function todoListRepeat() {
  let todoHTML = "";

  for (let i = 0; i < listArray.length; i++) {
    const list = listArray[i];
    const html = `<div class="list-container">
    <p class="list-list">${list}</p>
    <button class="list-remove-btn" onclick='listArray.splice(${i},1); todoListRepeat();'><img src="close.svg" class="close" /></button>
  </div>`;
    todoHTML += html;
  }
  document.querySelector(".list-container-js").innerHTML = todoHTML;
}

function addTaskList() {
  const taskInput = document.querySelector(".list-input");

  const taskList = taskInput.value;

  if (taskList.trim() !== "") {
    listArray.push(taskList);
    todoListRepeat();
  } else {
    alert("Isi task Anda dengan benar!");
  }
  // console.log(listArray);

  taskInput.value = "";
}
