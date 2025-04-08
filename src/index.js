import {insert_element, flick} from "./front_view.js"

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

insert_element(left_content,"form","id","project_name")
let enter_name_projects = document.querySelector('#project_name')
enter_name_projects.innerHTML = `<label for="fname">First name:</label>
                                 <input type="text" id="fname" name="fname"><br><br>
                                 <input type="submit" value="Submit"> `

// Local storage
//form and its prefilled data 

// flick the add project form
flick("#add_project","#project_name")