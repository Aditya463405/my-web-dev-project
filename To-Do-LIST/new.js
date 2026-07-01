const username = localStorage.getItem("username") || "Guest";
console.log(username);


const user_name = document.querySelector('.user-name');

const hour = new Date().getHours();

let greeting = "";

if (hour >= 5 && hour < 12) {
    greeting = "Good Morning ☀️";
}
else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon 🌤️";
}
else if (hour >= 17 && hour < 21) {
    greeting = "Good Evening 🌇";
}
else {
    greeting = "Good Night 🌙";
}

user_name.innerText = `Hello ${username} ! ${greeting}`;

const today_date = document.querySelector('.date');
const now = new Date();

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

today_date.innerText = `${now.toLocaleDateString("en-IN", options)} | ${now.toLocaleTimeString("en-IN")}`;

// const task_input_box = document.querySelector('#task-input-box');
// task_input_box.style.display = "none";  // isse hidden honga

const saved_main_box = document.querySelector('#saved-items');

const emptyMessage = document.createElement("p");

emptyMessage.classList.add("empty-message");

emptyMessage.innerText = "📋 No Tasks Yet!\nClick 'Add Task' to create your first task.";

saved_main_box.appendChild(emptyMessage);

const task_input = document.querySelector('#task-input');
const add_task = document.querySelector('#add-task');
const totalTask = document.querySelector("#total-task");
const pendingTask = document.querySelector("#pending-task");
const completeTask = document.querySelector("#complete-task");

function updateDashboard(){

    const total = document.querySelectorAll(".saved-task-in").length;

    const completed = document.querySelectorAll(".completed").length;

    const pending = total - completed;

    totalTask.innerText = total;
    pendingTask.innerText = pending;
    completeTask.innerText = completed;

}

function checkEmptyState(){

    if(saved_main_box.children.length === 1){
        emptyMessage.style.display = "block";  // dikhenga 
    }
    else{
        emptyMessage.style.display = "none";  // hidden honga
    }

}


function createTask(){

    const element = document.createElement('div');
    element.setAttribute("class", "task-input-box");

    const input = document.createElement('input');
    input.placeholder = "Enter Your Task";
    input.type = "text";
    input.value = "";
    element.appendChild(input);
    input.focus();


    // ---------------SAVE BUTTON -----------------------//
    const save_button = document.createElement('button');
    save_button.setAttribute("class", "save-task");
    save_button.innerText = "Save";

    save_button.addEventListener('click', () => {

        if(input.value.trim() === ""){
            alert("Please enter a task before saving.");
            return;
        }

        element.remove();

        const saved_task_in = document.createElement('div');
        saved_task_in.setAttribute("class", "saved-task-in");

        const paragraph = document.createElement('p')
        paragraph.setAttribute("class", "para");
        paragraph.textContent = input.value;

        const set_of_buttons = document.createElement('div');
        set_of_buttons.setAttribute("class", "set-of-buttons");

        const comp_btn = document.createElement('button');
        comp_btn.setAttribute("class", "complete");
        comp_btn.innerText = "Complete";

        const del_btn = document.createElement('button');
        del_btn.setAttribute("class", "delete");
        del_btn.innerText = "Delete";

        // ----------------- DELETE BUTTON ------------------//
        del_btn.addEventListener('click', () => {
            saved_task_in.remove();
            checkEmptyState();
            updateDashboard();
        });
        //---------------------------------------------------//


        // ----------------- COMPLETE BUTTON ------------------//
        comp_btn.addEventListener('click', () => {

            paragraph.classList.add("completed");
            comp_btn.disabled = true;
            comp_btn.innerText = "Completed";
            updateDashboard();
        });
        //---------------------------------------------------//

        set_of_buttons.append(comp_btn, del_btn);
        saved_task_in.append(paragraph, set_of_buttons);
        saved_main_box.appendChild(saved_task_in);
        checkEmptyState();
        updateDashboard();

    });
    // ---------------------------------------------------//



    //------------------ CANCEL BUTTON ------------------//
    const can_button = document.createElement("button");
    can_button.setAttribute("class", "can-task");
    can_button.innerText = "Cancel";

    can_button.addEventListener('click', () => {

        element.remove();
    });
    // --------------------------------------------------//

    const buttons_div = document.createElement('div');
    buttons_div.setAttribute("class", "buttons-div");
    buttons_div.append(save_button, can_button);
    element.append(input, buttons_div);
    

    // is ke karan task par margin-top lagi hai //
    task_input.appendChild(element);
}

add_task.addEventListener('click', createTask);

updateDashboard();
