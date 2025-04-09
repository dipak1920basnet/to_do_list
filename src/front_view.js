import "./style.css"
import {Project, Todo} from "./todo.js";

function insert_element(parent,element_name, class_or_id, attribute_name)
{
    let content = document.createElement(element_name)
    content.setAttribute(class_or_id,attribute_name)
    parent.appendChild(content)
}

function flick(button_id, id_class)
{
/*
pass button class and id class
 clicking on button_id will flick id_class
 */
    document.addEventListener('DOMContentLoaded', function()
{
    let m = document.querySelector(button_id)
    m.addEventListener('click',function()
    {
    let flicking = document.querySelector(`${id_class}`)
    if (flicking.style.display == "none" )
    {flicking.style.display = "block"}
    else
    {
        flicking.style.display = "none"
    } 
    }
    )
})
}

// when submitted take the input data and add project_name and (add,remove,edit) features
function add_projects()
{
    let m = document.querySelector("#project_name")
    m.addEventListener('submit', function(e){
        e.preventDefault();

        const formData = new FormData(this);
        const Project_info = {
            names : formData.get("Projectname")
        };
        let t = document.querySelector(".main_content")
        insert_element(t,"div", "class", 'projectsname')
        // let k = document.querySelector(".projectsname")
        // k.innerHTML = `<h1>${Project_info['names']}</h1>`

        return (new Project(Project_info['names']).print_to_do())

    })
}
export {insert_element, flick, add_projects}