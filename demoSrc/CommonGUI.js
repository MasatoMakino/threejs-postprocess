export class CommonGUI {
  static initGUIResolution(gui, postRenderer) {
    const size = postRenderer.getSize();
    const prop = {
      width: size.width,
      height: size.height
    };

    const onChange = () => {
      postRenderer.setSize(prop.width, prop.height);
    };
    const folder = gui.addFolder("Resolution");
    folder
      .add(prop, "width", 2, 1920)
      .step(1)
      .onChange(onChange);
    folder
      .add(prop, "height", 2, 1080)
      .step(1)
      .onChange(onChange);
    folder.open();
  }
}
