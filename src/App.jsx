import { useEffect, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <div className="box">
        <button onClick={() => setIsOpen(true)}>Open Model</button>
      </div>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default App;
