import { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    
    <form 
        className="flex w-[95%] relative items-center" 
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}>
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a Task"
        className="w-full rounded-[50px] px-5 py-6 border-none text-2xl font-sans shadow-xl transition-all duration-200 focus:shadow-2xl focus:outline-none"
      />
      <button className="absolute right-0 w-12 h-12 m-3 rounded-full border-none text-lg text-white bg-main shadow-lg transition-all duration-200 hover:bg-alt active:scale-75 active:shadow-go font-sans font-medium">
        Go
      </button>
    </form>
  );
};

export default InputField;
