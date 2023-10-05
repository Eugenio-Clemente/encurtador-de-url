import { useState } from "react";
import "./styles/App.css";
import { InputEncurtador } from "./components/InputEncurtador";
import { LinkResult } from "./components/LinkResult";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputEncurtador setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export { App };
