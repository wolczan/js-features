setTimeout(() => {
    console.log('Wykonano po 3 sekundach');
}, 2000);

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Obietnica została spełniona!');
         reject('Wystąpił błąd');
    }, 2000);
});

promise.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

document.addEventListener('DOMContentLoaded', function() {
    // Assigning the event listeners to the respective input fields
    //document.querySelector('.js-name-input').addEventListener('keydown', handleCostKeyDown2);
    document.querySelector('.js-name-input2').addEventListener('keydown', EnterKeyDown);

    // Other code that needs to run after the DOM is fully loaded
});

function EnterKeyDown(event) {
    if (event.key === 'Enter') {
        console.log('Enter pressed for ToDo 1');
        addToDo2();
    }
}
//
/* const todoList = [];

    function addToDo() {
        const inputElement = document.querySelector(".js-name-input");
        const dateInputElement = document.querySelector(".js-due-date-input");
        const name = inputElement.value;
        const dueDate = dateInputElement.value;
        //console.log(name);

    if (name.trim() !== "" && dueDate) {
        const todoItem = { taskName:name, dueDate: dueDate };
        todoList.push(todoItem); // Add the new item to the list
        inputElement.value = ""; // Clear the input field
        dateInputElement.value = "";
        console.log(todoList);

        updateDisplay(); // 
    }
}  
function updateDisplay() {
    const listElement = document.querySelector(".js-todo-list");
    listElement.innerHTML = ""; // Clear existing items

    todoList.forEach((item, index) => {
        const listItem = document.createElement("div");
        listItem.innerHTML = `${item.taskName} - Due: ${item.dueDate} 
                              <button onclick="deleteToDo(${index})">Delete</button>`;

        listElement.appendChild(listItem);
    });  

    //localStorage.setItem('todoList', JSON.stringify(todoList));   }


function deleteToDo(index) {
    todoList.splice(index, 1); // Remove the item from the list
    updateDisplay(); // Update the display and local storage
}   

document.addEventListener('DOMContentLoaded', function() {
    const savedList = JSON.parse(localStorage.getItem('todoList'));
    if (savedList && Array.isArray(savedList)) {
        todoList.splice(0, todoList.length, ...savedList); // 
        updateDisplay();
    } */


function clearToDoList() {
    // Clear the array
    todoList.length = 0;
    localStorage.removeItem('todoList');   
    updateDisplay();
}

const todoList2 = [];

function renderToDoList() {

    let todoListHTML = "";

    for (let i = 0;  i < todoList2.length; i++) {
        const todoObject = todoList2[i];
        const { taskName, dueDate } = todoObject;
        const displayDate = dueDate ? dueDate : ""; 
        const html =
         `<div>${taskName}</div>
            <div> ${dueDate}</div>
            <button class="delete-button" onclick = "todoList2.splice(${i}, 1);
                renderToDoList();
            " >Delete</button>`;
        todoListHTML += html;
    }
    //console.log(todoListHTML);

    document.querySelector('.js-todo-list2').innerHTML = todoListHTML;
    saveTodoList2();

}

const savedList2 = JSON.parse(localStorage.getItem('todoList2'));
    if (savedList2 && Array.isArray(savedList2)) {
        todoList2.splice(0, todoList2.length, ...savedList2);
        renderToDoList();
    };

function saveTodoList2() {
    localStorage.setItem('todoList2', JSON.stringify(todoList2));
}

function addToDo2() {
    console.log("addToDo2 is called");
    const inputElement2 = document.querySelector('.js-name-input2');
    const dateInputElement2 = document.querySelector('.js-due-date-input2');
    const taskName2 = inputElement2.value;
    const dueDate2 = dateInputElement2.value;

    if (taskName2 === "") {
        alert("Please enter a Task");
        return;
    }
    const taskObject2 = {
        taskName: taskName2,
        dueDate: dueDate2 || "No due date" // Use the provided due date or default to "No due date"
    };
    /*todoList2.push(taskObject2);

    if (taskName2.trim() !== "" && !dueDate2) {
        const saveWithoutDate = confirm("Do you want to save the task without a date?");
        if (!saveWithoutDate) {
            return; // User chose not to save, so exit the function
        }
    }  */


    if (taskName2.trim() !== "" && dueDate2) {
        const todoItem2 = { taskName:taskName2, dueDate: dueDate2 };
        todoList2.push(todoItem2); // Add the new item to the list

        inputElement2.value = ""; 
        dateInputElement2.value = "";

        renderToDoList();
        saveTodoList2();
    }
}
function saveTodoList2() {
    localStorage.setItem('todoList2', JSON.stringify(todoList2));
}

    function clearToDoList2() {
        // Clear the array
        todoList2.length = 0;
        localStorage.removeItem('todoList2');   
        updateDisplay2();
    }    

    function updateDisplay2() {
        const listElement = document.querySelector(".js-todo-list2");
        listElement.innerHTML = ""; // Clear existing items
    
        todoList2.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.taskName} - Due: ${item.dueDate}`;
            listElement.appendChild(listItem);
        });
    
        // Optional: Save to localStorage
        //localStorage.setItem('todoList2', JSON.stringify(todoList2));
    }

String(25);
console.log('25' - 5);
console.log('25' + 5);

console.log(document.querySelector('.js-subscribe-button'));

document.addEventListener('DOMContentLoaded', function() {
    const subscribeButton = document.querySelector('.js-subscribe-button');
    subscribeButton.addEventListener('click', function handleClick() {
        if (this.innerHTML === 'Subscribe Now') {
            this.innerHTML = 'Subscribed';
            this.removeEventListener('click', handleClick);
        }
    });
});

function calculateTotal() {
   // console.log(document.querySelector('.js-cost-input'));
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value);  //Transform string to a num

    if (cost < 40) {
        cost = cost + 9.99;
    }   
    cost = parseFloat(cost.toFixed(2));
    document.querySelector('.js-total-cost').innerHTML =  `Total cost is ${cost} zl`;
}

function handleCostKeyDown(event) {   //Shipping calculator
    if (event.key === 'Enter') {
        calculateTotal();
    }
}

console.log(cost);
/* localStorage.setItem('score', JSON.stringify(score));

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
};    */

document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
document.getElementsByClassName('resetButton')[0].addEventListener('click', function() {
    // Assuming 'score' is a predefined object in your JavaScript
    if (score) {
        score.wins = 0;
        score.losses = 0;
    }
    localStorage.removeItem('score');
});

document.querySelector('.js-moves').innerHTML = `You win`;

alert('test');

