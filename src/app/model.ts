import { ToDoItem } from "./toDoModel";

export class Model {
    items: ToDoItem[];

    constructor() {
        this.items = [
            {description:"Breakfast", action: false},
            {description:"Sport", action: true},
            {description:"Shoping", action: false}
        ]
    }
}