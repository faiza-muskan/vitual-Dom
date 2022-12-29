import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  console.log("App");

  const toggle = () => {
    setShowParagraph((prev) => !prev);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggle}>Toggle</Button>
    </div>
  );
}

export default App;
