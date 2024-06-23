import "./sass/main.scss";
import { isSameWeek, isThisWeek, isToday, format, addDays } from "date-fns";

// Imported Methods
import { setVisuals, renderTodos } from "./js/proyectsFunction.js";

// DOM Elements
const proyects = document.querySelectorAll("[data-proyect]");
const main = document.querySelector("main");
const proyectTitle = main.querySelector("h2");
const addTodoBtn = main.querySelector(".add-todo");
const addForm = main.querySelector(".add-todo__menu");

let currentProyect = "inbox";

const proyectsArr = [
    {
        name: "inbox",
        domName: "Inbox",
        tasks: [
            { title: "Do the chores", date: "22/04/24", done: true },
            { title: "Buy the groceries", date: "22/04/24", done: false },
            { title: "Buy that book", date: "21/04/24", done: false },
            { title: "Learn latin", date: "21/04/24", done: false },
        ],
    },

    {
        name: "tweek",
        domName: "This Week",
        tasks: [
            { title: "Do the chores", date: "22/04/24", done: true },
            { title: "Buy the groceries", date: "22/04/24", done: false },
        ],
    },
    {
        name: "today",
        domName: "Today",
        tasks: [
            { title: "Do the chores", date: "22/04/24", done: true },
            { title: "Buy the groceries", date: "22/04/24", done: false },
        ],
    },
];

function executeProyects() {
    proyects.forEach((proyect) => {
        proyect.addEventListener("click", (e) => {
            deletePrevClasses();
            const proyectName = e.target.dataset.proyect;

            proyectTitle.textContent = e.target.textContent;
            currentProyect = proyectName;
            renderTodos(proyectName, proyectsArr);
        });
    });
}

window.addEventListener("DOMContentLoaded", () => {
    renderTodos(currentProyect, proyectsArr);
    setVisuals();
    executeProyects();
});

addTodoBtn.addEventListener("click", () => {
    addTodoBtn.style.display = "none";
    addForm.classList.add("active");
});

addForm.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
        addForm.classList.remove("active");
        addTodoBtn.style.display = "flex";
    });
});

function deletePrevClasses() {
    proyects.forEach((proyect) => proyect.classList.remove("active"));
    addForm.classList.remove("active");
    addTodoBtn.style.display = "flex";
}

addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const todoTitle = e.target.querySelector("#todo-title").value;
    const todoDate = e.target.querySelector("#todo-date").value;

    const todoObj = {
        title: todoTitle,
        date: todoDate,
        done: false,
    };
    // fix the error with the dates, therefore put the todo in the proper array

    if (todoDate) {
        const formatDate = format(addDays(new Date(todoDate), 1), "yyyy/MM/dd");

        if (isToday(formatDate)) {
            proyectsArr[2].tasks.push(todoObj);
        }
        if (isThisWeek(formatDate)) {
            proyectsArr[1].tasks.push(todoObj);
        }
        proyectsArr[0].tasks.push(todoObj);
    }

    renderTodos(currentProyect, proyectsArr);
});



function displayProyects() {
	/* const homeProyects = proyectsArr.filter(proyect => ); */
	const otherProyects = [];
}