const Port = require("../src/Port.js");

describe("Port", () => {
  it("can be instantiated", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it("can add a ship", () => {
    const port = new Port("Dover");
    const jollyRoger = {};
    const flyingDutchman = {};

    expect(port.ships).toEqual([]);

    port.addShip(jollyRoger);
    port.addShip(flyingDutchman);

    expect(port.ships).toEqual([jollyRoger, flyingDutchman]);
    expect(port.ships.length).toEqual(2);
  });
  it("can remove a ship", () => {
    const port = new Port("Dover");
    const jollyRoger = {};
    const flyingDutchman = {};

    port.addShip(jollyRoger);
    port.addShip(flyingDutchman);
    port.removeShip(flyingDutchman);

    expect(port.ships).toEqual([jollyRoger]);
    expect(port.ships.length).toEqual(1);
  });
});
