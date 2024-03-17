import { Todo } from "../models/models";
import { MdFileDownloadDone } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const SingleTodo = ({ index, todo, setTodos, todos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`flex gap-4 rounded-md p-5 mt-4 transition-all duration-200 bg-[url(https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg)] hover:scale-[1.04] hover:shadow-go ${
            snapshot.isDragging && "shadow-hover"
          }`}
        >
          {edit ? (
            <div className="relative">
              <input
                value={editTodo}
                ref={inputRef}
                onChange={(e) => setEditTodo(e.target.value)}
                className="flex-1 p-1 border-none text-xl bg-transparent"
              />
              <label className="absolute left-2 -top-3 text-[10px] font-bold bg-black text-white px-1 rounded">
                Press Enter
              </label>
            </div>
          ) : todo.isDone ? (
            <s className="flex-1 p-1 border-none text-xl">{todo.todo}</s>
          ) : (
            <span className="flex-1 p-1 border-none text-xl">{todo.todo}</span>
          )}

          <div className="flex items-center">
            <span
              className="ml-3 text-xl cursor-pointer"
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
            >
              <FiEdit />
            </span>
            <span
              className="ml-3 text-2xl cursor-pointer"
              onClick={() => handleDelete(todo.id)}
            >
              <RiDeleteBin6Line />
            </span>
            <span
              className="ml-3 text-3xl cursor-pointer"
              onClick={() => handleDone(todo.id)}
            >
              <MdFileDownloadDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
