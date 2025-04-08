import "./style.css"
import {Project, Todo} from "./todo.js";

let project_one = new Project("Python Week 4 Assignment");
let first_task = new Todo("DQ","This is a discussion Assignment","2025-06-10","Medium")
let second_task = new Todo("Python Project Assignment","This is a discussion Assignment","2025-06-10","High")
project_one.add_todo(first_task)
project_one.add_todo(second_task)
project_one.print_to_do()

function insert_element(parent,element_name, class_or_id, attribute_name)
{
    let content = document.createElement(element_name)
    content.setAttribute(class_or_id,attribute_name)
    parent.appendChild(content)
}

export {insert_element}