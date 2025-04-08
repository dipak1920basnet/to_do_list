class Complete_Behavior
{
    constructor ()
    {
        this.completed = false
    }

    get completed()
    {
        return this._completed
    }
    set completed(check)
    {
        if (typeof check == 'boolean')
        {
            this._completed = check
        }
        else
        {
            throw "check task completation will only be boolean value"
        }
    }

    mark_complete(complete)
    {
        this._completed = complete
    }

    is_completed()
    {
        return this.completed
    }
}

class Project
{
    constructor(project_name)
    {
        this.project_name = project_name
        this.to_do_list = []
        this.completed = new Complete_Behavior() // will be set to true if all the available todo is completed
    }

    // Feature to be implemented
    // If all the task in the project is complete then by default set the value of this.completed to be true


    // add a feature and make sure that add_todo can only be called if this.completed is false

    add_todo(todo)
    {
        // adds todo list to project
        if (this.completed == true)
        {
            throw "Cannot add new task to completed project"
        }
        this.to_do_list.push(todo)
        
        
    }

    // Mark if project has been completed
    mark_completed(complete)
    {
        this.completed.mark_complete(complete)
    }

    // Remove the task from Project

    remove_task(task)
    {
        //
    }

    // print to_do list for project
    print_to_do()
    {
        console.log(this.to_do_list)
    }
}


class Todo 
{
    // registry = {}

    constructor(title,desctiption,dueDate,priority,notes=null)
    {
        this.title = title
        this.desctiption = desctiption
        this.dueDate = dueDate
        this.priority = priority
        this.notes = notes
        this.check_lis = new Complete_Behavior()
        // this.check_list = false // will be changed to true if user completes the task
            // Get a reference to itself
        // registry[title] = this
    }

    get priority()
    {
        return this._priority
    }

    set priority(priority_value)
    {
        let prior_value_list = ["High", "Medium", "Low"]
        if (!(prior_value_list.includes(priority_value)))
        {
            throw("The priority value must be among three high medium low")
        }
        else
        {
            this._priority = priority_value
        }
    }
    
    get dueDae()
    {
        return this.dueDate
    }

    set dueDae(dates)
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
        // this.check_list = bool
        this.check_lis.mark_complete(bool)
    }

    // change due date
    change_due_date(new_date)
    {
        if (new Date(dates) == "Invalid Date")
            {
                throw "The date is invalid"
            }
        else
            {
                this.dueDate = new_date
            } 
    }
}

export {Project, Todo}