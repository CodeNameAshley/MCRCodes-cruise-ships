//const startPoint = "Dover";

class Ship {
  constructor(startPoint) {
    this.currentPort = startPoint;
  }
  setSail() {
    return (this.currentPort = null);
  }
  dock(port) {
    this.currentPort = port;
  }
}

module.exports = Ship;
