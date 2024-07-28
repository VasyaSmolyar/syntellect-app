import { observer } from "mobx-react"
import TextStore from 'store/textStore'

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
    <div>
      <div>
        {leftButtons.map((el, i) => (
          <button key={i} onClick={el.callback}>
            {el.text}
          </button>
        ))}
      </div>
      <input value={textController.text} onChange={(e) => textController.setText(e.target.value)} /> 
      <div>
        {rightButtons.map((el, i) => (
          <button key={i} onClick={el.callback}>
            {el.text}
          </button>
        ))}
      </div>
    </div>
  );
});

export default TextControl;
