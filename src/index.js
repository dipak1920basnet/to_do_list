import {insert_element} from "./front_view.js"

let add_project = document.querySelector('main')
let class_name = ["left_content", "main_content", "right_content"]
for (let i = 0; i < class_name.length; i++)
{
    insert_element(add_project, "div", "class", class_name[i])
    // for each class name insert the class to parent element 
}

let left_content = document.querySelector(".left_content")
insert_element(left_content, "button", "id", "add_project")
document.querySelector("#add_project").innerHTML = "Add Project"
// insert_element()

// Local storage
//form and its prefilled data 

