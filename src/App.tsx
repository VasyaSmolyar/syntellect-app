import React from "react";
import "./App.css";
import { textController, secondTextController } from 'store/textStore';
import TextControl from "components/TextControl";

function App() {
  return (
    <div>
      <TextControl
        textController={textController}
      />
      <TextControl
        textController={secondTextController}
      />
    </div>
  );
}

export default App;
