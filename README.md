# React Modal

<div align="center">
  <img src="https://github.com/user-attachments/assets/97737f6f-6e9c-4bac-b562-6e72cc978c6d" />
</div>

**Logic:**

1. Using `isOpen` state will manage opening and closing of the modal.
2. For Modal Container will use `100vh` and `100vw`.
3. Use `backdrop-filter: blur(2px);` for adding blur effect at modal background.
4. `if (e.target.classList.contains("container"))` → To close the modal by clicking outside the modal.

**App.jsx**

```jsx
import { useState } from "react";
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
```

**Modal.jsx**

```jsx
import React from "react";

const Modal = ({ isOpen, setIsOpen }) => {
  const handleCancel = (e) => {
    // Close only if clicking directly on the container, not inside the modal
    if (e.target.classList.contains("container")) {
      setIsOpen(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="container" onClick={handleCancel}>
      <div className="modal">
        <h2>This is Modal</h2>

        <button className="close-btn" onClick={() => setIsOpen(false)}>
          X
        </button>

        <p>This is the modal description.</p>

        <div className="btns">
          <button className="green">Submit</button>
          <button className="red" onClick={() => setIsOpen(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

```

**App.css**

```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

.app {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: flex-end;
  flex-direction: column;
  height: 100vh;
  /* position: relative; */
}

.box {
  padding: 50px 0px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  /* width: 100vh; */
  /* background: white; */
  backdrop-filter: blur(2px);
  position: fixed;
}

.modal {
  width: 500px;
  padding: 32px;

  /* display: flex;
  flex-direction: column; */
  position: relative;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  border-radius: 10px;
}

.close-btn {
  position: absolute;
  top: 0;
  right: 0;

  margin: 25px;
  background: white;
  color: black;
}

button {
  padding: 8px 16px;
  border-radius: 5px;
  background-color: rgb(32, 134, 197);
  color: whitesmoke;
  border: none;
  outline: none;
  font-size: 16px;
  cursor: pointer;
}

.btns {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.green {
  background-color: forestgreen;
  color: white;
}

.red {
  background-color: red;
}

h2 {
  margin-bottom: 16px;
}

p {
  margin-bottom: 30px;
}
```
