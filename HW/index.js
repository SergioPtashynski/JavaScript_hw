class MyButton {
    constructor(text, btnClass) {
      this._text = text;
      this._btnClass = btnClass;
    }
  
    get value() {
      return this._text;
    }
  
    set value(newText) {
      this._text = newText;
    }
  
    show() {
      document.write(`<button type="button" class="btn ${this._btnClass}">${this._text}</button>`);
    }
  }

  const button1 = new MyButton("Save Progress", "btn-primary");
  const button2 = new MyButton("Click Me", "btn-success");
  const button3 = new MyButton("Download", "btn-info");
  const button4 = new MyButton("See more", "btn-warning");
  
  button1.show();
  button2.show();
  button3.show();
  button4.show();

  class ColorButton extends MyButton {
    constructor(text, btnClass, colorClass) {
      super(text, btnClass);
      this._colorClass = colorClass;
    }
  
    show() {
      document.write(`<button type="button" class="btn ${this._btnClass} ${this._colorClass}">${this._text}</button>`);
    }
  }

  const colorButton = new ColorButton("See more", "btn", "btn-danger");
  colorButton.show();
  