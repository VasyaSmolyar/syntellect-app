import React from "react";
import "./App.css";
import { textController, secondTextController } from 'store/textStore';
import TextControl from "components/TextControl";
import AutoCompleteControl from "components/AutoCompleteControl";
import { countriesController, secondCountriesController } from "store/countryStore";

function App() {
  return (
    <div>
      <TextControl
        textController={textController}
        leftButtons={[
          {text: "Очистить текст", callback: () => textController.clearText()}
        ]}
        rightButtons={[
          {text: "Привет мир!", callback: () => textController.setText("Привет мир!")}
        ]}
      />
      <TextControl
        textController={secondTextController}
        leftButtons={[
          {text: "alert c текущим текстом", callback: () => {
            if (secondTextController.text.length) {
              alert(secondTextController.text)
            }
          }},
        ]}
        rightButtons={[
          {text: "alert, если в инпуте - число", callback: () => {
            if ( secondTextController.text.trim() !== '' && !isNaN(+secondTextController.text.split(',').join('.'))) { 
              alert(secondTextController.text)
            }
          }}
        ]}
      />
      <AutoCompleteControl 
        limit={3}
        countryController={countriesController}
      />
      <AutoCompleteControl 
        limit={10}
        countryController={secondCountriesController}
      />
    </div>
  );
}

export default App;
