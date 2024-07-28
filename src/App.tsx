import React from "react";
import "./App.css";
import { textController, secondTextController } from 'store/textStore';
import TextControl from "components/TextControl";
import AutoCompleteControl from "components/AutoCompleteControl";
import { countriesController, secondCountriesController } from "store/countryStore";
import { Container, Grid } from "@mui/material";

function App() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextControl
            textController={textController}
            leftButtons={[
              {text: "Очистить текст", callback: () => textController.clearText()}
            ]}
            rightButtons={[
              {text: "Привет мир!", callback: () => textController.setText("Привет мир!")}
            ]}
          />
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
          <AutoCompleteControl 
            limit={3}
            countryController={countriesController}
          />
        </Grid>
        <Grid item xs={12}>
          <AutoCompleteControl 
            limit={10}
            countryController={secondCountriesController}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
