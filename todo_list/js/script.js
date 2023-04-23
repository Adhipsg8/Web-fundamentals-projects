
const newTaskInput = document.getElementById('input-task');
const addTaskButton = document.getElementById('add-task');
const todoListContainer = document.getElementById('todo-list');

 let templateElement = document.getElementById("list-item-template");
   let template = templateElement.innerHTML;


   function onAddTaskClicked(event){
   //grab the text entered by a user in the input task textbox
   //and add it as a list item in ul

   let taskName = newTaskInput.value;
   newTaskInput.value ="";
   let li = document.createElement("li")
   let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
   todoListContainer.insertAdjacentHTML('beforeend', taskHTML);

   function onTodolistClicked(event) {
     
      let targetElement = event.target;
  
      while (!targetElement.classList.contains("task")) {
          targetElement = targetElement.parentElement;
      }
  
      let checkbox = targetElement.querySelector(".checkbox");
  

      if (checkbox.checked) {
          targetElement.classList.add("completed");
      } else {
          targetElement.classList.remove("completed");
      }
  }
   //li.appendChild(document.createTextNode(taskName));
   //todoListContainer.appendChild(li);

   //('taskName').append('<input type="checkbox" name="myCheckbox" />');

  
   // todoListContainer.innerHTML=(`<li>${taskName}</li>`);

   // todoListContainer.insertAdjacentHTML('afterbegin', taskName);

   //create list item ,
   //set the text for the list item to the taskName
   //add the list item to the ui element, todoListContainer


   //modify your code to include a checkbox as part of the list item

   ////furthur modify code to handle the click event on a checkbox to strike through the list item
   
}

//step3
addTaskButton.addEventListener('click', onAddTaskClicked);
todoListContainer.addEventListener('click', onTodolistClicked);