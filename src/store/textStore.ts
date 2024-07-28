import { makeAutoObservable } from "mobx";

class TextStore {
  text: string;

  constructor() {
    this.text = "";
    makeAutoObservable(this);
  }

  clearText() {
    this.text = "";
  }

  setText(text: string) {
    this.text = text;
  }
}


export const textController = new TextStore();
export const secondTextController = new TextStore();
export default TextStore 
