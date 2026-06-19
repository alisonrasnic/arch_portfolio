class WindowHandler {
  constructor(id: string) {
    this.id = id;
  }

  setFocus(focus: bool) {
    var w = document.getElementById(this.id);
    if (w) {
      w.style.zIndex = 1*focus;
    }
  }
}

export { WindowHandler };
