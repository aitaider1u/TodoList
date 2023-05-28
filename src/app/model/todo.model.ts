import {Task} from "./task.model";

export interface Todo{
  id: string,
  name:string,
  description:string,
  tasks: Task[]
}
