import { observer } from "mobx-react"
import TextStore from 'store/textStore'

interface TextControlProps {
  textController: TextStore;
}

const TextControl = observer(({ textController }: TextControlProps) => {

  return (
    <div>
      <input value={textController.text} onChange={(e) => textController.setText(e.target.value)} /> 
    </div>
  );
});

export default TextControl;
