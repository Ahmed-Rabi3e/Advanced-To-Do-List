import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../models/models";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  CompletedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  CompletedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:w-[95%] mt-3 lg:justify-between items-center lg:items-start p-8">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`rounded-md flex flex-col w-full lg:w-[47.5%] p-4 my-3 bg-secend ${
              snapshot.isDraggingOver && "bg-altsecend"
            }`}
          >
            <span className="text-white text-3xl select-none">
              Active Tasks
            </span>

            {todos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                todos={todos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`rounded-md flex flex-col  w-full lg:w-[47.5%] p-4 my-3 bg-third ${
              snapshot.isDraggingOver && "bg-altthird"
            }`}
          >
            <span className="text-white text-3xl select-none">
              Completete Tasks
            </span>
            {CompletedTodos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
                setTodos={setCompletedTodos}
                todos={CompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
