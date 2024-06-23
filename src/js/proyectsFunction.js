import icon from "../img/menuIcon.svg";
import editIcon from "../img/editIcon.svg";

function createTodos(proyectName, proyectArray) {
    /* const todos = JSON.parse(localStorage.getItem(proyectName)) */
    let DOMtodos = "";

    proyectArray.forEach((proyect) => {
        if (proyect.name === proyectName) {
            console.log(createDOMTodo(proyect));
            DOMtodos = createDOMTodo(proyect);
        }
    });

    return DOMtodos;
	/* tweek */
    function createDOMTodo(todoList) {
        const todos = todoList.tasks.map((task) => {
            const div = document.createElement("div"); div.classList.add("todo__item");

            div.innerHTML = `<div class="todo__left">
							<input type="checkbox" ${task.done ? "checked" : ""}/>
							<p>${task.title}</p>
						</div>
						<div class="todo-right">
							<span class="todo__date">(${task.date})</span>
		
							<div class="tip-container">
								<img class="tip-to-delete" />
							</div>
						</div>`;
            return div;
        });
        return todos;
    }
}

function renderTodos(name, proyect) {
    const todosSections = document.querySelector(".display-todos");
    const currProyect = document.querySelector(`[data-proyect="${name}"]`);

    currProyect.classList.add("active");
	const todosDOM = createTodos(name, proyect);
	
	todosSections.replaceChildren(...todosDOM)
}

function setVisuals() {
    const main = document.querySelector("main");
    function setTasks() {
        const todos = document.querySelectorAll(".tip-to-delete");
        todos.forEach((todo) => (todo.src = editIcon));
    }

    function setSideBar() {
        const navbarIcon = document.querySelector(".icon-container img");
        const sideBar = document.querySelector(".sidebar");

        navbarIcon.src = icon;

        navbarIcon.addEventListener("click", () => {
            sideBar.classList.toggle("active");
            main.classList.toggle("side-active");
        });
    }

    setTasks();
    setSideBar();
}

export { setVisuals, createTodos, renderTodos };
