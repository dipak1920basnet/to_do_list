class Project
{
    constructor(project_name)
    {
        this.project_name = project_name
        this.to_do_list = []
        this.completed = false // will be set to true if all the available todo is completed
    }

    // Feature to be implemented
    // If all the task in the project is complete then by default set the value of this.completed to be true
    // If all the task in the project is not complete then cannot set project completed to be true

    get completed()
    {
        return this.completed
    }
    set completed(check)
    {
        if (typeof check == 'boolean')
        {
            this.completed = check
        }
        else
        {
            throw "check task completation will only be boolean value"
        }
    }
    // add a feature and make sure that add_todo can only be called if this.completed is false

    add_todo(todo)
    {
        // adds todo list to project
        if (this.completed != false)
        {
            throw "Cannot add new task to completed project"
        }
        else
        {
            new_todo = {
                "title":todo.title
            }
            this.to_do_list.push(new_todo)
        }
        
    }

    // Mark if project has been completed
    mark_complete(complete)
    {
        this.completed = complete
    }

    // Remove the task from Project

    remove_task(task)
    {
        //
    }

  
}



class Todo 
{
    constructor(title,desctiption,dueDate,priority,notes=null)
    {
        this.title = title
        this.desctiption = desctiption
        this.dueDate = dueDate
        this.priority = priority
        this.notes = notes
        this.check_list = false // will be changed to true if user completes the task
    }

    get priority()
    {
        return this.priority
    }

    set priority(priority_value)
    {
        prior_value_list = ["High", "Medium", "Low"]
        if (!(priority_value in prior_value_list))
        {
            throw "The priority value must be among three high medium low"
        }
        else
        {
            this.priority = priority_value
        }
    }
    get check_list()
    {
        return this.check_list
    }

    set check_list(check)
    {
        if (typeof check == "boolean")
        {
            this.check_list = check
        }
        else
        {
            throw "task completation will only be boolean value"
        }
    }

    get dueDate()
    {
        return this.dueDate
    }

    set dueDate(dates)
    {
        if (new Date(dates) == "Invalid Date")
        {
            throw "The date is invalid"
        }
        else
        {
            this.dueDate = dates
        }
    }
    change_check_list(bool)
    {
        this.check_list = bool
    }

    // Get a reference to a objects
}