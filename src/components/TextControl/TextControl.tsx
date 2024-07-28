import { observer } from "mobx-react";
import TextStore from 'store/textStore';
import { Grid, Button, TextField } from '@mui/material';

interface CallbackButton {
  text: string;
  callback: () => void;
}

interface TextControlProps {
  textController: TextStore;
  leftButtons: CallbackButton[];
  rightButtons: CallbackButton[];
}

const TextControl = observer(({ textController, leftButtons, rightButtons }: TextControlProps) => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={4} container justifyContent="center" alignItems="center">
        {leftButtons.map((el, i) => (
          <Button key={i} variant="contained" color="primary" onClick={el.callback}>
            {el.text}
          </Button>
        ))}
      </Grid>
      <Grid item xs={4}>
        <TextField
          value={textController.text}
          onChange={(e: { target: { value: string; }; }) => textController.setText(e.target.value)}
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={4} container justifyContent="center" alignItems="center">
        {rightButtons.map((el, i) => (
          <Button key={i} variant="contained" color="primary" onClick={el.callback}>
            {el.text}
          </Button>
        ))}
      </Grid>
    </Grid>
  );
});

export default TextControl;
