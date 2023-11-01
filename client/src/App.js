import get_all_todos from "./api/readTodoRequests";
import "./style/App.css";
import { useQuery } from "react-query";
import Cliploader from "react-spinners/ClipLoader";
import { TodoAll } from "./components/TodoAll";

export default function App() {
  const { isLoading, data: todos } = useQuery("todos", get_all_todos);
  return (
    <div>
      {isLoading ? (
        <Cliploader size={150} />
      ) : (
        <ul>
          {todos.map((item) => (
            <TodoAll item={item} key={item._id} />
          ))}
        </ul>
      )}
    </div>
  );
}
