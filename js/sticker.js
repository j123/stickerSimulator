function createImageInstance(canvas, name, top, left) {

  var imgElement = document.getElementById(name);
  var imgInstance = new fabric.Image(imgElement, {
    left: left,
    top: top,
    angle: 0,
    opacity: 1.0
  });
  canvas.add(imgInstance);

}
