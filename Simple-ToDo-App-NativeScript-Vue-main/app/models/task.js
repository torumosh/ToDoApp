import { EventData, Observable } from "data/observable";
import { random } from "../helpers/random";

class Task extends Observable {
  id;
  description;
  title;
  da;
  completed = false;

  constructor(title, completed = false) {
    super();
    this.id = random();
    this.title = title;
    this.completed = completed;
    this.description = this.description;
    this.da = this.da;
  }
}

export default Task;
