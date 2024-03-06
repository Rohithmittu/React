import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {TodoProvider} from "./contexts"
function App() {
  const [count, setCount] = useState(0);

  return (
    <TodoProvider>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </TodoProvider>
  );
}

export default App;
