const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary.js");

describe("Ship", () => {
  // let port;
  // let itinerary;
  // let ship;
  let dover;
  let calais;

  beforeEach(() => {
    //dover = new Port("Dover");
    dover = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: "Dover",
      ships: [],
    };
    //calais = new Port("Calais");
    calais = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: "Calais",
      ships: [],
    };
    //itinerary = new Itinerary([dover, calais]);
    itinerary = {
      ports: [dover, calais],
    };
    ship = new Ship(itinerary);
  });

  it("can be instantiated", () => {
    // const port = new Port("Dover");
    // const itinerary = new Itinerary([port]);
    // const ship = new Ship(itinerary);

    expect(ship).toBeInstanceOf(Object);
  });

  it("has a starting port", () => {
    port = new Port("Dover");
    itinerary = new Itinerary([port]);
    ship = new Ship(itinerary);

    expect(ship.currentPort).toBe(port);
  });

  it("can set sail", () => {
    // const dover = new Port("Dover");
    // const calais = new Port("Calais");
    // const itinerary = new Itinerary([dover, calais]);
    // const ship = new Ship(itinerary);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    //expect(ship.previousPort).toBe(port);
    expect(dover.removeShip).toBeCalledWith(ship);
  });

  it("can dock at a different port", () => {
    // dover = new Port("Dover");
    // calais = new Port("Calais");
    // itinerary = new Itinerary([dover, calais]);
    // ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(calais);
    expect(calais.addShip).toBeCalledWith(ship);
  });

  it("it can't sail further than its itinerary", () => {
    // const dover = new Port("Dover");
    // const calais = new Port("Calais");
    // const itinerary = new Itinerary([dover, calais]);
    // const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError("End of itinerary reached");
  });

  it("gets added to port on instantiation", () => {
    // const dover = new Port("Dover");
    // const itinerary = new Itinerary([dover]);
    // const ship = new Ship(itinerary);

    expect(dover.addShip).toBeCalledWith(ship);
  });
});
